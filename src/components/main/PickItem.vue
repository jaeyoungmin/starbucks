<template>
    <v-row class="pick-item inner" align="center">
        <v-col cols="4">
            <div class="text">
                <v-img :src="mainTextUrl"></v-img>
                <v-img :src="subTextUrl"></v-img>
            </div>
            <div class="btn d-flex justify-end mt-10">
                <v-btn text style="border:1px solid #fff; color:#fff;">자세히 보기</v-btn>
            </div>
        </v-col>
        <v-spacer></v-spacer>
        <v-col cols="8">
            <v-img :src="imgUrl"></v-img>
        </v-col>
    </v-row>
</template>

<script>
    export default {
        name:'PickItem',
        data(){
            return{
                mainTextUrl:'https://www.starbucks.co.kr/common/img/main/fav_prod_txt01.png',
                subTextUrl:'https://www.starbucks.co.kr/common/img/main/fav_prod_txt02.png',
                imgUrl:'https://image.istarbucks.co.kr/upload/common/img/main/2020/2020_christmas1_fav.png'
            }
        },
    }
</script>

<style lang="scss" scoped>
.pick-item{
    max-width:1080px;
    margin: 0 auto;
    min-height: 800px;
}
</style>