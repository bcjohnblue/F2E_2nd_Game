import { createComponent, reactive, onMounted } from '@vue/composition-api';

import Obstacles from '@/components/Obstacles';
import store from '@/store';
// import Start from '@/components/Start.vue';
import SvgIcon from '@/components/UI/SvgIcon/SvgIcon';
// import SvgIcon from '@/components/UI/SvgIcon.vue';

export default createComponent({
  name: 'Header',
  setup() {
    const registerClick = () => {
      window.addEventListener('keydown', e => {
        console.log(e.key);
      });
    };

    const lifeList = reactive(Array.from({ length: 3 }));
    const lifeListDOM = lifeList.map((item, index) => (
      <SvgIcon name="生命" className="life"></SvgIcon>
    ));
    onMounted(() => {
      // console.log(lifeSVG);
    });

    return () => (
      <div class="header">
        <div class="life_container">{lifeListDOM}</div>
        <div class="time_container">
          <span>TIME:</span>
          <span>90</span>
          <span>S</span>
        </div>
        <div class="money_container">
          <SvgIcon name="金幣數"></SvgIcon>
          <span>X</span>
          <span>0</span>
        </div>
      </div>
    );
  }
});
