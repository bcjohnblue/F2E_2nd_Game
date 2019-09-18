import { createComponent, reactive, onMounted, computed } from '@vue/composition-api';
import styles from './Body.module.sass';

import store from '@/store';
import { PlayState } from '@/store/types';

import Start from '@/components/Start/Start';
import Obstacles from '@/components/Obstacles';

export default createComponent({
  name: 'Body',
  components: {
    Start,
    Obstacles
  },
  setup() {
    const playState = computed(() => store.state.playState);
    console.log(playState);

    return () => (
      <div class={styles.body}>
        {playState.value === PlayState.start ? <Start /> : null}
        {/* <Obstacles></Obstacles> */}
      </div>
    );
  }
});
