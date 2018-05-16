<template>
	<!--头部-->
	<div >
		<div class="lanrenzhijia_service"  style="z-index:200;">
		<span style="color:#ffffff;" v-if="!showlogin" class="yy">{{msg}}</span>
	  <ul>
	    <span class="right_bar"></span>
	    <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=1339135094&site=qq&menu=yes" class="right_qq" ></a>
	    <span class="right_phone" style="margin-bottom:5px;">0571-86738097</span>
	  </ul>
          </div>
		<component v-show='showa' :sss="showme" ref='r1' is='searc'></component>
		<div v-show="!showa">
			<div class="top"style="width:100">
				<div class="col-lg-offset-2 col-lg-3 col-xs-3 col-sm-3" ><img src="../assets/img/home.png" /><span class="top_1">&ensp;欢迎来到消防技术装备协议采购平台!&ensp;</span>
					<router-link to="/login" v-if="showlogin" >请登录</router-link>
				</div>
				<div class="col-lg-offset-2 col-lg-3 text-center" style="margin-left:380px;">
					<!-- <a style="margin: 0 10px; font-weight: bold;" v-for="(val,index) in a" class="a_href" href="/">{{val}}</a> -->
					<a href="/" class="a_href">服务与培训</a>
					<a  class="a_href" @click="handleOut" style="cursor:pointer;">用户中心</a>
					<a href="http://www.xfxycg.com/#/register" class="a_href">商家入驻</a>
					<a href="#/help" class="a_href">帮助中心</a>
				</div>
			</div>
			<!--头部结束-->

			<div class="row" style="margin-top: 31px; height: 140px;">
				<div class="col-lg-offset-2 col-sm-offset-0 col-xs-offset-0 col-lg-2 col-xs-2 col-sm-2 "><img src="../assets/login/indexlogo.png" /></div>
				<div style="padding: 0; margin-left: 70px; margin-top: 12px;" class="col-xs-2 col-sm-2 col-lg-2">
					<input v-model="showme.a" @keydown.enter="gogo()" type="text" style="height: 40px;border: solid 1px #C8996B;border-bottom-right-radius: 0;border-top-right-radius: 0;" class="form-control">
				</div>
				<div style="padding: 0;margin-top: 12px;" class="col-lg-1 col-xs-1 col-sm-1">
					<button @click="keysearch" style="background: #C8996B; height: 40px; position: initial;border-bottom-left-radius: 0;border-top-left-radius: 0;color: white;font-size: 14px;" class="btn btn-sm">搜索</button>
				</div>
				<div style="margin-top: 11px;">
					<img @click="loding" style="margin-left: 5%;cursor: pointer;" src="../assets/img/协议供货.png" />
					<img @click="loding2" style="margin-left: 24px; cursor: pointer;" src="../assets/img/用户中心.png" />
				</div>
				<!------->
			</div>

			<!--标题-->
			<div class="container-fluid">
				<div class="row" style="margin-top: -48px;">
					<div style="display: flex;justify-content: space-around; width: 1300px; margin: 0 auto;" v-if="msg2.length>0">
						<router-link class='mov' style='color: #333333; font-size: 18px;  font-weight: bold;' to="/">首页</router-link>
						<div style="; color: #333333; position: relative;" v-for="(val,index) in msg2" @click="hadleSort(index)">
							<span @mouseout="ass(index)" @mouseover="add(index)"><router-link class='mov':class="{active_2:index==showshang}" style='color: #333333; font-size: 18px;  font-weight: bold; width: 100%;'  to="/">{{val.catName}}</router-link></span>

						</div>
					</div>

					<transition name='fade' v-for="(val,index) in msg2">
						<div style="height: 1px;width: 100%;position: absolute;" @mouseout="ass(index)" @mouseover="add(index)">
							<transition name='fade'>
								<div style="height:150px; width:100%; z-index: 200;position: absolute;top:1;;padding-top:10px;background: white;" v-show="index==showshang">
									<div style="display: flex;flex-direction:row;width:1000px;flex-wrap: wrap;justify-content:flex-start; font-size: 18px;margin: 0 auto;z-index: 300px;">
										<p style="height: 20px; width: 15%; overflow: hidden;" v-for="(a,b) in msglist[index]" class="text-center" @click="ad2(a.catID)">
											<span class='mov' style='color: #333333; font-size:14px;  font-weight: bold; width: 100%;opacity:1;cursor: pointer;'>{{a.catName}}</span>

										</p>
									</div>
								</div>
							</transition>
						</div>
					</transition>

				</div>
			</div>
			<!--轮播-->
			<div style=" margin-top:20px ; position: relative;">
				<div style="position: relative;">
					<div style="height: 450px;">
						<transition name='fade' style='position: relative;'>
							<li style="position: relative;" v-show="show==true"><img src="../assets/img/形状 23.png" /></li>
						</transition>
					</div>
					<div style="position: absolute; height: 450px; top: 0;">
						<transition name='fade'>
							<li style="position: relative;" v-show="show==false"><img src="../assets/img/形状 24.png" /></li>
						</transition>
					</div>

				</div>
				<ul style="display: flex; position: absolute; left: 45%;top: 93%;">
					<li @click="show=true" :class="{active_3:show}" style="width: 15px;height: 15px;border: solid 1px #cbcbcb ;background: white; z-index:800;border-radius:50% ;margin: 0 10px;cursor:pointer;"></li>
					<li @click="show=false" :class="{active_3:!show}" style="width: 15px;height: 15px;border: solid 1px #cbcbcb ;border-radius:50%; background: white; z-index:800;cursor: pointer ;"></li>
				</ul>
				<div style="width: 1400px; display: flex; justify-content: space-between;position: absolute; top: 200px;left:280px;">
					<img style="cursor: pointer;" @click="pre" src="../assets/img/箭头.png" />
					<img style="cursor: pointer;" @click="next" src="../assets/img/箭头-拷贝.png" />
				</div>
			</div>
			<!--轮播结束-->
			<div class="container-fluid" style=" height:104px; background: #F5F5F5;padding-top: 32px;">
				<div class="row">
					<div class="col-lg-offset-2 col-lg-3"><img style="margin-left: 14px;" src="../assets/img/热销推荐.png" /></div>
					<div class="col-lg-offset-4 col-lg-3"><img src="../assets/img/箭头-(1)-拷贝-4.png" @click="gend" /></div>
				</div>
			</div>
			<!--热销产品-->
			<div class="container-fluid" style="background-color:#F5F5F5;">
				<div style="width: 1184px;height: 494px;margin:  0 auto; display: flex;position: relative;">

					<div class="row" style="width: 592px;height: 494px; background: #FFFFFF; margin-right: 15px;position: absolute;" v-for="(val,index) in rexiao">
						<div class="text-center" style="padding-top: 20px;"><img @click="ad(rexiaocanp[0].productID)" width="330px" height="330px" class="active_ active_1" :src="rexiaocanp[0].img" /></div>
						<div class="text-center" style="margin-top: 20px;"><span style="font-size: 22px;">{{rexiaocanp[0].name}}</span></div>
						<div class="text-center" style="margin-top: 20px;"><span style="font-size: 20px; color: #6e6e6e;">{{rexiao[0].sellerName}}</span></div>
					</div>
					<div class="row" style="width: 592px;height: 494px; background: #FFFFFF;margin-left:0;position: absolute;left: 50%;overflow: hidden;background: #f5f5f5;">
						<div style="height: 240px; display: flex;background: white; margin-bottom: 10px;" v-for="(val,index) in rexiao" v-show="index>=1">
							<div class="text-center"><img width="228px" height="228px" @click="ad(rexiaocanp[index].productID)" class="active_ active_1" :src="rexiaocanp[index].img" /></div>
							<div style="line-height: 40px;padding-left:20px ;">
								<div class="text-center" style="margin-top: 20px;"><span style="font-size: 22px;">{{rexiaocanp[index].name}}</span></div>
								<div class="text-left" style="margin-top: 20px;"><span style="font-size: 16px; color: #6e6e6e;">{{val.sellerName}}</span></div>
								<div><span style="font-size: 18px; color: #be4141;">￥{{rexiaocanp[index].price}}</span></div>
								<div><img class="active_" src="../assets/img/进入店铺.png" @click="enterShop(index)" /></div>
							</div>
						</div>
					</div>

				</div>
			</div>
			<!--商品头部-->
			<!--侦检器材-->
			<div style="background: #F5F5F5;">
				<div class="container-fluid" style=" height:84px; background: #F5F5F5;padding-top: 32px;">
					<div class="row">
						<div class="col-lg-offset-2 col-lg-3"><img style="margin-left: 19px;" src="../assets/img/侦检器材.png" /></div>
						<div class="col-lg-offset-1 col-lg-4 text-center"><span style="font-size: 18px; margin-right: 40px;">生命探测仪/漏电探测仪/漏电探测仪/漏电探测仪</span><span class="active_" style="font-size: 18px;cursor: pointer;"@click="zhenjian()">查看更多></span></div>
					</div>
				</div>
				<div class="container-fluid" style="  background: #F5F5F5;">
					<div class="row" style="width: 1200px; margin: 0 auto;">
						<img class="active_" src="../assets/img/查看全部.png" />
					</div>
				</div>
				<!--商品列表-->
				<div class="container-fluid">
					<div style="width: 1200px;margin: 0 auto; display: flex;background: #F5F5F5;">
						<div style="width: 390px;height: 562px;display: flex; align-items: center;flex-direction: column;background: white;margin-right: 15px;margin-top: 10px;"  v-for="(val,index) in data[1]" v-if="index==0">
							<div style="padding-top: 9px;"><img width="340px" height="340px" class="active_ active_1" :src="val.titleImage" @click="ad(val.productID)" /></div>
							<div style="margin-top: 64px;font-size: 22px;">{{val.name}}</div>
							<div style="font-size: 24px;color: #b4272d;margin-top: 62px;">￥{{val.price}}</div>
						</div>
						<div style="width: 810px;height: 586px; display: flex;flex-wrap: wrap;">
							<div style="width: 255px;height: 270px;margin-left: 11px; margin-top:10px;display: flex;align-items: center; flex-direction: column;background: white;" v-for="(val,index) in data[1]" v-if="index>0">
								<div style="padding-top: 9px;"><img width="168px" height="168px" @click="ad(val.productID)" class="active_ active_1" :src="val.titleImage" /></div>
								<div style="margin-top: 12px;font-size: 16px; width: 80%; text-align: center;">{{val.name}}</div>
								<div style="font-size: 16px;color: #b4272d;margin-top: 10px;">￥{{val.price}}</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<!--商品结束-->
			<!--灭火器材-->
			<div style="background: #F5F5F5;">
				<div class="container-fluid" style=" height: 84px; background: #F5F5F5;padding-top: 32px;">
					<div class="row">
						<div class="col-lg-offset-2 col-lg-3"><img style="margin-left: 19px;" src="../assets/img/灭火器材.png" /></div>
						<div class="col-lg-offset-1 col-lg-4 text-center" style="line-height: 30px;"><span style="font-size: 18px;margin-right: 40px;">生命探测仪/漏电探测仪/漏电探测仪/漏电探测仪</span><span style="font-size: 18px;cursor: pointer;"@click="miehuo">查看更多></span></div>
					</div>
				</div>
				<div class="container-fluid" style="  background: #F5F5F5;">
					<div class="row" style="width: 1200px; margin: 0 auto;">
						<img src="../assets/img/查看全部-拷贝.png" />
					</div>
				</div>
				<!--商品列表-->
				<div class="container-fluid">
					<div style="width: 1200px;margin:  0 auto; display: flex;background: #F5F5F5;">
						<div style="width: 390px;height: 562px;display: flex; align-items: center;flex-direction: column;background: white;margin-right: 15px;margin-top: 10px;"  v-for="(val,index) in data[0]" v-if="index==0">
							<div style="padding-top: 9px;"><img width="340px" height="340px" class="active_ active_1" :src="val.titleImage" @click="ad(val.productID)" /></div>
							<div style="margin-top: 64px;font-size: 22px;">{{val.name}}</div>
							<div style="font-size: 24px;color: #b4272d;margin-top: 62px;">￥{{val.price}}</div>
						</div>
						<div style="width: 810px;height: 586px; display: flex;flex-wrap: wrap;">
							<div style="width: 255px;height: 278px; display: flex;align-items: center; flex-direction: column;background: white;margin-left: 11px; margin-top: 10px;" v-for="(val,index) in data[0]" v-if="index>0">
								<div style="padding-top: 9px;"><img width="168px" height="168px" @click="ad(val.productID)" class="active_ active_1" :src="val.titleImage" /></div>
								<div style="margin-top: 22px;font-size: 16px;width: 80%; text-align: center;">{{val.name}}</div>
								<div style="font-size: 18px;color: #b4272d;margin-top: 10px;">￥{{val.price}}</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!--防护器材-->
			<div style="background: #F5F5F5;">
				<div class="container-fluid" style=" height: 84px; background: #F5F5F5;padding-top: 32px;">

					<div class="row">
						<div class="col-lg-offset-2 col-lg-3"><img style="margin-left: 19px;" src="../assets/img/防护器材.png" /></div>

						<div class="col-lg-offset-1 col-lg-4 text-center"><span style="font-size: 18px; margin-right: 40px;">生命探测仪/漏电探测仪/漏电探测仪/漏电探测仪</span><span style="font-size: 18px;cursor: pointer;"@click="fanghu">查看更多></span></div>
					</div>
				</div>
				<div class="container-fluid" style="  background: #F5F5F5;">
					<div class="row" style="width: 1200px; margin: 0 auto;">
						<img src="../assets/img/图层-35.png" />
					</div>
				</div>
				<!--商品列表-->
				<div class="container-fluid">
					<div style="width: 1200px;margin:  0 auto; display: flex; background: #F5F5F5;">
						<div style="width: 390px;height: 562px;display: flex; align-items: center;flex-direction: column;background: white;margin-right: 15px;margin-top: 10px;"  v-for="(val,index) in data[2]" v-if="index==0">
							<div style="padding-top: 9px;"><img width="340px" height="340px" class="active_ active_1" :src="val.titleImage" @click="ad(val.productID)" /></div>
							<div style="margin-top: 64px;font-size: 22px;">{{val.name}}</div>
							<div style="font-size: 24px;color: #b4272d;margin-top: 62px;">￥{{val.price}}</div>
						</div>
						<div style="width: 810px;height: 586px; display: flex;flex-wrap: wrap;">
							<div style="width: 255px;height: 278px; display: flex;align-items: center; flex-direction: column;background: white;margin-left: 11px; margin-top: 10px;" v-for="(val,index) in data[2]" v-if="index>0">

								<div style="padding-top: 9px;"><img width="168px" height="168px" @click="ad(val.productID)" class="active_ active_1" :src="val.titleImage" /></div>
								<div style="margin-top: 22px;font-size: 16px;width: 80%;text-align: center;">{{val.name}}</div>
								<div style="font-size: 18px;color: #b4272d;margin-top: 10px;">￥{{val.price}}</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!--照明器材-->
			<div style="background: #F5F5F5;">
				<div class="container-fluid" style=" height: 84px; background: #F5F5F5;padding-top: 32px;">

					<div class="row">
						<div class="col-lg-offset-2 col-lg-3"><img style="margin-left: 19px;" src="../assets/img/照明器材.png" /></div>
						<div class="col-lg-offset-1 col-lg-4 text-center"><span style="font-size: 18px;margin-right: 40px;">生命探测仪/漏电探测仪/漏电探测仪/漏电探测仪</span><span style="font-size: 18px;cursor: pointer;"@click="zhaoming">查看更多></span></div>
					</div>
				</div>
				<div class="container-fluid" style="  background: #F5F5F5;">
					<div class="row" style="width: 1200px; margin: 0 auto;">
						<img src="../assets/img/图层-36.png" />
					</div>
				</div>
				<!--商品列表-->
				<div class="container-fluid" style="padding-bottom: 60px;padding-top: 9px;">
					<div style="width: 1200px;margin:  0 auto; display: flex;background: #F5F5F5;">
						<div style="width: 390px;height: 562px;display: flex; align-items: center;flex-direction: column;background: white;margin-right: 15px;margin-top: 10px;"  v-for="(val,index) in data[3]" v-if="index==0">
							<div style="padding-top: 9px;"><img width="340px" height="340px" class="active_ active_1" :src="val.titleImage" @click="ad(val.productID)" /></div>
							<div style="margin-top: 64px;font-size: 22px; text-align: center;width: 80%;">{{val.name}}</div>
							<div style="font-size: 24px;color: #b4272d;">￥{{val.price}}</div>
						</div>
						<div style="width: 810px;height: 586px; display: flex;flex-wrap: wrap;">
							<div style="width: 255px;height: 278px; display: flex;align-items: center; flex-direction: column;background: white;margin-left: 11px; margin-top: 10px;" v-for="(val,index) in data[3]" v-if="index>0">
								<div style="padding-top: 9px;"><img width="168px" height="168px" @click="ad(val.productID)" class="active_ active_1" :src="val.titleImage" /></div>
								<div style="margin-top: 22px;font-size: 16px;width:80%;text-align: center;overflow:hidden;line-height: 19px;">{{val.name}}</div>
								<div style="font-size: 18px;color: #b4272d;margin-top: 16px;">￥{{val.price}}</div>
							</div>
						</div>
					</div>
				</div>
				<!--结束-->
			</div>
			<!--底部-->
			<div class="footer">
				<div class="footer-top" style=" background-color:white;">
					<div class="content" style=" display: flex; margin:  0 auto;">
						<div style=" display: flex;align-items: center;flex-direction:column;justify-content:  space-around;width: 300px;">
							<div style="font-size: 20px;">客服电话</div>
							<div style="font-size: 25px;">0571-86738097</div>
							<div style="font-size: 20px;">9:00-18:00</div>
						</div>
						<div>
							<ul class="footer-ul" >
								  <router-link to="/cai"><p style="font-weigh:bolder;color:#c8996b;line-height:35px;cursor:pointer;">采购指南</p></router-link>
								<li  style="margin-bottom:5px;">采购流程</li>
								<li  style="margin-bottom:5px;">政策问题</li>
								<li  style="margin-bottom:5px;">常见问题</li>
							</ul>
							<ul class="footer-ul" >
								<p style="font-weigh:bolder;color:#c8996b;line-height:35px;cursor:pointer;">品质保证</p>
								<li  style="margin-bottom:5px;">比价说明</li>
								<li  style="margin-bottom:5px;">发票制度</li>
							</ul>
                                                                                    <ul class="footer-ul" >
								  <router-link to="san"><p style="font-weigh:bolder;color:#c8996b;line-height:35px;cursor:pointer;">商家服务</p></router-link>
								<li  style="margin-bottom:5px;">入驻须知</li>
								<li  style="margin-bottom:5px;">入驻流程</li>
								<li  style="margin-bottom:5px;">商家须知</li>
							</ul>
						</div>
					</div>
				</div>
				<div class="footer-bottom">
					<div class="content">
						<span>在线咨询</span>
						<span>帮助中心</span>
						<span>服务热线&nbsp;:&nbsp;0571-86738097</span>
					</div>
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
	import searc from './show.vue'
	import "../assets/js/nav.js"
	export default {
		name: 'module',
components: {
		searc,
	},
	data: function() {
		return {
			com: false,
			showme: {
				a:''
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
				msgname: ''

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
			this.set()
								$(function(){
	$(".lanrenzhijia_service").hover(function(){
		$(this).animate({width:'160px'});
	},function(){
		$(this).animate({width:'40px'});
	});
                });

		},
		methods: {
			handleOut(){
				// alert(1)
			this.$http.post(store.state.config.apiUrlRoot + 'admin/user/logout').then(
				function(response){
				var data=response.body;
				if(data.code==1){
					this.com=true
					this.locatio()
					this.msgname=data.msg
					this.getWork()
				}else{
                                                       this.com=true
                                                       this.locatio()
				       this.msgname=data.msg	
				}	
				},
			);	
			},
			gogo(){
				this.keysearch()
			},
			zhenjian(){
				this.$router.push({ path: 'sortAll', query: { productID: this.msg2[1].catID }});
				$(window).scrollTop(0);
			},
			miehuo(){
				this.$router.push({ path: 'sortAll', query: { productID: this.msg2[0].catID }});
				$(window).scrollTop(0);
			},
			fanghu(){
				this.$router.push({ path: 'sortAll', query: { productID: this.msg2[2].catID }});
				$(window).scrollTop(0);
			},
			zhaoming(){
				this.$router.push({ path: 'sortAll', query: { productID: this.msg2[6].catID }});
				$(window).scrollTop(0);
			},
			hadleSort(index){

				this.$router.push({ path: 'sortAll', query: { productID: this.msg2[index].catID }});
			},
			gend() {
				this.$router.push({
					path: 'many',
					query: {}
				});

			},
			locatio() {
				this.com = true

				var that = this
				setTimeout(function() {
					that.com = false
				}, 2000)
			},
			keysearch() {
				var that=this
				if(this.showme.a == '' || this.showme.a == Number) {
					this.msgname = '请输入关键字'
					this.locatio()
				} else {
					this.$http.post(store.state.config.apiUrlRoot + 'show/show/search', {
						key:this.showme.a
					}).then((data) => {
						if(data.body.code == -3) {
							this.msgname = data.body.msg
							this.com = true
							this.locatio()
						} else {
							this.showa=true
							this.$refs.r1.loding3()
						}
					})
				}


			},
			enterShop(index) {
				this.$router.push({
					path: 'shop',
					query: {
						ss:0,
						sellerID: this.shopList[index].sellerID
					}
				});
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
								window.location.href = "http://www.xfxycg.com/#/protocol";
							} else if(data.content.data.roleID == 4) {
								window.location.href = "http://www.xfxycg.com/#/protocol";
							} else if(data.content.data.roleID == 2) {
								window.location.href = "http://www.xfxycg.com/#/protocol";
							} else {

								this.msgname = '抱歉,你没有这个权限'
								this.locatio()
							}
						} else {
							this.msgname = '请您先登录'
							this.locatio()
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
							this.msgname = '请您先登录'
							this.locatio()
						}
					}
				);
				// this.$router.push({ path: 'login'});
			},
			ad2(d) {
				this.$router.push({
					path: 'sortAll',
					query: {
						productID: d
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

			},
			GetData() {
				//				this.$http.post(store.state.config.apiUrlRoot+'')

			}
		},
		mounted: function() {
			this.$http.post(store.state.config.apiUrlRoot + 'show/show/index').then((data) => {

				var data2 = data.body.content.selectProductList

				var data3 = data.body.content.hotProductList

				this.shopList = data.body.content.hotProductList
				for(var n = 0; n < data2.length; n++) {
					this.data.push(data2[n].product)
				}

				for(var l = 0; l < data3.length; l++) {
					this.rexiao.push(data3[l])
					this.rexiaocanp.push(data3[l].titleImage)
				}
			})

		}

	}
</script>
<style scoped>
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
		top: 30%;
		left: 42%;
		width: 250px;
		height: 100px;
		background: rgba(0, 0, 0, 0.7);
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
</style>