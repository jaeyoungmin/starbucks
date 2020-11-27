<template>
    <div class="main-banner">
        <v-img :src="imgUrl">
            <MainBannerItem />
        </v-img>
    </div>
</template>

<script>
    export default {
        name:'MainBanner',
        components:{
            MainBannerItem : ()=> import('@/components/main/MainBannerItem.vue'),
        },
        data(){
            return{
                imgUrl:'https://image.istarbucks.co.kr/upload/common/img/main/2020/2020_xams_bg_1.jpg',
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>