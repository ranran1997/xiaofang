<template >
	<!-- 头部导航 -->

	<div class="login">
	<div>
		<div class="top" >
			<div class="nav-left"><img src="../assets/web1/首页-F.png" /><span class="top_1">&ensp;欢迎来到消防技术装备协议采购平台!&ensp;</span>
				
			</div>
			<div class="nav-right">
			<router-link to="/">首页</router-link>
				<a href="javascript:;"  @click="loding2">用户中心</a>
					<router-link to="/" >服务与培训</router-link >
				
				<router-link to="register">商家入驻</router-link>
				<router-link to="help">帮助中心</router-link>
			</div>
		</div>
	</div>
			
		<!--头部结束-->
		<!--登录框-->
		<div>
			<img height="100%" width="100%" src="../assets/img/2.png"/>
			<div >
				<p>密码登录</p>
				<div>
					<div v-show="savelook">
						<div v-for="(val,index) in savename" class="beixuan1" @click="intname(val)" v-show="false" :key="index">{{val}}</div>
					</div>
					<input  type="text" name="username" id="username" @focusout="ssss" @focusin="savelook=true" autocomplete="off" v-model="loginList.username" placeholder="请输入账号/邮箱/手机号" />
					<img style="top:100px;" src="../assets/login/账号.png" />
					<input  type="password" name="password" id="password" v-model="loginList.password" placeholder="请输入密码" @keydown="testCo($event)" />
					<img style="top:170px;" src="../assets/login/密码-(3).png"/>
					<input class="btnSum" type="button" value="登录" @click="handleSubmit" />
				</div>
				<div>
					<input type="checkbox" v-model="jizhu" @click="changeState" /><span style="color: #757575;">记住账号</span>
				</div>
				<div >
					<span @click="handleForgot">忘记用户名？忘记密码？</span>
					<span @click="handleReg">商家注册</span>
				</div>
			</div>
		</div>
		<!--底部-->
		<foot/>
	

			<div class="modal fade bs-example-modal-sm" tabindex="-1" role="dialog" id="myModal" aria-labelledby="mySmallModalLabel">
				<div class="modal-dialog modal-sm" role="document">
					<div class="modal-content">
						<div class="modal-header">
							<h3 class="text-center">提示</h3>
						</div>
						<div class="modal-body">
							{{warningmsg}}
						</div>
						<div class="modal-footer">
							<button class="btn btn-success" data-dismiss='modal'>确认</button>
						</div>
					</div>
				</div>
			</div>
</div>


</template>
<script>
	import store from '../store.js'
	import foot from '../components/common/footer'

	export default {
		name: 'module',
		 components: {
    foot
  },
		data: function() {
			return {
				jizhu: false,
				savelook: false,
				a: ['服务与培训', '用户中心', '商家入驻', '帮助中心'],
				a2: ['首页', '侦检器材', '防护装备', '救生器材', '输传器材', '排烟器材', '照明器材', '破拆器材', '堵漏器材', '洗消器材', '通讯器材', '警戒器材', '其他'],
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
				loginList: {
					username: "",
					password: '',
				},
				show: true,
				data: [],
				msg2: [],
				showshang: -1,
				showxia: false,
				rexiao: [],
				rexiaocanp: [],
				keyname: '',
				msglist: [],
				warning: [],
				warningmsg: '',
				Number: 0,
				savename: [],
			 host:"http://"+window.location.host
			}
		},
		mounted: function() {			
			this.handleSubmit()
			this.$http.post(store.state.config.apiUrlRoot + 'show/show/index').then((data) => {
				var msg = data.body.content.catList
				this.shopList = data.body.content.hotProductList
				for(var m = 0; m < msg.length; m++) {
					this.msglist.push(msg[m].list)
					this.msg2.push(msg[m])
				}
			})
				this.getCookie()
				

		},
		methods: {
			setCookie(name,value,exdays){
				var exdate=new Date();
				exdate.setTime(exdate.getTime()+24*60*60*1000*exdays);
				document.cookie=name+"="+value+';expires'+exdate.toGMTString();
			},
			getCookie(){
				if(document.cookie.length>0){
					var arr=document.cookie.split('; ');
					for(var i=0;i<arr.length;i++){
						var arr2=arr[i].split('=');
						// console.log(arr2)
						if(arr2[0]=='username'){
							this.jizhu=true;
							this.loginList.username=arr2[1]
						}
				     }
				}	
			},
			delCookie(){
				this.setCookie("","",-1)
			},
			changeState(){
				this.jizhu=!this.jizhu
				// console.log(this.jizhu)
			},
			ad2(d) {
				this.$router.push({
					path: 'sortAll',
					query: {
						catID: d
					}
				});
			},
			testCo: function(ev) {
				if(ev.keyCode == 13) {
					this.handleSubmit();
				}
			},
			intname(val) {
				this.loginList.username = val
				this.savelook = false
			},
			ssss() {
				setTimeout(() => {
					this.savelook = false
				}, 100)
			},
			loding() {
				this.$http.post(store.state.config.apiUrlRoot + 'admin/user/workIndex', {}).then((data) => {
					if(data.body.code == 1) {
						this.$router.push({
							path: '/protocol',
						});
					} else {
						alert("请登录")
					}
				})
			},
			loding2() {
				this.$http.post(store.state.config.apiUrlRoot + 'admin/user/workIndex', {}).then((data) => {
					if(data.body.code == 1) {
						this.$router.push({
							path: '/module',
						});
					} else {
						alert("请登录")
					}
				})
			},
			comto() {
				var com = confirm(this.warning.msg)
				if(com == true) {
					this.$http.post(store.state.config.apiUrlRoot + "admin/user/login", {
						username: this.loginList.username,
						password: this.loginList.password,
						'clientID': this.warning.content.clientID,
						'userID': this.warning.content.userID,
						'marking': 'yes'
					}).then((data) => {
						console.log(data)
						var data = data.body
						if(this.jizhu == true && this.Number > 1) {
					                   this.setCookie("username",this.loginList.username,7)
						}else if(this.jizhu == false){
							this.delCookie()
						}
						var host="http://"+window.location.host
						if(data.content.roleID ==1) {
							 
							window.location.href = this.host+"/admittance";
						} else if(data.content.roleID == 2) {
							window.location.href = this.host+'/supply';
						} else if(data.content.roleID == 3) {
							window.location.href = this.host+'/qiancheng';
						} else if(data.content.roleID == 4) {
							window.location.href = this.host+'/zhi/#/module';
						} else if(data.content.roleID == 5) {
							window.location.href = host+'/zong/#/module';
						} else if(data.content.roleID == 6) {
							window.location.href = this.host+'/qiancheng';
						}else if(data.content.roleID ==7) {
							window.location.href = this.host+'/big/#/purchase';
						}else if(data.content.roleID == 8) {
							window.location.href = this.host+'/middle/#/module';
						}
						that.$message({
							message: data.msg,
							type: 'success'
						});
					})
				} else {
					location.reload()
				}
			},
			handleSubmit() {
				this.Number++
				var that = this
				// var ws = new WebSocket("ws://duanhui.qianchengwl.cn:8282")
				if(that.Number <= 1) {
					return
				}
				// ws.onmessage = function(e) {
					that.$http.post(store.state.config.apiUrlRoot + "admin/user/login", {
						username: that.loginList.username,
						password: that.loginList.password
					}).then((data) => {
						if(data.body.code == -2) {
							if(that.Number > 1) {
								that.warningmsg = data.body.msg
								$('#myModal').modal('show')
							
							}
						} else if(data.body.code == 1) {
							var set = data.body.content
							if(set.hasOwnProperty('roleID')) {
								if(that.jizhu == true && that.Number > 1) {
								                   that.setCookie("username",that.loginList.username,7)
									}else if(that.jizhu == false){
										that.delCookie()
									}
						
								
									if(set.roleID ==1) {	
										window.location.href = this.host+"/admittance";
									} else if(set.roleID == 2) {
										window.location.href = this.host+'/supply';
									} else if(set.roleID == 3) {
										window.location.href = this.host+'/qiancheng';
									} else if(set.roleID == 4) {
										window.location.href = this.host+'/zhi/#/module';
									} else if(set.roleID == 5) {
										window.location.href = this.host+'/zong/#/module';
									} else if(set.roleID == 6) {
										window.location.href = this.host+'/qiancheng';
									}else if(set.roleID ==7) {
										window.location.href = this.host+'/big/#/module';
									}else if(set.roleID == 8) {
										window.location.href = this.host+'/middle/#/module';
									}
							} else {
								that.warning = data.body
								that.comto()
							}

						} else if(data.body.code == -421) {
							that.warning = data.body
							that.comto()

						}

					});
				// }
			},
			handleReg() {
				this.$router.push({
					path: 'register'
				});
			},
			handleForgot() {
				this.$router.push({
					path: 'forgotPas'
				});
			},
		}
	}
</script>
<style scoped lang="less">
.login{
	&>div:nth-child(1){
		width:100%;
		background-color:#f5f5f5;
		border-bottom:1px solid #e1e1e1;
		.top {
		
		height: 36px;
		margin: 0 auto;
		width:1200px;
		line-height:36px;
		.nav-left{
			float:left;
		}
		.nav-right{
			float: right;
			&>a {
				color: #333;
				margin-right: 20px;
				text-decoration: none;
			}
		}
	}
	}
	&>div:nth-child(2){
		position: relative;
		 margin-top: 4%;
		 display: flex;
		 align-items: center;
		 width:100%;
		 &>div{
			 width: 363px;
			 height: 359px;
			  background: #f5f5f5;
			   position:absolute;
			   left: 55%;
			   top: 10%;
			   &>p{
				   font-size: 18px;
				   color: #757575;
				   margin-left: 30px;
				   margin-top: 24px;
			   }
			   &>div:nth-child(2){
				   display: flex; 
				   flex-direction: column;
					align-items: center;
					&>div{
						position: absolute; 
						z-index: 100;
						top: 130px;
						display: flex;
						flex-direction: column;
						
					}
					&>img{
						position: absolute;
						 left: 40px;
					}
					input{
							width: 300px;
							height: 40px;
							margin-top: 29px;
							padding-left: 30px;
						}
						.btnSum{
						background: #e45944;
						border: none;
						color: white;
						border-radius:2px;
						font-size: 18px;
						padding-left: 0;
						}
			   }
			   &>div:nth-child(3){
				   margin-top: 17px;
				   margin-left: 30px;
			   }
			   &>div:nth-child(4){
				   margin-top: 15px;
				   display: flex;
				   justify-content: space-around;
				   &>span{
					   color: #757575; 
					   cursor: pointer;
				   }
			   }
		 }

	}

}
	.beixuan1 {
		margin-top: 1px;
		width: 300px;
		height: 25px;
		text-align: center;
		border: solid 1px #E3E3E3;
		background: white;
		cursor: pointer;
	}
	.beixuan1:hover {
		border: solid 2px #5BABF0;
	}
	.tt {
		height: 100px;
		color: red;
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
	
	.top_1 {
		color: #333;
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

	
</style>