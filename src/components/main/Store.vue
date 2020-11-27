<template>
    <div class="store">
        <v-img :src="imgUrl">
            <StoreItem />
        </v-img>
    </div>
</template>

<script>
    export default {
        name:'Store',
        components:{
            StoreItem : () => import('@/components/main/StoreItem.vue')
        },
        data(){
            return{
                imgUrl:'https://www.starbucks.co.kr/common/img/main/store_bg.jpg',
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>