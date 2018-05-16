<template>
	<!--头部-->
	<div>
		<searc v-show='showa' :sss="showme" ref='r1'/>
		<div v-show="!showa">
			<div style="width:100%;background-color:#f5f5f5;">
			<div style="width:1200px;margin:0 auto;height:40px;line-height:40px;">
				<div style="float:left;" ><img src="../assets/web1/首页-F.png" /><span class="top_1">&ensp;欢迎来到消防技术装备协议采购平台!&ensp;</span>
					<router-link to="/login" v-if="showlogin" style="color:#333;">请登录</router-link>
					<span style="color:#333;" v-if="!showlogin">{{msg}}</span>
				</div>
				<div style="float:right;">
					<router-link to="/" class="a_href">服务与培训</router-link >
					<a href="javascript:;" class="a_href" @click="loding2">用户中心</a>
					<router-link to="register" class="a_href">商家入驻</router-link>
					<router-link to="help" class="a_href">帮助中心</router-link>
				
				</div>
				</div>
			</div>
			<!--头部结束-->
			<div style="width:1200px;margin:0 auto;padding:40px 0px;overflow:hidden;">
				
				<div  style="float:left;margin-top:-20px;" @click="goIndex"><a href=""><img src="../assets/web1/logo.png"/></a></div>
				<div style="float:right;margin:0 auto;">
					<input v-model="keyname" type="text" style="float:left;height: 38px;border: solid 1px #e45944;border-bottom-right-radius: 0;border-top-right-radius: 0;width:420px;">
					<button @click="keysearch" style="float:left;background: #e45944; height:38px; position: initial;border-bottom-left-radius: 0;border-top-left-radius: 0;color: white;font-size: 14px;" class="btn btn-sm">搜索</button>
				</div>
			</div>
			<div style="border-bottom:1px solid #e45944;">
				<nav>
					<p style="width:210px;padding-left:20px;font-size:20px;background-color:#e45944;color:#fff;margin:0px;">所有商品</p>
					<p><router-link to="/" style="color:#333;">首页</router-link></p>
					<p  @click="loding">协议采购</p>
				</nav>
			</div>
			<!--轮播-->
			<div class="container-fluid" style="padding-top: 15px;">
				<div style="width: 1200px;margin: 10px auto;height: 60px;">
					<img src="../assets/web1/热销.png" />
				</div>
				<div style="width: 1200px;margin: 20px auto;">
					<div class="dianpu" v-for="(item,index) in userList" :key="index">
						<div class="dianpu-top">
							<img :src="item.logo" alt="" class="dianpulogo">
							<div>
								<p>{{item.sellerName}}</p>
								<span>企业地址:{{item.address}}</span>
							</div>
							<img src="../assets/web1/进入店铺.png" alt="" @click="enterShop(item.sellerID)" style="cursor:pointer;">
						</div>
						<div class="dianpu-bottom">
							<div class="goodsimg" v-for="(imglist,index) in item.product_list" :key="index" @click="goDetail(imglist.productID)">
								<img :src="imglist.details[0]" alt="" width="100%" height='100%' >
								<p>¥{{imglist.price}}</p>
							</div>
							<div class="goodsprice">
								<p>{{item.total_count}}</p>
								<span>件商品</span>
							</div>
						</div>

					</div>
					
				</div>
			</div>
			<!--底部-->
			<div class="footer">
				<div class="footer-top">
					<div class="content" style=" display: flex; margin:0 auto;">
						
						<div>
								<ul class="footer-ul" style="margin-top:8px;">
								<li style="margin-bottom:10px;font-weight:bold;">平台服务</li>
								<li style="margin-bottom:10px;">智能客服</li>
								<li style="margin-bottom:10px;">留言咨询</li>
					</ul>
							<ul class="footer-ul">
												<router-link to="/cai"  @click.native="flushCom">
													<p class="pactive" style="color:#34373e; font-weight:bold;line-height:35px;cursor:pointer;">采购指南</p>
												</router-link>
												<li style="margin-bottom:10px;">购物流程</li>
												<li style="margin-bottom:10px;">常见问题</li>
												<li style="margin-bottom:5px;">联系客服</li>
											</ul>
								<ul class="footer-ul">
									<p class="pactive" style="color:#34373e; font-weight:bold;line-height:35px;cursor:pointer;">支付方式</p>
								<li style="margin-bottom:10px;">财政直接支付</li>
								<li style="margin-bottom:10px;">财政授权支付</li>
								<li style="margin-bottom:5px;">自有资金支付</li>
							</ul>
                    <ul class="footer-ul">
									<p class="pactive" style="color:#34373e; font-weight:bold;line-height:35px;cursor:pointer;">品质保障</p>
								<li style="margin-bottom:10px;">比价说明</li>
								<li style="margin-bottom:10px;">发票制度</li>
							</ul>
							<ul class="footer-ul">
								<router-link to="san" @click.native="flushCom">
									<p  class="pactive" style="color:#34373e;font-weight:bold;line-height:35px;cursor:pointer;">商家服务</p>
								</router-link>
								<li style="margin-bottom:10px;">入驻须知</li>
								<li style="margin-bottom:10px;">入驻流程</li>
								<!-- <li style="margin-bottom:5px;">商家须知</li> -->
							</ul>
							
						</div>
					</div>
				</div>
					<div class="footer-bottom">
					<div class="content" style="width:1200px;">
						<span>2017-2018杭州谦程网络有限公司</span>
					<span>浙ICP备06051979号-4</span>
						<span>浙公安网备33010602006125号</span>
				
					
				</div>

			</div>
			<!-- -->
		</div>
		<transition name='bounce'>
			<div class="aaaa" v-show="com">
				{{msgname}}
			</div>
		</transition>
	</div>
</template>
<script>
	import 'bootstrap/dist/css/bootstrap.css'
	import store from '../store.js'
	import searc from './sortAll.vue'
	export default {
		name: 'module',
		components: {
			searc,
		},
		data: function() {
			return {
				com: false,
				showme: {
					arr: []
				},
				keyname: '',
				msg: '',
				msglist: [],
				showlogin: true,
				shopList: [],

				footerList: [{
						pname: '采购指南',
						liList: [{
							name: "采购流程"
						}, {
							name: "政策问题"
						}, {
							name: '常见问题'
						}, {
							name: '联系客服'
						}, ],
					},
					{
						pname: '品质保证',
						liList: [{
							name: "比价说明"
						}, {
							name: "发票制度"
						}],
					},

					{
						pname: '商家服务',
						liList: [{
							name: "入驻须知"
						}, {
							name: "入驻流程"
						}, {
							name: "商家规则"
						}, ],
					},
				],
				show: true,
				data: [],
				msg2: [],
				showshang: -1,
				showxia: false,
				rexiao: [],
				rexiaocanp: [],
				showa: false,
				msgname: '',
				ProductList:[],
				productList1:[],
				userList:[],
				host:"http://"+window.location.host
			}
		},

		created: function() {
			this.$http.post(store.state.config.apiUrlRoot +"admin/User/hotList",{
				page:1,
				pagecount:8
			}).then((data) => {
				this.userList=data.data.content.list
				console.log(data.data.content)
			})
			// this.getWork()
			this.set()

		},
		methods: {
			goDetail(a){
			this.$router.push({
					path: 'detail',
					query: {
						productID: a
					}
				});

			},
			enterShop(index){
				this.$router.push({
					path: 'shop',
					query: {
						ss: 0,
						sellerID:index
					}
				});
			},
			enterdetail(d) {
				this.$router.push({
					path: 'detail',
					query: {
						productID: d
					}
				});
			},
			goIndex(){
				this.$router.push({ path: '/'});

			},
			// hadleSort(index,val) {
			// 	this.$router.push({ path: 'sortAll', query: { catID: val.catID } });
			// },
			locatio() {
				this.com = true
				var that = this
				setTimeout(function() {
					that.com = false
				}, 2000)
			},
			keysearch() {
				if(this.keyname == '' || this.keyname == Number) {
					//alert('输入关键字')
					this.msgname = '请输入关键字'
					this.locatio()
				} else {
					this.showme.arr = []
					this.$http.post(store.state.config.apiUrlRoot + 'show/show/search', {
						key: this.keyname
					}).then((data) => {
						console.log(data.body.content)
						if(data.body.code == -3) {
							this.msgname = data.body.msg
							this.com = true
							this.locatio()

						} else {
							this.showme.arr = data.body.content
							this.$refs.r1.loding3()
							this.showa = !this.showa

						}
					})
				}
				this.keyname = ''
			},
			getWork() {
				this.$http.post(store.state.config.apiUrlRoot + 'admin/user/workIndex').then(
					function(response) {
						var data = response.body;
						if(data.code == 1) {
							this.msg = data.content.data.name;
							this.showlogin = false;
						} else {
							this.showlogin = true;
						}
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
							} else {

								this.msgname = '抱歉,你没有这个权限'
								this.locatio()
							}
						} else {
							this.$router.push({path:"login"});
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
								window.location.href =this.host+ "/supply";
							} else if(data.content.data.roleID == 1) {
								window.location.href =this.host+ "/admittance";
							} else {
								window.location.href =this.host+ "/qiancheng";
							}
						} else {
							this.msgname = '请您先登录'
							this.locatio()
						}
					}
				);
				// this.$router.push({ path: 'login'});
			},
			ad2(a,d) {
				this.$router.push({
					path: 'sortAll',
					query: {
						catID: a,
						brandID: d
					}
				});
			},
			add2() {
				this.showxia = true
			},
			ass() {
				this.showshang = -1
			},
			add(index) {
				this.showshang = index
			},
			ad(d) {
				this.$router.push({
					path: 'detail',
					query: {
						productID: d
					}
				});
			},
			pre() {
				this.show = !this.show

			},
			next() {
				this.show = !this.show
			},
			set() {
				setInterval(() => {
					this.show = !this.show
				}, 6000)

			}
		}

	}
</script>
<style scoped>
	.actif:hover {
		border: solid 1px #C8996B;
		cursor: pointer;
	}
	.actif img:hover {
		transition: all 1s linear;
	}
	
	.slide-fade-enter-active {
		transition: all .3s ease;
	}
	
	.slide-fade-leave-active {
		transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
	}
	
	.slide-fade-enter,
	.slide-fade-leave-to
	/* .slide-fade-leave-active for below version 2.1.8 */
	
	{
		transform: translateX(10px);
		opacity: 0;
	}
	
	.bounce-enter-active {
		animation: bounce-in .5s;
	}
	
	.bounce-leave-active {
		animation: bounce-in 1.1s reverse;
	}
	
	@keyframes bounce-in {
		0% {
			transform: scale(0);
		}
		50% {
			transform: scale(1.2);
		}
		100% {
			transform: scale(1);
		}
	}
	
	nav{
		width:1200px;
		margin:0 auto;
		overflow:hidden;
		height:40px;

	}
	nav>p{
float:left;
height:40px;
line-height:40px;
margin:auto 20px;
cursor:pointer;
	}
	.aaaa {
		position: absolute;
		top: 30%;
		left: 42%;
		width: 250px;
		height: 100px;
		background: rgba(0, 0, 0, 0.5);
		border-radius: 10px;
		color: white;
		font-size: 20px;
		text-align: center;
		padding-top: 25px;
		z-index: 500;
		transition: all 1s linear;
	}
	
	.fade-enter-active,
	.fade-leave-active {
		transition: opacity .5s
	}
	
	.fade-enter,
	.fade-leave-to
	/* .fade-leave-active in below version 2.1.8 */
	
	{
		opacity: 0
	}
	
	.active_3 {
		border: solid 1px red !important;
	}
	
	.active_2 {
		border-bottom: 3px solid #C8996B;
		text-decoration: none;
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
		width: 100%;
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
		transition: all .5s linear;
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
	.dianpu{
		width:590px;
		float:left;
		border:1px solid #dbdbdb;
		height:250px;
		padding:12px 20px;
		box-sizing: border-box;
		
		margin-bottom:20px;
	}
	.dianpu:first-child{
		margin-right: 19px;
	}
	.dianpu:nth-child(3){
			margin-right: 19px;
	}
	.dianpu-top{
		overflow:hidden;
	}
	.dianpu-top>.dianpulogo{
		width:105px;
		height:58px;
		float:left;
		border:1px solid #dbdbdb;
	}
.dianpu-top>img{
			float:right;
}
.dianpu-top>div{
   float:left;
   margin-left:20px;
}
.dianpu-top>div>p{
	font-size:20px;
	color:#282828;
}
.dianpu-top>div>span{
	font-size:14px;
	color:#757575;
}
.dianpu-bottom{
	margin-top:20px;
	overflow: hidden;
}
.goodsimg{
		width:148px;
	height:148px;
	margin-right:14px;
	float:left;
	position: relative;
	border:1px solid #dbdbdb;
	cursor: pointer;
}
.goodsprice{
	float:right;
	width:100px;
	text-align: center;
}
.goodsprice>p{
	font-size: 24px;
	color:#e45944;

}
.goodsprice>span{
	color:#757575;
	font-size: 14px;
}
.dianpu-bottom>div>img{
	width:100%;

}
.goodsimg>p{
	position: absolute;
	left:0px;
	bottom:0px;
	display:none;
	width:100%;
	height:40px;
	line-height:40px;
	color:#fff;
	text-align: center;
	background-color: rgba(0, 0, 0, 0.5);
	margin:0;
}
.goodsimg:hover p{
	display: block;
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
		 background-color:#f5f5f5;
	}
	
	.footer-ul {
		/*border:1px solid red;*/
		float: left;
		width: 240px;
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
		/* text-align: left; */
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
	.footer-bottom a {
		color: #333333;
		font-size: 15px;
		font-weight: bolder;
		display: block;
		float: left;
		margin-right: 55px;
	}
</style>