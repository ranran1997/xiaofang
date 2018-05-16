<template>
	<!-- 头部导航 -->
	<div class="module">
			<div style="width:100%;background-color: #f5f5f5;">
			<div class="top">
				<div class="nav-left"><img src="../assets/web1/首页-F.png" />
				<span class="top_1">&ensp;欢迎来到消防技术装备协议采购平台!&ensp;</span>
					<router-link to="/login" v-if="showlogin" >请登录</router-link>
					<span v-if="!showlogin">
						<span >{{msgInfo}}</span>
						<span @click="loginOut" style="cursor:pointer;">退出</span>
					</span>
				</div>
				<div class="nav-right">
				          <a  @click="loding2" style="cursor:pointer;">用户中心</a>
					<a href="/">服务与培训</a>
					<a href="#/register" >商家入驻</a>
					<a href="#/help">帮助中心</a>
					
				</div>
			</div>
			</div>
		<!--    导航栏结束 -->
		<div class="searnav">
			<div class="logo1">
			<router-link to="/"><img src="../assets/web1/logo.png"></router-link>
			</div>
			<div class="searchBtn">
				<input v-model="keyname" type="text" style="" class="form-control">
				<button @click="search" class="btn btn-sm">搜索</button>
			</div>
		</div>
		<div class="navcontent">
		<div class="nav-top" >
				<p >所有商品</p>
				<p class="nav"><router-link to="/">首页</router-link></p>
				<p class="nav" @click="loding">协议采购</p>
		</div>
		</div>
		<!-- 显示导航 -->
		<div class="shownav">
			<p class="content-text" >全部分类 >
			<span @click="gobark2" class="acticge__"> {{catName}}</span>
			<span @click="gobark" v-if="catName2!=''">><span class="acticge__">{{catName2}}</span></span>
		          </p>
		</div>
		<div  class="goods">
			<div class="caigou" >
			<div class="box-left" @click="pinpai">所属类目 &nbsp;</div>
			<div class="box-right">
				<!-- <button v-for="(item,index) in list1" @click="getProdu1(index)" :class="{Red:isRed}">{{item.catName}}</button> -->
				<span v-for="(item,index) in list1" @click="getProdu1(isRed=index,item)" :class="{Red:isRed==index}"  :key="index">{{item.catName}}</span>
			</div>
			<div class="gd"  @click="multiType">
				<span>更多</span>
				<i class="iconfont icon-xiangxia"></i>
			</div>
			<div>
				
			</div>
			<div class="brandMask" v-if="showType">
				<span v-for="(item,index) in list2" @click="getProdu(isR=index)" :class="{Red:isR==index}" :key="index">{{item.catName}}</span>
			</div>
		</div>
		<div class="caigou">
			<div class="box-left">品牌 &nbsp;</div>
			<div class="box-right">
				<span v-for="(item,index) in brandList1" @click="getChange1(BB1=index)" :class="{Red:BB1==index}" :key="index">{{item.brandName}}</span>
			</div>
			<div class="gd" @click="multiSelect">
				<span >更多</span>
				<i class="iconfont icon-xiangxia"></i>
			</div>
			<!-- <div class="gd" >
				<span >收起</span>
				<i class="iconfont icon-up"></i>
			</div> -->
			<div class="brMask" v-if="showMask">
				<span  v-for="(item,index) in brandList2" @click="getChange(BB2=index)" :class="{Red:BB2==index}" :key="index">{{item.brandName}}</span>
			</div>
		</div>
		
		<div class="caigou" style="border:none">
			<div class="box-left" >国产/进口</div>
			<div class="box-right" >
				<span>国产</span>
				<span>进口</span>
			</div>
		</div>
			
		</div>
		<!-- 综合排序 -->
		<div class="shengxu">
		<div class="brand-price">
		<p class="brand-p"><img src="../assets/web1/综合排序.png" height="26" width="76" alt=""></p>
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
			<input type="text" name="" class="price-input" v-model="price[0]" placeholder="最低价"> -
			<input type="text" name="" class="price-input" v-model="price[1]" placeholder="最高价">
			<img src="../assets/web1/确定.png" height="26" width="48" class="price-img"  @click="searchPrice">
			<img src="../assets/web1/清空.png" height="26" width="48" alt="" @click="clearPrice" class="price-img1">
		</div>
	
	</div>
			
		</div>
		
		<!-- 大盒子 -->
		<div class="box">
			<!--  购物列表 -->
			<div class="sort-list" >
				<div class="content">
					<div class="sort-top">
						<div class="sortList">
							<span v-if="this.msg==0">暂无数据......</span>
							<ul class="sortList-ul" style="">
								<li class="sortList-ul-li" v-for="(item,index) in name" @click="changDetail(item.productID)" :key="index">
									<img :src="item.titleImage" height="200" width="200">
									<p class="brand-grid-ul-p" style="width:100%;"><i class="fa fa-cny"></i>&nbsp;{{item.price}}</p>
									<div class="grid-txt">
										{{item.name}}
									</div>
								</li>
							</ul>
							  <!-- <v-pagination :total="total" :current-page='current' @pagechange="pagechange"></v-pagination> -->

							<div class="page">
								<div class="fenye">
									<div>
										<span class="ziti" v-html="'共有'+Sum+'页'" style="margin-left:-60px; width: 105px;"></span>
									</div>
									<div class="anniu" v-show='dqy>1' @click="prin">上一页</div>
									<ul class="fenylan">
										<li @click="dangqian(index+1)" v-for="(val,index) in zongy" :key="index" :class="{yebiaod:index==dqy-1,}" v-show="index==dqy-2||index==dqy-1||index==dqy" class="yebiao">{{val+1}}</li>
									</ul>
									<div @click="next" class="anniu">下一页&nbsp;</div>
									<span style="font-size:16px;line-height:29px;  width: 45px;display: inline-block;"> &nbsp;到第&nbsp;</span>
									<input type="text" v-model="msgs" class="shuruk" />
									<span style="font-size:16px;line-height:29px;">&nbsp;页&nbsp;</span>
									<div @click="bolck" class="anniu" style="width:80px;">确定</div>
								</div>
								<!--分页结束-->
								<transition name='bounce'>
									<div class="aaaa" v-show="com">
										{{msgname}}
									</div>
								</transition>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!--  主要内容结束 -->
		<!-- 搜索框结束 -->
		<!--大盒子结束 -->
	</div>

</template>
<script>
	import 'bootstrap/dist/css/bootstrap.css'
	import store from '../store.js'
	import pagination from '../components/common/pagation'
	export default {
		name: 'module',
		props: ['sss'],
		     components: {
                 'v-pagination': pagination,
      },
		data: function() {
			return {
				  total: 1,     // 记录总条数
			display: 12,   // 每页显示条数
			current: 1,  
				showmore:true,
				BB2: -1,
				BB1: -1,
				isR: -1,
				isRed: -1,
				price: [],
				status: '',
				keyname: '',
				showlogin: false,
				msgInfo: "",
				list: [],
				list1: [],
				flag:false,
				list2: [],
				brandList2: [],
				brandList1: [],
				ind: '',
				catName: '',
				catName2: '',
				pro: [{}, {}, {}, {}, {}],
				catID: '',
				brandID: '',
				productList: [],
				catList: [],
				showType: false,
				shopName: '',
				sellerID: '',
				listImg: require('../assets/hello/矩形-36-拷贝-5_49.png'),
				upImg: require('../assets/hello/形状-10-拷贝-2.png'),
				downImg: require('../assets/hello/形状-10-拷贝.png'),
				isActive: false,
				isAc: false,
				brandList: [],
				showMask: false,
				data: [],
				name: [],
				msg: 0, //数量总数
				datasize: 15, //每页显示数据量(-1)
				dqy: 1, //页数
				msgs: 0,
				msgname: '',
				com: false,
				zongy: [],
				routeID:"",
				Sum: 0,
				 host:"http://"+window.location.host
			
			}
		},
		created: function() {
		
			this.getData();
			this.getCatList();
			this.getWork()
			$(function() {
				$(".lanrenzhijia_service").hover(function() {
					$(this).stop().animate({
						width: '160px'
					});
				}, function() {
					$(this).stop().animate({
						width: '40px'
					});
				});
			});
		},
		methods: {
			    pagechange:function(currentPage){
			   this.current=currentPage
			   this.getData();
           
			},
			 loginOut(){
      var that = this;
				var cookies = document.cookie.split(';')
				for(var i = 0; i < cookies.length; i++) {
					var cookieName = cookies[i].split('=')[0];
					document.cookie = cookieName + "=deleted; expires=" + new Date(0).toUTCString();
				}
				this.$http.post(store.state.config.apiUrlRoot + "admin/user/logout").then(
					function(response) {
						var data = response.body;
						if(data.code != -1000) {
							// that.$refs.t1.msgname = data.msg
              // that.$refs.t1.locatio()
             that.$message({
              message: data.msg,
              type: "success"
            });
							setTimeout(() => {
								this.$router.push({path:'login'})
							}, 500)
							return;
						}
						// that.$refs.t1.msgname = data.msg
						// that.$refs.t1.locatio()
						setTimeout(() => {
              this.$router.push({path:'login'})
							// window.location.href = 'http://www.xfxycg.com/#/login'
						}, 500)
					},
					function(erro) {

					}
				);

    },
			pinpai(){
				this.flag=true;

			},
			goback() {
				window.history.go(-1)
				setTimeout(function() {
					location.reload();
				}, 100)

			},
			clearPrice(){
				this.price=[];

			},
			searchPrice() {
				// if(this.price1){}
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
					price: arr3,
					status: this.status,
					catID: this.catID,
					brandID: this.brandID
				}).then(function(response) {
						var data = response.body;
						if(data.code = 1) {
							this.data = data.content.productList;
							this.name = data.content.productList;
							this.msg = this.name.length;
							this.Sum=this.name.length;
								this.msg = this.data.length;
							this.name = this.data.slice(0, this.datasize);
							this.zongy = [];
							
							for(var n = 0; n < Math.ceil(this.data.length / this.datasize); n++) {
								this.zongy.push(n)
							}
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
							this.brandList = data.content.brandList;
							this.data = data.content.productList;
							this.msg = this.data.length;
							this.name = this.data.slice(0, this.datasize);
							this.Sum = this.data.length;
							this.zongy = []
							
							for(var n = 0; n < Math.ceil(this.data.length / this.datasize); n++) {
								this.zongy.push(n)
							}
						}

					})
				}
				this.showNav=true;
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
			dangqian(index) {
				this.dqy = index
				this.name = this.data.slice(this.dqy * this.datasize - this.datasize, this.dqy * this.datasize)
			},
			bolck() {
				this.dqy = this.msgs
				if(this.dqy * this.datasize > this.data.length || this.dqy.search(/^[0-9]/g) == -1) {
					this.msgname = "超出范围,或者输入不正确 ,请重新输入!"
					this.com = true
					setTimeout(() => {
						this.com = false
					}, 1300)
					this.msgs = 0
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
					} else {
						this.name = this.data.slice(this.dqy * this.datasize - this.datasize, this.dqy * this.datasize)
					}
			},
			next() {
				this.dqy++
					if(this.dqy * this.datasize > this.data.length) {
						this.msgname = "已经是最后一页了"
						this.com = true
						setTimeout(() => {
							this.com = false
						}, 1200)
						this.dqy = Math.ceil(this.data.length / this.datasize)
						var sum = this.data.length % this.datasize
						this.name = this.data.slice(this.data.length - sum, this.data.length)
						if(this.dqy <= 0) {
							this.dqy = 1
						}
					} else {
						this.name = this.data.slice(this.dqy * this.datasize - this.datasize, this.dqy * this.datasize)
					}
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
			getChange(index) {
				this.brandID = this.brandList2[index].brandID;
				this.getData2();
			},
			getChange1(index) {
				this.brandID = this.brandList1[index].brandID;
				this.getData2();
			},
			getList(index) {
				this.BB1 = -1
				// this.catName = val.catName;
				// this.catID = val.catID;
				this.$router.push({
					path: 'sortAll',
					query: {
						catID:index+1
					}
				});
				this.getData2();

				this.isRed = -1;
				setTimeout(function(){
					location.reload();
				      
				},100)
				   this.ind = index;
				


			},

			
			gobark2() {
				this.cartID = this.$route.query.catID
				this.brandID = ''
				this.$router.push({
					path: 'sortAll',
					query: {
						catID: this.cartID,
					}
				})
				this.getData()
				this.BB1 = -1
				this.isRed=-1
				this.BB2 = -1
				this.ind=this.$route.query.catID-1
				this.catName2='';
				location.reload();

			},
			gobark() {
				this.cartID = this.$route.query.catID
				this.brandID = ''
				this.$router.push({
					path: 'sortAll',
					query: {
						catID: this.cartID,
						brandID: this.catID
					}
				})
				this.getData2()
				this.BB1 = -1
				this.BB2 = -1
			},

			getData2() {
				// this.$http.post(store.state.config.apiUrlRoot + "show/show/screeningProductByID",{catID:this.$route.query.catID,brandID:this.brandID}).
				this.$http.post(store.state.config.apiUrlRoot + "show/show/screeningProductByID", {
					catID: this.catID,
					brandID: this.brandID
				}).then(
					function(response) {
						var data = response.body;
						this.shopName = data.content.shopName;
						this.brandList = data.content.brandList;
						this.list = data.content.catList;
						this.productList = data.content.productList;
						this.brandList = data.content.brandList;
						this.data = data.content.productList;
						this.total=this.data.length;
						this.msg = this.data.length;
						this.name = this.data.slice(0, this.datasize);
						this.Sum = this.data.length;
						this.zongy = []
						for(var n = 0; n < Math.ceil(this.data.length / this.datasize); n++) {
							this.zongy.push(n)
						}
						if(this.list.length > 9) {
							this.list1 = this.list.slice(0, 9);
							this.list2 = this.list.slice(9, this.list.length);
						} else {
							this.list1 = this.list;
						}
						if(this.brandList.length > 9) {
							this.brandList1 = this.brandList.slice(0, 9);
							this.brandList2 = this.brandList.slice(9, this.brandList.length);
						} else {
							this.brandList1 = this.brandList;
							this.brandList2 = [];
						}
					},
					function(erro) {
						console.log(erro);
					}
				);
			},
			getData() {
				// this.$http.post(store.state.config.apiUrlRoot + "show/show/screeningProductByID",{catID:this.$route.query.catID,brandID:this.brandID}).
				this.$http.post(store.state.config.apiUrlRoot + "show/show/screeningProductByID", {
					catID: this.$route.query.catID,
					brandID: this.brandID
				}).then((response) =>{
						var data = response.body;
						this.shopName = data.content.shopName;
						this.catName = data.content.mbx;
						this.brandList = data.content.brandList;
						// this.catList = data.content.catList;
						this.list = data.content.catList;
						this.productList = data.content.productList;
						this.brandList = data.content.brandList;
						this.data = data.content.productList;
							this.total=this.data.length;
						this.msg = this.data.length;
						this.name = this.data.slice(0, this.datasize);
						this.Sum = this.data.length;
						this.zongy = []
						for(var n = 0; n < Math.ceil(this.data.length / this.datasize); n++) {
							this.zongy.push(n)
						}
						if(this.list.length > 9) {
							this.list1 = this.list.slice(0, 9);
							this.list2 = this.list.slice(9, this.list.length);
						} else {
							this.list1 = this.list;
						}
						if(this.brandList.length > 9) {
							this.brandList1 = this.brandList.slice(0, 9);
							this.brandList2 = this.brandList.slice(9, this.brandList.length);
						} else {
							this.brandList1 = this.brandList;
							this.brandList2 = [];
						}
					},
					function(erro) {
						console.log(erro);
					}
				);
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
							} else if(data.content.data.roleID == 7) {
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
							// this.msgname = '请您先登录'
							// this.locatio()
						// 	setTimeout(() => {
							
						// }, 3000)
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
								window.location.href =this.host+ "/zhi/#/module";
							} else if(data.content.data.roleID == 2) {
								window.location.href =this.host+ "/supply";
							} else if(data.content.data.roleID == 1) {
								window.location.href =this.host+ "/admittance";
							} else if(data.content.data.roleID == 7) {
								window.location.href =this.host+ "/big";
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
			changDetail(id) {
				// window.open('http://www.xfxycg.com/#/detail/?wd=' + this.productList[index].productID);
				this.$router.push({
					path: 'detail',
					query: {
						productID: id
					}
				});
			},
			changeFan() {
				window.location.href = 'http://www.xfxycg.com';
			},
			changeShop() {
				this.$router.push({
					path: 'shop'
				});
			},
			getCatList() {
				this.$http.post(store.state.config.apiUrlRoot + "show/show/index", {
					catID: 0,
					brandID: this.brandID
				}).then(
					function(response) {
						var data = response.body;
						this.catList = data.content.catList;
					},
					function(erro) {
						console.log(erro);
					},
				);
			},
			getProdu(index) {
				this.brandID = "";
				this.catID = this.list2[index].catID;
				this.BB1 = -1;
				this.BB2 = -1;
				this.getData2();

			},
			getProdu1(index, val) {
				this.flag=true;
				this.brandID = "";
				this.catID = this.list1[index].catID;

				if(this.$route.query.catID){
					this.routeID=this.$route.query.catID


				}else{
					this.routeID=1
				}
				this.$router.push({
					path: 'sortAll',
					query: {
						catID:this.routeID,
						brandID: this.catID
					}
				});
				this.getData2();
				this.catName2 = val.catName
				this.BB1 = -1;
				this.BB2 = -1;
			},
			getProductList() {
				this.$http.post(store.state.config.apiUrlRoot + "show/show/screeningProductByID", {
					catID: this.catID,
					brandID: this.brandID
				}).then(
					function(response) {
						var data = response.body;
						this.productList = data.content.productList;
						this.brandList = data.content.brandList;
						this.data = data.content.productList;
						this.msg = this.data.length;
						this.name = this.data.slice(0, this.datasize);
						this.Sum = this.data.length;
						this.zongy = []
						for(var n = 0; n < Math.ceil(this.data.length / this.datasize); n++) {
							this.zongy.push(n)
						}
					},
					function(erro) {
						console.log(erro);
					},
				);
			},
			changeImg() {
				if(this.isAc == true) {
					this.isAc = false;
					this.downImg = require('../assets/hello/形状-10-拷贝.png');
				} else {
					this.isAc = true;
					this.isActive = false;
					this.downImg = require('../assets/hello/形状-10-拷贝_11.png');
					this.upImg = require('../assets/hello/形状-10-拷贝-2.png');
				}
				this.status = 2;
				this.searchPrice();
			},
			handleCart() {
				this.$router.push({
					path: 'cart'
				});
			},
			changeRed() {
				if(this.isActive == true) {
					this.isActive = false;
					this.upImg = require('../assets/hello/形状-10-拷贝-2.png');
				} else {
					this.isActive = true;
					this.isAc = false;
					this.upImg = require('../assets/hello/形状-10.png');
					this.downImg = require('../assets/hello/形状-10-拷贝.png');
				}
				this.status = 1;
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
				
				this.catList = this.sss.arr.catList
				this.list=this.catList
				 this.brandList= this.sss.arr.brand

				if(this.list.length > 9) {
							this.list1 = this.list.slice(0, 9);
							this.list2 = this.list.slice(9, this.list.length);
						} else {
							this.list1 = this.list;
						}
						if(this.brandList.length > 9) {
							this.brandList1 = this.brandList.slice(0, 9);
							this.brandList2 = this.brandList.slice(9, this.brandList.length);
						} else {
							this.brandList1 = this.brandList;
							this.brandList2 = [];
						}
						this.brandList = this.sss.arr.brand;
						this.productList = this.sss.arr.productList;
						this.data = this.sss.arr.productList;
						this.name= this.sss.arr.productList;
						this.Sum= this.name.length;
						this.msg = this.name.length;
						this.zongy = []
						for(var n = 0; n < Math.ceil(this.data.length / this.datasize); n++) {
							this.zongy.push(n)
						}

			},
		}
	}
</script>
<style scoped lang="less">

/*导航*/
.top {
	overflow:hidden;
	height: 40px;
	margin: 0 auto;
	width:1200px;
	line-height:40px;
	&>.nav-right{
	float: right;
	}
	&>.nav-left{
		float: left;
		
	.top_1 {
		color: #000;
	}
	}
	a {
	color: #000;
	margin-right: 20px;
	text-decoration: none;
	}
}

// 搜索

.searnav{
	width:1200px;
	margin:30px auto;
	height:80px;
	overflow:hidden;
	&>.logo1{
	float: left
		}

.searchBtn{
	float: right;
	margin-left: 70px;
	 margin-top: 12px;
	 overflow:hidden;
	 &>input{
	width:420px;
	height: 38px;
	border: solid 1px #e45944;
	border-bottom-right-radius: 0;
	border-top-right-radius: 0;
	float: left;
}
&>button{
	float: left;
	 height:38px;
	  position: initial;
	  border-bottom-left-radius: 0;
	  border-top-left-radius: 0;
	  color: white;
	  font-size: 14px;
	background-color: #e45944;
}
}
	}

	// 首页导航


.navcontent{
	border-bottom:1px solid  #e45944;
	&>.nav-top{
	width:1200px;
	margin:0 auto;
	overflow:hidden;
	height:40px;
	&>p:nth-child(1){
	float:left;
	width:210px;
	height:40px;
	line-height:40px;
	padding-left:20px;
	font-size:23px;
	background-color:#e45944;
	color:#fff;
}
	.nav{
	float:left;
	height:40px;
	line-height:40px;
	padding:0px 30px;
	cursor: pointer;
	font-size: 16px;
	&>a{
	color:#333333;
	}
	&>a:hover{
	color:#e45944;
}
}
}
	
}
.nav:hover{
	color:#e45944;
}


/*显示导航*/
.shownav{
	width:1200px;
	margin:0 auto;
}
/*商品类目*/
.goods{
	width:1200px;
	border:1px solid #eee;
	margin:0 auto;
	height:144px;
		.caigou {
		width: 100%;
		height: 48px;
		border: 1px solid #eee;
		margin-top: -1px;
		position:relative;
		.box-left {
		width: 144px;
		height: 48px;
		border-right: 1px solid #eee;
		border-bottom: 1px solid #eee;
		font-size: 14px;
		color: #333333;
		background-color: #f7f7f7;
		line-height: 48px;
		float: left;
		padding-left: 10px;
		cursor:pointer;
		margin-top:-1px;
		margin-left:-1px;
	}
	.box-right {
		width: 980px;
		height: 48px;
		float: left;
		line-height:48px;
		padding-left: 30px;
		position: relative;
		overflow: hidden;
		&>span{
		line-height:48px;
		cursor:pointer;
		margin-right:20px;
	}
	 button {
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

	}
	}
}


	
	


	
	

	.acticge__{
		cursor: pointer;
	}
	.acticge__:hover{
		color: red;
	}
	.gd {
		float: right;
		cursor: pointer;
		border:1px solid #eee;
		    width:56px;
		    margin: 8px 10px 8px 5px;
		    padding:3px 2px;
		 
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
	
	.active {
		color: #e45944;
	}
	
	.mov:hover {
		color: #e45944 !important;
	}
	
	.actinon {
		opacity: 0.5;
	}
	
	.actinond {
		transition: all 2s linear;
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

	
	.page {
		margin-top: 20px;
		height: 65px;
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
	

	
	
	
	.sortList-ul-li:hover{
		  box-shadow: 0 0 5px 5px #e6e6e6;
  /* transform: translate3d(0,-2px,0); */
  transform: translateY(-8px);

	}
	
	
	

	
	.search-price-btn-img {
		cursor: pointer;
	}
	
	.white {
		background: #ffffff;
	}
	


	
	
	
		.shengxu{
		width:1200px;
		margin:0 auto;
			.brand-price {
		width: 1200px;
		height: 46px;
		margin-bottom: 12px;
		line-height: 46px;
		padding-left: 20px;
		border: 1px solid #eee;
		margin-bottom: 12px;
		font-size: 14px;
		color: #333333;
		margin-top: 20px;
		background-color:#f7f7f7;
		.brand-p {
		height:35px;
		line-height: 35px;
		width:80px;
		text-align: center;
		float: left;
		
		margin-top:4px;
	}
	.xie {
		width: 78px;
		height: 100%;
		margin-left: 55px;
		text-align: center;
		float: left;
		cursor: pointer;
	}
		.search-price {
		position: relative;
		margin-left: 30px;
		width: 400px;
		float: left;
		.price-input {
		width: 55px;
		height: 23px;
		padding-left: 2px;
	}
		
	.price-img {
		position: absolute;
		top: 10px;
		left: 200px;
		cursor:pointer;
	}
	.price-img1 {
		position: absolute;
		top: 10px;
		left: 270px;
		cursor:pointer;
	}
	}
	}
	}

	
	.brand-span {
		margin-right: 25px;
	}
	
	.brMask {
		padding-right: 20px;
		position: absolute;
		width: 1056px;
		background: #ffffff;
		left:142px;
		top: 46px;
		border: 1px solid #bdbdbd;
		border-top: 0px solid #bdbdbd;
		z-index: 200;
		max-height: 88px;
		overflow-x: hidden;
		overflow-y: scroll;
		padding-left: 30px;
		&>span{
			line-height:40px;
			cursor:pointer;
			margin-right:20px;
		}
		
	}
	
	.brandMask {
		padding-right: 20px;
		position: absolute;
		width: 1056px;
		background: #ffffff;
		left:142px;
		top: 46px;
		border: 1px solid #bdbdbd;
		border-top: 0px solid #bdbdbd;
		z-index: 200;
		max-height: 88px;
		overflow-x: hidden;
		overflow-y: scroll;
		padding-left:30px;
	}

	.brandImg {
		position: absolute;
		top: 12px;
		right: 15px;
		cursor: pointer;
	}
	

	
	
	.content-text {
		height: 35px;
		line-height: 35px;
		color: #333333;
		font-size: 14px;
		margin-left:20px;
	}
	
	.sort-list {
		width: 100%;
		overflow: hidden;
		padding-bottom: 100px;
		background-color: #f7f7f7;
		padding-top:8px;
		.content {
		width: 1200px;
		margin: 0 auto;
		.sort-top {
		width: 100%;
		margin-bottom: 15px;
			.sortList {
		width: 100%;
		margin-top: 22px;
		&>span{
			line-height:40px;
			padding-left:0px;
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
		.sortList-ul-li {
		width: 224px;
		height: 308px;
		/* border:1px solid #bdbdbd; */
		background: #ffffff;
		margin-right: 14px;
		padding-left: 10px;
		padding-top: 10px;
		padding-right: 10px;
		cursor: pointer;
		margin-bottom: 20px;
		   transition: all .2s linear;

		   .brand-grid-ul-p {
		font-weight: bolder;
		font-size: 18px;
		color: #e45944;
		margin-top: 10px;
		width: 100px;
		float: left;
	}
	}
	}
	}
	}
	}
	}
	/*公共样式*/
	
	ul,
	li {
		list-style: none;
	}
	
	.red {
		color: #e45944;
	}
	
	a {
		text-decoration: none;
	}
	
	.module {
		width:100%;
	}
	
	

	


	

	


</style>