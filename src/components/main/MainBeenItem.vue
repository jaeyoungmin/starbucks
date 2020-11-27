<template>
    <div class="main-been-item d-flex justify-center align-center">
        <v-row class="item-wrap" align="center" contain>
            <v-col>
                <v-img :src="imgUrl"></v-img>
            </v-col>
            <v-col>
                <div class="text">
                    <v-img :src="textUrl"></v-img>
                </div>
                <div class="btn d-flex mt-5 pt-10">
                    <v-btn text elevation="0" style="border: 2px solid #555; font-size:13px; padding:0 20px; color:#555;">자세히 보기</v-btn>
                </div>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    export default {
        name:'MainBeenItem',
        data(){
            return{
                imgUrl:'https://image.istarbucks.co.kr/upload/common/img/main/2020/2020_xmas_bean.png',
                textUrl:'https://image.istarbucks.co.kr/upload/common/img/main/2020/2020_xmas_bean_txt.png',
            }
        }
    }
</script>

<style lang="scss" scoped>
.item-wrap{
    max-width:1080px;
    margin:0 auto;
    padding-top:70px;
    min-height:576px;
}
</style>