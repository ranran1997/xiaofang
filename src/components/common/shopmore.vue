<template>
	<!-- 头部导航 -->
	<div class="module">
		<!--  头部导航栏结束 -->
		<div style="width:100%;height:40px;line-height:40px;background-color:#f5f5f5;border-bottom:1px solid #dbdbdb;">
		<div style="width:1200px;height:40px;line-height:40px;margin:0 auto;overflow:hidden;">
			<div style="float:left;">
			
				<img src="../../assets/web1/首页-F.png" />
				<span class="top_1">&ensp;欢迎来到消防技术装备协议采购平台!&ensp;</span>
				<router-link to="/login" v-if="showlogin" style="color:#333">请登录</router-link>
				<span style="color:#333;" v-if="!showlogin">{{msgInfo}}</span>
			</div>
			<div style="float:right;">
				<router-link to="/" class="a_href">服务与培训</router-link >
				<a href=" " class="a_href">首页</a>
				<router-link to="/register" class="a_href">商家入驻</router-link>
				<router-link to="/help" class="a_href">帮助中心</router-link>
			</div>
		</div>
		</div>
		
		<!--    导航栏结束 -->
		<div style="width:100%;padding:30px;">
		<div style="width:1200px;margin:0 auto;overflow:hidden;">
			<div style="float:left;">
				<router-link to="/"><img src="../../assets/web1/logo.png"></router-link>
			</div>
			<div style="float:right;overflow:hidden;margin-top: 10px;">
				<input type="text" class="form-control" v-model="searchName">
				<button class="btn btn-sm" @click="searchCheck">搜索</button>
			</div>
		
		
			</div>
		</div>
			
			<!-- 店铺信息 -->
			<div class="logonav">
			<div>
					<img :src="shopSynopsis.logo" alt="" >
					<div>
						<p>{{shopSynopsis.sellerName}}</p>
						<p><span>描述{{shopSynopsis.similarity}}</span>
						<span>服务:{{shopSynopsis.attitude}}</span>
						<span>物流:{{shopSynopsis.logistics}}</span>
						<span>好评率:{{shopSynopsis.praise_rate}}</span></p>
					</div>
					<!-- <p><img src="../../assets/shop/查看更多.png" alt="" @click="companyPro"></p> -->

			</div>
			


		</div>
		<div class="boxnav">
				<div>
				<ul >
					<li >所有分类</li>
					<li v-for="(item,index) in navList" class="active_2" @click="handleGet(index,item.cat_id)" :key="index" style="font-size: 17px;cursor:pointer;line-height: 50px;color: white;">{{item.cat_name}}</li>
				</ul>
				</div>
			</div>
		<!-- 大盒子 -->
		<div class="box">
	
			
			<div class="sort-list" style="padding-top:30px;">
					<!-- <p>全部分类</p> -->
				<div class="content">
					<!-- <p class="content-text">准入商店铺信息</p> -->
					<div class="sort-top">
						
						<div class="caigou" style="border-bottom:1px solid #bdbdbd;position:relative;">
							<div class="box-left">商品分类</div>
							<div class="brandMask" v-if="showType">
								<span v-for="(item,index) in catList2" :key="index" @click="handleGet(index,item.cat_id)" :class="{ft:RR==index}">{{item.cat_name}}</span>
							</div>
							<div class="box-right" style="overflow:hidden;">
								<!--  <button class="brand-button"  v-for="(item,index) in catList1"  @click="handleGet1(index)" >{{item.catName}}</button> -->
								<span v-for="(item,index) in catList1" :key="index" @click="handleGet1(index,item.cat_id)" :class="{ft:ss==index}">{{item.cat_name}}</span>
							</div>
							<span class="gd" style="float:right;" @click="multiType">更多</span>
						</div>
						<div class="caigou" style="position:relative;">
							<div class="box-left">品牌</div>
							<div class="brandMask" v-if="showMask">
								<span v-for="(item,index) in brandList2" :key="index" @click="getChange(BB2=index,item.brand_id)"  :class="{ft:BB2==index}">{{item.name}}</span>
							</div>
							<div class="box-right" style="overflow:hidden;">
								<span v-for="(item,index) in brandList1" :key="index"  @click="getChange1(TT=index,item.brand_id)" :class="{ft:TT==index}">{{item.name}}</span>
								<!--   <img src="../assets/hello/right-拷贝-2.png" height="20" width="20" class="brandImg" @click="multiSelect" > -->
							</div>
							<span class="gd" style="float:right;" @click="multiSelect">更多</span>
						</div>
						<div class="caigou" style="border-bottom:none;">
							<div class="box-left">进口/国产</div>
							<div class="box-right">
								<span @click="country(2)">进口</span>
								<span @click="country(1)">国产</span>
							</div>
						</div>
					</div>
					<div class="brand-price">
						<p class="brand-p"><img src="../../assets/web1/综合排序.png" alt=""></p>
						<div class="xie" style="margin-right:10px;" v-bind:class="{white:isActive}" @click="changeRed(1)">
							<span class="brand-price-span">价格高</span>
							<img :src="upImg" height="12" width="8">
						</div>
						<div class="xie" style="margin-left:0px;" v-bind:class="{white:isAc}" @click="changeImg(2)">
							<span class="brand-price-span">价格低</span>
							<img :src="downImg" height="12" width="8">
						</div>
						<div class="search-price">
							<span>价格</span>
							<input type="text" name="" class="price-input" v-model="price_start"> -
							<input type="text" name="" class="price-input" v-model="price_end">
							<img src="../../assets/web1/搜索.png" class="price-img" @click="searchPrice">
						</div>
						<div class="search-price-btn">
						</div>
					</div>
					<div class="sortList">
						<ul class="sortList-ul" >
							<span v-if="this.msg==0">暂无数据......</span>
							<li class="sortList-ul-li" v-for="(item,index) in name" :key="index" @click="changDetail(item.id)">
								<img :src="item.titleImage" height="212" width="212">
								<p class="brand-grid-ul-p"><i class="fa fa-cny"></i>&nbsp;{{item.price}}</p>
								<div class="grid-txt">
									{{item.name}}
								</div>
							</li>
						</ul>
							<v-pagination :total="total" :current-page='current' @pagechange="pagechange"></v-pagination>
					</div>
				</div>
			</div>
		
		</div>
		
		<Foot/>
		<!--  主要内容结束 -->
		<!-- 搜索框结束 -->
		<!--        大盒子结束 -->
	</div>

</template>
<script>
	import store from '../../store.js'
	import Foot from './footer.vue'
import pagination from './pagation'
	export default {
		name: 'shopmore',
		components:{
			Foot,
			      'v-pagination': pagination,

		},
		data: function() {
			return {
				searchName:'',
				zongy: [],
				TT: -1,
				BB2: -1,
				ss: -1,
				RR: -1,
				price: [],
				status: '',
				showlogin: true,
				msgInfo: '',
				pro: [{}, {}, {}, {}, {}],
				brandList1: [],
				brandList2: [],
				catID: '',
				brandID: '',
				productList: [],
				catList: [],
				catList1: [],
				catList2: [],
				showType: false,
				shopSynopsis:[],
				sellerID: '',
				a: ['服务与培训', '首页', '商家入驻', '帮助中心'],
				navList: [{ name: "服务与培训" }, { name: "用户中心" }, { name: "商家入驻" }, { name: "帮助中心" }, ],
				searchList: [{ name: "热门新品" }, { name: "|" }, { name: "灭火器" }, { name: "|" }, { name: "消防水枪" }, { name: "|" }, { name: "消防栓" }, { name: "|" }, { name: '消防疏散指示灯' }],
				listImg: require('../../assets/hello/矩形-36-拷贝-5_49.png'),
				upImg: require('../../assets/hello/形状-10-拷贝-2.png'),
				downImg: require('../../assets/hello/形状-10-拷贝.png'),
				isActive: false,
				isAc: false,
				brandList: [],
				showMask: false,
				data: [],
				name: [],
				host:"http://"+window.location.host,
				current:1,
				display:12,
				total:1,
				navList:[],
				countryname:1,
				price:0,
				price_start:"",
				price_end:"",
				msg:0
			}
		},
		created: function() {
		
			this.catID = this.$route.query.catID;
			this.sellerID = this.$route.query.sellerID;
				this.getData();
			this.getWork();
			this.getcompany();
			$(window).scrollTop(0);
		
		},
		methods: {
			  pagechange:function(currentPage){
               this.currentPage=currentPage
               this.getData();    
		},
			searchCheck(){
				this.getData();
			},
			backgo() {
				window.history.go(-1)
			},
			getcompany(){
					this.$http.post(store.state.config.apiUrlRoot + 'api/Shop/shopInfo',{
						sellerID:this.$route.query.sellerID
					}).then(
					function(response) {
						var data = response.data;
						if(data.code == 1) {
							this.shopSynopsis=data.content
							this.navList=data.content.catList;
						} else {
							this.showlogin = true;
						}
					},
				);

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
					},
				);
			},
		
			
			on(el) {
				if(el == "show") {
					this.a = false
					this.data = this.one
					this.name = this.data.slice(0, this.datasize)
					this.msg = this.data.length

				} else {
					this.a = true
					this.data = this.two
					this.name = this.data.slice(0, this.datasize)
					this.msg = this.data.length
				}
			},
			handleGet(index,A) {
				this.RR=index;
				this.catID = A;
				// this.brandID = "";
				this.TT = -1;
				this.BB = -1;
				this.getData();
			},
			handleGet1(index,b) {
				this.ss=index;
				this.catID = b;
				// this.brandID = "";
				this.getData();
				this.TT = -1;
				this.BB = -1;
			},
			getChange(index,b) {
				this.brandID = b;
				this.getData();
			},
			getChange1(index,b) {
				this.brandID =b;
			
				this.getData();
			},
			country(a){
				this.countryname=a;
				this.getData();

			},
			getData() {
				this.$http.post(store.state.config.apiUrlRoot + "api/Shop/productList", { 
					sellerID: this.$route.query.sellerID,
					search:this.searchName,
					cat_id:this.catID,
					brand_id:this.brandID,
					page:this.current,
					pagecount:this.display,
					country:this.countryname,
					price_start:this.price_start,
					price_end:this.price_end,
					price:this.price
				 }).then(
					function(response) {
						
						var data = response.data;
						if(data.code == 1) {
							this.total=data.content.total_num;
							this.brandList = data.content.brandList;
							if(this.brandList.length > 9) {
								this.brandList1 = this.brandList.slice(0, 9);
								this.brandList2 = this.brandList.slice(9, this.brandList.length);
							} else {
								this.brandList1 = this.brandList;
								this.brandList2 = [];
							}
							this.catList = data.content.catList;
							if(this.catList.length > 9) {
								this.catList1 = this.catList.slice(0, 9);
								this.catList2 = this.catList.slice(9, this.catList.length);
							} else {
								this.catList1 = this.catList;
								this.catList2 = [];
							}
							this.name = data.content.list;
							this.msg = this.name.length;
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
				this.$router.push({ path: 'detail', query: { productID: a } });
			},
		
			changeShop() {
				this.$router.push({ path: 'shop' });
			},
			getProductList() {
				this.$http.post(store.state.config.apiUrlRoot + "show/show/prepShop", { sellerID: this.$route.query.sellerID, catID: this.catID, brandID: this.brandID }).then(
					function(response) {
						var data = response.body;
						this.productList = data.content.productList;
						this.brandList = data.content.brandList;
						if(this.brandList.length > 9) {
							this.brandList1 = this.brandList.slice(0, 9);
							this.brandList2 = this.brandList.slice(9, this.brandList.length);
						} else {
							this.brandList1 = this.brandList;
							this.brandList2 = [];
						}
						// this.catList=data.content.catList;
						// if(this.catList.length>9){
						//   this.catList1=this.catList.slice(0,9);
						//   this.catList2=this.catList.slice(9,this.catList.length);
						// }
						// else{
						//      this.catList1=this.catList;
						//      this.catList2=[];
						// }
						this.data = data.content.productList;
						this.name = data.content.productList;
						this.msg = this.name.length;
					},
					function(erro) {
						console.log(erro);
					},
				);
			},
			changeImg(a) {
				this.price=a
				if(this.isAc == true) {
					this.isAc = false;
					this.downImg = require('../../assets/hello/形状-10-拷贝.png');
				} else {
					this.isAc = true;
					this.isActive = false;
					this.downImg = require('../../assets/hello/形状-10-拷贝_11.png');
				}
				this.status = 2;
				this.getData();
			},
			handleCart() {
				this.$router.push({ path: 'cart' });
			},
			changeRed(a) {
				this.price=a
				if(this.isActive == true) {
					this.isActive = false;
					this.upImg = require('../../assets/hello/形状-10-拷贝-2.png');

				} else {
					this.isActive = true;
					this.isAc = false;
					this.upImg = require('../../assets/hello/形状-10.png');
				}
				this.status = 1;
				this.getData();
			

			},
			searchPrice(){
				this.getData();

			},
			handleHover() {
				this.listImg = require('../../assets/hello/矩形-36-拷贝-5.png');
			},
			handleLeave() {
				this.listImg = require('../../assets/hello/矩形-36-拷贝-5_49.png');
			},
			multiSelect() {
				// if(this.showMask==false){
				//   this.showMask=true;
				// }else
				// {
				//   this.showMask=false;
				// }    
				this.showMask = !this.showMask;
			},
			multiType() {
				this.showType = !this.showType;
			},
		}
	}
</script>
<style scoped>
.btn-sm{
	float:left;
	background: #e45944; 
	height: 40px; 
	position: initial;
	border-bottom-left-radius: 0;
	border-top-left-radius: 0;
	color: white;font-size: 14px;
	

}
.form-control{
	float:left;
	width:420px;
	height: 40px;
	border: solid 1px #e45944;
	border-bottom-right-radius: 0;
	border-top-right-radius: 0;
}
.boxnav{
    width: 100%;
    height: 50px;
    background: #e45944;

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
.module{
	background-color: #f7f7f7;
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
	.ft {
		font-weight: bold;
		color: #e45944 !important;
	}
	
	.gd {
		font-size: 12px;
		float: left;
		padding-right: 10px;
		margin-top: 12px;
		cursor: pointer;
	}
	
	.top {
		width: 1920px;
		height: 36px;
		background-color: #333333;
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
	
	li {
		list-style: none;
	}
	
	.content {
		width: 1200px;
		margin: 0 auto;
		height: 100%;
	}
	
	.content-search {
		margin-top: 36px;
		clear: both;
		width: 100%;
		height: 173px;
	}
	
	.logoImg {
		width: 160px;
		margin-top: 45px;
		float: left;
	}
	
	.footer {
		width: 100%;
		height: 200px;
	}
	
	.footer-top {
		padding-top: 30px;
		width: 100%;
		height: 170px;
		background: #dbdbdb;
	}
	
	.footer-ul {
		/*border:1px solid red;*/
		float: left;
		width: 300px;
		margin-top: 0px;
	}
	
	.footer-ul p {
		color: #000;
		font-size: 16px;
		margin-bottom: 3px;
		text-align: center;
	}
	
	.footer-ul li {
		height: 22px;
		line-height: 22px;
		color: #333333;
		font-size: 16px;
		text-align: center;
	}
	
	.footer-bottom {
		width: 100%;
		height: 45px;
		line-height: 45px;
		background: #cccccc;
	}
	
	.footer-bottom span {
		color: #333333;
		font-size: 15px;
		font-weight: bolder;
		display: block;
		float: left;
		margin-right: 55px;
	}
	
	.brand-button {
		display: inline-block;
		height: 38px;
		font-size: 10px;
		padding: 5px;
		margin-left: 30px;
		border: none;
		background: #f1f1f1;
		cursor: pointer;
		margin-top: 2px;
	}
	
	.page {
		margin-top: 20px;
		width: 600px;
		height: 65px;
		padding-right: 60px;
		float: right;
		font-size: 14px;
	}
	
	.grid-txt {
		width: 100%;
		height: 50px;
		clear: both;
		line-height: 50px;
		font-size: 14px;
		color: #333333;
		font-weight: bolder;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	
	.brand-grid-span {
		font-size: 14px;
		color: #333333;
		float: right;
	}
	
	.brand-grid-ul-p {
		font-weight: bolder;
		font-size: 18px;
		color: #e45944;
		margin-top: 10px;
		width: 200px;
		float: left;
	}
	
	.sortList-ul-li {
		width: 232px;
		height: 308px;
		background: #ffffff;
		margin-right: 8px;
		padding-left: 10px;
		padding-top: 10px;
		padding-right: 10px;
		cursor: pointer;
		margin-bottom: 20px;
	}
	.sortList-ul>span{
		line-height:40px;
		padding-left:42px;
		font-weight:bold;
		color:#e45944;
		font-size:16px;

	}
	
	.sortList-ul {
		width: 100%;
		list-style: none;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		padding-left: 0px;
		max-height:1960px;
		overflow:hidden;
	}
	
	.sortList {
		width: 100%;
		margin-top: 22px;
	}
	
	.search-price-btn-img {
		cursor: pointer;
	}
	
	.white {
		background: #ffffff;
	}
	
	.search-price-btn {
		width: 158px;
		height: 44px;
		float: right;
	}
	
	.price-input {
		width: 55px;
		height: 23px;
	}
	
	.price-img {
		position: absolute;
		top: 10px;
		left: 200px;
		cursor:pointer;width:65px;
	}
	
	.search-price {
		position: relative;
		margin-left: 30px;
		width: 400px;
		float: left;
	}
	
	.xie {
		width: 78px;
		height: 100%;
		margin-left: 55px;
		text-align: center;
		float: left;
		cursor: pointer;
	}
	
	.brand-p {
		height: 40px;
		line-height: 44px;
		float: left;
		margin-top: 0px;
	}
	
	.brand-price {
		width: 1200px;
		height: 46px;
		margin-bottom: 12px;
		line-height: 46px;
		padding-left: 20px;
		border: 1px solid #bdbdbd;
		margin-bottom: 12px;
		font-size: 14px;
		color: #333333;
	}
	
	.brand-span {
		margin-right: 25px;
	}
	
	.brandMask {
		padding-left: 28px;
		padding-right: 20px;
		position: absolute;
		width: 1200px;
		background: #ffffff;
		left: 0px;
		top: 43px;
		border: 1px solid #bdbdbd;
		border-top: 0px solid #bdbdbd;
		z-index: 200;
		max-height: 88px;
		overflow-x: hidden;
		overflow-y: scroll;
	}
	.brandMask>span{
		background:#ffffff;
		line-height:40px;
		cursor:pointer;
		margin-right:20px;
		
	}
	
	.ms {
		vertical-align: middle;
		margin-left: 780px;
		margin-right: 20px;
	}
	
	.brandImg {
		position: absolute;
		top: 12px;
		right: 15px;
		cursor: pointer;
	}
	/*.box-right  span
{
  font-size: 12px;
  color:#333333;
  line-height: 42px;
  margin-right: 30px;
}*/
.box{
	background-color: #900816;
}
	
	.box-right {
		width: 1049px;
		height: 40px;
		  background: #ffffff;
		float: left;
		/*  padding-left: 30px;*/
		position: relative;
		padding-left: 48px;
	}
	.box-right>span{
		background:#ffffff;
		line-height:48px;
		margin-right:20px;
		cursor:pointer;

	}
	
	.caigou {
		width: 100%;
		height: 42px;
		border-bottom: 1px solid #bdbdbd;
	}
	
	.box-left {
		width: 100px;
		height: 42px;
		border-right: 1px solid #bdbdbd;
		border-bottom: 1px solid #bdbdbd;
		padding-left: 20px;
		font-size: 14px;
		color: #333333;
		background-color: #f7f7f7;
		line-height: 42px;
		float: left;
		padding-left:10px;
	}
	.box>p{
		width:1200px;
		margin:0 auto;
		line-height:30px;
	}
	
	.sort-top {
		width: 100%;
		height: 127px;
		margin-bottom: 15px;
		border: 1px solid #bdbdbd;
	}
	
	.content-text {
		height: 55px;
		line-height: 55px;
		color: #333333;
		font-size: 16px;
	}
	
	.sort-list {
		width: 1200px;
		margin:0 auto;
		background-color: #f1f1f1;
		/* height: 2200px; */
		/*  border-top:1px solid#fe4d3c;*/
	}
	/*公共样式*/
	
	ul, li {
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
		/* height: 2600px; */
	}
	
	.nav {
		position: absolute;
		width: 100%;
		height: 36px;
		background-color: #f2f2f2;
		top: 0px;
		left: 0px;
		line-height: 36px;
		font-family: "MicrosoftYaHei Bold";
		font-size: 12px;
		color: #808080;
	}
	
	.nav-img {
		margin-left: 360px;
		vertical-align: middle;
		margin-right: 5px;
	}
	
	.red {
		color: red;
	}
	
	.nav-ul {
		position: absolute;
		height: 36px;
		line-height: 36px;
		display: block;
		float: right;
		right: 360px;
		top: -10px;
	}
	
	.nav-ul-li {
		width: 65px;
		list-style: none;
		display: block;
		float: left;
		margin-left: 47px;
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
		claer: both;
	}
	
	.logo {
		margin-top: 60px;
		height: 60px;
		width: 321px;
		text-align: left;
		float: left;
		margin-left: 312px;
	}
	
	.search {
		float: left;
		margin-top: 50px;
		margin-left: 321px;
		position: relative;
	}
	
	.input-text {
		height: 32px;
		width: 416px;
		outline: none;
		border: 2px solid red;
	}
	
	.search img {
		position: absolute;
		left: 420px;
		top: 0px;
	}
	
	.search-ul {
		height: 20px;
		font-size: 12px;
		color: #808080;
		line-height: 20px;
	}
	
	.search-ul li {
		list-style: none;
		display: block;
		float: left;
		margin-right: 2px;
		/*  border:1px solid red;*/
	}
	
	.search-ul li:hover {
		color: red;
		cursor: pointer;
	}
	
	.cart {
		/* float: right;
  margin-top:50px;
  width: 130px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: #fffdfd;
  background: #fe4d3c;
  cursor: pointer;*/
		float: right;
		margin-top: 50px;
		cursor: pointer;
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
	
	.bottom-text {
		margin-left: 45px;
		width: 100px;
		float: left;
		color: red;
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