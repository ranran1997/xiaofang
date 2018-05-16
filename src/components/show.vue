<template>
	<!-- 头部导航 -->
	<div class="module">
	
		<!-- 大盒子 -->
		<div class="box">
			<!--  购物列表 -->
			<div class="sort-list" style="padding-top:8px;border-top:1px solid #e45944;">
				<div class="content">
					<p class="content-text" style="margin-left:20px;">全部分类 > {{catName}}</p>
					<div class="sort-top">
						<div class="caigou" style="position:relative;">
							<div class="box-left">所属类目 &nbsp;:</div>
							<div class="box-right">
								<!-- <button v-for="(item,index) in list1" @click="getProdu1(index)" :class="{Red:isRed}">{{item.catName}}</button> -->
								<span v-for="(item,index) in brandList1" :key="index" @click="getProdu1(index,item.catID)" :class="{Red:isRed==index}" style="line-height:40px;cursor:pointer;margin-right:20px;">{{item.catName}}</span>
							</div>
							<div class="gd">
								<span @click="multiType">更多</span>
							</div>
							<div class="brandMask" v-if="showType" style="padding-left:30px;">
								<span v-for="(item,index) in list2" @click="getProdu(isR=index)" :key="index" :class="{Red:isR==index}" style="line-height:40px;cursor:pointer;margin-right:20px;">{{item.catName}}</span>
							</div>
						</div>
						<div class="caigou" style="position:relative;">
							<div class="box-left">品牌 &nbsp;:</div>
								<div class="box-right">
									<span v-for="(item,index) in list1 " :key="index"  @click="getChange1(item.brandID,index)" :class="{Red:BB1==index}" style="line-height:40px;cursor:pointer;margin-right:20px;">{{item.brandName}}</span>
								</div>
							<div class="gd">
								<span @click="multiSelect">更多</span>
							</div>
							<div class="brMask" v-if="showMask">
								<span style="line-height:40px;cursor:pointer;margin-right:20px;" v-for="(item,index) in brandList2" :key="index"  @click="getChange(BB2=index)" :class="{Red:BB2==index}">{{item.brandName}}</span>
							</div>
						</div>
						<div class="caigou">
							<div class="box-left">国产/进口</div>
								<div class="box-right">
									<span  style="line-height:40px;cursor:pointer;margin-right:20px;">国产</span>
									<span  style="line-height:40px;cursor:pointer;margin-right:20px;">进口</span>
								</div>
						</div>
						<div class="brand-price">
							<p class="brand-p">排序 :{{ssmsg}}</p>
							<div class="xie" style="margin-right:10px;" v-bind:class="{white:isActive}" @click="changeRed">
								<span class="brand-price-span">价格高</span>
								<img :src="upImg" height="12" width="8">
							</div>
							<div class="xie" style="margin-left:0px;" v-bind:class="{white:isAc}" @click="changeImg">
								<span class="brand-price-span">价格低</span>
								<img :src="downImg" height="12" width="8">
							</div>
							<div class="search-price">
								<span>价格</span>
								<input type="text" name="" class="price-input" v-model="price[0]"> -
								<input type="text" name="" class="price-input" v-model="price[1]">
								<img src="../assets//web1/确定.png" class="price-img" style="cursor:pointer;" @click="searchPrice">
								          <img src="../assets/web1/清空.png" class="price-img" style="cursor:pointer;left:270px" @click="clearPrice">
							</div>
							<div class="search-price-btn">
							</div>
						</div>
						<!--  -->
						<div class="sortList">
							<span style="line-height:40px;padding-left:42px;font-weight:bold;color:#c8996b;font-size:16px;" v-if="this.msg==0">暂无数据......</span>
							<ul class="sortList-ul" style="max-height:1960px;overflow:hidden;">
								<li class="sortList-ul-li" v-for="(item,index) in name" :key="index" @click="changDetail(item.productID)">
									<img :src="item.titleImage" height="200" width="200">
									<p class="brand-grid-ul-p"><i class="fa fa-cny"></i>&nbsp;{{item.price}}</p>
									<div class="grid-txt">
										{{item.name}}
									</div>
								</li>
							</ul>
							<div class="page">
								<div style="margin-left: 35%;width:660px;"><span v-html="'共有'+msg+'页,当前第'+dqy+'页'"></span><button @click="prin" style=" width: 60px;   line-height: 30px; height: 30px;margin: 18px 8px;border:none;  background: white; text-align: center; ">上一页</button><button style=" width: 60px;   line-height: 30px; height: 30px;margin: 18px 8px;border:none;  background: white; text-align: center;" @click="next">下一页</button>到第<input v-model="msgs" style="width: 35px;" type="text" />页<button @click="bolck" style=" width: 60px;   line-height: 30px; height: 30px;margin: 18px 8px;border:none;  background: white; text-align: center; ">确定</button></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

	</div>

</template>
<script>
	import 'bootstrap/dist/css/bootstrap.css'
	import store from '../store.js'
	export default {
		name: 'module',
		props: ['sss'],
		data: function() {
			return {
				Catid:'',
				BB2: -1,
				BB1: -1,
				isR: -1,
				isRed: -1,
				price: [],
				status: '',
				keyname: '',
				showlogin: false,
				msgInfo: "",
				isRed: false,
				list: [],
				list1: [],
				list2: [],
				brandList2:[],
				brandList1: [],
				catName: '',
				pro: [{}, {}, {}, {}, {}],
				catID: '',
				brandID: '',
				catList: [],
				showType: false,
				shopName: '',
				listImg: require('../assets/hello/矩形-36-拷贝-5_49.png'),
				upImg: require('../assets/hello/形状-10-拷贝-2.png'),
				downImg: require('../assets/hello/形状-10-拷贝.png'),
				isActive: false,
				isAc: false,
				brandList: [],
				showMask: false,
				small:'',
				big:'',
				data: [],
				name: [],
				msg: 0, //数量总数
				datasize: 30, //每页显示数据量(-1)
				dqy: 1, //页数
				msgs: 0,
				ssmsg:'',
				msg2:[],
				msglist:[],
				showshang: -1,
				host:"http://"+window.location.host
			}
		},
		created: function() {
				this.$http.post(store.state.config.apiUrlRoot + 'show/show/index').then((data) => {
				var msg = data.body.content.catList
				this.shopList = data.body.content.hotProductList
				for(var m = 0; m < msg.length; m++) {
					this.msglist.push(msg[m].list)
					this.msg2.push(msg[m])
				}

			})
	
			this.getWork()

		},
		methods: {
			clearPrice(){
				this.price=[];

			},
			reload(){
			window.location.reload();
			},

			
				hadleSort(index){

				this.$router.push({ path: 'sortAll', query: { catID: this.msg2[index].catID }});
			},
				ass() {
				this.showshang = -1
			},
			add(index) {
				this.showshang = index
			},
			searchPrice() {
				var arr3 = []
				if(this.price.length > 0) {
					var arr = Number(this.price[0]);

					if((typeof this.price[1])=="undefined"){
						var arr1=111111111
					}else {
					 arr1 = Number(this.price[1]);
					}
					arr3 = [arr, arr1];
					if(this.price[1]==0){
						var arr1=1111111111
						arr3=[arr,arr1]
					}

				} else {
					arr3 = []
				}
				
				this.$http.post(store.state.config.apiUrlRoot + 'show/show/screeningPrice', {
					price:arr3,
					status:this.status,
					catID:this.Catid
				}).then(function(data) {
					console.log(arr3)
						if(data.code = 1) {
							this.data = data.body.content.productList;
							this.name = data.body.content.productList;
							this.msg = this.name.length;
						}
					},
					function(erro) {});
			},
			search() {
				if(this.keyname == '' || this.keyname == /^[0-9]*$/) {
					alert('请输入关键字')
				} else {
					this.$http.post(store.state.config.apiUrlRoot + 'show/show/search', {
						key: this.keyname
					}).then((data) => {
						if(data.body.code == -3) {
							alert(data.body.msg)
						} else {
							var data = data.body;
							this.catList = data.content.catList;
							this.list = this.catList[0].list;
							this.brandList = data.content.brand;
							this.productList = data.content.productList;
							this.data = data.content.productList;
							this.name = data.content.productList;
							this.msg = this.name.length;
						}

					})
				}
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
					}
				);
			},
			bolck() {
				this.dqy = this.msgs
				if(this.dqy * this.datasize > this.data.length || this.dqy.search(/^[0-9]*$/)) {
					alert("超出范围,或者输入不正确 ,请重新输入!")
					this.msgs = ""
					this.dqy = 1
				} else {
					this.dqy = this.msgs
					this.name = this.data.slice(this.dqy * this.datasize - this.datasize, this.dqy * this.datasize)
				}
			},
			prin() {
				this.dqy--
					if(this.dqy < 1) {
						this.dqy = 1
						this.name = this.data.slice(0, this.datasize)
						alert("当前已是第一页")
					} else {
						this.name = this.data.slice(this.dqy * this.datasize - this.datasize, this.dqy * this.datasize)
					}
			},
			next() {
				this.dqy++
					if(this.dqy * this.datasize > this.data.length) {
						this.dqy = Math.ceil(this.data.length / this.datasize)
						this.name = this.data.slice((this.dqy - 1) * this.datasize, this.data.length)
						alert("已经是最后一页")
					} else {
						this.name = this.data.slice(this.dqy * this.datasize - this.datasize, this.dqy * this.datasize)
					}
			},

			getChange(index) {
				alert(1)
				this.$http.post(store.state.config.apiUrlRoot + "show/show/screeningProductByID", {

				}).then((data) => {
					// console.log(data)
				})
			},
			getChange1(a, index) {
			
				this.BB1 = index
				this.$http.post(store.state.config.apiUrlRoot + "show/show/screeningProductByID", {
					catID:this.Catid,
					brandID: a
				}).then((data) => {
					// console.log(data)
					this.data=data.body.content.productList
					this.name=this.data
					this.msg = this.name.length;
				})

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
							} else  if(data.content.data.roleID == 7) {
								this.$router.push({ path: 'protocol'});
							} else if(data.content.data.roleID == 8) {
								this.$router.push({ path: 'protocol'});
							} else {
								this.$message({
									showClose: true,
									message: '抱歉,你没有这个权限',
									type: 'success'
								});
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
								window.location.href = this.host+"/zong/#/module";
							} else if(data.content.data.roleID == 4) {
								window.location.href = this.host+"/zhi/#/module";
							} else if(data.content.data.roleID == 2) {
								window.location.href =this.host+"/supply";
							} else if(data.content.data.roleID == 1) {
								window.location.href = this.host+"/admittance";
							} else if(data.content.data.roleID == 7) {
								window.location.href =this.host+"/big";
							} else if(data.content.data.roleID ==8) {
								window.location.href = this.host+"/middle";
							} else{
								window.location.href = this.host+"/qiancheng";
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

			changDetail(id) {
				this.$router.push({
					path: 'detail',
					query: {
						productID: id
					}
				});
			},

		
			getProdu(index) {
		

			},
			ad2(d) {
				this.$router.push({
					path: 'sortAll',
					query: {
						catID: d
					}
				});
			},
			getProdu1(index,catID) {
				this.BB1 = -1;
				this.Catid=catID
				this.isRed=index
				this.$http.post(store.state.config.apiUrlRoot + "show/show/screeningProductByID", {
					catID:catID
				}).then((data)=>{
					// console.log(data)
					this.data=data.body.content.productList
					this.name=data.body.content.productList
					this.msg=this.name.length
					this.list1=data.body.content.brandList
				})
				

			},
			
			changeImg() {
				if(this.isAc == true) {
					this.isAc = false;
					this.downImg = require('../assets/hello/形状-10-拷贝.png');
				} else {
					this.isAc = true;
					this.isActive = false;
					this.ssmsg='从低到高'
					this.downImg = require('../assets/hello/形状-10-拷贝_11.png');
					this.upImg = require('../assets/hello/形状-10-拷贝-2.png');
					
					
				}
				this.status = 1;
				this.searchPrice();
			},
			changeRed() {
				if(this.isActive == true) {
					this.isActive = false;
					this.upImg = require('../assets/hello/形状-10-拷贝-2.png');
//					this.upImg = require('../assets/hello/形状-10.png');
					
				} else {
					this.isActive = true;
					this.isAc = false;
					this.ssmsg='从高到低'
					this.downImg = require('../assets/hello/形状-10-拷贝.png');
					this.upImg = require('../assets/hello/形状-10.png');
				}
				this.status = 2;
				this.searchPrice();

			},
			handleHover() {
				this.listImg = require('../assets/hello/矩形-36-拷贝-5.png');
			},
			handleLeave() {
				this.listImg = require('../assets/hello/矩形-36-拷贝-5_49.png');
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
			loding3() {	
				console.log(this.sss.a)
				this.$http.post(store.state.config.apiUrlRoot + "show/show/search", {
					key:this.sss.a
				}).then((data)=>{
					// console.log(data)
					this.data=data.body.content.productList
					this.name=data.body.content.productList
					this.msg=this.name.length
					this.brandList1=data.body.content.catList
					this.list1=data.body.content.brand

				})

			},
		}
	}
</script>
<style scoped>
	.gd {
		float: right;
		height: 40px;
		line-height: 40px;
		padding-right: 10px;
		cursor: pointer;
	}
	
	.Red {
		color: #e45944;
		font-weight: bold;
	}
	
	.catBt {
		background: #ffffff;
		border: none;
		font-weight: bold;
		cursor: pointer;
	}
	
	.mov:hover {
		color: #D4B393 !important;
	}
	
	.actinon {
		opacity: 0.5;
	}
	
	.actinond {
		transition: all 2s linear;
	}
	
	.top {
		width: 1920px;
		height: 36px;
		background-color: #333333;
		margin: 0 auto;
		line-height: 45px;
	}
	
	.top_1 {
		color: #d1d1d1;
	}
	
	.a_href {
		color: #d1d1d1;
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
		background: #ffffff;
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
		color: red;
		margin-top: 10px;
		float: left;
	}
	
	.sortList-ul-li {
		width: 224px;
		height: 308px;
		border: 1px solid #bdbdbd;
		background: #ffffff;
		margin-right: 14px;
		padding-left: 10px;
		padding-top: 10px;
		padding-right: 10px;
		cursor: pointer;
		margin-bottom: 20px;
	}
	
	.sortList-ul {
		width: 100%;
		list-style: none;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		padding-left: 0px;
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
		padding-left: 2px;
	}
	
	.price-img {
		position: absolute;
		top: 10px;
		left: 200px;
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
		margin-top: 20px;
	}
	
	.brand-span {
		margin-right: 25px;
	}
	
	.brMask {
		padding-left: -20px;
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
	
	.brandMask {
		padding-left: -20px;
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
	
	.box-right button {
		margin-top: 5px;
		font-size: 12px;
		color: #333333;
		line-height: 30px;
		margin-right: 10px;
		cursor: pointer;
		height: 30px;
		background: #ffffff;
		border: none;
		vertical-align: middle;
	}
	
	.box-right {
		width: 1049px;
		height: 40px;
		float: left;
		padding-left: 30px;
		position: relative;
		overflow: hidden;
	}
	
	.caigou {
		width: 100%;
		height: 42px;
		border-bottom: 1px solid #bdbdbd;
	}
	
	.box-left {
		width: 100px;
		background-color: #f7f7f7;
		height: 42px;
		border-right: 1px solid #bdbdbd;
		border-bottom: 1px solid #bdbdbd;
		padding-left: 20px;
		font-size: 14px;
		color: #333333;
		line-height: 42px;
		float: left;
		text-align: center;
	}
	
	.sort-top {
		width: 100%;
		height:127px;
		margin-bottom: 15px;
		border:1px solid #bdbdbd;
	}
	
	.content-text {
		height: 35px;
		line-height: 35px;
		color: #333333;
		font-size: 14px;
	}
	
	.sort-list {
		width: 100%;
		overflow:hiddenmo;
		/*  border-top:1px solid#fe4d3c;*/
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
		overflow:hidden;
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
		width: 200px;
		height: 100%;
		background-color: red;
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