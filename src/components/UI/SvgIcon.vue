<template>
  <svg :class="svgClass" aria-hidden="true">
    <use :xlink:href="iconName" />
  </svg>
</template>

<script>
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
  },
  setup(props) {
    const iconName = computed(() => `#icon-${props.name}`)
    const svgClass = computed(() => props.className ? `svg-icon ${props.className}` : 'svg-icon')

    return {
      iconName,
      svgClass
    }
  }
})
</script>

<style scoped>
.svg-icon {
  width: 50px;
  height: 50px;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>