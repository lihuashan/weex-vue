<template>
    <div>
        <div class="header-bar">
            <div>
                <text class="fontStyle" @click="toUrl('/welcome')">Hello World{{totals}}</text>
            </div>
            <div class="user-title" @click="changeName('Jam')">
                <text class="font-size">点击重置初始值或者在输入框提交修改:</text>
                <text class="user-style font-size font-color" v-if="typeof userName == 'string'">{{userName}}</text>
                <text class="user-style font-size font-color" v-else>{{userName.userName}}</text>
            </div>
        </div>
        <!--<app-header :title="title" @click="total">{{totals}}</app-header>-->


        <menu-left></menu-left>
        <div class="menu-content">
            <div class="event-add">
                <!--<input type="text" class="form-control"  :value="searchKey" @input="update" @keyup.enter="searchAction" placeholder="搜索关键字..." >
                <input value="content" @input="content = $event.target.value" type="text" @keyup.enter="submit" />
                <input type="text" class="n-input" :value="content" @input="update"  placeholder="待办事项" @keyup.enter="submit" />
                <input id="txtUser" value="" @keyup.enter="submit"/>
                <search-input></search-input>-->
                <input type="text" class="n-input" :value="content" @input="update"  placeholder="待办事项" @keyup.enter="submit" />
                <!--<input :value="content" @input="content=$event.target.value" @keyup.enter="submit" type="text"/>-->
                <button class="add-btn" @click="submit">提交</button>
            </div>
            <!--<search-input></search-input>-->
            <router-view></router-view>
        </div>
    </div>

</template>
<script>
//    import AppHeader from '../../components/app-header.vue'
    import MenuLeft from '../../components/menu-left.vue'
    /*import SearchInput from '../../components/search-input.vue'*/
    export default {
        components: {MenuLeft/*,SearchInput*/},
        /*props: ['content'],*/
        data(){
            return{
                title:"首页",
                totals:'!',
                content:' '
            }
        },
        computed:{
            userName(){
                return this.$store.getters.changeName
            }
        },
        methods:{
            toUrl(to){
                if(this.$router){
                    this.$router.push(to)
                }
            },
            total(){
                this.totals += 1
            },
            changeName(name){
                this.$store.dispatch('switch_user',name);
            },
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
                    self.content = '';
                }
            },
            update(e){
                this.content = e.target.value
            }
        }
    }
</script>
<style>
    .header-bar{
        height: 80px;
        border-bottom: 1px solid #368e80;
        background-color: rgba(0,0,0,.05);
    }
    .user-title{
        position: absolute;
        right: 50px;
        top:20px;
        line-height: 25px;
    }
    .user-style{
        padding-top: 5px;
        padding-bottom: 5px;
        padding-left: 5px;
        padding-right: 5px;
        margin-top: 5px;
        background-color: #ffffff;
        border: 1px solid #f1f1f1;
    }
    .menu-content{
        margin-left: 350px;
        margin-top: 30px;
        margin-right: 50px;
    }
    .fontStyle{
        padding-left: 50px;
        line-height: 80px;
        color: black;
        text-align: left;
    }
    .font-size{
        font-size: 14px;
    }
    .font-color{
        color: #0088fb;
    }

</style>