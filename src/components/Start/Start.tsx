import { createComponent, reactive, onMounted } from '@vue/composition-api';
import styles from './Start.module.sass';

import store from '@/store';
import * as mutationTypes from '@/store/mutationTypes';
import { PlayState } from '@/store/types';

import SvgIcon from '@/components/UI/SvgIcon/SvgIcon';

export default createComponent({
  name: 'Start',
  components: {
    SvgIcon
  },
  setup() {
    const setPlayState = (playState: PlayState) =>
      store.commit(mutationTypes.SET_PLAY_STATE, {
        playState
      });

    return () => (
      <div class={styles.start}>
        <div class={styles.big_money} />
        <div
          class={styles.start_text}
          onClick={() => {
            setPlayState(PlayState.processing);
          }}
        >
          START
        </div>
        <div class={styles.arrow_container}>
          <SvgIcon name="向上鍵"></SvgIcon>
          <SvgIcon name="向下鍵"></SvgIcon>
        </div>
      </div>
    );
  }
});
