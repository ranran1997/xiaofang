<template>
	<!-- 头部导航 -->
	<div class="module">
		<div class="content">
			<div class="top">
				<p class="txt">忘记密码</p>
			</div>
			<span class="top-logo-txt" style="cursor:pointer;margin-top:20px;"><router-link to="/">返回首页</router-link></span>
			<div class="bottom">
				<form>
					<div class="bottom-input">
						<span class="input-text"><span style="color:red;">* </span>手机 :</span>
						<input type="text" @focus="shouji" @blur="shouji" v-model="infoList.mobile">
						<span style="margin-left: 8px;" :class="{red:com==false,green:com}">{{msg1}}</span>
					</div>
					<div class="bottom-input">
						<span class="input-text"><span style="color:red;">* </span>验证码 :</span>
						<div style="display: flex;">
							<input type="text" v-model="infoList.mobileCode" style="width:320px;">
							<div @click="getCode" :style="{color:red.a,cursor:red.b}" style="margin-left:5px; width: 80px;height: 36px;text-align: center;line-height: 32px;border: solid 1px #BFBFBF;;margin-left: 1px;cursor: not-allowed;">{{daojis}}</div>
						</div>
					</div>
					<div class="bottom-input">
						<span class="input-text"><span style="color:red;">* </span>设置密码 :</span>
						<input type="password" v-model="infoList.password">
					</div>
					<div class="bottom-input">
						<span class="input-text"><span style="color:red;">* </span>确认密码 :</span>
						<input type="password" v-model="infoList.repassword">
					</div>
					<div height="40" width="163" class="input-img" @click="handleSubmit">提交</div>
				</form>
			</div>
		</div>
	</div>
</template>
<script>
	import store from '../store.js'
	export default {
		name: 'module',
		data: function() {
			return {
				msg1: '',
				com: false,
				red: {
					a: '#e45944',
					b: 'pointer',
					c: true,
				},
				c: 60,
				daojis: '获取验证码',
				infoList: {
					password: '',
					repassword: '',
					mobile: '',
					mobileCode: ''
				},
			}
		},
		created: function() {
			//this.$router.push('/module/work/update');
		},
		methods: {
			shouji() {
				if(this.infoList.mobile.search(/^[1][3|8|5|7|4][0-9]\d{8}$/g) == -1) {
					this.msg1 = '*请输入正确的手机号码'
					this.com = false
				} else {
					this.msg1 = '*正确'
					this.com = true
				}
			},
			handleSubmit() {
				var that = this;
				this.$http.post(store.state.config.apiUrlRoot + "admin/user/forgetPwd", this.infoList).then(
					function(response) {
						var data = response.body;
						console.log(data)
						if(data.code == 1) {
							if(this.infoList.password==this.infoList.repassword){
								that.$message({
								message: data.msg,
								type: 'success'
								});
								this.$router.push({
								path: 'login'
							});
					
							}else{
								that.$message({
								message: "密码不一致,请重新输入",
								type: 'success'
								});
								setTimeout(function() {
									location.reload();
								}, 800)
							}	
						} else {
							that.$message.error(data.msg);
							return;
						}
					},
					function(erro) {
						console.log(erro);
					},
				);
			},
			getCode() {
				var that = this;
				if(this.com == true) {
					if(this.red.c) {
						this.$http.post(store.state.config.apiUrlRoot + "admin/user/sendCodeForRegister", {
							mobile: this.infoList.mobile,
							status: "forget"
						}).then(
							function(response) {
								var data = response.body;
								if(data.code == 1) {
									that.$message({
										message: data.msg,
										type: 'success'
									});
									///倒计时
									that.red.c = false
									console.log(that.red)
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
								} else {
									that.$message.error(data.msg);
									return;
								}
							})
					}
				} else {
					this.com = false
				}
			}
		}
	}
</script>
<style scoped>
	.red {
		color: red;
	}
	
	.green {
		color: green;
	}
	
	.module {
		max-width: 1920px;
		background: #f1f1f1;
		height: 100%;
	}
	
	.content {
		width: 1200px;
		margin: 0 auto;
		height:1080px;
		border: 1px solid #f1f1f1;
		
	}
	
	.top {
		margin-top: 150px;
	}
	
	.txt {
		font-size: 24px;
		color: #757575;
	}
	
	.bottom {
		padding-top: 128px;
		width: 100%;
		height: 522px;
		background: #ffffff;
	}
	
	.bottom-input {
		width: 545px;
		height: 40px;
		margin: 0 auto;
		margin-bottom: 24px;
	}
	
	.input-text {
		width: 110px;
		height: 40px;
		line-height: 40px;
		text-align: right;
		color: #757575;
		font-size: 20px;
		float: left;
	}
	
	.bottom-input input {
		width: 418px;
		height: 36px;
		border: none;
		border: 1px solid #bfbfbf;
		margin-left: 10px;
		padding-left: 5px;
	}
	
	.bottom-input img {
		float: right;
		cursor: pointer;
	}
	
	.input-img {
		width: 163px;
		height: 40px;
		margin-left: 556px;
		margin-top: 30px;
		cursor: pointer;
		text-align: center;
		line-height: 40px;
		font-size: 20px;
		color: #fff;
		font-weight: bold;
		background-color:#e45944;
	}
	.top-logo-txt {
		width: 200px;
		color: #757575;
		font-size: 17px;
		position: absolute;
		right: 80px;
		top: 100px;
		font-weight: bold;
	}
</style>