<template>
    <div class="main-been">
        <v-img :src="imgUrl">
            <MainBeenItem />
        </v-img>
    </div>
</template>

<script>
    export default {
        name:'MainBeen',
        components:{
            MainBeenItem : ()=> import('@/components/main/MainBeenItem.vue'),
        },
        data(){
            return{
                imgUrl:'https://image.istarbucks.co.kr/upload/common/img/main/2020/2020_xmas_bean_bg.jpg'
            }
        }
        ,
    }
</script>

<style lang="scss" scoped>

</style>