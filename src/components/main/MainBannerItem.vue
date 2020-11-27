<template>
    <v-container class="main-banner-item">
        <v-row class="banner-item-wrap">
            <div class="slogan"><v-img :src="pcSlogan"></v-img></div>
            <div class="item-wrap">
                <div class="item set_01">
                    <v-img :src="latte"></v-img>
                </div>
                <div class="item set_02">
                    <v-img :src="popcorn"></v-img>
                </div>
                <div class="item set_03">
                    <v-img :src="camomile"></v-img>
                </div>
                <div class="item set_04">
                    <v-img :src="choco"></v-img>
                </div>
                <div class="item set_05">
                    <v-img :src="darkChoco"></v-img>
                </div>
            </div>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        name:'MainBannerItem',
        data(){
            return{
                pcSlogan:'https://image.istarbucks.co.kr/upload/common/img/main/2020/2020_xmas_slogan_1.png',
                mSlogan:'https://image.istarbucks.co.kr/upload/common/img/main/2020/m_2020_xmas_slogan_1.png',
                latte:'https://image.istarbucks.co.kr/upload/common/img/main/2020/2020_xmas_latte.png',
                latteText:'https://image.istarbucks.co.kr/upload/common/img/main/2020/2020_xmas_latte_tit_1.png',
                popcorn:'https://image.istarbucks.co.kr/upload/common/img/main/2020/2020_xmas_popcorn_1.png',
                popcornText:'https://image.istarbucks.co.kr/upload/common/img/main/2020/2020_xmas_popcorn_tit_1.png',
                camomile:'https://image.istarbucks.co.kr/upload/common/img/main/2020/2020_xmas_relaxer_1.png',
                camomileText:'https://image.istarbucks.co.kr/upload/common/img/main/2020/2020_xmas_relaxer_tit_1.png',
                choco:'https://image.istarbucks.co.kr/upload/common/img/main/2020/2020_xmas_blended.png',
                chocoText:'https://image.istarbucks.co.kr/upload/common/img/main/2020/2020_xmas_blended_tit.png',
                darkChoco:'https://image.istarbucks.co.kr/upload/common/img/main/2020/2020_xmas_chocolate.png',
                darkChockText:'https://image.istarbucks.co.kr/upload/common/img/main/2020/2020_xmas_chocolate_tit_1.png'

            }
        }
    }
</script>

<style lang="scss" scoped>
.main-banner-item{
    position: relative;
    padding-top:70px;
    max-width:1080px;
    min-height:650px;
}
.item-wrap img{
    width:100%;
}
.item{
    position: absolute;
}
.set_01 {
    bottom: 12.5%;
    left: 26%;
    width: 29%;
    max-width: 308px;
}
.set_01::after {
    content:"";
    display:block;
    position:absolute;
    width:100%;
    height: 150px;
    bottom:-50%;
    left:2%;
    z-index:2;
    background:url(https://image.istarbucks.co.kr/upload/common/img/main/2020/2020_xmas_latte_tit_1.png) no-repeat
}
.set_02 {
    bottom: 20%;
    left: 39.7%;
    width: 25%;
    max-width: 263px;
}
.set_02::after {
    content:"";
    display:block;
    position:absolute;
    width:100%;
    top:-28%;
    left:-14.5%;
    height: 150px;
    z-index:2;
    background:url(https://image.istarbucks.co.kr/upload/common/img/main/2020/2020_xmas_popcorn_tit_1.png) no-repeat
}
.set_03 {
    bottom: 15%;
    left: 55.7%;
    width: 26%;
    max-width: 281px;
    z-index: 1;
}
.set_03::after {
    content:"";
    display:block;
    position:absolute;
    width:100%;
    left:-5%;
    height: 150px;
    z-index:2;
    background:url(https://image.istarbucks.co.kr/upload/common/img/main/2020/2020_xmas_relaxer_tit_1.png) no-repeat
}
.set_04 {
    bottom: 32%;
    left: 69%;
    width: 26%;
    max-width: 275px;
}
.set_04::after {
    content:"";
    display:block;
    position:absolute;
    width:100%;
    top:5%;
    right:-50%;
    height: 150px;
    z-index:2;
    background:url(https://image.istarbucks.co.kr/upload/common/img/main/2020/2020_xmas_blended_tit.png) no-repeat
}
.set_05 {
    bottom: 20%;
    left: 78.5%;
    width: 26%;
    max-width: 294px;
}
.set_05::after {
    content:"";
    display:block;
    position:absolute;
    width:100%;
    height: 150px;
    z-index:2;
    background:url(https://image.istarbucks.co.kr/upload/common/img/main/2020/2020_xmas_chocolate_tit_1.png) no-repeat
}

</style>