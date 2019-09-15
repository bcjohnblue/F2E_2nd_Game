<template>
  <div>
    <div class="life_container">
      <div class="life" v-for="(life, index) in lifeList"></div>
    </div>
    <SvgIcon name="生命"></SvgIcon>
  </div>
</template> 

<script lang="ts">
import { createComponent, reactive, onMounted } from '@vue/composition-api';

export default createComponent({
  setup() {
    const registerClick = () => {
      window.addEventListener('keydown', (e) => {
        console.log(e.key)
      })
    }

    const lifeList = reactive(Array.from({ length: 3 }))
    onMounted(() => {
      // console.log(lifeSVG);

    })

    return {
      lifeList
    }
  },
})
</script>