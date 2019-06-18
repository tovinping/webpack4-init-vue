<template>
<div class="page">
  <span>tangwenping-Page</span>
</div>
</template>

<script>
import utils from '../../utils/index.js'
export default {
  mounted () {
    utils.sayHello()
  }
}
</script>

<style lang="scss" scoped>
.page{
  background: greenyellow;
  span{
    color: red;
  }
  .bbg{
    color: blue;
  }
}
.test-page{
  color: fuchsia;
}
</style>
