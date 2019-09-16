import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';

import * as mutationTypes from './mutationTypes';
import { IRootState, PlayState } from './types';

Vue.use(Vuex);

const store: StoreOptions<IRootState> = {
  state: {
    playState: PlayState.start
  },
  mutations: {
    [mutationTypes.SET_PLAY_STATE](state, playState: PlayState) {
      state.playState = playState;
    }
  },
  actions: {
    setPlayState({ commit }, playState: string) {
      commit(mutationTypes.SET_PLAY_STATE, playState);
    }
  }
};

export default new Vuex.Store<IRootState>(store);
