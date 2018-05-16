<template>
	<!-- 头部导航 -->
	<div class="module">
		<!--  头部导航栏结束 -->
		<div class="top" style="width:100%;border:1px solid #ffffff;height:40px;margin-bottom: 0px; display: flex;">
		<div style="width:1200px;margin:0 auto;">
			<div  style="float:left">
				<img src="../assets/web/right.png" style="cursor: pointer;" @click="backgo" />
				<img src="../assets/img/home.png" />
				<span class="top_1">&ensp;欢迎来到消防技术装备协议采购平台!&ensp;</span>
				<router-link to="/login" v-if="showlogin" style="color:#fff">请登录</router-link>
				<span style="color:#ffffff;" v-if="!showlogin">{{msgInfo}}</span>
			</div>
			<div style="float:right">
				<a href="/" class="a_href">服务与培训</a>
				<a href="/" class="a_href">首页</a>
				<router-link to="/register" class="a_href">商家入驻</router-link>
					<router-link to="/help" class="a_href">帮助中心</router-link>
			</div>
		</div>
		</div>
		<!--    导航栏结束 -->
		<div style="width: 100%;height: 85px;background: white;">
			<div style="width: 1200px;margin: 0 auto;display: flex;">
				<router-link to="/"><img src="../assets/web1/logo.png"/></router-link>
				<div style="width:250px;height: 46px;line-height: 15px;font-size: 17px;font-weight: bold;border-left: solid 1px #F0F0F0;margin-left: 5px;padding-left: 30px;margin-top: 10px;">
					{{shopName}}
					<p style="margin-top: 4px;">
				<a target="_blank" :href="qqUrl">
					<img width="25px" height="25px" style="cursor: pointer;" alt="点击这里给我发消息" title="点击这里给我发消息" src="../assets/web/1511322787(1).jpg" @click="qq" />
				</a>
					
				</p>
				</div>
				<div style="width:250px;height: 46px;line-height: 30px;font-size: 17px;font-weight: bold;border-left: solid 1px #F0F0F0;margin-left: 5px;padding-left: 5px;margin-top: 10px;display: flex;flex-direction:row;">
					<div class="text-center" style="width:18%;border-right: solid 1px #F0F0F0;line-height: 15px;">
						<p>描述</p>
						<p style="color: #FF0036;">{{similarity}}</p>
					</div>
					<div class="text-center" style="width:18%;border-right: solid 1px #F0F0F0;line-height: 15px;">
						<p>服务</p>
						<p style="color: #FF0036;">{{attitude}}</p>
					</div>
					<div class="text-center" style="width:18%;border-right: solid 1px #F0F0F0;line-height: 15px;">
						<p>物流</p>
						<p style="color: #FF0036;">{{logistics}}</p>
					</div>
					<div class="text-center" style="width:23%;border-right: solid 1px #F0F0F0;line-height: 15px;">
						<p>好评率</p>
						<p style="color: #FF0036;">{{praiseRate}}</p>
					</div>
				</div>
				<div style="width: 120px;"  @mousemove="showimg1" @mouseleave="falseimg" >
					<p style="color: #999999;">手机逛<span>&nabla;</span></p>
					<div v-show="imgshow" style="z-index: 110px;position: absolute;z-index: 100;">
						<img src="../assets/web/a.png" />
					</div>
				</div>
				<div style="display: flex;margin-top: 30px;">
					<input type="text" v-model="sname" class="form-control" placeholder="请输入商品名" style="width: 300px;height: 30px;border-radius:5px ;border: solid 1px #BDBDBD;" />
					<input type="button" class="btn btn-sm btn-primary" @click="searchname" value="搜索" style="height: 30px;border: solid 1px #BDBDBD;border-radius:5px ;" />
				</div>
			</div>
		</div>
		<!-- 大盒子 -->
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
			<div style="width: 100%;height: 50px;background: black;">
				<div style="width: 1200px;margin: 0 auto;height: 50px;">
				<ul style="height: 50px;display: flex;flex-direction: row;justify-content: space-around;line-height: 50px;z-index: 100;">
					<li style="font-size: 17px;position: relative; color: white;cursor: pointer;" @mousemove="alls=1" @mouseleave="alls=0">
							所有产品
							<div style="position: absolute;border: solid 1px black;width: 200px;top: 46px; z-index: 100;background: black;" v-show="alls==1">
								<ul style="display:flex;width: 200px;flex-wrap: wrap;padding:0 ;z-index: 100;">
									<li style="font-size:16px;width: 200px;padding-left:10px;box-sizing:border-box;height: 25px;line-height: 25px;overflow: hidden;" class="active_3" v-for="(item,index) in catList2" :key="index" @click="handleGet1(item.catID)" @mouseover="showtrue(index,item.catID)" @mouseleave="showfalse()">{{item.catName}}</li>
								</ul>
								<ul style="width: 500px;border: solid 1px black;position: absolute;left: 199px;display: flex;flex-wrap: wrap;padding: 0;background: black;z-index: 100;" :style="{top:adds+'px'}">
									<li style="width:100%;height:25px;line-height: 25px; margin: 0 10px;" v-for="(item,index) in brandList2" class="active_2" @click="getChange(item.brandID)" :key="index" v-show="alls==1">{{item.brandName}}</li>
								</ul>
							</div>

						</li>
						<li v-for="(item,index) in catList1" class="active_2" @click="handleGet1(item.catID)" style="font-size: 17px;cursor:pointer;line-height: 50px;color: white;" :key="index">{{item.catName}}</li>
					</ul>
				</div>
			</div>
			<!--  购物列表 -->
			<div>
			</div>
			<div class="sort-list" v-show="true">
				<div style="width: 100%;" class="text-center">
					<div style="display: flex; justify-content: center;align-items: center;">
						<span>-------------------</span>
						<h3 style="font-weight: bold;margin: 10px 0;" class="text-primary">本店热销</h3>
						<span>-------------------</span>
					</div>
				</div>
				<!--轮播-->
				<div style="width: 100%;height: 320px;">
					<div style="width: 1200px;margin: 0 auto;height: 320px;position: relative;">
						<ul style="width: 1200px ;height: 320px;position: absolute;padding: 0;">
							<li v-show="showimg==1" style="position: absolute;">
							     <img width="1200px" height="320px" src="http://qc-product-image.oss-cn-hangzhou.aliyuncs.com/15215356591.jpg" />
							</li>
							<li v-show="showimg==2" style="position: absolute;">
							    <img width="1200px" height="320px" src="http://qc-product-image.oss-cn-hangzhou.aliyuncs.com/15215356832.jpg" />
							 </li>
							<li v-show="showimg==3" style="position: absolute;">
							     <img width="1200px" height="320px" src="http://qc-product-image.oss-cn-hangzhou.aliyuncs.com/15215357043.jpg" />
							  </li>
							<li v-show="showimg==4" style="position: absolute;">
							    <img width="1200px" height="320px" src="http://qc-product-image.oss-cn-hangzhou.aliyuncs.com/15215357194.jpg" />
							</li>
						</ul>
						<ul style="position: absolute;display: flex;right:30px;bottom: 0;" class="asdw">
							<li :class="{asdw2:showimg==1}" @click="showimg=1">1</li>
							<li :class="{asdw2:showimg==2}" @click="showimg=2">2</li>
							<li :class="{asdw2:showimg==3}" @click="showimg=3">3</li>
							<li :class="{asdw2:showimg==4}" @click="showimg=4">4</li>
						</ul>
					</div>
				</div>
				<!--排序-->
				<div style="width: 100%;">
					<div class="brand-price" style="width: 1200px;margin:0 auto ;">
						<p class="brand-p">排序 :</p>
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
							<input type="text" class="price-input" v-model="price[0]"> -
							<input type="text" class="price-input" v-model="price[1]">
							<button class="btn btn-sm" @click="searchPrice">搜索</button>
						</div>
						<div class="search-price-btn">
						</div>
					</div>
				</div>
				<!--品牌筛选-->
				<div style="width: 100%;height: 55px;margin-top: 3px;">
					<div style="margin: 0 auto ;width: 1200px;border: solid 1px #bdbdbd;">
						<ul style="display: flex;">
							<span>品牌筛选：</span>
							<li v-for="(val,index) in brandList2" :key="index" @click="getChange(val.brandID)" class="active_5" style="font-weight: bold;cursor: pointer;margin:  0 5px;">{{val.brandName}}</li>
						</ul>
					</div>
				</div>
				<!--展示-->
				<div style="width: 100%; padding-top: 5px;">
					<div class="sortList" style="margin: 0 auto;width: 1200px;padding-top: 5px;">
						<ul class="sortList-ul" style="max-height:1960px;overflow:hidden;padding-top: 5px;">
							<span style="line-height:40px;padding-left:42px;font-weight:bold;color:#e45944;font-size:16px;" v-if="this.msg==0">暂无数据......</span>
							<li class="sortList-ul-li active_4" v-for="(item,index) in name"  :key="index" @click="changDetail(index)">
								<img :src="item.titleImage" height="212" width="212">
								<p class="brand-grid-ul-p"><i class="fa fa-cny"></i>&nbsp;{{item.price}}</p>
								<div class="grid-txt">
									{{item.name}}
								</div>
							</li>
							<li v-if="name.length<=0" style="text-align: center;width: 100%;font-size: 17px;color: red;font-weight:bold;line-height:40px;">
								很抱歉！没有搜索到你需要的产品
							</li>
						</ul>
						<!--分页-->
						<div style="overflow:hidden;">
	<div class="fenye" v-show="name.length>0">
							<div>
								<span class="ziti" v-html="'共有'+msg+'条记录'"></span>
							</div>
							<div class="anniu" v-show='dqy>1' @click="prin">上一页</div>
							<ul class="fenylan">
								<li @click="dangqian(index+1)" v-for="(val,index) in zongy"  :key="index" :class="{yebiaod:index==dqy-1,}" v-show="index==dqy-2||index==dqy-1||index==dqy" class="yebiao">{{val+1}}</li>
							</ul>
							<div @click="next" class="anniu">下一页</div>
							<span class="ziti">到第</span>
							<input type="text" v-model="msgs" class="shuruk" />
							<span class="ziti">页</span>
							<div @click="bolck" class="anniu">确定</div>
						</div>
						</div>
					
						<!--分页结束-->

					</div>
				</div>
			</div>
		</div>
		<foot/>
		</div>
		<!--  主要内容结束 -->
		<!-- 搜索框结束 -->
		<!--大盒子结束 -->
</template>
<script>
	import 'bootstrap/dist/css/bootstrap.css'
	import store from '../store.js'
	import foot from '../components/common/footer.vue'
	export default {
		name: 'module',
		components:{
			foot
		},
		data: function() {
			return {
				sname: '',
				zongy: [],
				showimg: 1,
				adds: 1,
				alls: 0,
				imgshow: false,
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
				a: ['服务与培训', '首页', '商家入驻', '帮助中心'],
				navList: [{
					name: "服务与培训"
				}, {
					name: "用户中心"
				}, {
					name: "商家入驻"
				}, {
					name: "帮助中心"
				}, ],
				searchList: [{
					name: "热门新品"
				}, {
					name: "|"
				}, {
					name: "灭火器"
				}, {
					name: "|"
				}, {
					name: "消防水枪"
				}, {
					name: "|"
				}, {
					name: "消防栓"
				}, {
					name: "|"
				}, {
					name: '消防疏散指示灯'
				}],
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
				datasize: 30, //每页显示数据量(-1)
				dqy: 1, //页数
				msgs: 0,
				time: true,
				searchData: [],
				QQ:'',
				qqUrl:''
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
			setInterval(() => {
				this.showimg++
					if(this.showimg > 4) {
						this.showimg = 1
					}
			}, 1500)
		},
		 
		methods: {
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
			showfalse(index) {
				this.alls = 0
			},
			showtrue(a, b) {
				this.adds = a * 25
				this.alls = 1
				this.catID = b
				this.$http.post(store.state.config.apiUrlRoot + "show/show/prepShop", {
					sellerID: this.$route.query.sellerID,
					catID: this.catID,
				}).then((data) => {
					
					this.brandList2 = []
					this.brandList2 = data.body.content.brandList
				})

			},
			showimg1() {

				this.imgshow = true

			},
			falseimg() {
				this.imgshow = false
			},
			backgo() {
				window.history.go(-1)
			},
			pai() {
				this.$http.post(store.state.config.apiUrlRoot + 'show/show/screeningPrice', {
					price: [],
					status: this.status,
					sellerID: this.$route.query.sellerID,
					catID: this.catID,
					brandID: this.brandID
				}).then(function(response) {
						var data = response.body;
						if(data.code = 1) {
							this.data = data.content.productList;
							this.name = this.data.slice(0, this.datasize)
							this.zongy = []
							for(var n = 0; n < Math.ceil(this.data.length / this.datasize); n++) {
								this.zongy.push(n)
							}
						}
					},
					function(erro) {
						console.log(erro);
					});
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
					status:this.status,
					sellerID: this.$route.query.sellerID,
					catID: this.catID,
					brandID: this.brandID
				}).then(function(response) {
						var data = response.body;
						if(data.code = 1) {
							this.data = data.content.productList;
							this.name = this.data.slice(0, this.datasize)
							this.msg = this.name.length;
							this.zongy = []
							for(var n = 0; n < Math.ceil(this.data.length / this.datasize); n++) {
								this.zongy.push(n)
							}
						}
					},
					function(erro) {});
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
								window.location.href = "http://www.xfxycg.com/zong/#/module";
							} else if(data.content.data.roleID == 4) {
								window.location.href = "http://www.xfxycg.com/zhi/#/module";
							} else if(data.content.data.roleID == 2) {
								window.location.href = "http://www.xfxycg.com/supply";
							} else if(data.content.data.roleID == 1) {
								window.location.href = "http://www.xfxycg.com/admittance";
							} else {
								window.location.href = "http://www.xfxycg.com/qiancheng";
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
			bolck() {
				this.dqy = this.msgs
				if(this.dqy * this.datasize > this.data.length || this.dqy.search(/^[0-9]$/g) == -1) {
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
					
					} else {
						this.name = this.data.slice(this.dqy * this.datasize - this.datasize, this.dqy * this.datasize)
					}
			},
			next() {
				this.dqy++
					if(this.dqy * this.datasize - this.datasize > this.data.length) {
						this.dqy = Math.ceil(this.data.length / this.datasize)
						this.name = this.data.slice((this.dqy - 1) * this.datasize, this.data.length)
						if(this.dqy <= 0) {
							this.dqy = 1
						}
					} else {
						this.name = this.data.slice(this.dqy * this.datasize - this.datasize, this.dqy * this.datasize)
					}
			},

			handleGet1(index) {
				this.catID = index

				this.$http.post(store.state.config.apiUrlRoot + "show/show/prepShop", {
					sellerID: this.$route.query.sellerID,
					catID: this.catID,
				}).then((data) => {
					
					this.brandList2 = []
					this.brandList2 = data.body.content.brandList
				})
				this.searchPrice();
				this.alls = 0
			},
			getChange(index) {
				this.$http.post(store.state.config.apiUrlRoot + "show/show/prepShop", {
					sellerID: this.$route.query.sellerID,
					catID: this.catID,
					brandID: index
				}).then((data) => {
					this.data = data.body.content.productList
					this.name = this.data.slice(0, this.datasize)
					this.msg = this.data.length
					console.log(this.data)
					this.zongy = []
					for(var n = 0; n < Math.ceil(this.data.length / this.datasize); n++) {
						this.zongy.push(n)
					}
				})
				this.alls = 0
			},
			getData() {
				this.$http.post(store.state.config.apiUrlRoot + "show/show/prepShop", {
					sellerID: this.$route.query.sellerID
				}).then(
					function(response) {
						var data = response.body;
						console.log(data.content.qq)
						this.QQ=data.content.qq
				
						
						if(data.code == 1) {
							this.shopName = data.content.shopName;

							this.catList = data.content.catList;
								this.shopName = data.content.shopName;
							this.shopName = data.content.shopName;
							this.logo = data.content.logo;
							this.similarity = data.content.similarity;
							this.attitude = data.content.attitude;
							this.shipping = data.content.shipping;
							this.logistics = data.content.logistics;
							this.praiseRate = data.content.praise_rate;
							this.email = data.content.email;
							this.contactMobile = data.content.contactMobile;

						
							if(this.catList.length > 9) {
								this.catList1 = this.catList.slice(0, 9);
								this.catList2 = this.catList
							} else {
								this.catList1 = this.catList;
								this.catList2 = this.catList;
							}
							this.data = data.content.productList;
							this.name = this.data.slice(0, this.datasize)
							this.msg = this.data.length;
							this.zongy = []
							this.searchData = this.data
							for(var n = 0; n < Math.ceil(this.data.length / this.datasize); n++) {
								this.zongy.push(n)
							}
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
				// window.open('http://www.xfxycg.com/#/detail/?wd=' + this.productList[index].productID);
				this.$router.push({
					path: 'detail',
					query: {
						productID: this.name[index].productID
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
			dangqian(index) {
				this.dqy = index
				this.name = this.data.slice(this.dqy * this.datasize - this.datasize, this.dqy * this.datasize)
			},
			getProductList() {
				if(this.catID == undefined) {

				} else {
					this.$http.post(store.state.config.apiUrlRoot + "show/show/prepShop", {
						sellerID: this.$route.query.sellerID,
						catID: this.catID,
						brandID: this.brandID
					}).then(
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
							this.name = this.data.slice(0, this.datasize)
							this.msg = this.name.length;
							this.zongy = []
							for(var n = 0; n < Math.ceil(this.data.length / this.datasize); n++) {
								this.zongy.push(n)
							}
						},
						function(erro) {
							console.log(erro);
						}
					);
				}

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
		}
	}
</script>
<style scoped>
	.active_5:hover {
		color: #337ab7;
	}
	
	.asdw li {
		width: 20px;
		height: 20px;
		background: black;
		color: white;
		text-align: center;
		border: solid 1px white;
		margin: 0 2px;
		cursor: pointer;
	}
	
	.asdw2 {
		width: 20px;
		height: 20px;
		background: #e45944 !important;
		color: white;
		text-align: center;
		border: solid 1px white;
		margin: 0 2px;
		cursor: pointer;
	}
	
	.active_3:hover {
		cursor: pointer;
		color: red;
		background: #231816;
	}
	
	.active_4:hover {
		/*border: solid 1px red;*/
		box-shadow: 0px 0px 5px 3px #bdbdbd;
	}
	
	.active_2:hover {
		color: rgb(255, 0, 54) !important;
	}
	
	.ft {
		font-weight: bold;
		color: #c8996b !important;
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
		color: #d1d1d1;
	}
	
	.a_href {
		color: #d1d1d1;
		margin-right: 20px;
		text-decoration: none;
	}
	.btn-primary{
		background-color: #e45944;
		border:1px solid #e45944;
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
		color: red;
		margin-top: 10px;
		width: 200px;
		float: left;
	}
	
	.sortList-ul-li {
		width: 232px;
		height: 308px;
		border: 1px solid #bdbdbd;
		background: #ffffff;
		margin-right: 8px;
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
	
	.box-right {
		width: 1049px;
		height: 40px;
		/*  background: #ffffff;*/
		float: left;
		/*  padding-left: 30px;*/
		position: relative;
		padding-left: 48px;
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
		padding-left: 20px;
		font-size: 12px;
		color: #333333;
		line-height: 42px;
		float: left;
	}
	
	.sort-top {
		width: 100%;
		height: 130px;
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
		width: 100%;
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
		background: #f1f1f1;
		padding-bottom: 80px;
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