import { createComponent, reactive, onMounted } from '@vue/composition-api';
import styles from './Header.module.sass';

import SvgIcon from '@/components/UI/SvgIcon/SvgIcon';

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
      <SvgIcon name="生命" className={styles.life}></SvgIcon>
    ));
    onMounted(() => {
      // console.log(lifeSVG);
    });

    return () => (
      <div class={styles.header}>
        <div class={styles.life_container}>{lifeListDOM}</div>
        <div class={styles.time_container}>
          <span>TIME:</span>
          <span>90</span>
          <span>S</span>
        </div>
        <div class={styles.money_container}>
          <SvgIcon name="金幣數"></SvgIcon>
          <span>X</span>
          <span>0</span>
        </div>
      </div>
    );
  }
});
