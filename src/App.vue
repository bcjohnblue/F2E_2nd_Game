<template>
  <div id="app">
    <Header></Header>
    <Body></Body>
  </div>
</template>

<script>
import Header from './layout/Header';
import Body from './layout/Body';

export default {
  components: {
    Header,
    Body
  }
}
</script>

<style lang="sass" scoped>
#app
  background-image: url('./icons/svg/背景＿又老又窮.jpg')
  background-repeat: round
  height: 100vh
</style>

<style lang="sass">
@import url('./styles/font.sass')

body
  margin: 0px
  *
    box-sizing: border-box
</style>
