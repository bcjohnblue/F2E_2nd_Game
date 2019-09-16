<template>
  <div class="start">
    <div class="big_money" />
    <div class="start_text" @click="setPlayState('processing')">START</div>
    <div class="arrow_container">
      <SvgIcon name="向上鍵"></SvgIcon>
      <SvgIcon name="向下鍵"></SvgIcon>
    </div>
  </div>
</template>

<script lang="ts">
import { createComponent, reactive, onMounted } from '@vue/composition-api';

import store from '@/store'
import * as mutationTypes from '@/store/mutationTypes'
import { IRootState, PlayState } from '@/store/types'

export default createComponent({
  setup() {
    const setPlayState = (playState: PlayState) => store.commit(mutationTypes.SET_PLAY_STATE, {
      playState
    })

    return {
      setPlayState
    }
  }
})
</script>

<style lang="sass" scoped>
.start
  position: absolute
  top: 5%
  right: 15%
  width: 30vw
  .big_money
    background-image: url('../icons/svg/高雄發大財.png')
    background-repeat: no-repeat
    background-position: center
    width: 100%
    height: 450px
    zoom: 0.8
    margin-left: auto
    margin-right: auto
  .start_text
    text-align: center
    font-weight: bold
    font-size: 60px
    width: 65%
    border: 15px solid black
    border-radius: 60px
    background-color: #FF7600
    margin-left: auto
    margin-right: auto
    margin-bottom: 20px
    box-sizing: border-box
    cursor: pointer
  .arrow_container
    display: flex
    justify-content: space-around
    width: 50%
    margin-left: auto
    margin-right: auto
    svg
      zoom: 0.8
</style>