<template>
    <v-container class="reward-wrap" fluid>
        <v-row class="reward">
            <v-col cols="2" class="d-flex align-center">
                <v-img :src="imgUrl" contain></v-img>
            </v-col>
        <v-col cols="9">
            <div class="upText d-flex align-center">
                <div class="text">
                    <h3>스타벅스만의 특별한 혜택, <span>스타벅스 리워드</span> </h3>
                    <p><span>스타벅스 회원이세요?</span>로그인을 통해 나만의 리워드를 확인해보세요.</p>
                    <p><span>스타벅스 회원이 아니세요?</span>가입을 통해 리워드 혜택을 즐기세요.</p>
                </div>
                <v-spacer></v-spacer>
                <div class="btn ">
                    <v-btn style="padding:0 20px" color="#00704a" dark>회원가입</v-btn>
                    <v-btn text dark style="border:1px solid #fff; margin-left:10px; padding: 0 18px;">로그인</v-btn>
                </div>   
            </div>
            <v-divider color="#ccc"></v-divider>
            <div class="downText d-flex align-center">               
                <div class="text">
                     <p>회원가입 후, 스타벅스 e-Gift Card를 "나에게 선물하기"로 구매하시고, 편리하게 등록하세요!<br>
                카드를 등록하여 스타벅스 리워드 회원이 되신 후, 첫 구매를 하시면 무료 음료쿠폰을 드립니다!</p>
                </div>
                <v-spacer></v-spacer>
                <div class="btn ">
                    <v-btn text dark style="border:1px solid #fff;">e-Gift Card 선물하기</v-btn>
                </div>
            </div>
        </v-col>
    </v-row>
    </v-container>
</template>

<script>
    export default {
        name:'Reward',
        data(){
            return{
                imgUrl:'https://image.istarbucks.co.kr/common/img/main/rewards-logo.png'
            }
        }
    }
</script>

<style lang="scss" scoped>
.reward-wrap{
    background:#1e3932;
    .reward{
    max-width:1080px;
    margin:0 auto;
    }
}
.upText {
    padding: 0 0 20px 0;
    color:#fff;
        letter-spacing: -0.098rem;

    h3{
        font-weight: normal;
        span{
            font-weight: 900;
        }
    }
    p{
    margin: 0;
    padding:0;
    span{
        font-weight: bold;
    }
    }
}
.downText{
    color:#fff;
    padding-top:20px;
    p{  
        letter-spacing: -0.098rem;
    }
}
</style>