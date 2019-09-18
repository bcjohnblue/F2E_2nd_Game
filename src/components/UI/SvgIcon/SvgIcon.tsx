import { createComponent, createElement as h, computed } from '@vue/composition-api';
import styles from './SvgIcon.module.sass';

export default createComponent({
  name: 'SvgIcon',
  props: {
    name: {
      type: String,
      required: true
    },
    className: {
      type: String,
      default: ''
    }
  } as const,
  setup(props) {
    const iconName = computed(() => `#icon-${props.name}`);
    const svgClass = computed(() =>
      props.className ? `${styles.svg_icon} ${props.className}` : styles.svg_icon
    );

    return () =>
      h('svg', { class: svgClass.value, attrs: { 'aria-hidden': true } }, [
        ,
        h('use', { attrs: { 'xlink:href': iconName.value } })
      ]);
  }
});
