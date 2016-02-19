import alt from '../local_libraries/alt';
import HomeActions from '../local_actions/HomeActions';

class HomeStore {
  constructor() {
    this.bindActions(HomeActions);
    this.characters = [];
  }

  onGetTwoCharactersSuccess(data) {
    this.characters = data;
  }

  onGetTwoCharactersFail(errorMessage) {
    toastr.error(errorMessage);
  }

  onVoteFail(errorMessage) {
    toastr.error(errorMessage);
  }
}

export default alt.createStore(HomeStore);