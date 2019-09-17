import { createComponent, computed } from '@vue/composition-api';

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
    const svgClass = computed(() => (props.className ? `svg-icon ${props.className}` : 'svg-icon'));

    return () => (
      <svg class={svgClass} aria-hidden="true">
        <use xlink:href={iconName} />
      </svg>
    );
  }
});
