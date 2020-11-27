<template>
  <div class="home">
    <CoreAppBar />
    <CoreView />
    <CoreFooter /> 
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
    CoreAppBar :()=>import('@/components/core/CoreAppBar.vue'),
    CoreView :()=>import('@/components/core/CoreView.vue'),
    CoreFooter :()=>import('@/components/core/CoreFooter.vue'),
  }
}
</script>
<style lang="scss">
ul,li{
  list-style: none;
}
a{
  text-decoration:none;
}

</style>