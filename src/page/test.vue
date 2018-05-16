<template>
    <!-- 头部导航 -->
    <div>
    787878787878dfsadasdadadsasdadadasdsadsasas
    </div>
</template>
<script>
	import store from '../store.js'
    export default {
        name: 'module',
        data: function (){
            return {
                active:true,
                headerFixed : true,
                show:'',
            }
        },
        created: function(){
        	this.show=store.state.show;
        },
        methods: {
        handleSubmit: function(){
        	  var that = this;
        	  this.$http.post(store.state.config.apiUrlRoot + "user/logout").then(
        	  	function(response){
        	  	var data = response.body;
                    that.$message({
                        message: "操作成功",
                        type: 'success'
                    });
                    this.$router.push({ path: '/'});
        	  	},
        	  	function(erro){}
        	  );
        },
        }
    }
</script>
<style>
</style>
