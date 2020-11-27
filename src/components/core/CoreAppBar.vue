<template>
    <v-app-bar class="core-app-bar d-flex justify-center align-center" min-height="100" color="#f6f5ef">
<div class="inner d-flex" style="width:1080px; margin:0 auto;">                
        <div class="logo mt-2">
            <v-img :src="imgUrl" width="65"></v-img>
        </div>
        <v-spacer></v-spacer>
         <div class="menu-wrap">
                <div class="top-menu d-flex justify-center">
               <v-btn small text>Sign In</v-btn>
               <v-btn text small>My Starbucks</v-btn>
               <v-btn text small>Customer Service & Ideas</v-btn>
               <v-btn text small>Find a Store</v-btn>
               <v-btn elevation="0" style="border:1px solid #ccc;" color="#fff" small ><v-icon>mdi-magnify</v-icon></v-btn>
            </div>
            <div class="gnb-menu mt-4">
                <v-btn text>COFFEE</v-btn>
                <v-btn text>MENU</v-btn>
                <v-btn text>STORE</v-btn>
                <v-btn text>RESPONSIBLITY</v-btn>
                <v-btn text>STARBUCKS REWARDS</v-btn>
                <v-btn text>WHAT'S NEW</v-btn>
            </div>
         </div>
</div>
    </v-app-bar>
</template>

<script>
    export default {
        name:'CoreAppBar',
        data(){
            return{
                imgUrl:'https://www.starbucks.co.kr/common/img/common/logo.png',   
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>