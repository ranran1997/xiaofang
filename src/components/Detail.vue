<template>
	<!-- 头部导航 -->
	<div class="module">
		<!-- 导航栏 -->
		<div class="nav">
		<div>
			<div >
				<!-- <img src="../assets/web/right.png" style="cursor: pointer;" @click="goback" /> -->
				<img src="../assets/web1/首页-F.png">
				<span>欢迎来到消防技术装备协议采购平台!</span>
			
					<router-link to="/login" v-if="showlogin" style="color:#000;">请登录</router-link>
					<span v-if="!showlogin">
						<span >{{mssg}}</span>
						<span @click="loginOut" style="cursor:pointer;">退出</span>
					</span>
			</div>
			<div>
				 <a  @click="loding2" href="javascript:;">用户中心</a>
					<router-link to="/" >服务与培训</router-link >
				<router-link to="/register" >商家入驻</router-link>
				<router-link to="/help">帮助中心</router-link>
			</div>
			</div>
		</div>
		<!--  头部导航栏结束 -->
		<!-- 大盒子 -->
		<div class="box">
			<div class="lanrenzhijia_service" style="z-index:200;bottom:0px;">
				<ul>
					<span class="right_bar"></span>
					<a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=1339135094&site=qq&menu=yes" class="right_qq"></a>
					<span class="right_phone" style="margin-bottom:5px;">0571-86738097</span>
				</ul>
			</div>
			<div class="cart" :class="{Rpo:Rpo}"></div>
			<div class="cart-img" :class="{Rpo:Rpo}">
				<div style="position:relative;"><img src="../assets/login/购物车(2).png" @click="loding3" height="46" width="50"><span class="mao">{{cartTotle}}</span></div>
			</div>
			<div class="cart-content" v-if="!showCart" style="position:fixed;">
				<div v-show="this.roleID==5||this.roleID==4||this.roleID==1||this.roleID==2||this.roleID==3||this.roleID==6">
						<div class="cart-content-top">
					<img src="../assets/login/形状5拷贝.png" height="16" width="16" class="gou-cart" @click="closeCart">
				</div>
				<div class="cart-content-bottom" v-for="(item,index) in cartList" :key="index">
					<div class="cart-item" v-for="(val,index) in item.cart" :key="index">
						<div class="cart-item-left"><img :src="val.titleImage" height="82" width="82"></div>
						<div class="cart-item-right">
							<p class="cart-text">{{val.productName}}</p>
							<p class="cart-price">￥{{val.price}}<span class="span-num">×{{val.number}}</span><span @click="dele(val.cartID)" class="span-del">删除</span></p>
						</div>
					</div>
				</div>
				<div class="cart-bottom">
					<div class="cart-bottom-lef">
						<p style="line-height:64px;font-size:16px;">总计<span style="color:#be4141;">{{cartTotle}}</span>件</p>
					</div>
					<div class="cart-bottom-righ">
						<a target="_blank"><img @click="gocheck" src="../assets/login/去购物车结算.png" height="64" width="160"></a>
					</div>
				</div>
				</div>
					<div v-show="this.roleID==7||this.roleID==8">
						<div class="cart-content-top">
					<img src="../assets/login/形状5拷贝.png" height="16" width="16" class="gou-cart" @click="closeCart">
				</div>
				<div class="cart-content-bottom">
					<div class="cart-item" v-for="(val,index) in cartList" :key="index">
						<div class="cart-item-left"><img :src="val.titleImage" height="82" width="82"></div>
						<div class="cart-item-right">
							<p class="cart-text">{{val.productName}}</p>
							<p class="cart-price">￥{{val.price}}<span class="span-num">×{{val.number}}</span><span @click="dele(val.cartID)" class="span-del">删除</span></p>
						</div>
					</div>
				</div>
				<div class="cart-bottom">
					<div class="cart-bottom-lef">
						<p style="line-height:64px;font-size:16px;">总计<span style="color:#be4141;">{{cartTotle}}</span>件</p>
					</div>
					<div class="cart-bottom-righ">
						<a target="_blank"><img @click="gocheck" src="../assets/login/去购物车结算.png" height="64" width="160"></a>
					</div>
				</div>
				</div>
			</div>
			<!--     头部搜索框 -->
			<div style="background:#ffffff;">
				<div class="content">
					<div class="content-search">
						<div class="top">
							<!--   logo -->
							<div>
								<router-link to='/'><img src="../assets/web1/logo.png"></router-link>
							</div>
							<!-- <div style="width: 400px;">
							</div>
							<div v-if="false">
								<input type="text" style="width: 400px;height: 35px;border: 1px solid #e45944;">
								<input style="width: 60px;height: 35px;background: #e45944; border: none; color: white;margin-left:-10px;" type="button" name="" id="" value="搜索" />
							</div> -->
							<div>
								<img @click="loding"  src="../assets/img/协议供货.png" />
								<img @click="loding2"  src="../assets/img/用户中心.png" />
							</div>
						</div>
						<div class="bottom">
							<div >
								<span>协议采购分类</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- 列表 -->
			<div class="content-list">
				<div class="content">
					<!-- 中间部分 -->
					<div class="proTop"><span>全部分类 ><span @click="obb1(mbx.firstID)" class="obb" >{{mbx.firstName}}</span>><span @click="obb2(mbx.firstID,mbx.secondID)" class="obb">{{mbx.secondName}}</span></span>
					</div>
					<!--     商品信息部分 -->
					<div class="proDetail">
						<!--  左边 -->
						<div class="proLeft">
							<div class="proLeft-top">
								<div v-for="(item,index)  in data.titleImage" :key="index">
									<img :src="item" v-show="index==aaa" height="360" width="360">
								</div>
								<div class="proLeft-top-box" @mouseover="min" @mousemove="mov" @mouseout="out">
								</div>
								<div v-show="small" style="left: 0px ;top: 0px;" id="show" :style="{left:xX+'px',top:xY+'px'}"></div>
								<div id="big_" v-show="small"><img width="540" height="540" class="big_" :style="{left:bX+'px',top:bY+'px'}" v-for="(item,index)  in data.titleImage" :key="index" v-show="index==aaa" :src="item" /></div>
							</div>
							<div class="proLeft-bottom">
								<ul class="proLeft-bottom-ul">
									<li class="acticge" v-for="(item,index)  in data.titleImage" :key="index" @click="changBred(index)" v-bind:class='{isRed:isRed==index}'><img :src="item" height="80" width="80"></li>
								</ul>
							</div>
						</div>
						<!--  左边结束 -->
						<!-- 中间部分 -->
						<div class="proMiddle">
							<h3>{{data.productName}}</h3>
							<div class="price">
								<div class="price-top">
									<div class="price-txt">
										<span class="price-top-txt">协议价 : &nbsp;&nbsp;</span>
										<span class="price-top-prcie" style="font-size: 27px;font-weight: bold; color: #e45944;">￥{{data.price}}</span>
									</div>
									<div class="price-top-bottom">
										<span class="price-top-txt" style="line-height:30px;">累计销量</span>
										<span class="price-top-num">{{data.counter}}</span>
									</div>
								</div>
								<div class="price-bottom">
									<span class="price-top-txt">累计评价 : {{data.allTotal}} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;满意度:{{data.right}}</span>
								</div>
							</div>
							<!-- 价格结束 -->
							<div class="address">
								<div class="address-top">
									<p class="address-top-txt" style="margin-top: 15px;">配送至：</p>
									<select class="address-top-input">
										<option v-for="(val,index) in add" v-if="index==10" selected="selected" :key="index">浙江省</option>
										<option v-else>{{val.name}}</option>
									</select>
								</div>
								<div class="address-bottom" >
									<div style="margin: 0 5px;">
										数量:
									</div>
									<div class="btn-left">
										<button @click="jian" style="border-bottom:1px solid #bdbdbd;border-right:1px solid #bdbdbd;">-</button>
										<span v-html="sum">1</span>
										<button @click="jia" style="border-bottom:1px solid #bdbdbd;border-left:1px solid #bdbdbd;">+</button>
									</div>
								</div>
								<!-- <img style="margin-top: -60px;cursor: pointer;margin-left: 200px;height:42px;" @click="datain(data.productID,data.price,sum)" src="../assets/img/cart.png" v-show="statusCart==1"> -->
								<img style="" @click="datain(data.productID,data.price,sum)" src="../assets/img/cart.png" v-if="this.exist==1">
								 
							</div>
							<!--价格对比 -->
							<div class="conpny">
								<div>
									<span>价格对比:</span><br/>
									<p @click="obb1(mbx.firstID)" style="cursor:pointer"><span>查看更多></span></p>
								</div>
								<div v-for="(val,index) in data.sim" style="position: relative;" :key="index">
									<img @click="ad(val.productID)" @mouseover="inimg(index)" @mouseout="outimg()" class="active_" :src="val.titleImage">
									<div @click="ad(val.productID)" @mouseover="inimg(index)" @mouseout="outimg()" v-show="index==oa">{{val.productName}}￥{{val.price}}</div>
								</div>

							</div>
						</div>
						<!--   中间结束 -->
						<!-- 右边部分 -->
						<div class="proRight" >
							<div class="proRight-top">
								<p class="proRight-top-txt">{{name}}</p>
							</div>
							<div class="proRight-bottom">
								<div class="quality">
									<table border="0" style="height: 100px;">
										<tr><td style="font-weight: bold;">商品描述：</td>
											<td style="color:#e45944;">{{xingxi.similarity}}</td>
											<td style="font-weight: bold;">服务态度：</td>
											<td style="color:#e45944;">{{xingxi.attitude}}</td>
										</tr>
										<tr><td style="font-weight: bold;">质量性能：</td>
											<td style="color:#e45944;">{{xingxi.shipping}}</td>
											<td style="font-weight: bold;">使用培训：</td>
											<td style="color:#e45944;">{{xingxi.logistics}}</td>
										</tr>
										<tr><td style="font-weight: bold;">好&ensp;评&ensp;率：</td>
										   <td style="color:#e45944;">{{xingxi.rate}}</td>
										</tr>
									</table>
								</div>
								<div>
									<table border="0" class="trr">
										<tr>
											<td style="width:20px;"><img src="../assets/web/002.png" /></td>
											<td style="font-weight: bold;line-height:25px; ">所在地区：</td>
											<td style="width: 84px;overflow:hidden;">
												<div style="width:80px;height: 20px;overflow: hidden;">
													{{msg.address}}
												</div>
											</td>
										</tr>
										<tr>
											<td style="width:20px;"><img src="../assets/web/001.png" /></td>
											<td style="font-weight: bold;line-height:30px;">联系电话：</td>
											<td style="width: 84px;">
												<div style="height: 20px;overflow: hidden;">
													{{msg.mobile}}
												</div>
											</td>
										</tr>
										<tr>
											<td style="width:18px;"><img src="../assets/web/003.png" /></td>
											<td style="font-weight: bold;line-height:20px;">
												<div>联&ensp;系&ensp;人：</div>
											</td>
											<td style="width: 84px;">
												<div style="height: 20px;overflow: hidden;">
													{{msg.contactman}}
												</div>
											</td>
										</tr>
									</table>
									<img width="120px" height="60px" style="margin-top:7px ;margin-left: 30px;" :src="msg.logo" />
								</div>
								<p style="position: absolute; left: 235px;top: -25px;width: 20px;height:20px;cursor: pointer;" @click="handleShop"></p>
								<img style="margin-top: 20px;cursor: pointer;" src="../assets/web1/进入店铺拷贝.png" @click="enterShop">
								
								<div class="icno">
									<div style="margin-top: 17px;">
										<!-- <router-link to='/'><img src="../assets/detail/qq.png" /></router-link> -->
										<a target="_blank" :href="qqNum"><img border="0" src="../assets/web1/qq.png?p=2:this.qqNum:52" alt="点击这里给我发消息" title="点击这里给我发消息" v-if="this.exist==1" /></a>
									</div>
									<ul class="icno-ul" style="display: flex;flex-wrap: wrap;width: 200px;">
										<li v-for="(item,index) in icnoList" :key="index">
											<img :src="item.img">
											<span>{{item.txt}}</span>
										</li>
									</ul>
								</div>

							</div>
						</div>
						<!--    右边结束 -->
					</div>

					<!-- 商品展示部分结束 -->
					<div class="proInfo">
						<!-- 头部导航栏 -->
						<div class="proInfo-top" style="border: solid 1px #e4e4e4;background: #F5F5F5;">
							<ul class="proInfo-top-ul">
								<li v-bind:class='{rbg:showBg==index}' style="border: solid 1px #EBEBEB;" v-for="(item,index) in  topList" @click="changeIndex(index)" :key="index">{{item.name}}</li>
							</ul>
						</div>
						<!-- 头部导航栏结束 -->

						<div v-if="showBg==0" class="details">
							<!-- <div class="details-top">
								<span>商品品牌:{{data.productName}}</span>
								<br />
								<span>商品名称:{{data.productName}}</span>
								<br />
								<span>商品编号:{{data.productID}}</span>
								<br />
								<span>商品毛重:</span>
								<br />
								<span>商品产地:</span>
								<p class="details-top-right" @click="handleGui">更多参数 &nbsp;></p>
							</div> -->
							<!--   从后台获取数据 -->
							<div class="details-bottom">
								<!--     产品参数 -->
								<div style="width:800px;margin:0 auto;" v-for="(item,index) in data.details" :key="index"><img  :src="item"/></div>
							</div>
						</div>
						<!-- 商品详情部分结束 -->
						<!--   规格参数 -->
						<div v-if="showBg==1" class="gui">
							<table class="table table-bordered " cellspacing="" cellpadding="">
								<tr style="height: 30px;">
									<th style="width: 180px;text-align:center;border-right:1px solid #ddd;'">属性名</th>
									<th style="text-align:center;">属性值</th>
								</tr>
								<tbody v-for="(val,index) in data.parameter " :key="index">
									<tr>
										<td style="text-align:center;">{{val.name}}</td>
										<td>{{val.name1}}</td>
									</tr>
								</tbody>
							</table>
						</div>
						<div v-if="showBg==2">
							<li style="text-align: center;"><img :src="data.approve" /></li>
						</div>
						<!-- 规格参数结束 -->
						<!-- 用户评价 -->
						<div v-if="showBg==3" class="yong">
							<div class="yong-content">
								<div class="yong-top">
									<ul class="yong-top-ul">
										<li @click="on(1)" style="cursor: pointer;" v-bind:class='{red:ping==a}'>全部评价&nbsp;&nbsp;( {{data.comments.total}} )</li>
										<li @click="on(2)" style="cursor: pointer;" v-bind:class='{red:ping==b}'>好评&nbsp;&nbsp;( {{data.comments.good.length}} )</li>
										<li @click="on(3)" style="cursor: pointer;" v-bind:class='{red:ping==c}'>中评&nbsp;&nbsp;( {{data.comments.mid.length}} )</li>
										<li @click="on(4)" style="cursor: pointer;" v-bind:class='{red:ping==d}'>差评&nbsp;&nbsp;( {{data.comments.bad.length}} )</li>
									</ul>
								</div>
								<div class="yong-bottom" v-if="ping==a">
									<ul class="yong-bottom-ul">
										<li v-for="(val,index) in data.comments.good"  :key="index">
											<div>
												<div>
													<img src="../assets/detail/图层-10.png" height="28" width="28" class="yong-img">
													<span style="margin-top: 5px;">{{val.username}}:</span>
												</div>
												<div>
													<div>
														{{val.content}}
													</div>

												</div>
											</div>
										</li>
										<li v-for="(val,index) in data.comments.mid"  :key="index">
											<div >
												<div>
													<img src="../assets/detail/图层-10.png" height="28" width="28" class="yong-img">
													<span style="margin-top: 5px;">{{val.username}}:</span>
												</div>
												<div>
													<div>
														{{val.content}}
													</div>

												</div>
											</div>
										</li>
										<li v-for="(val,index) in data.comments.bad" :key="index">
											<div style="display: flex;">
												<div>
													<img src="../assets/detail/图层-10.png" height="28" width="28" class="yong-img">
													<span style="margin-top: 5px;">{{val.username}}:</span>
												</div>
												<div>
													<div>
														{{val.content}}
													</div>
												</div>
											</div>
										</li>
										<h3 style="margin-bottom:30px;color: #c1c1c1;" v-show="data.comments.bad.length==0&&data.comments.good.length==0&&data.comments.mid.length==0">暂无评论...</h3>
									</ul>
								</div>
								<div v-else-if="ping==b">
									<ul class="yong-bottom-ul">
										<li v-for="(val,index) in data.comments.good"  :key="index">
											<div>
												<div>
													<img src="../assets/detail/图层-10.png" height="28" width="28" class="yong-img">
													<span style="margin-top: 5px;">{{val.username}}:</span>
												</div>
												<div>
													<div>
														{{val.content}}
													</div>

												</div>
											</div>
										</li>
										<h3 style="margin-bottom:30px;color: #c1c1c1;" v-show="data.comments.good.length==0">暂无评论...</h3>

									</ul>
								</div>
								<div v-else-if="ping==c">
									<ul class="yong-bottom-ul">
										<li v-for="(val,index) in data.comments.mid" :key="index">
											<div>
												<div >
													<img src="../assets/detail/图层-10.png" height="28" width="28" class="yong-img">
													<span style="margin-top: 5px;">{{val.username}}:</span>
												</div>
												<div>
													<div>
														{{val.content}}
													</div>

												</div>
											</div>
										</li>
										<h3 style="margin-bottom:30px;color: #c1c1c1;" v-show="data.comments.mid.length==0">暂无评论...</h3>
									</ul>
								</div>
								<div v-else-if="ping==d">
									<ul class="yong-bottom-ul">
										<li v-for="(val,index) in data.comments.bad" :key="index">
											<div>
												<div>
													<img src="../assets/detail/图层-10.png" height="28" width="28" class="yong-img">
													<span>{{val.username}}:</span>
												</div>
												<div>
													<div>
														{{val.content}}
													</div>
												</div>
											</div>
										</li>
										<h3 style="margin-bottom:30px;color: #c1c1c1;" v-show="data.comments.bad.length==0">暂无评论...</h3>
									</ul>
								</div>

							</div>
							<!-- 用户评价结束 -->
						</div>
						<!--   proInfo结束 -->
					</div>
				</div>
				<!-- 底部导航栏 -->
				<foot/>
				<!--   底部导航栏结束 -->
				<!-- 搜索框结束 -->
				<!--        大盒子结束 -->
			</div>
			<test ref='t1'></test>
			<transition name='bounce'>
				<div class="aaaa" style="position: absolute;" v-show="com">
					<img src="../assets/testimg/提示.png" style="position: absolute;" />
					<div style="position: absolute;width: 382px;height: 232px;">
						<a href="#" style="position: absolute;right: 10px;font-size: 27px;color:#fff;" @click="com=false">X</a>
						<span style="position: absolute;top:80px;left: 115px;">{{msgname}}</span>
						<div style="position: absolute;top: 140px;;width: 382px;">
							<img @click="tian()" src="../assets/testimg/前往购物车.png" style="margin-left: 70px;" />
							<img @click="com=false" src="../assets/testimg/继续逛逛.png" style="margin: 0 30px;" />
						</div>
					</div>
				</div>
			</transition>
		</div>
	</div>
</template>
<script>
	import store from '../store.js';
	import test from './tanc/test1.vue';
	import "../assets/css/nav.css";
	import foot from './common/footer.vue';
	export default {
		name: 'module',
		components: {
			test,
			foot
		},
		methods: {
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
			flushCom(){
				location.reload();
			},
			goback() {
				window.history.go(-1)
				setTimeout(function(){
					location.reload();
				},100)
			},
			obb1(d) {
				this.$router.push({
					path: 'sortAll',
					query: {
						catID: d
					}
				});
			},
			obb2(a,d) {
				this.$router.push({
					path: 'sortAll',
					query: {
						catID:a,
						brandID: d
					}
				});
				
			},
		
			closeCart() {
				this.Rpo = !this.Rpo;
				this.showCart = !this.showCart;
			},
			gocheck() {
				// var host='http://www.xfxycg.com'
				 // var host="http://duanhui.qianchengwl.cn"

				if(this.roleID == 5) {
					location.href = this.host+'/zong/#/trade/gouwuc'

				} else if(this.roleID == 4) {
					location.href = this.host+'/zhi/#/trade/gouwuc'

				}else if(this.roleID == 7) {
					location.href = this.host+'/big/#/purchase'

				}else if(this.roleID == 8) {
					location.href = this.host+'/middle/#/module'

				}
			},
			getCartList() {
				if(this.roleID==5||this.roleID==4||this.roleID==1||this.roleID==2||this.roleID==3||this.roleID==6){
					this.$http.post(store.state.config.apiUrlRoot + 'admin/shoppingcart/getShoppingcartList', {
					status: 0
				}).then(
					function(response) {
						var data = response.body;
						if(data.code == 1) {
							var sum = 0
							this.cartList = data.content.productList
							this.cartList.forEach(function(val) {
								sum += val.cart.length
							})
							this.cartTotle = sum
						}
					},
					function(erro) {
						console.log(erro);
					});


				}else if(this.roleID==7||this.roleID==8){
					this.$http.post(store.state.config.apiUrlRoot + 'admin/Purchase/getCartList', {
					page:1,
					pagecount:10
				}).then(
					function(response) {
						var data = response.body;
						if(data.code == 1) {
							this.cartList = data.content.list
							this.cartTotle =data.content.total_num
						}
					},
					function(erro) {
						console.log(erro);
					});


				}
				
			},
			enterShop() {
				var this_ = this
				this.$http.post(store.state.config.apiUrlRoot + "show/show/prepShop", {
					sellerID: this.sellerID
				}).then((data) => {
					var template = data.body.content.template
					if(template == 1) {
						if(this_.cc == 1 && this_.exist == 1) {
							this_.$router.push({
								path: 'shopone',
								query: {
									ss: 1,
									sellerID: this_.sellerID
								}
							});

						}else {
							this_.$router.push({
								path: 'shopone',
								query: {
									ss: 0,
									sellerID: this_.sellerID
								}
							});
						}
					} else if(template == 2) {
						if(this_.cc == 1 && this_.exist == 1) {
							this_.$router.push({
								path: 'shop',
								query: {
									ss: 1,
									sellerID: this_.sellerID
								}
							});
						} else {
							this_.$router.push({
								path: 'shop',
								query: {
									ss: 0,
									sellerID: this_.sellerID
								}
							});

						}

					}else if(template == 3) {
						if(this_.cc == 1 && this_.exist == 1) {
							this_.$router.push({
								path: 'shoptwo',
								query: {
									ss: 1,
									sellerID: this_.sellerID
								}
							});
						} else {
							this_.$router.push({
								path: 'shoptwo',
								query: {
									ss: 0,
									sellerID: this_.sellerID
								}
							});

						}

					}else if(template == 4) {
						if(this_.cc == 1 && this_.exist == 1) {
							this_.$router.push({
								path: 'shopthree',
								query: {
									ss: 1,
									sellerID: this_.sellerID
								}
							});
						} else {
							this_.$router.push({
								path: 'shopthree',
								query: {
									ss: 0,
									sellerID: this_.sellerID
								}
							});

						}
					}
				})

			},
			inimg(a) {
				this.oa = a
			},
			outimg() {
				this.oa = -1
			},
			loding() {
				this.$http.post(store.state.config.apiUrlRoot + 'admin/user/workIndex').then(
					function(response) {
						var data = response.body;
						// var host='http://www.xfxycg.com'
								    // var host="http://duanhui.qianchengwl.cn"
						// window.location.href = "http://www.xfxycg.com/#/protocol";
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
								this.$refs.t1.msgname = '抱歉你没有这个权限'
								this.$refs.t1.locatio()
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
								window.location.href =this.host+ "/zhi/#/module";
							} else if(data.content.data.roleID == 2) {
								window.location.href =this.host+ "/supply";
							} else if(data.content.data.roleID == 1) {
								window.location.href =this.host+ "/admittance";
							} else  if(data.content.data.roleID == 7) {
								window.location.href =this.host+ "/big";
							} else if(data.content.data.roleID == 8) {
								window.location.href =this.host+ "/middle";
							} else {
								window.location.href =this.host+ "/qiancheng";
							}
						} else {
							this.$refs.t1.msgname = '请您先登录'
							this.$refs.t1.locatio()
						}
					}
				);
			},
			loding3() {
				this.$http.post(store.state.config.apiUrlRoot + 'admin/user/workIndex').then(
					function(response) {
						var data = response.body;
						if(data.code == 1) {
							if(data.content.data.roleID == 5) {
								this.roleID = data.content.data.roleID
								this.getCartList();
								this.Rpo = !this.Rpo;
								this.showCart = !this.showCart;
							} else if(data.content.data.roleID == 4) {
								this.roleID = data.content.data.roleID

								this.getCartList();
								this.Rpo = !this.Rpo;
								this.showCart = !this.showCart;
							} else if(data.content.data.roleID ==7) {
								this.roleID = data.content.data.roleID

								this.getCartList();
								this.Rpo = !this.Rpo;
								this.showCart = !this.showCart;
							} else if(data.content.data.roleID ==8) {
								this.roleID = data.content.data.roleID

								this.getCartList();
								this.Rpo = !this.Rpo;
								this.showCart = !this.showCart;
							} else{
								this.$refs.t1.msgname = '抱歉你没有这个权限'
								this.$refs.t1.locatio()
							}
						} else {
							this.$refs.t1.msgname = '请您先登录'
							this.$refs.t1.locatio()
						}
					}
				);
			},
			ad(d) {

				this.$http.post(store.state.config.apiUrlRoot + 'show/show/productDetail', {
					productID: d
				}).then((msg) => {
					this.data = msg.body.content
					this.name = msg.body.content.company.sellerName
					this.msg = msg.body.content.company
					this.sellerID=this.msg.sellerID

					var data = msg.body.content.comments.com

					this.come = data
					this.all = data
					this.exist = 2
				})
				
			},
			tian() {
				// var host='http://www.xfxycg.com'
				if(this.roleID == 5) {
					window.location.href =this.host+ "/zong/#/trade/gouwuc";
				} else if(this.roleID == 4) {
					window.location.href = this.host+ "/zhi/#/trade/gouwuc";
				} else if(this.roleID == 2) {
					window.location.href = this.host+ "/supply/#/trade/gouwuc";
				} else if(this.roleID == 7) {
					window.location.href = this.host+ "/big/#/purchase";
				} else if(this.roleID ==8) {
					window.location.href = this.host+ "/middle/#/module";
				} else  {
					window.location.href =this.host+ "/zong/#/trade/gouwuc";

				}

			},
			dele(cartID) {
				this.$http.post(store.state.config.apiUrlRoot + "admin/shoppingcart/delCartProduct", {
					cartIDs: [cartID]
				}).then((data) => {
					if(data.body.code == 1) {
						this.$refs.t1.msgname = '删除成功'
						setTimeout(function() {
							// window.history.go(0)
							location.reload();

						}, 2000)
						this.$refs.t1.locatio()

					} else {
						this.$refs.t1.msgname = data.body.msg
						this.$refs.t1.locatio()
					}
				})
			},
			datain(a, b, c) {
				if(c == 0) {
					this.$refs.t1.msgname = '请添加商品数量'
					this.$refs.t1.locatio()
				} else {
					this.$http.post(store.state.config.apiUrlRoot + 'admin/shoppingcart/addProductToPlanBuy', {
						productID: a,
						number: c,
						price: b
					}).then(function(response) {
							var data = response.body;
							if(data.code == 1) {
								if(this.roleID == 5) {
								this.com = true
									this.msgname = '产品已加入购物车'
								} else if(this.roleID == 4) {
									this.com = true
									this.msgname = '产品已加入购物车'
								} else if(this.roleID == 2) {
									this.com = true
									this.msgname = '产品已加入购物车'
								} else if(this.roleID == 7) {
									this.com = true
									this.msgname = '产品已加入购物车'
								} else if(this.roleID == 8) {
									this.com = true
									this.msgname = '产品已加入购物车'
								} else{
									this.com = true
									this.msgname = '产品已加入购物车'

								}
								this.getCartList();

							} else {

								if(data.msg == '请您登录') {
									this.com = false
									this.$refs.t1.msgname = data.msg
									this.$refs.t1.locatio()
								} else if(data.msg == '添加失败,该商品已添加') {
									this.msgname = '该商品已添加,是否查看'
									this.com = true
								} else {
									this.com = false
									this.$refs.t1.msgname = data.msg
									this.$refs.t1.locatio()
								}
							}
						})
				}

			},
			min() {
				this.small = true
			},
			mov() {
				if(this.small == true) {
					if(event.offsetX - 60 > 240) {
						this.xX = 240
						this.xY = event.offsetY - 60
						this.bX = -this.xX
						this.bY = -this.xY
					} else if(event.offsetX - 60 < 0) {
						this.xX = 0
						this.xY = event.offsetY - 60
						this.bX = -this.xX
						this.bY = -this.xY
					} else if(event.offsetY - 60 > 240) {
						this.xY = 240
						this.xX = event.offsetX - 60
						this.bX = -this.xX
						this.bY = -this.xY - 20
					} else if(event.offsetY - 60 < 0) {
						this.xY = 0
						this.xX = event.offsetX - 60
						this.bX = -this.xX
						this.bY = -this.xY
					} else {
						this.xX = event.offsetX - 60
						this.xY = event.offsetY - 60
						this.bX = -this.xX
						this.bY = -this.xY
					}

				}

			},
			getadd() {
				this.$http.post(store.state.config.apiUrlRoot + 'admin/user/getAreaList').then((data) => {

					if(data.body.code == -2) {

					} else {
						this.add = data.body.content.areaList
					}
				})
			},
			out() {
				this.small = false
			},
			on(msg) {
				if(msg == 1) {
					this.a = 0
					this.b = 1
					this.c = 1
					this.d = 1
					this.come = this.all
				}
				if(msg == 2) {
					this.b = 0
					this.a = 1
					this.c = 1
					this.d = 1
					this.come = this.good

				}
				if(msg == 3) {
					this.c = 0
					this.a = 1
					this.b = 1
					this.d = 1
					this.come = this.zhong

				}
				if(msg == 4) {
					this.d = 0
					this.a = 1
					this.b = 1
					this.c = 1
					this.come = this.cha

				}
			},
			jian() {
				this.sum--
					if(this.sum < 0) {
						this.sum = 0
					}
			},
			jia() {
				this.sum++
			},
			handleCart() {

				this.$router.push({
					path: 'cart'
				});
			},
			showInfo() {
				this.shop = true;
			},
			handleShop() {
				this.shop = false;
			},
			changeIndex(index) {
				this.showBg = index;
			},
			handleGui() {
				this.showBg = 1;
			},
			changBred(index) {
				this.isRed = index;
				this.aaa = index
				//再刷新一遍数据
			},
			getWork() {
				this.$http.post(store.state.config.apiUrlRoot + 'admin/user/workIndex').then(
					function(response) {
						var data = response.body;
						this.cc = data.code;
						if(data.code == 1) {
							this.mssg = data.content.data.name;
							this.roleID = data.content.data.roleID;
							this.showlogin = false;
						} else {
							this.showlogin = true;
						}
					}
				);
			},
		},
		data: function() {
			return {
				host:"http://"+window.location.host,
				statusCart:0,
				ALL: [],
				cc: '',
				showCart: true,
				mbx: [],
				Rpo: false,
				dd: 1,
				qqNum: '1401307044',
				add: [],
				tians: {
					a: 0,
					b: 0,
					c: 0
				},
				exist: '',
				com: false,
				msgname: '产品已加入购物车',
				roleID: '',
				showlogin: true,
				mssg: "",
				oa: -1,
				sellerID: '',
				xX: 0,
				xY: 0,
				a: 0,
				b: 2,
				c: 3,
				d: 4,
				bX: 0,
				bY: 0,
				small: false,
				good: [],
				zhong: [],
				cha: [],
				all: [],
				come: '',
				clock: 1,
				aaa: 0,
				data: [],
				name: "",
				sum: 1,
				msg: [],
				isRed: 0,
				ping: 0,
				comments2: {
					total: []
				},
				xingxi: [],
				topList: [{
					name: "商品详情"
				}, {
					name: "规格参数"
				}, {
					name: "质量认证"
				}, {
					name: "用户评价"
				}, ],
				showBg: 0,
				shop: false,
				icnoList: [{
					img: require('../assets/detail/图层-14.png'),
					txt: '正品保证'
				}, {
					img: require('../assets/detail/图层-9.png'),
					txt: '本地服务'
				}, {
					img: require('../assets/detail/图层-11.png'),
					txt: '售后无忧'
				}, {
					img: require('../assets/detail/图层-10.png'),
					txt: '售前咨询'
				}, {
					img: require('../assets/detail/图层-13.png'),
					txt: '一站齐购'
				}, {
					img: require('../assets/detail/图层-12.png'),
					txt: '预约送达'
				}, ],
			
				contrastList: [{
					name: require('../assets/detail/QQ截图20170801163545-拷贝.png')
				}, {
					name: require('../assets/detail/QQ截图20170801163545-拷贝.png')
				}, {
					name: require('../assets/detail/QQ截图20170801163545-拷贝.png')
				}, ],
				smaImg: [{
					name: require('../assets/detail/QQ截图20170905140207_10.png'),
					isRed: '2px solid red'
				}, {
					name: require('../assets/detail/QQ截图20170905140238.png'),
					isRed: '0px solid red'
				}, {
					name: require('../assets/detail/QQ截图20170905140249.png'),
					isRed: '0px solid red'
				}, {
					name: require('../assets/detail/QQ截图20170905140249-拷贝.png'),
					isRed: '0px solid red'
				}],
				cartList: [],
				cartTotle: 0,
			}
		},
		created: function() {
			// 模拟登陆

			console.log( this.$route.query.productID)
			// var ws = new WebSocket("ws://duanhui.qianchengwl.cn:8282")
			// var that = this
			// ws.onmessage = function(e) {
				// this.$http.post(store.state.config.apiUrlRoot + "admin/user/login", {
				// 	username: '杭州消防支队',
				// 	password:'123456'
				// }).then((data) => {})
			// }

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
			// this.myrefresh();
			if(this.dd == 1) {
				// window.location.reload();
			}
			this.getWork();
			if(this.showlogin) {
				this.getCartList();
			}
			var a = document.URL.split("=");

			this.$http.post(store.state.config.apiUrlRoot + 'show/show/productDetail', {
				productID: a[1]
			}).then((msg) => {
				this.xingxi = msg.body.content.sellerMsg
				this.exist = msg.body.content.exist
				this.data = msg.body.content
				this.name = msg.body.content.company.sellerName
				this.msg = msg.body.content.company
				this.sellerID = this.msg.sellerID
				var data = msg.body.content.comments.com
				this.qqNum = msg.body.content.qq;
				this.mbx = msg.body.content.mbx
				// http://wpa.qq.com/msgrd?v=3&uin=1439990843&site=qq&menu=yes
				// tencent://message/?uin=
				// tencent://AddContact/?fromId=45&fromSubId=1&subcmd=all&uin=
				this.qqNum = "tencent://AddContact/?fromId=45&fromSubId=1&subcmd=all&uin=" + this.qqNum ;
				this.come = data
				this.all = data
			})
			//固定跳转头部
			$(window).scrollTop(0);

			this.getadd()
			this.statusCart=this.$store.state.status
			
		},

	}
</script>
<style scoped lang="less"> 

// 顶部导航
.nav {
		width: 100%;
		height: 36px;
		line-height: 36px;
		font-family: "MicrosoftYaHei Bold";
		font-size: 12px;
		color: #808080;
		background: #f5f5f5;
		&>div{
			width:1200px;
			margin:0 auto;
			overflow:hidden;
			&>div:nth-child(1){
				float:left;
				color:#333;

			}
				&>div:nth-child(2){
				margin-left:270px;
				float:right;
				&>a {
		color: #333;
		margin-right: 20px;
		text-decoration: none;
	}

			}
		}
	}

	
	.acticge {
		border: solid 1px #e3e3e3;
		margin-right: 5px;
	}
	
	.obb:hover {
		cursor: pointer;
		color: blue;
	}
	
	.Rpo {
		right: 300px;
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
	
	.aaaa {
		position: absolute;
		top: 45%;
		left: 50%;
		background: white;
		color: black;
		font-size: 20px;
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 100;
		transition: all 1s linear;
		width: 0px;
		height: 0px;
	}
	
	
	
	.isRed {
		border: 1px solid #e45944;
	}
	
	// .yong-txt-left {
	// 	width: 45px;
	// 	height: 124px;
	// 	line-height: 45px;
	// 	float: left;
	// }
	
	// .yong-txt-right {
	// 	width: 1074px;
	// 	height: 124px;
	// 	line-height: 45px;
	// 	float: left;
	// }
	
	// .yong-start {
	// 	height: 31px;
	// 	line-height: 36px;
	// 	float: left;
	// 	padding-top: 6px;
	// }
	
	.yong-img {
		float: left;
	}
	
	// .yong-span {
	// 	line-height: 36px;
	// 	float: left;
	// 	margin-right: 10px;
	// 	margin-left: 0px;
	// }
	
	// .yong-bottom-ul-top {
	// 	width: 100%;
	// 	height: 36px;
	// 	font-size: 16px;
	// 	color: #333333;
	// }
	
	// .yong-bottom-ul-bottom {
	// 	clear: both;
	// 	width: 100%;
	// 	height: 124px;
	// 	font-size: 16px;
	// 	color: #333333;
	// }
	
	
	
	
	
	
	
	.yong {
		width: 100%;
		background: #ffffff;
		.yong-content {
		width: 1119px;
		margin: 0 auto;
		
	.yong-top {
		width: 1089px;
		height: 40px;
		font-size: 16px;
		background: #f2f2f2;
		margin-top: 20px;
		padding-left: 30px;
		.yong-top-ul {
		width: 100%;
		padding-left: 0px;
		height: 40px;
		color: #333333;
		font-size: 16px;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		&>li {
		width: 165px;
		height: 40px;
		line-height: 40px;
	}
	}
	}
	
		.yong-bottom-ul {
		width: 100%;
		padding-left: 0px;
		/*  border:1px solid red;*/
		margin-bottom: -29px;
		li {
		height:60px;
		border-bottom: 1px solid #bdbdbd;
		margin-bottom: 25px;
		&>div{
			display: flex;
			&>div{
				width: auto;
				padding-right:20px;
				 font-size: 16px;
				 display: flex;
				 justify-content: center;
				 align-items: center;
				 flex-direction: column;
			}
			&>div{
				&>div{
					width: auto;
					font-size: 17px;margin-top:30px;
				}
			}
		}
	}
	li:last-child {
		border-bottom: 0px solid #bdbdbd;
	}
	
	}
	}
	}

	
	.box {
		width: 100%;
		height: auto;
	}
	
	.gui {
		width: 100%;
		background: #ffffff;
		padding-bottom: 25px;
	}
	
	.gui-ul-txt {
		color: #757575;
	}
	
	.gui-ul {
		padding-top: 25px;
		width: 100%;
		padding-left: 0px;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}
	
	.gui-ul li {
		font-size: 16px;
		width: 350px;
		height: 30px;
		line-height: 30px;
		padding-left: 50px;
		color: #333333;
		padding-bottom: 10px;
	}
	
	.details-bottom {
		width: 100%;
	}
	
	.details-top-right {
		position: absolute;
		right: 15px;
		bottom: 3px;
		font-size: 14px;
		color: #c8996b;
		cursor: pointer;
	}
	
	.details-top-txt {
		display: inline-block;
		line-height: 40px;
		margin-right: 20px;
		font-size: 16px;
	}
	
	.details-top {
		height: 140px;
		border-bottom: 1px solid #bdbdbd;
		padding-left: 50px;
		padding-top: 15px;
		position: relative;
		line-height: 20px;
	}
	
	.details-top>span {
		line-height: 24px;
	}
	
	.details {
		width: 100%;
		background: #ffffff;
		margin-top: 0px;
	}
	
	.rbg {
		background: #e45944;
		color: #ffffff;
	}
	
	.proInfo-top-ul {
		width: 480px;
		height: 47px;
		padding-left: 0px;
		color: #333333;
	}
	
	.proInfo-top-ul li {
		line-height: 47px;
		text-align: center;
		width: 120px;
		height: 47px;
		float: left;
		display: block;
		font-size: 16px;
		cursor: pointer;
	}
	
	.proInfo-top {
		height: 47px;
		width: 100%;
		border-bottom: 1px solid #c8996b;
	}
	
	.proInfo {
		width: 100%;
		margin-top: 20px;
		background: #ffffff;
	}
	
	.re {
		position: absolute;
		color: #C0CCDA;
		left: 300px;
		top: 15px;
		cursor: pointer;
	}
	
	.icno {
		width: 100%;
		height: 150px;
	}
	
	.icno-ul {
		width: 100%;
		padding-left: 0px;
		margin-top: -5px;
	}
	
	.icno-ul li {
		width: 100px;
		height: 50px;
		display: block;
		float: left;
	}
	
	.icno-ul li img {
		margin-top: 12px;
		float: left;
		margin-right: 8px;
	}
	
	.icno-ul li span {
		display: block;
		font-size: 14px;
		float: left;
		line-height: 50px;
	}
	
	.proRight-bottom-btn img {
		margin-top: 15px;
		cursor: pointer;
	}
	
	.proRight-bottom-btn {
		height: 108px;
	}

	.contrast-right-ul {
		width: 380px;
		padding-left: 0px;
		list-style: none;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		&>li{
				width: 100px;
		height: 100px;
		border: 1px solid #bdbdbd;
		margin-top: -17px;

		}
	}
	
	.big {
		font-size: 16px;
		line-height: 30px;
		letter-spacing: 0.8;
	}
	
	.small {
		font-size: 14px;
		cursor: pointer;
		line-height: 40px;
	}
	

	

	

	
	
	.down {
		position: absolute;
		top: 10px;
		right: 12px;
		font-size: 18px;
		cursor: pointer;
	}
	

	

	
.address {
		height: 145px;
		width: 100%;
		&>img{
			margin-top: -60px;
		cursor: pointer;
		margin-left: 200px;
		height:42px;
		}
		.address-top {
		height: 80px;
		width: 100%;
		float: left;
		margin-bottom: 40px;
			.address-top-txt {
		font-size: 16px;
		line-height: 80px;
		height: 80px;
		float: left;
			}
		.address-top-input {
		width: 200px;
		height: 40px;
		border: 1px solid #bdbdbd;
		float: left;
		margin-top: 35px;
		margin-left: 15px;
		position: relative;
		}
	}
	.address-bottom {
		clear: both;
		height: 39px;
		width: 100%;
		display: flex;
		align-items: center;
			.btn-left {
		height: 40px;
		width: 140px;
		float: left;
		border: 1px solid #bdbdbd;
		margin-right: 60px;
		 button {
		width: 42px;
		height: 39px;
		text-align: center;
		background: #ffffff;
		border: none;
	}
	 span {
		display: inline-block;
		width: 45px;
		height: 55px;
		text-align: center;
	}
	}
	
	}
}
	
	
	.price {
		width: 100%;
		height: 165px;
		border-bottom: 1px solid #bdbdbd;
		.price-top {
		height: 100px;
		width: 100%;
		background: #f0f0f0;
		.price-txt {
		width: 400px;
		line-height: 90px;
		float: left;
		padding-left: 10px;
		.price-top-txt {
		color: #333333;
		font-size: 14px;
	        }
		.price-top-prcie {
		color: #c8996b;
		font-size: 30px;
		font-weight: bold;
	    }
	        }
	   .price-top-bottom {
		width: 80px;
		padding-left: 10px;
		margin-top: 20px;
		float: right;
		border-left: 1px solid #bdbdbd;
		height: 60px;
			
	        .price-top-num {
		font-size: 20px;
		color: #333333;
		line-height: 30px;
	       }
	     }
	}
		.price-bottom {
		width: 100%;
		height: 65px;
		border-bottom: 1px solid #bdbdbd;
		line-height: 65px;
	}
	}
	
	
	
	.bRed {
		border-color: 2px solid red;
	}
	
	.content-list {
		width: 100%;
		height: auto;
		border-top: 1px solid #e45944;
		margin-top:-20px;
			.proTop {
		width: 100%;
		height: 46px;
		line-height: 46px;
			span {
		display: inline-block;
		font-size: 14px;
		color: #333;
	}
	}
	.proDetail {
		width: 100%;
		height: 560px;
	}
	
	}
	

	

	
	
	.proLeft {
		width: 400px;
		height: 560px;
		background: #ffffff;
		float: left;
		.proLeft-top {
		width: 360px;
		height: 360px;
		margin: 20px;
		border: 1px solid #bdbdbd;
		position: relative;
		margin-bottom: 5px;
		.proLeft-top-box{
			width: 360px; 
			height: 360px;
			z-index:50;
			  position: absolute; 
			  top: 0 ;
			  cursor: move;
			  border: solid 1px #BDBDBD;
		}
	}
	.proLeft-bottom {
		height: 120px;
		width: 370px;
		padding-left: 20px;
		.proLeft-bottom-ul {
		width: 380px;
		padding-left: 0px;
		list-style: none;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}
	}
	}
	
	
	
	
	
	
	
	.flex-item {
		margin-right: 14px;
		margin-bottom: 10px;
	}
	
	.proLeft-bottom-ul li {
		width: 82px;
		height: 82px;
		cursor: pointer;
		margin-right: 14px;
		margin-bottom: 10px;
	}
	
	.proMiddle {
		width: 538px;
		height: 560px;
		background: #ffffff;
		float: left;
		padding-left: 8px;
		padding-right: 15px;
		h3 {
		color: #333333;
		font-size: 18px;
	}
	.conpny{
		height: 130px;
		width: 515px;
		 display: flex;
		  margin-top: 60px;
		  position: relative;
		  &>div{
			  &>span{
				  font-size:16px; 
				  color: #333333;
				  font-weight: bold;
			  }
			  &>p{
				  span{
				  font-size:14px;
				  color:#e45944;
				  }
			  }
			  img{
				  margin-left: 13px ;
				  border: solid 1px #dcdcdc;
				  position: relative;
				  width:122px;
				   height:122px;
			  }
			  div{
				  width: 122px;
				  height: 122px;
				  position: absolute;
				  top: 0;
				  background-color: rgba(164,159,154,0.5);
				  margin-left: 13px;
				  color:white;
				  z-index: 100;
				  padding:30px  0px;
				   cursor: pointer; 
				   font-weight: bold;
				   text-align: center;

			  }

		  }
	}
	}
	
	.proRight {
		width: 226px;
		height: 560px;
		background: #ffffff;
		float: right;
		border:solid 1px #E4E4E4;
		.proRight-top {
		height: 46px;
		width: 100%;
		border-bottom: 1px solid #bdbdbd;
		text-align: center;
		padding-top: 10px;
		background-color: #f5f5f5;
			.proRight-top-txt {
		color: #333333;
		font-size: 14px;
	}
	}
	.proRight-bottom {
		width: 211px;
		padding-left: 15px;
		height: 475px;
		
	}
	}
	/*公共样式*/
	
	ul,
	li {
		list-style: none;
	}
	
	.red {
		color: #c8996b;
	}
	
	a {
		text-decoration: none;
	}
	
	.module {
		/*  width: 100%;*/
		max-width: 1920px;
		/* background: #f1f1f1; */
		height: auto;
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
		width: 500px;
		border: 1px solid red;
	}
	
	.nav-ul-li {
		width: 65px;
		list-style: none;
		/* display: block; */
		/* display: inline-block; */
		float: left;
		margin-left: 47px;
	}
	
	.content {
		width: 1200px;
		margin: 0 auto;
		height: 100%;
		margin-bottom:20px;
		.content-search {
		margin-top: 36px;
		clear: both;
		width: 100%;
		height: 173px;
			.top {
		height: 120px;
		margin-bottom: 10px;
		clear: both;
		overflow:hidden;
		padding-top: 40px;
		&>div:nth-child(1){
			float: left;
		}
		&>div:nth-child(2){
			float:right;
			margin-top:10px;
			&>img{
				margin-left: 20px;
				 cursor: pointer;

			}
		}
	}
	.bottom{
		&>div{
			width: 120px;
			background-color: #e45944; 
			color: white;
			font-size: 16px;
			text-align: center;
		}
	}
	}
	}
	

	
	
	

	
	.logo {
		margin-top: 80px;
		height: 60px;
		width: 321px;
		margin-left: 20%;
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
		/*float: right;
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
	
	// .bottom {
	// 	clear: both;
	// 	height: 43px;
	// 	line-height: 43px;
	// }
	
	// .bottom-sort {
	// 	width: 211px;
	// 	height: 100%;
	// 	background-color: red;
	// 	float: left;
	// }
	
	// .bottom-sort span {
	// 	font-size: 16px;
	// 	padding-left: 20px;
	// 	color: #ffffff;
	// 	font-weight: bold;
	// }
	
	// .bottom-text {
	// 	margin-left: 245px;
	// 	width: 100px;
	// 	float: left;
	// 	color: red;
	// 	font-weight: bold;
	// }
	
	// .h {
	// 	width: 60px;
	// 	margin-left: 3px;
	// 	height: 3px;
	// 	border: none;
	// 	background-color: red;
	// 	margin-top: -3px;
	// }

	#show {
		width: 120px;
		height: 120px;
		background: blue;
		opacity: 0.3;
		position: absolute;
		cursor: move;
		z-index: 2;
	}
	
	#big_ {
		width: 280px;
		height: 280px;
		position: absolute;
		left: 370px;
		top: 0px;
		z-index: 100;
		overflow: hidden;
		border: solid 1px #F1F1F1;
	}
	
	#big_>img {
		position: absolute;
	}
	
	.active_ {
		cursor: pointer;
	}
</style>