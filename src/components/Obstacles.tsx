import { createComponent, createElement as h, reactive, onMounted } from '@vue/composition-api';

export default createComponent({
  name: 'Obstacles',
  setup(props) {
    return () => h('div', {}, ['123', h('h1', 'header')]);
  }
});
