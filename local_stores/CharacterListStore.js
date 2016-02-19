import alt from '../local_libraries/alt';
import CharacterListActions from '../local_actions/CharacterListActions';

class CharacterListStore {
  constructor() {
    this.bindActions(CharacterListActions);
    this.characters = [];
  }

  onGetCharactersSuccess(data) {
    this.characters = data;
  }

  onGetCharactersFail(jqXhr) {
    toastr.error(jqXhr.responseJSON.message);
  }
}

export default alt.createStore(CharacterListStore);