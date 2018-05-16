<template>
	<!-- 头部导航 -->
	<div class="module">
		<div class="lanrenzhijia_service" @click="handleClick">
			<ul>
				<span class="right_bar"></span>
				<a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=1339135094&site=qq&menu=yes" class="right_qq"></a>
				<span class="right_phone" style="margin-bottom:5px;">0571-86738097</span>
			</ul>
		</div>
		<div class="top">
			<div class="top-content">
				<div class="top-logo">
						<a href=""><img src="../assets/web1/logo.png"/></a>
					<!-- <span class="top-logo-txt">商家注册</span> -->
				</div>
				<span class="top-logo-txt"><router-link to="/">返回首页</router-link></span>
			</div>
		</div>
		<!---->
		<div class="bottom">
			<div class="bottom-content">
				<p class="bottom-txt">消防装备协议采购系统商家注册</p>
				<form>
					<div class="bottom-input">
						<span class="input-text">账号 :</span>
						<input type="text" v-model="regList.username">
						<span class="erro-msg" v-if="checkList.showNamef">{{erroMsgName}}</span>
						<p style="color:#BDBDBD ;padding-left: 120px;">*6-12位字符,不得纯数字</p>
					</div>
					<div class="bottom-input" style="height:80px;">
						<span class="input-text">设置密码 :</span>

						<input type="password" @input="p_len" v-model="regList.password" placeholder="输入密码" ref="type1" />
						<span class="erro-msg" >{{passName}}</span>
						<p style="color:#BDBDBD ;padding-left: 120px;" >*8-26位字符,必须含有字母,数字</p>
						<div class="lnu_container">
							<p v-bind:class="{ lovercase_valid: contains_lovercase }">弱</p>
							<p v-bind:class="{ number_valid: contains_number }">强</p>
							<p v-bind:class="{ uppercase_valid: contains_uppercase }">很强</p>
						</div>
					</div>
					<div class="bottom-input">
						<span class="input-text">确认密码 :</span>
						<input type="password" v-model="regList.repassword" placeholder="确认密码" @blur="getPas">
						<span class="erro-msg" v-if="checkList.showPass">{{erroMsgPass}}</span>
					</div>
					<div class="bottom-input" v-if="false">
						<span class="input-text">公司名称 :</span>
						<input type="text" v-model="regList.sellerName" @blur="getCompany">
						<span class="erro-msg" v-if="checkList.showCom">{{erroMsgCom}}</span>
					</div>
					<div class="bottom-input" style="display: flex;">
						<span class="input-text">手机 :</span>
						<input type="text" v-model="regList.mobile">
						<div @click="getCo" :style="{color:red.a,cursor:red.b}" style="width: 80px;height: 36px;text-align: center;line-height: 32px;border: solid 1px #BFBFBF;;margin-left: 1px;cursor: not-allowed;">{{daojis}}</div>
					</div>
					<div class="bottom-input">
						<span class="input-text">验证码 :</span>
						<input type="text" v-model="regList.mobileCode">
					</div>
					<img src="../assets/login/确定注册.png" height="61" width="299" class="que" @click="Reg">
				</form>
			</div>
		</div>
		<transition name='bounce'>
			<div class="bbbb" v-show="com">
				<div >注册成功!<span>{{msgname}}</span></div>
				<ul>
					<li>
					<button  @click="gologin">立即跳转</button>
					</li>
				</ul>
			</div>
		</transition>
	</div>
</template>
<script>
	import store from '../store.js'
	// import '../assets/css/style.css'
	export default {
		name: 'module',
		watch: {
			'regList.username': {
				handler(data) {
					if(data.length < 6 || data.length > 12) {
						this.checkList.showNamef = true;
						this.erroMsgName = "请输入6-12位字符";
					} else {
						this.checkList.showNamef = false;
					}
					if(data.search(/^[0-9]+$/g) != -1) {
						this.checkList.showNamef = true;
						this.erroMsgName = "不得纯数字";
					}
					if(data.search(/\s+/g) != -1) {
						this.checkList.showNamef = true;
						this.erroMsgName = "不得有空格";
					}

				},
				deep: true
			},

		},
		data: function() {
			return {
				com: false,
				msgname: '',
				go: {
					a: 10
				},
				red: {
					a: '#e45944',
					b: 'pointer',
					c: true,
				},
				c: 60,
				daojis: '获取验证码',
				yan: require('../assets/login/获取验证码.png'),
				checkList: {
					showName: false,
					showNamef:false,
					showPass: false,
					showCom: false
				},
				erroMsgName: '',
				erroMsgPass: '',
				erroMsgCom: '',
				password_length: 0,
				contains_lovercase: false,
				contains_number: false,
				contains_uppercase: false,
				passName:'',
				regList: {
					username: '',
					password: '',
					repassword: '',
					sellerName: '',
					mobile: '',
					email: '',
					address: '',
					mobileCode: ''
				},
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
				navList: [{
					name: "服务与培训"
				}, {
					name: "用户中心"
				}, {
					name: "商家入驻"
				}, {
					name: "帮助中心"
				}, ],
				cartList: [{
						companyName: "杭州某某公司",
						infoList: [{
							proImg: require('../assets/hello/cart.png'),
							proName: '商品名称',
							size: '54646',
							price: '84.00',
							total: '84'
						}, {
							proImg: require('../assets/hello/cart.png'),
							proName: '商品名称',
							size: '54646',
							price: '84.00',
							total: '84'
						}, ],
					},
					{
						companyName: "杭州某某公司",
						infoList: [{
							proImg: require('../assets/hello/cart.png'),
							proName: '商品名称',
							size: '54646',
							price: '84.00',
							total: '84'
						}, {
							proImg: require('../assets/hello/cart.png'),
							proName: '商品名称',
							size: '54646',
							price: '84.00',
							total: '84'
						}, ],
					},
				],
			}
		},
		created: function() {

			//this.$router.push('/module/work/update');
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
		ready: function() {},
		// watch:{
		//   regList:{
		//  handler:function(val,ova1,ova2,ova3,ova4,ova5,ova6){
		//  console.log("ceshicedshi");
		//  },
		//    deep:true
		//   },
		// },
		methods: {
			gologin() {
				this.$router.push({
					path: 'login'
				});
			},
			handleClick() {

			},
			getCo() {
				var that = this;
				if(this.red.c) {
					if(this.regList.mobile.length != 11) {
						this.$message({
							showClose: true,
							message: "请输入正确的手机号码",
							type: 'error'
						});
					} else {
						this.$http.post(store.state.config.apiUrlRoot + "admin/user/sendCodeForRegister", {
							mobile: this.regList.mobile,
							status: "register"
						}).then(
							function(response) {
								console.log(response)
								///倒计时
								that.red.c = false
								var time = setInterval(function() {
									that.c--
									that.red.a = '#BFBFBF'
									that.red.b = 'not-allowed'
									that.daojis = that.c + '秒后重试'
									if(that.c <= 0) {
										clearInterval(time)
										that.red.a = '#e45944',
											that.red.b = 'pointer',
											that.daojis = '获取验证码'
										that.red.c = true
										that.c = 60
									}
								}, 1000)
								///
								var data = response.body;
								if(data.code == 1) {
									this.yan = require('../assets/login/2.png');
									that.$message({
										message: data.msg,
										type: 'success'
									});
								} else {
									that.$message.error(data.msg);
									return;
								}
							}
						);
					}
				} else {

				}

				// },
				// }
			},
			p_len: function() {
				
				this.password_length = this.regList.password.length;
				
				// ^[\u4e00-\u9fa5|a-z|^\s]{n,m}$
				
				if(this.contains_lovercase = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,26}$/.test(this.regList.password)){
					this.contains_number=false
					this.contains_uppercase =false
					this.passName=''

					//(字母,数字,特殊字符)
				}else  if(this.contains_number= /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[~!@#$%^&*])[\da-zA-Z~!@#$%^&*]{8,26}$/.test(this.regList.password)){
					this.contains_lovercase=false
					this.contains_uppercase =false
					this.passName=''
					// 大写字母,小写字母,数字,特殊符号最少三种
				}else if(this.contains_uppercase = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[~!@#$%^&?><.,;:'"/\=+-_*])[\da-zA-Z~!@#$%^&><.,;:'"/\=+-_*]{8,26}$/.test(this.regList.password)){
					this.contains_number=false
					this.contains_lovercase =false
					this.passName=''
				}else{
					this.passName='至少8位,必须要有字母,数字,不能有空格';
					return false;	
				}
			},
			getCompany() {
				if(this.regList.sellerName.length > 0) {
					this.checkList.showName = false;
					this.checkList.showPass = false
					this.TestRe();
				} else {
					this.checkList.showCom = true;
					this.erroMsgCom = "公司名称不能为空";
				}
			},
			testText() {
				if(this.regList.username.length > 0) {
					this.checkList.showCom = false;
					this.checkList.showPass = false
					this.TestReg();
				} else {
					this.checkList.showName = true;
					this.erroMsgName = "用户名不能为空";
				}
			},
			getPas() {
				if(this.regList.password != this.regList.repassword) {
					this.erroMsgPass = "前后密码不匹配";
					this.checkList.showPass = true;
					this.checkList.showCom = false;
					this.checkList.showName = false;
				} else {
					this.checkList.showPass = false;
					this.checkList.showName = false;
					this.checkList.showCom = false;
				}
			},
			getEmail() {
				var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/.test(this.regList.email);
				if(!reg) {
					this.checkList.showEmail = true;
					this.erroMsg = '请输入正确的邮箱格式';
				}
			},
			TestReg() {
				var that = this;
				this.$http.post(store.state.config.apiUrlRoot + "admin/user/sellerApply", this.regList).then(
					function(response) {
						var data = response.body;
						if(data.code == 1) {
							that.$message({
								message: data.msg,
								type: 'success'
							});
						} else if(data.code == -1) {
							this.erroMsgName = data.msg;
							this.checkList.showName = true;
							return;
						} else {
							this.checkList.showName = false;
						}
					},
					function(erro) {
						console.log(erro);
					}
				);
			},
			TestRe() {
				var that = this;
				this.$http.post(store.state.config.apiUrlRoot + "admin/user/sellerApply", this.regList).then(
					function(response) {
						var data = response.body;
						if(data.code == 1) {
							that.$message({
								message: data.msg,
								type: 'success'
							});
							// this.$router.push({ path: 'login'});
						} else if(data.code == -2) {
							this.checkList.showCom = true;
							this.erroMsgCom = data.msg;
							return;
						} else {
							this.checkList.showCom = false;
						}
					},
					function(erro) {
						console.log(erro);
					}
				);
			},
			Reg() {
				var that = this;
				 if(this.checkList.showName==true||this.checkList.showNamef==true||this.checkList.showPass==true||this.checkList.showCom==true){
						alert('请修改红字标明的项，再重试')
					}else if(this.contains_uppercase==false&&this.contains_number==false&&this.contains_lovercase==false){
						alert("请修改红字标明的项，再重试")
					}else {
						this.$http.post(store.state.config.apiUrlRoot + "admin/user/sellerApply", this.regList).then(
					function(response) {
						var data = response.body;
						if(data.code == 1) {
							this.com = true
							var str = ''
							var sum = 4
							var time2 = setInterval(() => {
								sum--
								if(sum == 3) {
									str = '...'
								} else if(sum == 2) {
									str = '..'
								} else if(sum == 1) {
									str = '.'
								} else {
									sum = 4
									str = ''
								}
								this.go.a--
									this.msgname = this.go.a + '秒后跳转到登录页面' + str
								if(this.go.a <= 0) {
									clearInterval(time2)
									this.com = false
									this.go.a = 10
									this.$router.push({
										path: 'login'
									});
								}
							}, 1000)

						} else {
							that.$message.error(data.msg);
							return;
						}
					},
					function(erro) {
						console.log(erro);
					}
				);
					}
		
			},
		}
	}
</script>
<style scoped lang="less">
	.bbbb {
		width: 450px;
		height: 200px;
		position: fixed;
		top: 300px;
		left: 50%;
		margin-left:-225px;
		border-radius: 10px;
		 background:#fffafa;
		 border:  solid 1px #E5E5E5;
		 &>div{
			 color:#e45944;
			 font-size: 22px;
			 text-align: center;
			 padding:40px 0px;
			 &>span{
				 color:#e45944;
				 margin-left:10px;
			 }
		 }
		 &>ul{
			 display: flex;
			 &>li{
				 width: 100%;
				 text-align:center;
				 margin:0 auto;
				 &>button{
					 font-size: 18px;
					 background: #e45944;
					 color: white;
					 border: none;
					 border:  solid 1px #EAEAEA;
					 width: 100px;
					 height: 35px;
					 border-radius:5px ;

				 }
			 }

		 }
	}
	
	* {
		margin: 0;
		padding: 0;
		list-style: none
	}
	
	img {
		border: 0;
	}
	
	.lanrenzhijia_service {
		width: 40px;
		height: 200px;
		background: url(http://demo.lanrenzhijia.com/2014/service0924/images/lanrenzhijia.png) no-repeat;
		position: fixed;
		right: 0px;
		top: 300px;
		cursor: pointer;
	}
	
	.lanrenzhijia_service ul {
		display: block;
		width: 160px;
		height: 200px;
		float: left;
		position: relative;
	}
	
	.lanrenzhijia_service ul .right_bar {
		position: absolute;
		width: 40px;
		height: 200px;
		left: 0;
		top: 0;
		display: block;
	}
	
	.lanrenzhijia_service ul .right_qq {
		position: absolute;
		width: 120px;
		height: 85px;
		right: 0;
		top: 0;
		display: block;
	}
	
	.lanrenzhijia_service ul .right_phone {
		position: absolute;
		width: 120px;
		height: 105px;
		padding-top: 10px;
		right: 0;
		bottom: 0;
		display: block;
		text-align: center;
		color: #555;
		font-size: 16px;
		font-family: 'Microsoft Yahei';
		text-decoration: none;
	}
	
	.yan {
		vertical-align: middle;
		cursor: pointer;
	}
	
	.erro-msg {
		color: red;
		margin-left: 10px;
	}
	
	.lovercase_valid, .number_valid, .uppercase_valid {
		background-position: left !important;
		color: rgba(255, 255, 255, 0.9) !important;
	}
	
	.lnu_container {
		display: block;
		margin: 10px 0px 10px 150px;
		width: 320px;
		height: auto;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-pack: justify;
		-ms-flex-pack: justify;
		justify-content: space-between;
	}
	
	.lnu_container p {
		width: 100px;
		height: auto;
		font-size: 12px;
		line-height: 1.2;
		text-align: center;
		border-radius: 2px;
		color: rgba(71, 87, 98, 0.8);
		background: -webkit-linear-gradient(left, #00AD7C 50%, #eee 50%);
		background: linear-gradient(to right, #00AD7C 50%, #eee 50%);
		background-size: 201% 100%;
		background-position: right;
		-webkit-transition: background .3s;
		transition: background .3s;
	}
	
	.que {
		margin-left: 420px;
		margin-top: 80px;
		cursor: pointer;
	}
	
	.se {
		width: 150px;
		height: 40px;
		margin-left: 4px;
		/* border:1px solid #bdbdbd;*/
	}
	
	.el-input__inner {
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
		background-color: #fff;
		background-image: none;
		/*    border-radius: 4px;*/
		border: 1px solid #bfcbd9;
		box-sizing: border-box;
		color: #1f2d3d;
		font-size: inherit;
		height: 36px;
		line-height: 1;
		outline: 0;
		padding: 3px 10px;
		transition: border-color .2s cubic-bezier(.645, .045, .355, 1);
	}
	
	.bottom-input {
		width: 900px;
		height: 40px;
		margin-left: 260px;
		margin-bottom: 30px;
	}
	
	.bottom-input input {
		width: 413px;
		height: 36px;
		border: none;
		border: 1px solid #bfbfbf;
		margin-left: 10px;
		padding-left: 5px;
	}
	
	.input-text {
		width: 110px;
		height: 40px;
		/* display: inline-block; */
		line-height: 40px;
		text-align: right;
		color: #757575;
		font-size: 20px;
		float: left;
	}
	
	.bottom-txt {
		color: #e45944;
		font-size: 30px;
		text-align: center;
		font-weight: bolder;
		height: 165px;
		line-height: 110px;
	}
	
	.top {
		height: 120px;
		width: 100%;
		background: #f1f1f1;
	}
	
	.top-content {
		width: 1200px;
		margin: 0 auto;
		height: 100%;
		overflow: hidden;
		position: relative;
	}
	
	.bottom-content {
		width: 1200px;
		margin: 0 auto;
		background: #ffffff;
		height: 1000px;
	}
	
	.top-logo {
		float:left;
		margin-top:30px;
		
	}
	/* .top-logo img {
		padding-right: 10px;
		border-right: 1px solid #bdbdbd;
		
	} */
	
	.top-logo-txt {
		width: 200px;
		color: #757575;
		font-size: 17px;
		margin-top:50px;
		font-weight: bold;
		float:right;
		margin-top:50px;
		text-align:center;
		&>a{
			color:#333;
		}
	}
	
	.bottom {
		background: #e5e5e5;
		width: 100%;
		padding-top: 40px;
		height: 1486px;
	}
</style>