

<template>
	<!--头部-->
	<div>
		<div>
		<div style="width:100%;background-color: #f5f5f5;">
			<div class="top">
				<div class="nav-left"><img src="../assets/web1/首页-F.png" /><span class="top_1">&ensp;欢迎来到消防技术装备协议采购平台!&ensp;</span>
					<router-link to="/login" v-if="showlogin" style="color:#000;">请登录</router-link>
					<span style="color:#000;" v-if="!showlogin">
						<span >{{msg}}</span>
						<span @click="loginOut" style="cursor:pointer;">退出</span>
					</span>
				</div>
				<div class="nav-right">
			  <a class="a_href" @click="loding2" style="cursor:pointer;">用户中心</a>
					<router-link to="/" class="a_href">服务与培训</router-link >
				<router-link to="/register" class="a_href">商家入驻</router-link>
				<router-link to="/help" class="a_href">帮助中心</router-link>
				</div>
			</div>
			</div>
			<!--头部结束-->
			<div class="nav-search">
			<div >
				<div>
				<a href=""><img src="../assets/web1/logo.png"/></a></div>
				<div>
					<input v-model="showme.a" @keydown.enter="gogo()" type="text"  class="form-control">
					<button @click="keysearch"  class="btn btn-sm">搜索</button>
				</div>
			</div>
			</div>
		
			<searc v-show='showa' :sss="showme" ref='r1'></searc>
			<!--轮播-->
			<div  v-show="!showa">
        	<!--标题-->		
			<div class="nav-top" >
				<p >所有装备</p>
				<p class="nav">首页</p>
        	<p class="nav" @click="goCar"> 消防车辆</p>
			</div>
			<div class="swiper_container">
			<div>
			<div class="swiper">
			<div>
				<ul >
				<li v-for="(val,index) in msg2" :key="index" class="leftNav1" @mouseout="ass(index)" @mouseover="add(index)" @click="hadleSort(index,val)">
				<i class="iconfont icon-miehuoqiextinguisher" v-show="index==0"></i>
				<i class="iconfont icon-iconset0105" v-show="index==1"></i>
				<i class="iconfont icon-anquanfanghu"  v-show="index==2"></i>
				<i class="iconfont icon-zhichijiushengquan" v-show="index==3"></i>
				<i class="iconfont icon-chuanshu" v-show="index==4"></i>
				<i class="iconfont icon-paiyanfengji" v-show="index==5"></i>
				<i class="iconfont icon-dengjuzhaoming" v-show="index==6"></i>
				<i class="iconfont icon-yanjizhushou-shangchuan_weixiuchaijishi" v-show="index==7"></i>
				<i class="iconfont icon-webloudongjiance" v-show="index==8"></i>
				<i class="iconfont icon-yaoping" v-show="index==9"></i>
				<i class="iconfont icon-tongxintongxun"  v-show="index==10"></i>
				<i class="iconfont icon-jinggao" v-show="index==11"></i>
				<i class="iconfont icon-qita" v-show="index==12"></i>
				<router-link class='left-nav' to="/">{{val.catName}}</router-link>        
				</li></ul>
				<transition name='fade' v-for="(val,index) in msg2" :key="index">
						<div style="height: 1px;width:780px;position: absolute;top:0px;left:210px;z-index:92;" @mouseout="ass(index)" @mouseover="add(index)">
							<transition name='fade'>
								<div class="fade_content" v-show="index==showshang">
									<div style="font-size: 18px;margin: 0 auto;z-index: 300px;padding-top:10px;">
										<p  v-for="(a,b) in msglist[index]" class="text-center" @click="ad2(val.catID,a.catID)" :key="b" style="width:172px;text-align:left;">
											{{a.catName}}
										</p>
									</div>
								</div>
							</transition>
						</div>
					</transition>
				</div>
				<div>
				<img src="http://qc-product-image.oss-cn-hangzhou.aliyuncs.com/1522830665banner4.png" alt="" height="481" width="775">
				</div>
				<div class="nav_right">

				<div v-if="showlogin">
					<img src="../assets/web1/admin.png" alt="">
					<p >你好,欢迎来到采购平台</p>
					<div><a href="#/login">登录</a></div>
				</div>
				<div v-if="!showlogin">
					<img src="../assets/web1/admin.png" alt="">
					<p>{{msg}}</p>
					<div><a href="javascript:;" @click="loding2">用户中心</a></div>
				</div>
        	<div class="caigou">
				<a href="javascript:;" @click="loding">协议采购</a></div>
				<div class="caigou">
				<a href="#/register">商家入驻</a></div>
       
				<!-- <div class="news"> -->
          <div class="caigou1">
            <!-- <span style="color:#b1b1b1">[资讯]</span> -->
           <router-link to="/help"> 入驻手册</router-link></div>
          <div class="caigou1">
            <!-- <span style="color:#b1b1b1">[资讯]</span> -->
            <router-link to="/cai"> 采购手册</router-link></div>
        <!-- </div> -->
			
				</div>
			</div>
			</div>
			</div>
			<!-- 每日精选 -->
			<div class="every">
			<img src="../assets/web1/箭头(1).png" alt="" @click="gend" style="cursor:pointer;">
			<div v-for="(val,index) in rexiao" :key="index" class="every_img">
			<img :src="rexiaocanp[index].img" alt="" @click="ad(rexiaocanp[index].productID)">
			<p>{{rexiaocanp[index].name}}</p>
			<p>
				￥{{rexiaocanp[index].price}}
			</p>
				</div>	
			</div>
     
		         
		          <!--  地区/-->
		          <div class="earth">
		          <div class="earth_top">
		          	<img src="../assets/web1/矩形10拷贝13.png" alt="">
		          	<img :src="china" alt="" @click="tabChange(0)" >
		          	<img :src="loadimg"  alt=""  @click="tabChange(1)" >
		          	<img src="../assets/web1/矩形10拷贝13.png" alt="">
		          </div>
		          <div v-show="flag==0">
		           <div class="earth_content">
		          	<span v-for="(item,index) in city" :key="index" @click="goCity(index)">
                  <i class="iconfont icon-htmal5icon14"  :class="{Red:isRed==index}"></i><span>{{item.name}}</span></span>
		          </div>
		          <div>
		           <img v-for="(item,index) in city" :src="item.image" alt="" v-show="imgShow==index" :key="index">
		            </div>
		          </div>
		           <div v-show="flag==1">
		           <div class="earth_content">
		          	<span v-for="(item,index) in imported" @click="goImport(index)" :key="index">
                   <i class="iconfont icon-htmal5icon14"  :class="{Red:isRed1==index}"></i>{{item.name}}</span>
		          </div>
		          <div  class="earth_img">
		            <img v-for="(item,index) in imported" :src="item.image" alt="" v-show="imgShow1==index" :key="index">
		          </div>
		          </div>
		          </div>

              <!-- 侧边导航 -->
		   <div class="leftNav" id="leftNav">
			  <ul>
				 <li class="leftlist leftlist0" >
					<a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=1339135094&site=qq&menu=yes" class="aa right_qq" @mouseover="enter(1)" @mouseout="enter(0)">
					<i class="iconfont icon-icon-" style="font-size:39px;"></i>
          	<img v-show="flagindex==1" class="imgleft" src="../assets/icon1/6.png" width="80" alt="">
					</a>
				
				</li>
				<li class="leftlist leftlist1" @click.prevent="custormAnchor('box')">
					<a class='aa aa1' href="javascript:;" @mouseover="enter(2)" @mouseout="enter(0)">
				           <i class="iconfont icon-miehuoqiextinguisher" ></i>
					<img v-show="flagindex==2" class="imgleft"  src="../assets/icon1/5.png"  width="80" alt="">
					</a>
			</li>
				<li class="leftlist leftlist2" @click.prevent="custormAnchor('box2')">
					<a class='aa aa2'  href="javascript:;" @mouseover="enter(3)" @mouseout="enter(0)">
					<i class="iconfont icon-hongwaiyaokongqi" style="font-size:39px;"></i>
					<img v-show="flagindex==3" class="imgleft" src="../assets/icon1/2.png" width="80" alt="">
					</a>
				</li>
				<li class="leftlist leftlist3" @click.prevent="custormAnchor('box3')">
					<a class='aa aa3'  href="javascript:;" @mouseover="enter(4)" @mouseout="enter(0)">
						<i class="iconfont icon-anquanfanghu"></i>
				<img v-show="flagindex==4" class="imgleft" src="../assets/icon1/3.png" width="80" alt="">
					
					</a>
				</li>
				<li class="leftlist leftlist4"  @click.prevent="custormAnchor('box4')">
					<a class='aa aa4' href="javascript:;" @mouseover="enter(5)" @mouseout="enter(0)">
				<i class="iconfont icon-dengjuzhaoming"></i>
					<img v-show="flagindex==5" class="imgleft" src="../assets/icon1/4.png" width="80" alt="">
					</a>
				</li>
				<li class="leftlist leftlist5"  @click.prevent="custormAnchor('box5')">
					<a class='aa aa5' href="javascript:;" @mouseover="enter(6)" @mouseout="enter(0)">
            <i class="iconfont icon-zhichijiushengquan"></i>
					<img v-show="flagindex==6" class="imgleft" src="../assets/icon1/8.png" width="80" alt="">
					</a>
			</li>
      <li class="leftlist">
					<a class='aa aa6' href="javascript:;" @click="goTop">
           <img src="../assets/web1/返回顶部.png" alt="" style="display:block;margin-top:11px;margin-left:11px;">
           	<!-- <img v-show="flagindex==6" class="imgleft" src="../assets/icon1/8.png" width="80" alt=""> -->
					</a>
			</li>
			</ul>
		</div>
			<!--商品头部-->
			<!--灭火器材-->
			<div id="box">
				<div class="boxcontent">
					<div>
						<div>
						<h2 >1F灭火器材</h2></div>
						<!-- <img style="margin-left: 19px;" src="../assets/img/灭火器材.png" /></div> -->
						<div ><span>生命探测仪/漏电探测仪/漏电探测仪/漏电探测仪</span><span @click="miehuo">查看更多></span></div>
					</div>
				</div>
				<div class="container-fluid" >
					<div class="zheng">
					<img src="http://qc-product-image.oss-cn-hangzhou.aliyuncs.com/1523252074干粉灭火器.png" alt="">
					<div class="zheng_content">
					<div   v-for="(val,index) in data[0]" :key="index" v-if="index>=0&&index<8">
					<div style="overflow:hidden;"> 
						<img class="active_ active_1" :src="val.titleImage" @click="ad(val.productID)" />
					</div>
          	<p  :title="val.name">{{val.brandName}}<span  :title="val.name"> {{val.name}}</span></p>
					<!-- <p  :title="val.name" >{{val.name}}</p> -->
				
					<p>￥{{val.price}}</p>
						
					</div>
					</div>
				<div class="zeng-right">
				<img src="http://qc-product-image.oss-cn-hangzhou.aliyuncs.com/1523251773GOODSHOP_75.png" alt="">
				<div>
			   <img  alt="" v-for="(itrem,index) in companyLogo" :key="index" :src="itrem.img">
				</div>
				</div>
				</div>
				</div>
			</div>
			<!--侦检器材-->
			<div id="box2">
				<div class="boxcontent">
					<div>
						<div>
						<h2>2F侦检器材</h2></div>
						<!-- <img style="margin-left: 19px;" src="../assets/img/侦检器材.png" /></div> -->
						<div><span>生命探测仪/漏电探测仪/漏电探测仪/漏电探测仪</span><span @click="zhenjian()">查看更多></span></div>
					</div>
				</div>
				<div class="zheng">
					<img src="http://qc-product-image.oss-cn-hangzhou.aliyuncs.com/1523252030图层1拷贝.png" alt="">
					<div class="zheng_content">
					<div   v-for="(val,index) in data[1]" :key="index" v-if="index>=0&&index<8">
					<div style="overflow:hidden;">
					<img class="active_ active_1" :src="val.titleImage" @click="ad(val.productID)" /></div>
						 		<p  :title="val.name">{{val.brandName}}<span  :title="val.name"> {{val.name}}</span></p>
					<!-- <p  :title="val.name" >{{val.name}}</p> -->
							<p>￥{{val.price}}</p>
						
					</div>
					</div>
				<div class="zeng-right">
				<img src="http://qc-product-image.oss-cn-hangzhou.aliyuncs.com/1523251823GOODSHOP.png" alt="">
				<div>
				<img  alt="" v-for="(itrem,index) in companyLogo" :key="index" :src="itrem.img">
				</div>
				</div>
				</div>
			</div>
			<!--商品结束-->
			
			<!--防护器材-->
			<div id="box3">
				<div class="boxcontent">
					<div>
						<div>
						<h2>3F防护器材</h2>
						<!-- <img style="margin-left: 19px;" src="../assets/img/防护器材.png"/> -->
						</div>
						<div><span>生命探测仪/漏电探测仪/漏电探测仪/漏电探测仪</span><span style="font-size: 18px;cursor: pointer;" @click="fanghu">查看更多></span></div>
					</div>
				</div>
				<div class="container-fluid" >
				<div class="zheng">
					<img src="http://qc-product-image.oss-cn-hangzhou.aliyuncs.com/1523252009图层9拷贝.png" alt="" >
					<div class="zheng_content">
					<div   v-for="(val,index) in data[2]" :key="index" v-if="index>=0&&index<8">
					<div>
					<img class="active_ active_1" :src="val.titleImage" @click="ad(val.productID)" />
					</div>
								<p  :title="val.name">{{val.brandName}}<span  :title="val.name"> {{val.name}}</span></p>
					<!-- <p  :title="val.name" >{{val.name}}</p> -->
							<p>￥{{val.price}}</p>
						
					</div>
					</div>
				<div class="zeng-right">
				<img src="http://qc-product-image.oss-cn-hangzhou.aliyuncs.com/1523251858GOODSHOP拷贝.png" alt="">
				<div>
	          	<img  alt="" v-for="(itrem,index) in companyLogo" :key="index" :src="itrem.img">
				</div>
				</div>
				</div>
					
				</div>
				<!--商品列表-->
				
			
			</div>
  
			<!--照明器材-->
      <div id="box4">

              <div class="boxcontent">
                <div>
                  <div>
                  <h2>4F照明器材</h2>
                  <!-- <img style="margin-left: 19px;" src="../assets/img/照明器材.png" /> -->
                  </div>
                  <div><span>生命探测仪/漏电探测仪/漏电探测仪/漏电探测仪</span><span @click="zhaoming">查看更多></span></div>
                </div>
              </div>
                <div class="container-fluid" >
                <div class="zheng">
                <img src="http://qc-product-image.oss-cn-hangzhou.aliyuncs.com/1523251974消防应急灯.png" alt="">
                <div class="zheng_content">
                <div   v-for="(val,index) in data[3]" :key="index" v-if="index>=0&&index<8">
                <div>
                <img class="active_ active_1" :src="val.titleImage" @click="ad(val.productID)" />
                  </div>	
                	<p  :title="val.name">{{val.brandName}}<span  :title="val.name"> {{val.name}}</span></p>
                <!-- <p  :title="val.name" >{{val.name}}</p> -->
                    <p>￥{{val.price}}</p>
              
                </div>
                </div>
              <div class="zeng-right">
              <img src="http://qc-product-image.oss-cn-hangzhou.aliyuncs.com/1523251876GOODSHOP拷贝2.png" alt="">
              <div>
              <img  alt="" v-for="(itrem,index) in companyLogo" :key="index" :src="itrem.img">
              </div>
              </div>
              </div>
          </div>
              <!--商品列表-->
              
          
              <!--结束-->
      </div>

      <!-- 救生器材 -->
<div id="box5">
        	<div class="boxcontent">
					<div>
						<div>
						<h2>5F救生器材</h2>
						<!-- <img style="margin-left: 19px;" src="../assets/img/照明器材.png" /> -->
						</div>
						<div><span>生命探测仪/漏电探测仪/漏电探测仪/漏电探测仪</span><span @click="zhaoming">查看更多></span></div>
					</div>
				</div>
				<div class="container-fluid" >
					<div class="zheng">
           	<img src="http://qc-product-image.oss-cn-hangzhou.aliyuncs.com/1523251950救生灭火毯.png" alt="">
					<div class="zheng_content">
					<div v-for="(val,index) in data[4]" :key="index" v-if="index>=0&&index<8">
					<div>
					<img class="active_ active_1" :src="val.titleImage" @click="ad(val.productID)" />
						</div>	
				<p  :title="val.name">{{val.brandName}}<span  :title="val.name"> {{val.name}}</span></p>
					<!-- <p  :title="val.name" >{{val.name}}</p> -->
							<p>￥{{val.price}}</p>
				
					</div>
					</div>
				<div class="zeng-right">
				<img src="http://qc-product-image.oss-cn-hangzhou.aliyuncs.com/1523251893GOODSHOP拷贝3.png" alt="">
				<div>
				<img  alt="" v-for="(itrem,index) in companyLogo" :key="index" :src="itrem.img">
				</div>
				</div>
				</div>
				</div>
 </div>
  </div>
			<!--底部-->
      <foot/>
		
			</div>

		<transition name='bounce'>
			<div class="aaaa" v-show="com">
				{{msgname}}
			</div>
		</transition>

	</div>
</template>
<script>
import "bootstrap/dist/css/bootstrap.css";
import store from "../store.js";
import searc from "./show.vue";
import "../assets/js/nav.js";
import foot from './common/footer.vue';
export default {
  name: "module",
  components: {
    searc,
    foot
  },
  data: function() {
    return {
      isRed:0,
      isRed1:0,
      china:require('../assets/web1/国产.png'),
      loadimg:require('../assets/web1/进口_58.png'),
        companyLogo:[{
          img:require("../assets/web1/704938114380807414.png")
        },{
          img:require("../assets/web1/843320504651272761.png")
        },{
           img:require("../assets/web1/576525483917730239.png")
        }
        ,{
          img:require("../assets/web1/388597532919886951.png")
        }
        ,{
          img:require("../assets/web1/145603795055907690.png")
        },{
           img:require("../assets/web1/477070824539863197.png")
        }],

         fenlogo:[{
          img:require("../assets/web1/GOODSHOP_75.png")
        },{
          img:require("../assets/web1/GOODSHOP.png")
        },{
           img:require("../assets/web1/GOODSHOP拷贝.png")
        }
        ,{
          img:require("../assets/web1/GOODSHOP拷贝2.png")
        }
        ,{
          img:require("../assets/web1/GOODSHOP拷贝3.png")
        }],
      flag1: false,
      com: false,
      showme: {
        a: ""
      },
      keyname: "",
      imgShow: 0,
      imgShow1:0,
      msg: "",
      msglist: [],
      showlogin: true,
      shopList: [],
      over: "scroll",
      show: true,
      data: [],
      msg2: [],
      showshang: -1,
      showxia: false,
      rexiao: [],
      rexiaocanp: [],
      showa: false,
      msgname: "",
      flagindex: 0,
      showIndex: 0,
      left: 0,
      flag: 0,
      city:[],
      imported:[],
      region:[],
      host:"http://"+window.location.host
    };
  },
  created: function() {

  
    this.getNavlist();
    $(function() {
      $(window).scroll(function() {

         var sTop = $(window).scrollTop();  
                var sTop = parseInt(sTop);  
                if (sTop >= 1200) {  
                   $(".leftNav").show();
                } else{
                  $('.leftNav').hide();
                } 
        $(".leftlist").css({ background: "#f3f3f3" });
        $(".aa .imgleft").css({ display: "none" });
        if ($(window).scrollTop() > $("#box").offset().top - 10) {
          $(".leftlist1").css({ background: "#fff" });
          $(".aa1 .imgleft").css({ display: "block" });
          $(".leftlist1")
            .siblings()
            .css({ background: "#f3f3f3" });
        }
        if ($(window).scrollTop() > $("#box2").offset().top - 10) {
          $(".leftlist2").css({ background: "#fff" });
          $(".aa2 .imgleft").css({ display: "block" });
          $(".aa2")
            .parent(".leftlist2")
            .siblings()
            .find(".imgleft")
            .css({ display: "none" });
          $(".leftlist2")
            .siblings()
            .css({ background: "#f3f3f3" });
        }
        if ($(window).scrollTop() > $("#box3").offset().top - 10) {
          $(".leftlist3").css({ background: "#fff" });
          $(".leftlist3")
            .siblings()
            .css({ background: "#f3f3f3" });
          $(".aa3 .imgleft").css({ display: "block" });
          $(".aa3")
            .parent(".leftlist3")
            .siblings()
            .find(".imgleft")
            .css({ display: "none" });
        }
        if ($(window).scrollTop() > $("#box4").offset().top - 10) {
          $(".leftlist4").css({ background: "#fff" });
          $(".aa4 .imgleft").css({ display: "block" });
          $(".aa4")
            .parent(".leftlist4")
            .siblings()
            .find(".imgleft")
            .css({ display: "none" });
          $(".leftlist4")
            .siblings()
            .css({ background: "#f3f3f3" });
        }
        if ($(window).scrollTop() > $("#box5").offset().top - 10) {
          $(".leftlist5").css({ background: "#fff" });
          $(".aa5 .imgleft").css({ display: "block" });
          $(".aa5")
            .parent(".leftlist5")
            .siblings()
            .find(".imgleft")
            .css({ display: "none" });
          $(".leftlist5")
            .siblings()
            .css({ background: "#f3f3f3" });
        }
      });
    });


  },
  methods: {
    getNavlist(){
       this.$http
      .post(store.state.config.apiUrlRoot + "show/show/index")
      .then(data => {
        var msg = data.body.content.catList;
        this.shopList = data.body.content.hotProductList;
        for (var m = 0; m < msg.length; m++) {
          this.msglist.push(msg[m].list);
          this.msg2.push(msg[m]);  
        }
      });

    },
    goCar(){
      this.$router.push({
        path:'car'
      })
      setTimeout(function(){
    location.reload();
      },100)

    },
    goTop(){
            document.body.scrollTop = document.documentElement.scrollTop = 0;
    },
    getCountry(){
      var that =this;
      		this.$http.post(store.state.config.apiUrlRoot + "api/Country/getList").then(
					function(response) {
            if(response.data.code==1){
            
          	var data = response.data.content;
            this.region=data.region;
            this.city=data.city;
            this.imported=data.import;
            for(var i=0;i<this.region.length;i++){
              this.city.push(this.region[i])
            }

            }else{
               that.$message({
              message: response.data.msg,
              type: "error"
            });
            }
				
          
					});
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
      custormAnchor(anchorName) {
        // 找到锚点
        let anchorElement = document.getElementById(anchorName);
        // 如果对应id的锚点存在，就跳转到锚点
        if(anchorElement) { anchorElement.scrollIntoView(); }
    },
    goCity(a) {
      this.isRed=a;
      this.imgShow = a;
      
    },
      goImport(a) {
      this.isRed1=a;
      this.imgShow1=a;
    },
		        
    
    tabChange(a) {
      this.flag =a;
      if(a==0){
        this.china=require('../assets/web1/国产.png');
        this.loadimg=require('../assets/web1/进口_58.png')
      }else{
        this.china=require('../assets/web1/国产_41.png');
        this.loadimg=require('../assets/web1/进口.png')
      }
    },
  

    enter(index) {
      this.flagindex = index;
    },
    flushCom() {
      this.reload();
    },
    reload() {
      location.reload();
    },
    handleOut() {
      // alert(1)
      this.$http
        .post(store.state.config.apiUrlRoot + "admin/user/logout")
        .then(function(response) {
          var data = response.body;
          if (data.code == 1) {
            this.com = true;
            this.locatio();
            this.msgname = data.msg;
            this.getWork();
          } else {
            this.com = true;
            this.locatio();
            this.msgname = data.msg;
          }
        });
    },
    gogo() {
      this.keysearch();
    },
    zhenjian() {
      this.$router.push({
        path: "sortAll",
        query: { catID: this.msg2[1].catID }
      });
      $(window).scrollTop(0);
      location.reload();
    },
    miehuo() {
  
      this.$router.push({
        path: "sortAll",
        query: { catID: this.msg2[0].catID }
      });
      $(window).scrollTop(0);
      location.reload();
    },
    fanghu() {
      this.$router.push({
        path: "sortAll",
        query: { catID: this.msg2[2].catID }
      });
      $(window).scrollTop(0);
      location.reload();
    },
    zhaoming() {
      this.$router.push({
        path: "sortAll",
        query: { catID: this.msg2[6].catID }
      });
      $(window).scrollTop(0);
      location.reload();
    },
    hadleSort(index, val) {
    
      this.$router.push({ path: "sortAll", query: { catID: val.catID } });
      location.reload();
    },
    gend() {
      this.$router.push({
        path: "many",
        query: {}
      });
      location.reload();
    },
    locatio() {
      this.com = true;
      var that = this;
      setTimeout(function() {
        that.com = false;
      }, 2000);
    },
    keysearch() {
      var that = this;
      if (this.showme.a == "" || this.showme.a == Number) {
        this.msgname = "请输入关键字";
        this.locatio();
      } else {
        this.$http
          .post(store.state.config.apiUrlRoot + "show/show/search", {
            key: this.showme.a
          })
          .then(data => {
            if (data.body.code == -3) {
              this.msgname = data.body.msg;
              this.com = true;
              this.locatio();
            } else {
              this.showa = true;
              this.$refs.r1.loding3();
            }
          });
      }
    },
    enterShop(index) {
      this.$router.push({
        path: "shop",
        query: {
          ss: 0,
          sellerID: this.shopList[index].sellerID
        }
      });
    },
    getWork() {
      this.$http
        .post(store.state.config.apiUrlRoot + "admin/user/workIndex")
        .then(function(response) {
          var data = response.body;
          if (data.code == 1) {
            this.msg = data.content.data.name;
            this.showlogin = false;
          } else {
            this.showlogin = true;
          }
        });
    },
    loding() {
      this.$http
        .post(store.state.config.apiUrlRoot + "admin/user/workIndex")
        .then(function(response) {
          var data = response.body;
          if (data.code == 1) {
            if (data.content.data.roleID == 5) {
              this.$router.push({ path: "protocol" });
              location.reload();
            } else if (data.content.data.roleID == 4) {
              this.$router.push({ path: "protocol" });
              location.reload();
            } else if (data.content.data.roleID == 2) {
           
              this.$router.push({ path: "protocol" });
              location.reload();
            }  if (data.content.data.roleID == 7) {
           
              this.$router.push({ path: "protocol" });
              location.reload();
            }  if (data.content.data.roleID == 8) {
           
              this.$router.push({ path: "protocol" });
              location.reload();
            }else {
              this.msgname = "抱歉,你没有这个权限";
              this.locatio();
            }
          } else {
            this.$router.push({ path: "login" });
            // this.msgname = '请您先登录'
            // this.locatio()
            // setTimeout(() => {

            // 	location.reload();
            // }, 3000)
          }
        });
    },
    loding2() {
      this.$http
        .post(store.state.config.apiUrlRoot + "admin/user/workIndex")
        .then(function(response) {
          var data = response.body;
          if (data.code == 1) {
            if (data.content.data.roleID == 5) {
              window.location.href =this.host+ "/zong/#/module";
            
            } else if (data.content.data.roleID == 4) {
              window.location.href =this.host+ "/zhi/#/module";
            
            } else if (data.content.data.roleID == 2) {
              window.location.href = this.host+ "/supply";
         
            } else if (data.content.data.roleID == 1) {
              window.location.href = this.host+ "/admittance/#/module";
            
            } else  if (data.content.data.roleID ==7) {
              window.location.href = this.host+ "/big/#/module";
            
            } else  if (data.content.data.roleID == 8) {
              window.location.href = this.host+ "/middle/#/module";
            
            } else {
              window.location.href =this.host+ "/qiancheng";
           
            }
          } else {
            this.msgname = "请您先登录";
            this.locatio();
          }
        });
      // this.$router.push({ path: 'login'});
    },
    ad2(a, d) {
      this.$router.push({
        path: "sortAll",
        query: {
          catID: a,
          brandID: d
        }
      });
      location.reload();
    },
    add2() {
      this.showxia = true;
    },
    ass() {
      this.showshang = -1;
    },
    add(index) {
      this.showshang = index;
    },
    ad(d) {
      this.$router.push({
        path: "detail",
        query: {
          productID: d
        }
      });
      location.reload();
    },
    pre() {
      this.show = !this.show;
    },
    next() {
      this.show = !this.show;
    },
    set() {
      setInterval(() => {
        this.show = !this.show;
      }, 8000);
    }
  },
  mounted: function() {
         this.getWork();
    this.set();
        this.getCountry();
 this.getNavlist();
     

    this.$http
      .post(store.state.config.apiUrlRoot + "show/show/index")
      .then(data => {
        var msg = data.data.content.catList;
        for (var m = 0; m < msg.length; m++) {
          this.msglist.push(msg[m].list);
          this.msg2.push(msg[m]); 
        }
    
        
        var data2 = data.body.content.selectProductList;
        var data3 = data.body.content.hotProductList;
        this.shopList = data.body.content.hotProductList;
        for (var n = 0; n < data2.length; n++) {
          this.data.push(data2[n].product);
        }
        for (var l = 0; l < data3.length; l++) {
          this.rexiao.push(data3[l]);
          this.rexiaocanp.push(data3[l].titleImage);
        }
      });
  }
};
</script>
<style scoped lang="less">
.earth_img{
  width:1200px;
  height: 324px;
  overflow:hidden;
}
.earth_img>img{
  width:100%;
}
/* 头部 */
.nav-left{
  float:left;
}

.nav-search{
  margin-top: 31px; 
  height: 100px;
  width: 100%;
  &>div{
    width:1200px;
    margin:0 auto;
    overflow:hidden;
    &>div:nth-child(1){
      float:left;
      margin-right:5%
    }
    &>div:nth-child(2){
      float:right;
      padding:0;
      margin-top: 12px;
       overflow:hidden;
       .form-control{
  float:left;
      width:420px;
      height: 35px;
      border: solid 1px #e45944;
      border-bottom-right-radius: 0;
      border-top-right-radius: 0;
    }
        .btn-sm{
          float:right;
          background: #e45944;
          height: 35px;
            border-bottom-left-radius: 0;
            border-top-left-radius: 0;
            color: white;
            font-size: 14px;
        }
    }
  }
}
.icon-htmal5icon14{
  font-size:36px;
  color:#8a8a8a;
}

// 轮播图

.swiper_container{
  background-color:#fff7ef;
  border-top:1px solid #e45944;
  &>div{
    width:1300px;
    position:relative;
    margin:0 auto;
    .swiper{
   margin-top:27px ;
  position: relative; 
  width:1200px;
  overflow:hidden;
  margin:0 auto;
  &>div{
    height:481px;
    background-color:#fff;
    float:left;
    &>ul{
      width:210px;
      .leftNav1 {
        overflow: hidden;
        line-height: 37px;
        padding-left: 20px;
        color:#000;
        .iconfont{
          float: left;
        }
        .left-nav {
          float: left;
          color: #000;
        font-size: 16px;
        margin-left:10px;
        }
      }
    }
  }
 .nav_right {
  float: left;
  text-align: center;
  background-color: #fff;
  width: 210px;
  height: 481px;
 &>div{
   &>p{
     margin-top:10px;
   }
   &>div{
    &>a{
         color:#fff;
    display:block;
    width:180px;
    height:40px;
    background-color:#e45944;
    line-height:40px;
    text-align:center;
   }
   }
  
  
   
  }
   .caigou{
     border:1px solid #e45944;
    //  color:#e45944;
     display:block;
     width:180px;
     height:40px;
     line-height:40px;
     text-align:center;
     a{
       color:#e45944;
     }
   }
   .caigou1{
  
    border:1px solid #6898b2;
     color:#e45944;
     display:block;
     width:180px;
     height:40px;
     line-height:40px;
     text-align:center;
     a{
        width:180px;
     height:40px;
      display:block;
       color:#6898b2;//#6898b2
     }
   }
   .news{
     border-top:1px solid #E5E5E5;
     border-bottom:1px solid #E5E5E5;
     margin-bottom:10px;
     p{
       line-height:25px;
       margin:0px
     }

   }
}

}
  }
}


// 灭火器材
.boxcontent{
  height:84px;
   padding-top: 15px;

  &>div{
  width:1200px;
  margin:0 auto;
  overflow:hidden;
  &>div:nth-child(1){
    float:left;
    line-height:58px;
   &>h2{
      font-size:24px;
      margin-top:15px;
    }
  }
  &>div:nth-child(2){
    float:right;
    line-height:30px;
    &>span:nth-child(1){
      font-size: 18px;
      margin-right: 40px;
    }
     &>span:nth-child(2){
     line-height:58px;
     font-size: 18px;
     cursor: pointer;
    }
  }
  }
}
.Red{
  color:#e45944;
}
#box3{
  background-color:#f5f5f5;
}
#box{
  background-color:#f5f5f5;
}
#box5{
  background-color:#f5f5f5;
}
#box2{
  background-color:#f5f5f5;
}
#box4{
  background-color:#f5f5f5;
}

.aa6 :hover .imgleft{
  display: block;

}
#box5{
  margin-bottom:40px;

}


.nav:hover {
  color: #e45944;
}
.nav-top {
  width: 1200px;
  margin: 0 auto;
  overflow: hidden;
  height: 40px;
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
  .nav {
  float: left;
  height: 40px;
  line-height: 40px;
  padding: 0px 30px;
  cursor: pointer;
  font-size: 16px;
  color:#e45944;
}
.nav:nth-child(3){
  color:#333;
}
}
.overScroll {
  overflow-y: scroll;
}
.fade_content {
  border: 1px solid #e45944;
  border-left: none;
  padding: 0 20px;
  box-shadow:0 2px 2px 0 rgba(0,0,0,.2);
  width:100%;
  height:480px;
   z-index: 200;
   position: absolute;
   top:1;
   padding-bottom:10px;
   background: white;
}
.fade_content p {
  border-bottom: 1px solid #e5e5e5;
}
.leftNav1 .iconfont {
  color: #e45944;
  font-size: 24px;
}
.icon-arrow-right-copy-copy-copy {
  color: #000;
}

.leftNav1:hover .iconfont {
  color: red;
}
.leftNav1:hover {
  background-color: rgba(255, 0, 0, 0.2);
}
.leftNav1:hover a {
  color: red;
}

.right-nav {
  float: right;
  margin-right: 20px;
}

.nav_right div {
  width: 180px;
  margin: 23px auto;
}
.nav_right div:first-child {
  margin-top: 50px;
}
// 右侧导航

.leftNav {
  position: fixed;
  right: 12%;
  top: 500px;
  border: 1px solid #ddd;
  border-radius: 5px;
  z-index: 9;
  display:none;
  &>ul{
    margin-bottom:0px;
    &>li{   
      border-bottom: 1px solid #eee;
      width:50px;
      height:44px;
      position:relative;
      &>a{
          text-align: center;
          display: block;
          width: 50px;
          height: 44px;
          line-height: 44px;
          text-decoration: none;
            &>.iconfont {
            color: #e45944;
             font-size: 28px;
          }

}
&>a:hover{

  text-decoration: none;

    }
    }
}
}

.aa>.imgleft{
  position: absolute;
  left:47px;
  top:0px;
}
.aa>.imgright{
  position: absolute;
  left:-82px;
  top:0px;
}
.slide-fade-enter-active {
  transition: all 0.3s ease;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}

.bounce-enter-active {
  animation: bounce-in 0.5s;
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
.text-center {
  padding: 0px 20px;
  float: left;
  height: 50px;
  overflow: hidden;
  line-height: 50px;
  text-align: center;
  color: #333333;
  font-size: 14px;
  font-weight: bold;
  opacity: 1;
  cursor: pointer;
}
.text-center:hover {
  color: rgb(228, 89, 68);
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
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.active_3 {
  border: solid 1px #d4b393 !important;
}

.active_2 {
  border-bottom: 3px solid #c8996b !important;
  text-decoration: none;
}

.mov:hover {
  color: #d4b393 !important;
}

.actinon {
  opacity: 0.5;
}

.actinond {
  transition: all 2s linear;
}

.top {
  height: 36px;
  margin: 0 auto;
  line-height: 45px;
  width:1200px;
  line-height:36px;
}
.nav-right {
  float: right;
}

.top_1 {
  color: #000;
}

.a_href {
  color: #000;
  margin-right: 20px;
  text-decoration: none;
}

li {
  list-style: none;
}
.every {
  width: 1200px;
  margin: 20px auto;
  overflow: hidden;
  &>img{
      float: left;

  }
  &> div {
  float: left;
    text-align: center;
  cursor: pointer;
  width:173px;
  margin-left:29px;
      &>img {
      width: 173px;
      height:188px;
    }
    p{
  width: 90%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
}
}


/*地区*/
.earth {
  width: 1200px;
  margin: 10px auto;
  .earth_top {
  overflow: hidden;
  &> img {
  cursor: pointer;
     }
}
.earth_content {
  text-align: center;
  overflow: hidden;
  &> span {
  margin: 20px 80px;
  cursor: pointer;
  display: inline-block;
}
}
}

// 分类列表
.zheng {
  width: 1200px;
  margin: 0 auto;
  overflow: hidden;
  &>img{ 
    float:left;
  }
  .zheng_content {
  width: 780px;
  overflow: hidden;
  float: left;
  & > div {
    width: 182px;
    float: left;
    height: 250px;
    background-color: #fff;
    margin-left:12px;
    margin-bottom: 20.5px;
        transition: all .2s linear;
        &>div{
            overflow: hidden;

        }
        &>p{
  width: 90%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
    padding-left:10px;
     &>span{
       margin-left:10px;
     }
        }
         &> p:nth-child(2) {
  font-size: 14px;
  color: #34373e;
  margin: 5px 0;

}
&>p:nth-child(3) {
  color: #e45944;
  margin-top:10px;
}
}
& > div:hover{
  box-shadow: 0 0 5px 5px #e6e6e6;
  transform: translateY(-8px);

}
}
}
.zheng_content img {
  width:90%;
  height: 166px;
  cursor: pointer;
  margin-left:5%
}
.zheng_content img:hover {
  transition: all 0.5s linear;
  transform: scale(1.1);
}

.zheng .zeng-right {
  width: 200px;
  float:right;
  margin-left: -1px;
  &> img {
  width: 200px;
  height: 354px;
  border:none;
}

&> div{
  &> img {
  width: 100.5px;
  height:57px;
  margin-right: -1px;
  float: left;
  margin-top: -1px;
  cursor: pointer;
}
} 
}





/*左侧导航自适应*/
@media screen and (min-width: 1700px) {
  .leftNav {
    right: 10%;
    top:400px;
  }
}
@media screen and (min-width: 1500px) and (max-width: 1700px) {
  .leftNav {
    right: 7%;
    top:400px;
  }
}
@media screen and (min-width: 1400px) and (max-width: 1500px) {
  .leftNav {
    right: 1%;
    top:350px;
  }
  .aa>img{
    left:-82px;
    transform: rotateZ(180deg);
    transform: rotateY(180deg);
  }
}
@media screen and (max-width: 1400px) {
  .leftNav {
    right: 0%;
    top:300px;
  }
    .aa>img{
    left:-82px;
    transform: rotateZ(180deg);
    transform: rotateY(180deg);
  }
}
</style>