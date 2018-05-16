

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
				<p class="nav"  @click="goIndex">首页</p>
        	<p class="nav" @click="goCar">消防车辆</p>
			</div>
            <div style="width:100%;"><img style="width:100%;" src="../assets/car/微信图片_20180503105133.png" alt=""></div>
		         <!-- 侧边导航 -->
		   <div class="leftNav" id="leftNav" >
			  <ul>
				 <li class="leftlist leftlist0" >
					<a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=1339135094&site=qq&menu=yes" class="aa right_qq" @mouseover="enter(1)" @mouseout="enter(0)">
					<i class="iconfont icon-icon-" style="font-size:39px;"></i>
          	<img v-show="flagindex==-1" class="imgleft" src="../assets/icon1/6.png" width="80" alt="">
					</a>
				
				</li>
				<li class="leftlist" @click.prevent="custormAnchor('box'+index)"  v-for="(val,index) in data" :key="index">
					<a class='aa' :id="leftId(index)" href="javascript:;" @mouseover="enter(index)" @mouseout="enter(-2)">
				           <i class="iconfont icon-miehuoqiextinguisher" ></i>
					         <img v-show="flagindex==index" class="imgleft"  src="../assets/icon1/5.png"  width="80" alt="">
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
			<div :id="gernerateId(index)" class="scrooltop" v-for="(val,index) in data" :key="index">
				<div class="boxcontent">
					<div>
						<div>
						<h2>{{index+1}}F{{val.cat_name}}</h2></div>
						<div ><span @click="miehuo(val.cat_id)">查看更多></span></div>
					</div>
				</div>
				<div class="container-fluid" >
					<div class="zheng">
					<img :src="val.thumb" alt="">
					<div class="zheng_content">
					<div   v-for="(a,b) in val.productList" :key="b">
					<div style="overflow:hidden;"> 
						<img class="active_ active_1" :src="a.titleImage" @click="ad(a.product_id)" />
					</div>
          	<p  :title="a.product_name">{{a.product_name}}</p>
				
					<p>￥{{a.price}}</p>
						
					</div>
					</div>
		
				</div>
				</div>
			</div>
      </div>
		         
		       
     
			
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
      isActive:-1,
      isRed:0,
      isRed1:0,
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
      
      over: "scroll",
      show: true,
      data: [],
      showshang: -1,
      showxia: false,
      showa: false,
      msgname: "",
      flagindex: -2,
      showIndex: 0,
      left: 0,
      flag: 0,
      host:"http://"+window.location.host,
      datalength:0
    };
  },

  created: function() {
    this.getWork();
    this.set();

    $(function() {
      $(window).scroll(function() {

         var sTop = $(window).scrollTop();  
                var sTop = parseInt(sTop);  
                if (sTop >=550) {  
                   $(".leftNav").show();
                } else{
                  $('.leftNav').hide();
                } 
        $(".leftlist").css({ background: "#f3f3f3" });
        $(".aa .imgleft").css({ display: "none" });
        if ($(window).scrollTop() > $("#box0").offset().top - 10) {
          $("#aa0")
            .parent(".leftlist").css({ background: "#fff" });
          $("#aa0 .imgleft").css({ display: "block" });
          $("#aa0")
            .parent(".leftlist")
            .siblings()
            .find(".imgleft")
            .css({ display: "none" });
         $("#aa0")
            .parent(".leftlist")
            .siblings().css({ background: "#f3f3f3" });
        }
          if ($(window).scrollTop() > $("#box1").offset().top - 10) {
          $("#aa1 .imgleft").css({ display: "block" });
             $("#aa1")
            .parent(".leftlist").css({ background: "#fff" });
          $("#aa1")
            .parent(".leftlist")
            .siblings()
            .find(".imgleft")
            .css({ display: "none"});
          $("#aa1")
            .parent(".leftlist")
            .siblings().css({ background: "#f3f3f3" });
        }
  
      });
    });
  
  },
  methods: {
    gernerateId(index){
      return 'box'+index

    },
    leftId(index){
       return 'aa'+index

    },
      goIndex(){
            this.$router.push({
        path:'/'
      })

      },
    goCar(){
      this.$router.push({
        path:'car'
      })

    },
    goTop(){
            document.body.scrollTop = document.documentElement.scrollTop = 0;
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
             that.$message({
              message: data.msg,
              type: "success"
            });
							setTimeout(() => {
								this.$router.push({path:'login'})
							}, 500)
							return;
						}
			
						setTimeout(() => {
              this.$router.push({path:'login'})
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
    enter(index) {
      this.flagindex = index;
      this.isActive=index;
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
    miehuo(a) {
      this.$router.push({
        path: "sortAll",
        query: { catID:a }
      });
      $(window).scrollTop(0);
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
              window.location.href = this.host+ "/supply/#/module";
         
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
    this.$http
      .post(store.state.config.apiUrlRoot + "api/FireEngine/fireEngineIndex")
      .then(data => {
        if(data.data.code==1){
          this.data=data.data.content;
          this.datalength=data.data.content.length;
        }
      });
  }
};
</script>
<style scoped lang="less">

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
      margin-left:20px;
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
.scrooltop{
  background-color:#f5f5f5;
}

.aa6 :hover .imgleft{
  display: block;

}
#box5{
  margin-bottom:20px;

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
.nav:nth-child(2){
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





// 分类列表
.zheng {
  width: 1200px;
  margin: 0 auto;
  overflow: hidden;
  &>img{ 
    float:left;
  }
  .zheng_content {
  width:946px;
  overflow: hidden;
  float: left;
  & > div {
    width:220px;
    float: left;
    height: 257x;
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
  margin:20px 0px;
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
  height: 172px;
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