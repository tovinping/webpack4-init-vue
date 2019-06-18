<template>
<div id="app">
  <test-layout v-if="$route.meta.layout === 'test'"></test-layout>
  <wenping-layout  v-else-if="$route.meta.layout === 'wenping'"></wenping-layout>
</div>
</template>

<script>
import TestLayout from './components/layouts/TestLayout'
import WenpingLayout from './components/layouts/WenpingLayout'
export default {
  name: 'app',
  components: {
    TestLayout,
    WenpingLayout
  },
  mounted () {
    console.log('app.vue is mounted')
  }
}
</script>

<style>
</style>
