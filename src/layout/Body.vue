<template>
  <div class="body">
    <Start v-if="playState === 'start'"></Start>
  </div>
</template>

<script lang="ts">
import { createComponent, reactive, onMounted, computed } from '@vue/composition-api';
// import { mapState } from 'vuex'
// import {
//   State,
//   Getter,
//   Action,
//   Mutation,
//   namespace
// } from 'vuex-class'
import store from '@/store'
import Start from '@/components/Start.vue'

export default createComponent({

  components: {
    Start
  },
  setup() {
    const playState = computed(() => store.state.playState)
    console.log(store.state);

    return {
      playState
    }
  }
})
</script>

<style lang="sass" scoped>
.body
  position: relative
  height: calc(100vh - 150px)
  overflow-x: hidden
</style>