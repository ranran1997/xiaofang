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
					<input type="text" v-model="sname" class="form-control" placeholder="请输入商品名" />
					<input type="button" class="btn btn-sm btn-primary" @click="searchname" value="搜索" />
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
					<p style="cursor:pointer;"><img src="../assets/shop/查看更多.png" alt="" @click="companyPro"></p>

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
			<div class="boxnav">
			     <div>
				<ul >
					<li >
							所有分类
							
						</li>
						<li v-for="(item,index) in catList" class="active_2" @click="handleGet1(item.cat_id)" :key="index" style="font-size: 17px;cursor:pointer;line-height: 50px;color: white;">{{item.cat_name}}</li>
					</ul>
			     </div>
			</div>
			<!--  购物列表 -->
			<div class="sort-list" v-if="showGenduo">
			<div class="imgboos">
		                <img v-for="(a,b) in hotList" :key="b" :src="a.titleImage[0]" alt="" v-if="b==0" @click="changDetail(a.product_id)">
		                <div>
		                    <img src="../assets/shop/图层9.png" alt="">
		                   <img src="../assets/shop/图层10.png" alt="">
		                </div>
		               <div class="news">
		                    <img  v-for="(a,b) in newsList" :key="b" :src="a.titleImage[0]"  alt="" v-if="b<2" @click="changDetail(a.product_id)">
		                   
		               </div>
		               
		            </div>

			<!-- 防毒面具系列 -->
			<div class="hotbox" v-for="(item,index) in data" :key="index">
			<p>{{item.cat_name}}</p>
             
                                          <div style="background-color:#f7f7f7;">
			                <div class="shop1" v-for="(a,b) in item.product_list" v-if="b==0" :key="b">
			                    <img :src="a.titleImage[0]" alt="">
			                    <div>
			                        <p>{{a.product_name}}</p>
			                        <div>
			                           <p v-for="(imgad,index) in a.titleImage" :key="index"><img :src="imgad" alt=""></p>
			                      
			                        </div>
			                        <div class="checkgd">
			                            <img src="../assets/shop/right拷贝6.png" alt="" @click="cakangengduo(sellerID,item.cat_id)">
			                        </div>
			                    </div>

			                </div>

			                <ul class="list">
			                    <li v-for="(a,b) in item.product_list" @click="changDetail(a.product_id)" :key="b" v-if="b>0">
					<img :src="a.titleImage[0]">
					<div class="grid-txt">
						<p>{{a.product_name}}</p>
			                                    <p>¥&nbsp;{{a.price}}</p>
					</div>
					<!-- <p class="brand-grid-ul-p"><i class="fa fa-cny"></i>&nbsp;{{item.price}}</p> -->
				</li>
			                </ul>
                                      </div>
			</div>
			
				

			</div>
            <div class="company" v-else>
                <p>公司简介:</p>
                <div>
                    公司介绍<p>{{comproduct}}</p>
                </div>
                <p>企业名称:{{shopName}}</p>
                <p>企业地址:杭州市西湖区</p>
                <p>联系电话:{{contactMobile}}</p>
                <p>邮箱地址:{{email}}</p>


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
		                showGenduo:true,
		                comproduct:'',
				sname: '',
				price: [],
				status: '',
				showlogin: true,
				msgInfo: '',
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
				newsList:[]
			}
		},
		
		created: function() {
			
			this.getData();
			this.getWork();
			
			this.sellerID = this.$route.query.sellerID;
			$(window).scrollTop(0);
			
		},
		methods: {
			cakangengduo(a,b){
				      this.$router.push({
					path: "moresecond",
					query: {
					sellerID:a,
					catID: b
					}
				});
			},
		            companyPro(){
		                this.showGenduo=!this.showGenduo;
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
			// loding() {
			// 	this.$http.post(store.state.config.apiUrlRoot + 'admin/user/workIndex').then(
			// 		function(response) {
			// 			var data = response.body;
			// 			if(data.code == 1) {
			// 				if(data.content.data.roleID == 5) {
			// 					this.$router.push({ path: 'protocol'});
			// 				} else if(data.content.data.roleID == 4) {
			// 					this.$router.push({ path: 'protocol'});
			// 				} else if(data.content.data.roleID == 2) {
			// 					this.$router.push({ path: 'protocol'});
			// 				} else {
			// 					this.msgname = '抱歉,你没有这个权限'
			// 					this.locatio()
							
			// 				}
			// 			} else {
			// 					this.$router.push({ path: 'login'});
			// 			}
			// 		}
			// 	);
			// },
			// loding2() {
			// 	this.$http.post(store.state.config.apiUrlRoot + 'admin/user/workIndex').then(
			// 		function(response) {
			// 			var data = response.body;
							
			// 			if(data.code == 1) {
			// 				if(data.content.data.roleID == 5) {
			// 					window.location.href =this.host+ "/zong/#/module";
			// 				} else if(data.content.data.roleID == 4) {
			// 					window.location.href = this.host+ "/zhi/#/module";
			// 				} else if(data.content.data.roleID == 2) {
			// 					window.location.href = this.host+ "/supply";
			// 				} else if(data.content.data.roleID == 1) {
			// 					window.location.href =this.host+ "/admittance";
			// 				} else if(data.content.data.roleID == 7) {
			// 					window.location.href = this.host+ "/big";
			// 				} else if(data.content.data.roleID == 8) {
			// 					window.location.href =this.host+ "/middle";
			// 				} else {
			// 					window.location.href =this.host+ "/qiancheng";
			// 				}
			// 			} else {
			// 				this.$message({
			// 					showClose: true,
			// 					message: '请您先登录',
			// 					type: 'success'
			// 				});
			// 			}
			// 		}
			// 	);
			
			// },
			handleGet1(index) {
				
			},
			
			getData() {
				this.$http.post(store.state.config.apiUrlRoot + "api/Shop/shopIndex", {
					sellerID: this.$route.query.sellerID
				}).then(
					function(response) {
						var data = response.data.content;
						console.log(data.shopInfo)
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
			changDetail(index) {
				
				this.$router.push({
					path: 'detail',
					query: {
						productID:index
					}
				});
			}
		}
	}
</script>
<style scoped>
.news>img{
	width:405px;
	height: 208px;
}
.btn-primary{
	height: 35px;
	border:solid 1px #e45944;
	background-color:#e45944;
	border-bottom-left-radius: 0;
	border-top-left-radius: 0;

}
.form-control{
	border-bottom-right-radius: 0;
	border-top-right-radius: 0;
	width: 300px;
	height: 35px;
	border: solid 1px #e45944;
}
.boxnav{
    width: 100%;
    height: 50px;
    background: #ca1818;

}
.boxnav>div{
    width: 1200px;
    margin: 0 auto;
    height: 50px;
}
.boxnav>div>ul{
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    line-height: 50px;
    z-index: 100;
}
.boxnav>div>ul>li{
    font-size: 17px;
    position: relative;
     color: white;
     cursor: pointer;
}
.boxnav>div>ul>li>div{
    position: absolute;
    border: solid 1px black;
    width: 200px;
    top: 46px;
     z-index: 100;
     background: black;
}
.boxnav>div>ul>li>div>ul:nth-child(1){
    display:flex;
    width: 200px;
    flex-wrap: wrap;
    padding:0 ;
    z-index: 100;
}
.boxnav>div>ul>li>div>ul:nth-child(2){
width: 500px;
border: solid 1px black;
position: absolute;
left: 199px;
display: flex;
flex-wrap: wrap;
padding: 0;
background: black;
z-index: 100;
}
.boxnav>div>ul>li>div>ul:nth-child(2)>li{
    width:100%;
    height:25px;
    line-height: 25px;
     margin: 0 10px;

}
.boxnav>div>ul>li>div>ul:nth-child(1)>li{
    font-size:16px;
    width: 200px;
    padding-left:10px;
    box-sizing:border-box;
    height: 25px;
    line-height: 25px;
    overflow: hidden;

}
.company{
    width:1200px;
    margin:0 auto;
}
.company>p:nth-child(1){
 font-size: 20px;
 font-weight: bold;
}
.hotbox{
    margin-bottom:20px;
    background-color:#f7f7f7;
}
.hotbox>p{
    width:100%;
    height: 200px;
    color: #fff;
    font-size:50px;
    line-height: 200px;
    text-align: center;
    background:url('../assets/shop/21.png') no-repeat;
    background-size: 100%;
}
.list{
    width:1200px;
    margin:0 auto;
    overflow:hidden;
}
.list>li{
    float:left;
    width:290px;
    background-color:#fff;
    margin-left:10px;
}
.list>li>img{
    width:80%;
    margin-left:10%;
    height:263px;
}
.grid-txt{
    width:100%;
    background-color:#eee;
}
.grid-txt >p{
    height:30px;
    line-height:30px;
    font-size:16px;
    color:#282828;
    width:80%;
    overflow: hidden;
white-space: nowrap;
text-overflow: ellipsis;
margin-left:5%;
    margin-bottom:0px;
}
.grid-txt >p:nth-child(2){
    color:#e45944;
}
.checkgd{
  width:192px;
  margin:0 auto;
    margin-top:20px;
    cursor: pointer;
}
.shop1{
    width:1200px;
    margin:20px auto;
    background:url("../assets/shop/矩形2.png") no-repeat;
    background-size: 100%;
    overflow: hidden;
    
}
.shop1>img{
    height:543px;
    width:603px;
    float: left;
}
.shop1>div{
    float:left;
    width:580px;
}
.shop1>div>p{
    color:#fff;
    font-size:20px;
    margin-top:100px;
    margin-left:20px;
    height:100px;


}
.shop1>div>div{
    overflow:hidden;
}
.shop1>div>div>p{
    float: left;
    width:130px;
    height:130px;
    border-radius: 50%;
    overflow:hidden;
    margin-left: 47px;
}
.shop1>div>div>p>img{
	width:130px;
}
.imgboos{
    width:1200px;
    margin:20px auto;
overflow:hidden;

}
.imgboos>img{
    border:1px solid #e45944;
    float:left;
    width:430px;
}
.imgboos>div:nth-child(2){
    float: left;
    position: relative;
    height:421px;
}
.imgboos>div:nth-child(2)>img:nth-child(2){
    position: absolute;
    bottom:0px;
    left:-48px;

}
.imgboos>div:nth-child(3){
    float: right;
}
.imgboos>div:nth-child(3)>img{
    margin-bottom:20px;
}
.imgboos>div>img{
    display: block;
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