<template>
    <text class="fontStyle" @click="toUrl('/home')">Welcome Jam</text>
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