import React from '../local_libraries/react';
import {Link} from '../local_libraries/react-router';
import {isEqual} from '../local_libraries/underscore';
import CharacterListStore from '../local_stores/CharacterListStore';
import CharacterListActions from '../local_actions/CharacterListActions';
console.log('CharacterList component - called');

class CharacterList extends React.Component {
  constructor(props) {
    super(props);
    this.state = CharacterListStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    CharacterListStore.listen(this.onChange);
    CharacterListActions.getCharacters(this.props.params);
  }

  componentWillUnmount() {
    CharacterListStore.unlisten(this.onChange);
  }

  componentDidUpdate(prevProps) {
    if (!isEqual(prevProps.params, this.props.params)) {
      CharacterListActions.getCharacters(this.props.params);
    }
  }

  onChange(state) {
    this.setState(state);
  }

  render() {
    console.log('CharacterList component - render called');
    let charactersList = this.state.characters.map((character, index) => {
      return (
        <div key={character.characterId} className='list-group-item animated fadeIn'>
          <div className='media'>
            <span className='position pull-left'>{index + 1}</span>
            <div className='pull-left thumb-lg'>
              <Link to={'/characters/' + character.characterId}>
              <img className='media-object' src={'http://image.eveonline.com/Character/' + character.characterId + '_128.jpg'} />
              </Link>
            </div>
            <div className='media-body'>
              <h4 className='media-heading'>
                <Link to={'/characters/' + character.characterId}>{character.name}</Link>
              </h4>
              <small>Race: <strong>{character.race}</strong></small>
              <br />
              <small>Bloodline: <strong>{character.bloodline}</strong></small>
              <br />
              <small>Wins: <strong>{character.wins}</strong> Losses: <strong>{character.losses}</strong></small>
            </div>
          </div>
        </div>
      );
    });

    return (
      <div className='container'>
        <div className='list-group'>
          {charactersList}
        </div>
      </div>
    );
  }
}

export default CharacterList;