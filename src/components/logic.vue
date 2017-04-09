<template>
    <section class="login">
        <div class="form-group"><label>用户名</label><input id="txtUser" v-model="name"/></div>
        <div class="form-group"><label>密码</label><input id="txtPwd" type="password" v-model="pwd"/></div>
        <div class="form-group"><input type="submit" value="提交" v-bind:disabled="btndisable"/></div>
    </section>
</template>

<script>

    export default {
        props: ['uName', 'uPwd'],
        data(){
            return {
                name:"",
                pwd:""
            }
        },
        computed:{
            btndisable:function(){
                console.log(this.name);
                return (this.name||'').length>0&&(this.pwd||'').length>0?false:true;
            }
        }
    }
</script>