<template>
	<div>
				<div class="footer">
				<div class="footer-top">
					<div class="content" style=" margin:  0 auto;overflow:hidden;">
						<!-- <div style=" float:left;">
							<div style="font-size: 20px;width:300px;text-align:center;">客服电话:0571-86738097</div>
							<div style="font-size: 20px;width:300px;text-align:center;margin-top:50px;">工作时间:9:00-18:00</div>
						</div> -->
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

			</div>
	</div>
</template>
<script>
	export default {
		data(){
			return{

			}
		},
		methods:{
				flushCom(){
				location.reload();
			},
		}
	}
</script>
<style scoped>
	.footer {
		width: 100%;
		height: 200px;
	}
	
	.footer-top {
		width: 100%;
		background-color:#f5f5f5;
		padding:60px 0px;
	}
	
	.footer-ul {
		/*border:1px solid red;*/
		float: left;
		width:240px;
		margin-top: 0px;
	}
	.footer-ul a:hover{
		color:rgb(200, 153, 107);
		/*text-decoration:none;*/

	}
	
	.footer-ul p {
		color: #000;
		font-size: 16px;
		margin-bottom: 3px;
		text-align: center;
	}
	
	.footer-ul li {
		height:25px;
		line-height: 25px;
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
	.content{
		width:1200px;
		margin: 0 auto;
	}
	
	.footer-bottom span {
		color: #000;
		font-size: 16px;
		/* font-weight: bolder; */
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