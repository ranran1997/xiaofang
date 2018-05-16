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
        <h2 style="font-family:宋体';color:#e45944;line-height:60px;">商品采购指南</h2>
        <div class="content-item"> 
            <p class="item-title">采购流程<span style="font-size:14px;color:#fe4d3c;"></p>
          <p class="item-se" >A、 商品浏览及添加到购物车</p>
          <div class="hidden-content"  >
          <p class="item-txt">登陆网站后在右侧点击"协议供货"可浏览所有供货商的商品,上面可填写筛选条件进行商品筛选, 如下图:</p>
          <img src="../assets/caigou/矩形2.png" >
           <p class="item-txt">进入协议供货页面后,可点击左侧导航栏的分类查找需要购买的商品, 如下图:</p>
           <img src="../assets/caigou/QQ截图20180414150412.png" >
             <p class="item-txt">当点击要查看的商品则打开该商品的详情页面, 如下图:</p>
              <img src="../assets/caigou/矩形3.png" >
               <p class="item-txt">填写要采购的数量,点击"加入购物车", 则会将商品添加到购物车上.点击右侧购物车侧栏可以看到购物车内的商品,如下图:</p>
              <img src="../assets/caigou/QQ截图20180414151725.png" >
              </div>
        </div>
           <div class="content-item">
          <p class="item-se" >B、购物车里商品修改</p>
            <div class="hidden-content"  >
           <p class="item-txt">点击去购物车结算进入后台页面在"购物车"里,对商品进行议价或删除,如不用议价则点击立即购买 如下图:</p>
             <img src="../assets/caigou/矩形6.png" >
             </div>
          </div>
        <div class="content-item">
          <p class="item-se" >C、 商品议价</p>
           <div class="hidden-content"  >
           <p class="item-txt">点击议价后,供货商在"议价中的商品" 里,联系商家进行议价和修改数量,如下图:</p>
             <img src="../assets/caigou/矩形8.png" >
              <p class="item-txt">议价成功后按“确认完成”按钮，则该商品议价完成进入议价完成页面，确认无误后点击“生成合同”按钮，如图：</p>
             <img src="../assets/caigou/矩形9.png" >
             </div>
          </div>
            <div class="content-item">
          <p class="item-se" >D、 下单及其生成合同</p>
            <div class="hidden-content"  >
           <p class="item-txt">在“议价完成”界面，点击右侧的“生成合同”则可直接生成合同。在“已买到的商品”界面签订合同一栏可查看合同并打印合同。</p>
             <img src="../assets/caigou/矩形10.png" >
             </div>
          </div>
          <div class="content-item">
          <p class="item-se" >E、 供货及收货</p>
             <div class="hidden-content"  >
           <p class="item-txt">供应商在“已卖出的商品”界面里选择“待发货”，选择对应的订单，点击“发货”按钮进行发货，如下图：</p>
             <img src="../assets/caigou/矩形11.png" >
              <p class="item-txt">用户收到货物后，在“待收货”里对收到的商品进行确认，如下图：</p>
             <img src="../assets/caigou/矩形12.png" >
             <div class="content-notice">注：当所有的商品都确认收货后，则自动进入评价阶段，对供应商进行评分。</div>
        </div>
             </div>
            <div class="content-item">
            <p class="item-title">政策问题</p>
            <p class="item-three">A、承诺为客户提供最优质的服务,最实用的产品 </p>
            <p class="item-three">B、一切服务均在法律允许范围之内 </p>
            <p class="item-three">C、尊重客户的隐私和知情权 </p>
        </div>
          <div class="content-item">
            <p class="item-title">常见问题</p>
            <p class="item-three">A、如有问题欢迎随时和我方联系  电话: 0571-86738097</p>
        </div>
          </div>
          
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