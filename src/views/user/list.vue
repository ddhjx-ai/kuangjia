<template>
  <div>
    <h1>{{$route.meta.title || 'User list'}}</h1>
    <p>element-ui的样式</p>
    <base-test></base-test>
    <base-input></base-input>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='scss' scoped>
// scss公共样式可以在vue.config.js中全局定义
// 引入自定义的变量样式
// @import '@/assets/styles/_vars.scss';
// 引入element-ui组件的变量样式
// @import '~element-ui/packages/theme-chalk/src/common/var';
h1 {
  color: $--color-primary;
}
p {
  color: $--color-success;
}
</style>
