<template>
    <div class="search-box">
        <input class="input-style" v-model="content" @input="content=$event.target.value" @keyup.enter="submit" type="text"/>
        <button class="blue-btn" @click="submit">提交</button>
    </div>
</template>
<style scoped>
    .search-box{
        position: relative;
    }
    input.input-style{
        width: 500px;
        border-radius: 6px;
        border: 0;
    }
    button.blue-btn{
        position: absolute;
        right: 20px;
        top:5px;
        width: 100px;
        padding-top: 5px;
        padding-bottom: 5px;
        padding-left: 5px;
        padding-right: 5px;
        border: 0;
        background-color: #0088fb;
        text-align: center;
        color: #ffffff;
    }
</style>
<script>
    export default {
        data(){
            return{
                content: ''
            }
        },
        methods:{
            submit () {
                let self = this,
                    params = {
                        id: 0,
                        type: 1,
                        content: '',
                        time: ''
                    };
                self.content = self.content.trim();
                if(self.content){
                    params.content = self.content;
                    self.$store.dispatch('switch_user',params.content);
                    content1();
                }
            },
            content1(){
                this.content = ' ';
            }
        }
    }
</script>