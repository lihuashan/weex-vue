<template>
    <div class="menu-left">
        <div>
            <text class="menu-left-item" @click="toUrl('item-1')">item-1</text>
        </div>
        <div>
            <text class="menu-left-item" @click="toUrl('item-2')">item-2</text>
        </div>
        <div>
            <text class="menu-left-item" @click="toUrl('item-3')">item-3</text>
        </div>
        <div>
            <text class="menu-left-item" @click="toUrl('item-4')">item-4</text>
        </div>
        <div>
            <text class="menu-left-item" @click="toUrl('item-5')">item-5</text>
        </div>
    </div>
</template>
<style scoped>
    .menu-left{
        position: fixed;
        top: 120px;
        left: 50px;
        width: 220px;
        height: auto;
        border-radius: 6px;
        background-color: rgba(30,79,78,.4);
    }
    .menu-left-item{
        padding-top: 15px;
        padding-bottom: 15px;
        border-bottom: 1px solid #afddff;
        text-align: center;
        color: #ffffff;
        font-size: 14px;
    }
</style>
<script>
    export default{
        methods:{
            toUrl(to){
               if(this.$router){
                   this.$router.push(to)
               }
            }
        }
    }
</script>