<template>
    <div class="pick">
        <!-- <v-img :src="imgUrl"></v-img> -->
        <PickItem /> 
    </div>
</template>

<script>
    export default {
        name:'Pick',
        data(){
            return{
                imgUrl:'https://www.starbucks.co.kr/common/img/main/fav_prod_bg_new.jpg'
            }
        },
        components:{
            PickItem : () => import('@/components/main/PickItem.vue')
        }
    }
</script>

<style lang="scss" scoped>
    .pick{
        background:url(https://www.starbucks.co.kr/common/img/main/fav_prod_bg_new.jpg) center center fixed no-repeat #45434c;
        background-size:auto 100%;
        padding-top:70px;
    }
</style>