import { createComponent, reactive, onMounted, computed } from '@vue/composition-api';
import Obstacles from '@/components/Obstacles';
import store from '@/store';
// import Start from '@/components/Start.vue';

export default createComponent({
  name: 'Body',
  components: {
    Obstacles
  },
  setup() {
    const playState = computed(() => store.state.playState);
    console.log(store.state);

    return () => (
      <div class="body">
        {/* <Start></Start> */}
        {/* <Obstacles></Obstacles> */}
      </div>
    );
  }
});
