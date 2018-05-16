<template>
	<!-- 头部导航 -->
	<div class="module">
		<!--  头部导航栏结束 -->
		<div class="top" style="width:100%;border:1px solid #ffffff;height:40px;margin-bottom: 0px; display: flex;">
		<div style="width:1200px;margin:0 auto;">
			<div  style="float:left">
				<!-- <img src="../assets/web/right.png" style="cursor: pointer;" @click="backgo" /> -->
				<img src="../assets/web1/首页-F.png" />
				<span class="top_1">&ensp;欢迎来到消防技术装备协议采购平台!&ensp;</span>
				<router-link to="/login" v-if="showlogin" style="color:#333">请登录</router-link>
				<span style="color:#333;" v-if="!showlogin">{{msgInfo}}</span>
			</div>
			<div style="float:right">
				<router-link to="/" class="a_href">服务与培训</router-link >
				<router-link to="/" class="a_href">首页</router-link>
				<router-link to="register" class="a_href">商家入驻</router-link>
				<router-link to="help" class="a_href">帮助中心</router-link>
			</div>
		</div>
		</div>
		<!--    导航栏结束 -->
		<div style="width: 100%;height: 85px;background: white;">
			<div style="width: 1200px;margin: 20px auto;">
				<router-link to="/" style="float:left;"><img  src="../assets/web1/logo.png"/></router-link>
				<div style="display: flex;margin-top: 30px; float:right;" >
					<input type="text" v-model="sname" class="form-control" placeholder="请输入商品名" style="width: 300px;height: 30px;border: solid 1px #e45944;border-bottom-right-radius: 0;border-top-right-radius: 0;" />
					<input type="button" class="btn btn-sm btn-primary" @click="searchname" value="搜索" style="height: 30px;border:solid 1px #e45944;background-color:#e45944;border-bottom-left-radius: 0;border-top-left-radius: 0;" />
				</div>
			</div>
		</div>
		<!-- 大盒子 -->

		<!-- 店铺logo -->
		<div class="logonav">
			<div>
					<img :src="logo" alt="" >
					<div>
						<p>{{shopName}}</p>
						<p><span>描述{{similarity}}</span>
						<span>服务:{{attitude}}</span>
						<span>物流:{{logistics}}</span>
						<span>好评率:{{praiseRate}}</span></p>
					</div>
					<p><img @click="checkcompany"  src="../assets/shop/查看更多.png" alt=""></p>
					

			</div>
			


		</div>
		<div class="box">
			<!--     头部搜索框 -->
			<div style="background:#ffffff;" v-if="false">
				<div class="content">
					<div class="bottom">
						<div class="bottom-sort">
							<span>店铺信息</span>
						</div>
					</div>
				</div>
			</div>
			<div style="width: 100%;height: 50px;background: #ca2335;">
				<div style="width: 1200px;margin: 0 auto;height: 50px;">
				<ul style="height: 50px;display: flex;flex-direction: row;justify-content: space-around;line-height: 50px;z-index: 100;">
					<li style="font-size: 17px;position: relative; color: white;cursor: pointer;">
							所有产品</li>
						<li v-for="(item,index) in catList" class="active_2" @click="handleGet1(item.cat_id,sellerID)" :key="index" style="font-size: 17px;cursor:pointer;line-height: 50px;color: white;">{{item.cat_name}}</li>
					</ul>
				</div>
			</div>
		</div>
			<!--  购物列表 -->
			<div class="sort-list" v-if="showCompany">
			      <img src="../assets/shop/消防器材一站式采购.png" alt="" style="width:100%">

			<!-- 镇店爆款 -->
			  <p  class="title">店铺爆款</p>
			<div class="hotbox">
				
				  <!-- <span >查看更多</span> -->
				<div>
					<ul >
						<li v-for="(item,index) in hotList" @click="changDetail(item.product_id)" :key="index" >
							<img :src="item.titleImage[0]" >
								<div>
									{{item.product_name}}
								</div>
								<p><span>¥&nbsp;{{item.price}}</span><img src="../assets/shop/点击购买.png" alt="" @click="changDetail(item.product_id)"></p>
						</li>
					</ul>


				</div>



			</div>
			<!-- 新品上市 -->
			<p  class="title">新品上市</p>
				<div class="hotbox box2">
				
				  <!-- <span>查看更多</span> -->
				<div>
						<ul >
						<li v-for="(item,index) in newsList" @click="changDetail(index)" :key="index" >
							<img :src="item.titleImage[0]" >
								<div>
									{{item.product_name}}
								</div>
								<p><span>¥&nbsp;{{item.price}}</span><img @click="changDetail(item.product_id)" src="../assets/shop/点击购买.png" alt=""></p>
						</li>
					</ul>

				</div>



			</div>
			<!-- 消防器材 -->
			<div  v-for="(item,index) in data" v-if="index==0" :key="index">
			<p class="title">{{item.cat_name}}</p>
				<div class="hotbox box3">
				
				  <span @click="moredetail(sellerID,item.cat_id)">查看更多</span>
				<div>
						<ul >
						<li v-for="(a,b) in item.product_list" @click="changDetail(b)" :key="b">
							<img :src="a.titleImage[0]" >
								<div>
									{{a.product_name}}
								</div>
								<p><span>¥&nbsp;{{a.price}}</span><img  @click="changDetail(a.product_id)" src="../assets/shop/点击购买.png" alt=""></p>
						</li>
					</ul>

				</div>



			</div>	
			</div>
			<div v-for="(item,index) in data" v-if="index>0" :key="index">	
			<p class="title">{{item.cat_name}}</p>
				<div class="hotbox box4">
				
				<!-- <img src="../assets/shop/图层12.png" alt=""  style="width:100%"> -->
				  <span @click="moredetail(sellerID,item.cat_id)">查看更多</span>
			<div>
			<ul >
			          <li v-for="(a,b) in item.product_list" @click="changDetail(a.product_id)" :key="b">
				 <img :src="a.titleImage[0]" >
				       <div> {{a.product_name}} </div>
					 <p><span>¥&nbsp;{{a.price}}</span>
					        <img @click="changDetail(a.product_id)" src="../assets/shop/点击购买.png" alt="">
					  </p>
				</li>
			</ul>
		</div>



			</div>

			</div>
			
			
					
					
			</div>
			<div v-else class="company">
			<div>
			<h4>公司简介:</h4>
			<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{comdetail.introduction}}</p>
			</div>
			<div>
			<div>
				<div><span>企业名称:</span>{{comdetail.sellerName}}</div>
				<div><span>公司地址:</span>{{comdetail.address}}</div>
				<div><span>联系电话:</span>{{comdetail.contactMobile}}</div>
				<div><span>邮箱地址:</span>{{comdetail.email}}</div>
			</div>
			<div>
				<img :src="comdetail.certificate" alt="">
			</div>
			</div>
			
				
			</div>
	
		<Foot/>
		</div>
		<!--  主要内容结束 -->
		<!-- 搜索框结束 -->
		<!--大盒子结束 -->
</template>
<script>
	import 'bootstrap/dist/css/bootstrap.css'
	import store from '../store.js'
		import Foot from './common/footer.vue'
	export default {
		name: 'module',
			components:{
			Foot

		},
		data: function() {
			return {
				sname: '',
				price: [],
				status: '',
				catID: '',
				catList: [],
				shopName: '',
				logo:'',
				similarity:'',
				attitude:'',
				shipping:'',
				logistics:'',
				praiseRate:'',
				email:'',
				contactMobile:'',
				sellerID: '',
				data: [],
				time: true,
				searchData: [],
				QQ:'',
				qqUrl:'',
				host:"http://"+window.location.host,
				hotList:[],
				newsList:[],
				showlogin: true,
				msgInfo: '',
				showCompany:true,
				comdetail:[]
			}
		},
		
		created: function() {
			//	this.$http.post(store.state.config.apiUrlRoot + "admin/user/login", {
			//		username: "浙江消防总队",
			//		password: 123456
			//	}).then((data) => {
			//
			//	})

			this.getData();
			this.getWork();
			
			this.sellerID = this.$route.query.sellerID;
			$(window).scrollTop(0);
			// setInterval(() => {
			// 	this.showimg++
			// 		if(this.showimg > 4) {
			// 			this.showimg = 1
			// 		}
			// }, 1500)
		},
		 
		methods: {
			moredetail(a,b){
				console.log(a)
				      this.$router.push({
					path: "shopmore",
					query: {
					sellerID:a,
					catID: b
					}
				});
			},
			checkcompany(){
				this.showCompany=!this.showCompany;
				this.getcom();

			},
			getcom(){
				this.$http.post(store.state.config.apiUrlRoot + 'api/Shop/shopSynopsis',{
					sellerID:this.sellerID
				}).then(
					function(response) {
						// console.log(response)
						var data = response.data;
						if(data.code == 1) {
							this.comdetail=data.content;
						
						} else {
							
						}
					});

			},
			qq() {
				this.qqUrl = " http://wpa.qq.com/msgrd?v=3&uin=" + this.QQ + "&site=qq&menu=yes"
			},
			searchname() {
				var reg = '/' + this.sname + '+/g'
				this.name = []
				for(var n = 0; n < this.searchData.length; n++) {

					if(this.searchData[n].name.search(eval(reg)) == -1) {
					} else {
						this.name.push(this.searchData[n])
						this.data = this.name
						this.msg = this.name.length
					}
				}
				this.zongy = []
				for(var n = 0; n < Math.ceil(this.data.length / this.datasize); n++) {
					this.zongy.push(n)
				}
			},
			
			
			
			
			backgo() {
				window.history.go(-1)
			},
			
			
			getWork() {
				this.$http.post(store.state.config.apiUrlRoot + 'admin/user/workIndex').then(
					function(response) {
						var data = response.body;
						if(data.code == 1) {
							this.msgInfo = data.content.data.name;
							this.showlogin = false;
						} else {
							this.showlogin = true;
						}
					});
			},
			loding() {
				this.$http.post(store.state.config.apiUrlRoot + 'admin/user/workIndex').then(
					function(response) {
						var data = response.body;
						if(data.code == 1) {
							if(data.content.data.roleID == 5) {
								this.$router.push({ path: 'protocol'});
							} else if(data.content.data.roleID == 4) {
								this.$router.push({ path: 'protocol'});
							} else if(data.content.data.roleID == 2) {
								this.$router.push({ path: 'protocol'});
							} else {
								this.msgname = '抱歉,你没有这个权限'
								this.locatio()
							
							}
						} else {
								this.$router.push({ path: 'login'});
						}
					}
				);
			},
			loding2() {
				this.$http.post(store.state.config.apiUrlRoot + 'admin/user/workIndex').then(
					function(response) {
						var data = response.body;
							
						if(data.code == 1) {
							if(data.content.data.roleID == 5) {
								window.location.href =this.host+ "/zong/#/module";
							} else if(data.content.data.roleID == 4) {
								window.location.href = this.host+ "/zhi/#/module";
							} else if(data.content.data.roleID == 2) {
								window.location.href = this.host+ "/supply";
							} else if(data.content.data.roleID == 1) {
								window.location.href =this.host+ "/admittance";
							} else if(data.content.data.roleID == 7) {
								window.location.href = this.host+ "/big";
							} else if(data.content.data.roleID == 8) {
								window.location.href =this.host+ "/middle";
							} else {
								window.location.href =this.host+ "/qiancheng";
							}
						} else {
							this.$message({
								showClose: true,
								message: '请您先登录',
								type: 'success'
							});
						}
					}
				);
				// this.$router.push({ path: 'login'});
			},
			
			
			handleGet1(index,a) {
				this.catID = index;
				   this.$router.push({
					path: "shopmore",
					query: {
					sellerID:a,
					catID: index
					}
				});

				this.alls = 0
			},
			
			getData() {
			
				this.$http.post(store.state.config.apiUrlRoot + "api/Shop/shopIndex", {
					sellerID: this.$route.query.sellerID
				}).then(
					function(response) {
						var data = response.data.content;
						if(response.data.code == 1) {
							this.shopName = data.shopInfo.sellerName;
							this.logo = data.shopInfo.logo;
							this.similarity = data.shopInfo.similarity;
							this.attitude = data.shopInfo.attitude;
							this.shipping = data.shopInfo.shipping;
							this.logistics = data.shopInfo.logistics;
							this.praiseRate = data.shopInfo.praise_rate;
							this.email = data.shopInfo.email;
							this.contactMobile = data.shopInfo.contactMobile;
							this.catList = data.catList;
							this.data = data.productList;
							this.hotList=data.hotList;
							this.newsList=data.newList;
			
							
							
						} else {
							this.name = [];
							this.msg = 0;
						}

					},
					function(erro) {
						console.log(erro);
					}
				);

				
			},
			changDetail(a) {
				// window.open('http://www.xfxycg.com/#/detail/?wd=' + this.productList[index].productID);
				this.$router.push({
					path: 'detail',
					query: {
						productID: a
					}
				});
			}
		}
	}
</script>
<style scoped>
.company{
	width:100%;
	background-color: #f7f7f7;
}
.company>div{
	width:1200px;
	margin:0 auto;
	overflow:hidden;
}
.company>div>p{
	line-height: 30px;
}
.company>div>div{
	/*width:500px;*/
	float: left;
}
.company>div>div:nth-child(2){
	float: right;
}
.company>div>div>div{
	line-height: 30px;
}
.company>div>div>img{
	width:200px;
}
.hotbox{
	background: url('../assets/shop/3.png') no-repeat;
	background-size:100%;
	width:100%;
	padding:20px; 
}
.hotbox>span{
	display: block;
	width:1200px;
	text-align: right;
	margin:0 auto;
	color: #fff;
	font-size:20px;
	cursor: pointer;
	line-height: 40px;
}
.hotbox>img{
	margin-top:-29px;
}
.box2{
	background: url('../assets/shop/1.png') no-repeat;
	margin-top:-10px;
	padding-bottom: 20px;

}
.box3{
	background: url('../assets/shop/4.png') no-repeat;
	
}
.title{
	width:100%;
	height: 120px;
	background:url('../assets/shop/11.png')  no-repeat;
	color: #fff;
	font-size: 50px;
	margin-top:-20px;
    z-index: 999;
    position: relative;
	
	text-align: center;
	background-size: 100%;
	line-height: 90px;
}
.box4{
	background: url('../assets/shop/2.png') no-repeat;
		margin-top:-10px;
}
.box4>img{
	margin-top:-35px;
}
.hotbox>div{
	width:1200px;
	margin:20px auto;
}
.hotbox>div>ul{
	overflow:hidden;
}
.hotbox>div>ul>li{
	width:363px;
	float:left;
	background-color: #fff;
	margin-left:34px;
	margin-bottom: 20px;
}
.box2>div>ul>li,.box3>div>ul>li{
	width:560px;
	float:left;
	background-color: #fff;
	margin-left:40px;
	margin-bottom: 20px;
}

.hotbox>div>ul>li>img{
	width:70%;
	height: 250px;
	margin-left:15%;
}
.box2>div>ul>li>img,.box3>div>ul>li>img{
	width:70%;
	height: 450px;
	margin-left:15%;
}
.hotbox>div>ul>li>div{
	margin-left:10%;
	line-height: 50px;
	height:50px;
	color: #dd2638;
	font-size:20px;
	width: 80%;
overflow: hidden;
white-space: nowrap;
text-overflow: ellipsis;
text-align: center;

}
.hotbox>div>ul>li>p{
	width:100%;
	height:61px;
	background-color: #dd2638;
	overflow:hidden;
	line-height: 61px;
	margin:0px;

	}
.box2>div>ul>li>p,.box3>div>ul>li>p{
	width:90%;
	margin-left: 5%;
	height:61px;
	background-color: #dd2638;
	overflow:hidden;
	line-height: 61px;
	margin-bottom:10px;
	
}
.hotbox>div>ul>li>p>span{
	float:left;
	color: #fff;
	font-size: 20px;
	margin-left:10%;
}
.hotbox>div>ul>li>p>img{
	float:right;
	margin-top:10px;
	margin-right:20px;
		cursor: pointer;
}
.logonav{
	width:100%;
	background-color: #202731;

}
.logonav>div{
	width:1200px;
	margin:0 auto;
	padding:20px;
	overflow:hidden;
}
.logonav>div>img{
	float: left;
	width:120px;
	height:80px;
}
.logonav>div>div{
	float: left;
	color: #fff;
	margin-left:20px;

}
.logonav>div>p{
	float: right;
margin-top:20px;
}
.logonav>div>div>p:nth-child(1){
	font-size: 30px;
}
.logonav>div>div>p>span{
	margin-right:15px;
	font-size: 14px;
}




	.active_5:hover {
		color: #337ab7;
	}


	
	.active_3:hover {
		cursor: pointer;
		color: red;
		background: #231816;
	}
/* 	
	.active_4:hover {
		border: solid 1px red;
		box-shadow: 0px 0px 5px 3px #bdbdbd;
	} 
	*/
	

	
	.ft {
		font-weight: bold;
		color: #c8996b !important;
	}
	

	.top {
		width: 1920px;
		height: 45px;
		background-color: rgb(245, 245, 245);
		margin: 0 auto;
		line-height: 45px;
	}
	
	.top_1 {
		color: #333;
	}
	
	.a_href {
		color: #333;
		margin-right: 20px;
		text-decoration: none;
	}
	
	.active_ {
		cursor: pointer;
	}
	
	.active_1:hover {
		transition: all 1s linear;
		transform: scale(1.1);
	}
	



	
	.logoImg {
		width: 160px;
		margin-top: 45px;
		float: left;
	}
	


	
	.page {
		margin-top: 20px;
		width: 600px;
		height: 65px;
		padding-right: 60px;
		float: right;
		font-size: 14px;
	}
	.white {
		background: #ffffff;
	}

	.ms {
		vertical-align: middle;
		margin-left: 780px;
		margin-right: 20px;
	}



	.sort-list {
		width: 100%;
		background-color: #cA2335;
	}
	
	/*公共样式*/
	
	ul,
	li {
		list-style: none;
	}
	
	.red {
		color: red;
	}
	
	a {
		text-decoration: none;
	}
	
	.module {
		/*  width: 100%;*/
		max-width: 1920px;
		padding-bottom: 80px;
	}

	
	.content {
		width: 1200px;
		margin: 0 auto;

	}
	
	.content-search {
		margin-top: 36px;
		clear: both;
		width: 100%;
		height: 173px;
	}
		

	.top {
		height: 120px;
		margin-bottom: 10px;
		clear: both;
	}
	
	.search {
		float: left;
		margin-top: 50px;
		margin-left: 321px;
		position: relative;
	}

	
	.search img {
		position: absolute;
		left: 420px;
		top: 0px;
	}
	


	.bottom {
		clear: both;
		height: 43px;
		line-height: 43px;
	}
	
	.bottom-sort {
		width: 110px;
		height: 100%;
		background-color: #c8996b;
		float: left;
	}
	
	.bottom-sort span {
		font-size: 16px;
		padding-left: 20px;
		color: #ffffff;
		font-weight: bold;
	}

	
	.h {
		width: 60px;
		margin-left: 3px;
		height: 3px;
		border: none;
		background-color: red;
		margin-top: -3px;
	}
</style>