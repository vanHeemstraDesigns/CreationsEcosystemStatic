import React from '../local_libraries/react';
console.log('CharactersApplication application - called');

class CharactersApplication extends React.Component {
  render() {
  	console.log('CharactersApplication application - render called');
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default CharactersApplication;
