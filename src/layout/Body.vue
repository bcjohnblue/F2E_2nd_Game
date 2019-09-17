<template>
  <div class="body">
    <!-- <Start v-if="playState === 'start'"></Start> -->
    <!-- <Obstacles></Obstacles> -->
  </div>
</template>

<script lang="ts">
import { createComponent, reactive, onMounted, computed } from '@vue/composition-api';
// import Obstacles from '@/components/Obstacles.tsx'
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

// export default createComponent({
//   components: {
//     Start, Obstacles
//   },
//   setup() {
//     const playState = computed(() => store.state.playState)
//     console.log(store.state);

//     return {
//       playState
//     }
//   }
// })
</script>

<style lang="sass" scoped>
.body
  position: relative
  height: calc(100vh - 150px)
  overflow-x: hidden
</style>