<template>
	<!-- 头部导航 -->
	<div class="module" >
	<div class="lanrenzhijia_service" >
	  <ul>
	    <span class="right_bar"></span>
	    <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=1339135094&site=qq&menu=yes" class="right_qq" ></a>
	    <span class="right_phone" style="margin-bottom:5px;">0571-86738097</span>
	  </ul>
             </div>
             <!-- 客服部分结束 -->
      <div class="box1">
     <div class="content-box1">
     <img src="../assets/caigou/消防装备协议采购.png" height="48" width="196" class="box-logo">
     <div class="content-middle" >
         <router-link to="/"><img src="../assets/caigou/right.png" class="fan"></router-link>
     </div>
     </div>
      </div>
         <div class="main-contet">
        <h2 style="font-family:宋体';color:#c8996b;line-height:60px;">商家服务</h2>
        <div class="content-item">
            <p class="item-title">入驻须知</p>
            <p class="item-se">商家资质</p>
            <p class="item-three">A、企业营业执照 (及法人身份证) </p>
            <p class="item-three">B、组织机构代码证 </p>
            <p class="item-three">C、提供企业对公银行账号 </p>
              <p class="item-se">行业资质</p>
            <p class="item-three">A、商家为供应商家,发布相关的消防产品 </p>
            <p class="item-three">B、每一个上传的商品必须有相应的3C认证 </p>
            <p class="item-three">C、商品必须经过谦程网络审核通过后,才可以进行买卖 </p>
        </div>
        <div class="content-item"> 
          <p class="item-title">入驻流程<span style="font-size:14px;color:#fe4d3c;"></p>
          <p class="item-se" >A、商家注册账号</p>
          <div class="hidden-content"  >
          <p class="item-txt">浏览器中输入http://www.xfxycg.com进行网站访问，在网站登录页面点击“商家入驻”进入注册流程：</p>
          <img src="../assets/caigou/san1.png" >
           <p class="item-txt">点如实填写信息便可完成注册流程，如下图：</p>
           <img src="../assets/caigou/san2.png" >
              </div>
        </div>
           <div class="content-item">
          <p class="item-se" >B、 准入商完善机构信息</p>
            <div class="hidden-content"  >
           <p class="item-txt">注册完成后,您便是准入商的身份了!在登录的页面,输入账号密码,会进入准入商完善信息的页面 如下图:</p>
             <img src="../assets/caigou/san3.jpg" height="675" width="479" >
                <div class="content-notice">注：填写正确信息后，点击提交则自动进入审核状态，申请成功后才能发布商品。</div>
             </div>
          </div>
        <div class="content-item">
          <p class="item-se" >C、 商品管理</p>
           <div class="hidden-content"  >
           <p class="item-txt">信息通过审核后,在左侧导航栏点击“商品管理”下的“发布供应商品”直接打开商品添加界面，如下图：</p>
             <img src="../assets/caigou/san4.png" >
              <p class="item-txt">点击提交后则自动进入审核状态，可在“未上架的商品”审核中查看到，审核情况可在审核通过和审核未通过中进行查看 如下图：</p>
             <img src="../assets/caigou/san5.png" >
             </div>
          </div>
            <div class="content-item">
          <p class="item-se" > D、供应商交易管理</p>
            <div class="hidden-content"  >
           <p class="item-txt">准入商被采购方添加到供应商后,便可进行交易 采购方采购商品后和供应商进行议价，议价完成后供应商在“议价中的商品”议价中一栏点击右边修改价格按钮进行修改价格，该修改只针对该采购人的该次采购，不影响原商品的供货价。</p>
             <img src="../assets/caigou/san6.png" >
             <p class="item-txt">购方生成合同后，供应商在“已卖出的商品”可对卖出的商品进行操作, 如图</p>
                <img src="../assets/caigou/san7.png" >
             </div>
          </div>
            <div class="content-item">
            <p class="item-title">商家规则</p>
            <p class="item-three">A、不得违反国家法律法规的规定 </p>
            <p class="item-three">B、请严格按照系统流程进行操作 </p>
            <p class="item-three">C、不得以任何理由诋毁谦程网络品牌形象 </p>
        </div>
         <!--  <div class="content-notice">注：当所有的商品都确认收货后，则自动进入评价阶段，对供应商进行评分。</div>
        </div> -->
	</div>
</template>
<script>
	import store from '../store.js'
	import '../assets/css/fenye.css'
	export default {
		name: 'module',
		data: function() {
			return {
				hiddenContent:false,
				hiddenContent2:false,
				hiddenContent3:false,
				hiddenContent4:false,
				hiddenContent5:false,
			}
		},
		created: function() {
			$(function(){
	$(".lanrenzhijia_service").hover(function(){
		$(this).animate({width:'160px'});
	},function(){
		$(this).animate({width:'40px'});
	});
             });
		},
		ready: function() {

		},
		methods: {
			handleXian(){
				this.hiddenContent=!this.hiddenContent;
			},
			handleXian2(){
				this.hiddenContent2=!this.hiddenContent2;
			},
                                  handleXian3(){
				this.hiddenContent3=!this.hiddenContent3;
			},
			 handleXian4(){
				this.hiddenContent4=!this.hiddenContent4;
			},
			 handleXian5(){
				this.hiddenContent5=!this.hiddenContent5;
			},
			
		}
	}
</script>
<style scoped>

</style>