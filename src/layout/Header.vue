<template>
  <div class="header">
    <div class="life_container">
      <SvgIcon name="生命" class="life" v-for="(life, index) in lifeList" :key="index"></SvgIcon>
    </div>
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

<style lang="sass" scoped>
.header
  position: relative
  height: 150px
  padding-top: 50px
  .life_container
    position: absolute
    left: 5vw
    .life
      margin: 10px
  .time_container
    position: absolute
    top: 28px
    left: 50%
    font-family: Beirut
    transform: translate(-50%, 0%)
    span:nth-child(1)
      font-size: 82px
    span:nth-child(2)
      font-size: 73px
    span:nth-child(3)
      font-size: 37px
  .money_container
    position: absolute
    top: 60px
    right: 12vw
    font-family: Beirut
    font-weight: bold
    display: flex
    align-items: center
    span:nth-last-child(1)
      vertical-align: middle
      display: inline-block
      transform: scaleY(1.2)
      font-size: 42px
      margin-left: 15px
    span:nth-last-child(2)
      vertical-align: middle
      font-size: 32px
      margin-left: 15px
</style>