<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>
<script>
	import First from './components/First.vue'
	import Hello from './components/Hello.vue'
	import Test from './components/test.vue'
	import Detail from './components/Detail.vue'
	import Login from './components/login.vue'
	import Register from './components/register.vue'
	import SortAll from './components/sortAll.vue'
	import ForgotPas from './components/forgotPas.vue'
	import shop from './components/shop.vue'
	export default {
		name: 'app',
		data: function() {
			return {
				activeColor: '#f1f1f1',
				ac: 'pointer',
				show: true,
				showMask: false,
				showHidden: false,
			}
		},
		components: {
			'first': First,
			"hello": Hello,
			"test": Test,
			"detail": Detail,
			'login': Login,
			'reg': Register,
			"sortAll": SortAll,
			"forgotPas": ForgotPas,
			"shop": shop,
		},
		created: function() {
			//this.$router.push('/module/work');
			// var that=this
			// var ws = new WebSocket("ws://duanhui.qianchengwl.cn:8282")
			// ws.onmessage = function(e) {
			// 	if(e.data.search(/^[0-9]+/g) != -1) {
			// 	} else {
			// 		alert(e.data)
					// that.handleSubmit()
			// 	}

			// }
		},
		methods: {
			handleSubmit: function() {
				var cookies = document.cookie.split(';')
				for(var i = 0; i < cookies.length; i++) {
					var cookieName = cookies[i].split('=')[0];
					document.cookie = cookieName + "=deleted; expires=" + new Date(0).toUTCString();
				}
				this.$http.post(store.state.config.apiUrlRoot + "admin/user/logout").then(
					function(response) {
						var data = response.body;
						if(data.code != -1000) {
							setTimeout(() => {
								window.location.href = 'http://www.xfxycg.com/#/login'
							}, 500)
							return;
						}
						setTimeout(() => {
							window.location.href = 'http://www.xfxycg.com/#/login'
						}, 500)
					},
					function(erro) {

					}
				);
			},
			enter: function() {
				this.activeColor = '#ffffff';
				this.ac = 'pointer';
				this.show = true;
			},
			leave: function() {
				this.activeColor = '#f1f1f1';
				this.show = false;
			},
			enterImg: function() {
				this.showHidden = true;
				this.showMask = true;
			},
			leaveImg: function() {
				this.showHidden = false;
				this.showMask = false;
			},
		}
	}
</script>

<style scoped>
	#app {
		margin: 0px;
		padding: 0px;
	}
</style>