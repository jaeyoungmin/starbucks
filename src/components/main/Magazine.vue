<template>
    <v-row class="magazine" align="center">
        <v-col cols="5">
            <v-img :src="imgUrl" contain></v-img>
        </v-col>
        <v-col cols="6" class="ml-8 d-flex justify-space-between flex-column">
            <div class="top">
                <v-img :src="textUrl" contain></v-img>
            </div>
            <div class="bottom">
                <v-img max-width="300" :src="subTextUrl" contain></v-img>
            </div>
        </v-col>
    </v-row>
</template>

<script>
    export default {
        name:'Magazine',
        data(){
            return{
                imgUrl:'https://image.istarbucks.co.kr/upload/common/img/main/2020/reserve_visual_pc.png',
                textUrl:'https://image.istarbucks.co.kr/upload/common/img/main/2020/reserve_text_pc.png',
                subTextUrl:'https://image.istarbucks.co.kr/upload/common/img/main/2020/btn_magazine_pc.png'
            }
        },
    }
</script>

<style lang="scss" scoped>
.magazine{
    max-width:1240px;
    margin:0 auto;
    min-height:700px;
    position: relative;
}
.magazine::before{
    content:'';
    display:block;
    position: absolute;
    left:15%;
    bottom:38%;
    width:80%;
    height:1px;
    background:#cccccb;
}
.magazine::after{
        content:'';
    display:block;
    position: absolute;
    left:43%;
    top:19%;
    height:70%;
    width:1px;
    background:#cccccb;
}
.bottom{
    padding-top:145px;
}
</style>