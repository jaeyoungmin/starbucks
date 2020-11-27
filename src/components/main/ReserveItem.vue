<template>
    <v-row class="reserve-item" align="center">
        <v-col cols="8">
            <div class="img">
                <v-img :src="imgUrl"></v-img>
            </div>
            <div class="btn d-flex justify-center">
                <v-btn text style="border:1px solid #e3b59e; color:#e3b59e;">자세히 보기</v-btn>
            </div>
        </v-col>
        <v-col cols="4">
            <v-img :src="xmas"></v-img>
        </v-col>
    </v-row>
</template>

<script>
    export default {
        name:'ReserveItem',
        data(){
            return{
                imgUrl:'https://image.istarbucks.co.kr/upload/common/img/main/2020/reserve_xmas_title.png',
                xmas:'https://image.istarbucks.co.kr/upload/common/img/main/2020/reserve_xmas_beans.png',
            }
        },
    }
</script>

<style lang="scss" scoped>
.reserve-item{
    max-width:1080px;
    margin:0 auto;
}
</style>