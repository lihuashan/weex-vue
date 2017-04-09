<template>
    <div class="header-box">

        <div class="header-item header-item-left" @click="back()"><text class="header-item header-font"><{{counter}}</text></div>
        <div class="header-item header-item-middle"><text class="header-item header-font">{{title}}</text></div>
        <!--<div class="header-item header-item-right" @click="jumpTo()"><text class="header-item header-font">></text></div>-->
    </div>
</template>
<script>
    export default{
        data(){
            return{
                counter: 0
            }
        },
        props:{
            'title':{
                type:[String],
                default:"主页"
            }
        },
        methods:{
            back(){
                this.counter += 1
                this.$emit('back');
            },
            jumpT(){}
        }
    }
</script>
<style scoped>
    .header-box{
        position: absolute;
        display: flex;
        top: 0;
        left: 0;
        width:100%;
        height: 50px;
        justify-content: center;
        background-color: #ffffff;
        z-index: 9;
    }
    .header-item{
        height: 50px;
        line-height: 50px;
    }
    .header-item-left{
        position: absolute;
        left: 0;
        top: 0;
        width: 50px;
        /*background-color: #afddff;*/
    }
    .header-item-middle{
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        margin-left: 50px;
        margin-right: 50px;
    }
    .header-font{
        text-align: center;
        vertical-align: middle;
        justify-content: center;
        font-size:14pt;
    }
    .header-item-right{
        position: absolute;
        right: 0;
        top: 0;
        width: 50px;
        /*background-color: #afddff;*/
    }
</style>