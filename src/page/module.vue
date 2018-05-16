<template>
    <!-- 头部导航 -->
    <div>
 <el-select
    v-model="value9"
    multiple
    filterable
    remote
    placeholder="请输入关键词"
    :remote-method="remoteMethod"
    :loading="loading">
    <el-option
      v-for="item in options4"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
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
                itemForm:{
                    className:'',
                },
                 options4: [],
        value9: [],
        list: [],
        loading: false,
        states: ["Alabama", "Alaska", "Arizona",
        "Arkansas", "California", "Colorado",
        "Connecticut", "Delaware", "Florida",
        "Georgia", "Hawaii", "Idaho", "Illinois",
        "Indiana", "Iowa", "Kansas", "Kentucky",
        "Louisiana", "Maine", "Maryland",
        "Massachusetts", "Michigan", "Minnesota",
        "Mississippi", "Missouri", "Montana",
        "Nebraska", "Nevada", "New Hampshire",
        "New Jersey", "New Mexico", "New York",
        "North Carolina", "North Dakota", "Ohio",
        "Oklahoma", "Oregon", "Pennsylvania",
        "Rhode Island", "South Carolina",
        "South Dakota", "Tennessee", "Texas",
        "Utah", "Vermont", "Virginia",
        "Washington", "West Virginia", "Wisconsin",
        "Wyoming"]
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
