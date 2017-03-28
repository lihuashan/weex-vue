<template>
    <text class="fontStyle" @click="toUrl('/welcome')">Hello World</text>
</template>
<script>
    export default {
        methods:{
            toUrl(to){
                if(this.$router){
                    this.$router.push(to)
                }
            }
        }
    }
</script>
<style>
    .fontStyle{
        padding-top: 50px;
        line-height: 200px;
        color: black;
        text-align: center;
    }
</style>