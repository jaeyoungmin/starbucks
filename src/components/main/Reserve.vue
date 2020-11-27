<template>
    <div class="reserve">
        <v-img :src="imgUrl">
            <ReserveItem />
        </v-img>
    </div>
</template>

<script>
    export default {
        name:'Reserve',
        data(){
            return{
                imgUrl:'https://image.istarbucks.co.kr/upload/common/img/main/2020/reserve_xmas_bg.jpg',
            }
        },
        components:{
            ReserveItem:()=>import('@/components/main/ReserveItem.vue')
        }
    }
</script>

<style lang="scss" scoped>

</style>