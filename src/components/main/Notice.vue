<template>
    <v-container class="notice ma-0 pa-0" fluid>
        <v-row >
            <v-col cols="6" class="d-flex align-center" style="background:#000;color:#fff;">
                <v-spacer></v-spacer>
                <h3>공지사항</h3>
                <v-spacer></v-spacer>
                <v-btn icon large><v-icon color="#fff">mdi-plus-circle-outline</v-icon></v-btn>
            </v-col>
            <v-col class="d-flex justify-center align-center">
                <h3>스타벅스 프로모션</h3>
                <v-btn icon large><v-icon>mdi-chevron-down-circle-outline</v-icon></v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        name:'Notice'
    }
</script>

<style lang="scss" scoped>

</style>