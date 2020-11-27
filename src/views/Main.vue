<template>
    <div class="Main">
        <MainBanner />
        <Notice />
        <Reward />
        <MainBeen />
        <Reserve />
        <Pick />
        <Magazine />
        <Store />
    </div>
</template>

<script>
    export default {
        name:'Main',
        components:{
            MainBanner : () => import('@/components/main/MainBanner.vue'),
            Notice : () => import('@/components/main/Notice.vue'),
            Reward : () => import('@/components/main/Reward.vue'),
            MainBeen: () => import('@/components/main/MainBeen.vue'), 
            Reserve: () => import('@/components/main/Reserve.vue'),
            Pick: () => import('@/components/main/Pick.vue'), 
            Magazine: () => import('@/components/main/Magazine.vue'), 
            Store: () => import('@/components/main/Store.vue'), 

        }
    }
</script>

<style lang="scss" scoped>

</style>