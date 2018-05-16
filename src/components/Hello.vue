<template>
    <!-- 头部导航 -->
    <div class="module">
<!-- 导航栏 -->
  <div class="lanrenzhijia_service"  style="z-index:200;">
    <ul>
      <span class="right_bar"></span>
      <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=1339135094&site=qq&menu=yes" class="right_qq" ></a>
      <span class="right_phone" style="margin-bottom:5px;">0571-86738097</span>
    </ul>
          </div>
 <div  style="line-height:40px;height:40px;background-color:#f5f5f5;">
 <div style="width:1200px;margin:0 auto;overflow:hidden;">
      <div style="float:left;"><img src="../assets/web1/首页-F.png" />
       <span class="top_1">&ensp;欢迎来到消防技术装备协议采购平台!&ensp;</span>
       <!--  <router-link to="/login">请登录</router-link> -->
      </div>
      <div style="float:right;">
     <router-link to="/" class="a_href">服务与培训</router-link >
				<router-link to="/" class="a_href">首页</router-link>
				<router-link to="register" class="a_href">商家入驻</router-link>
				<router-link to="help" class="a_href">帮助中心</router-link>
				<a class="a_href" @click="loding2" href="javascript:;">用户中心</a>
      </div>
      </div>
    </div>
 <!--    导航栏结束 -->
    <div  style="height: 160px;background:#ffffff;padding-top:20px;" >
    <div style="width:1200px;margin:0 auto;overflow:hidden;">
      <div style="float:left;"><router-link to="/"><img src="../assets/web1/logo.png" /></router-link></div>
      <div style="float:right;padding: 0; margin-top: 12px;overflow:hidden;" >
        <input type="text" style="float:left;width:370px;height:40px;border: solid 1px #e45944;border-bottom-right-radius: 0;border-top-right-radius: 0;" class="form-control" v-model="search">
        <button style="float:left;background: #e45944; height: 40px; position: initial;border-bottom-left-radius: 0;border-top-left-radius: 0;color: white;font-size: 14px;" class="btn btn-sm" @click="searchKey">搜索</button>
      </div>   
      </div>
      </div>
      <div>
      <div style="width:1200px;margin:0 auto;overflow:hidden;height:40px;">
				<p style="float:left;width:210px;height:40px;line-height:40px;padding-left:20px;font-size:23px;background-color:#e45944;color:#fff;">所有商品</p>
				<p style="float:left;height:40px;line-height:40px;margin:0px 20px;font-size:18px;"><router-link to="/" style="color:#333;">首页</router-link></p>
				<p style="float:left;height:40px;line-height:40px;margin:0px 20px;color:#e45944;font-size:18px;" @click="loding">协议采购</p>
      </div>
    </div>
<!--  头部导航栏结束 -->
<!-- 大盒子 -->
    
    <div class="box">
<!-- 搜索框结束 -->
<!--  商品分类 -->
   <div class="content-sort" >
     <div class="content">
      <div class="sort-left" >
        <div style="font-size:16px;font-weight:bold;border-bottom:1px solid #dcdcdc;line-height:40px;">
          <!-- :class="classA ? 'class-a' : 'class-b' " -->
          <span style="display:inline-block;text-align:center;width:50%;cursor:pointer;" :class="{Red:sRed==1}"  @click="china(1)">国产</span>
          <span style="text-align:center;display:inline-block;width:40%;cursor:pointer;" :class="{Red:sRed==2}"  @click="china(2)">进口</span></div>
      
  <!--     <ul class="sort-list-left">
     
    <li v-for="(item,index) in  sortList" :key="index"> 
         <img :src="openImg" @click="openDiv(index)" v-if="item.showChild">
          <img :src="closeImg"  @click="closeDiv(index)" v-if="!item.showChild"> 
         <span @click="openDiv(index)">&nbsp;{{item.name}}</span>
          <div class="open" v-if="!item.showChild&&showCart">
      <span style="line-height:50px;display:block; width: 162px;padding-right: 5px;overflow: hidden;" v-for="(ss,ins) in item.list" :key="ins"  @click="handleGet(index,RR=ins)" :class="{ft:RR==ins}">{{ss.name}}</span>
        </div>
      </li> 
     </ul>-->
      <ul class="sort-list-left">
     
     <li v-for="(item,index) in  sortList" :key="index"> 
         <img :src="openImg"  v-if="item.showChild">
          <img :src="closeImg"   v-if="!item.showChild"> 
         <span @click="changeli(index,item)">&nbsp;{{item.name}}</span>
          <div class="open" v-show="!item.showChild">
      <span style="line-height:50px;display:block; width: 162px;padding-right: 5px;overflow: hidden;" v-for="(ss,ins) in item.list" :key="ins"  v-on:click.stop="doThis(index,RR=ins)" :class="{ft:RR==ins}">{{ss.name}}</span>
        </div>
      </li>
     </ul>
   
       </div>
       <div class="sort-right" >
           <div class="sort-right-title" ><span style=" cursor: pointer;" @click="reload">全部分类</span> <span v-if="flags">>{{sortName}}</span></div>
           <div class="brand">
            <div class="brandMask" v-if="showMask">
              <!-- <button v-for="(item,index) in brandList2" class="brand-button" @click="getPro(index)" :key="index">{{item.brandName}}</button> -->
              <span v-for="(item,index) in brandList2" style="line-height:40px;margin-right:25px;cursor:pointer;" :key="index" @click="getPro(index)" :class="{ft:BB1==index}">{{item.name}}</span>
           </div>
           <p class="brand-p" style=" border-right:1px solid #dcdcdc;padding-right:10px;">品牌</p>
           <div class="brand-content">
               <!-- <button v-for="(item,index) in brandList1" class="brand-button" @click="getPro1(index)">{{item.brandName}}</button> -->
               <span v-for="(item,index) in brandList1" style="line-height:40px;margin-right:25px;cursor:pointer;" :key="index" @click="getPro1(index)" :class="{ft:BB==index}">{{item.name}}</span>
           </div>
             <!-- <img src="../assets/hello/多选.png" height="26" width="57" class="ms"> -->
             <span class="gd">更多</span>
             <img src="../assets/hello/right-拷贝-2.png" height="20" width="20" class="brandImg" @click="multiSelect" >
           </div>
             <div class="brand" v-show="showCountry">
            <div class="brandMask" v-if="showGenduo">
              <!-- <button v-for="(item,index) in brandList2" class="brand-button" @click="getPro(index)" :key="index">{{item.brandName}}</button> -->
              <span v-for="(item,index) in countryList2" style="line-height:40px;margin-right:25px;cursor:pointer;" :key="index" @click="getCou(index)" :class="{ft:AA==index}">{{item.country_name}}</span>
           </div>
           <p class="brand-p" style=" border-right:1px solid #dcdcdc;padding-right:10px;">国家</p>
           <div class="brand-content">
               <!-- <button v-for="(item,index) in brandList1" class="brand-button" @click="getPro1(index)">{{item.brandName}}</button> -->
               <span v-for="(item,index) in countryList1" style="line-height:40px;margin-right:25px;cursor:pointer;" :key="index" @click="getCou1(index)" :class="{ft:AA1==index}">{{item.country_name}}</span>
           </div>
             <!-- <img src="../assets/hello/多选.png" height="26" width="57" class="ms"> -->
             <span class="gd">更多</span>
             <img src="../assets/hello/right-拷贝-2.png" height="20" width="20" class="brandImg" @click="multiSelectone" >
           </div>
            <div class="brand-price">
            <p class="brand-p"><img src="../assets/web1/综合排序.png" alt=""></p>
             <div class="xie" style="margin-right:10px;" v-bind:class="{white:isActive}" @click="changeRed(1)">
                <span class="brand-price-span">价格高</span>
                <img :src="upImg" height="12" width="8">
              </div>
              <div class="xie" style="margin-left:0px;" v-bind:class="{white:isAc}" @click="changeImg(2)">
                <span class="brand-price-span">价格低</span>
                <img :src="downImg" height="12" width="8">
              </div>
               <div class="search-price" >
                <span>价格</span>
                 <input type="text" name="" class="price-input" style="line-height:normal;"  v-model="price_start"> -
                  <input type="text" name="" class="price-input"  style="line-height:normal;"  v-model="price_end">

                <img src="../assets/web1/确定.png" class="price-img" style="cursor:pointer;" @click="searchPrice">
                <img src="../assets/web1/清空.png" class="price-img" style="cursor:pointer;left:270px" @click="clearPrice">
              </div>
            <div class="search-price-btn">
               <img :src="searchImg"  @click="changeGrid(0)" >
               <img :src="searchImgone"  style="margin-left:6px;"  @click="changeList(1)">
            </div>
            </div>
         <!--    列表 -->
            <div class="brand-list" v-if="list"  style="max-height:640px;overflow:hidden;">
              <div class="brand-list-top">
                <p class="brand-p" style="width:215px;" v-for="(item,index) in proList" :key="index">{{item.name}}</p>
              </div>
              <div class="brand-list-bottom">
                 <span style="line-height:40px;padding-left:42px;font-weight:bold;color:#e45944;font-size:16px;" v-if="this.msg==0">暂无数据......</span>
                 <ul class="brand-list-bottom-ul">     
                  <li v-for="(item,index) in  name" @click="handleDetail(item.id)" style="cursor:pointer;" :key="index">
                  <p class="brand-p" style="width:215px;padding-left:20px;height:50px;overflow:hidden;">{{item.name}}</p>
                  <p class="brand-p" style="width:215px;padding-left:20px;height:50px;overflow:hidden;">{{item.model}}</p>
                  <p class="brand-p" style="width:215px;padding-left:20px;height:50px;overflow:hidden;color:#e45944;">{{item.price}}</p>
                  <p class="brand-p" style="width:215px;padding-left:20px;height:50px;overflow:hidden;">{{item.sellerName}}</p>
                   </li>
                 </ul>
              </div>
            </div>
       <!--      图文 -->
       <div class="brand-grid" v-if="grid" style="overflow:hidden;">
         <ul class="brand-grid-ul">
           <span style="line-height:40px;padding-left:42px;font-weight:bold;color:#e45944;font-size:16px;" v-if="this.msg==0">暂无数据......</span>
           <li class="flex-item"  v-for="(item,index) in  name"  @click="handleDetail(item.id)" :key="index">
           <img :src="item.titleImage" width="210px" height="210px">
           <div class="brand-grid-ul-txt" >
             <p class="brand-grid-ul-p" style="width:100%;"><i class="fa fa-cny"></i>&nbsp;{{item.price}}</p>
             <p class="brand-grid-content">{{item.name}}</p>
           </div>
          </li>
      </ul>
       </div>
         <v-pagination :total="total" :current-page='current' @pagechange="pagechange"></v-pagination>
    <transition name='bounce'>
      <div class="aaaa" v-show="com">
        {{msgname}}
      </div>
    </transition>
       </div>
       </div>
       </div>
       </div>
<!--        供货协议结束 -->
<!--        大盒子结束 -->
 </div>
</div>
</template>
<script>
import store from '../store.js'
import 'bootstrap/dist/css/bootstrap.css'
import "../assets/css/fenye.css"
import pagination from '../components/common/pagation'
    export default {
        name: 'module',
           components: {
                 'v-pagination': pagination,
      },
        data: function (){
            return {
           total: 1,     // 记录总条数
        display: 12,   // 每页显示条数
        current: 1,   
              key:'',
              BB:-1,
              BB1:-1,
              AA:-1,
              AA1:-1,
              sRed:1,
              showCountry:false,
              price:[],
              Red:{color:'#e45944'},
              ss:-1,
              RR:-1,
              flag:false,
              flags:false,
              showCart:false,
              brandID:'',
              catID:0,
              status:0,
              grid:true,
              list:false,
              gridlist:[],
              proContent:[],
             productList:[],
              a: ['服务与培训', '首页', '商家入驻', '帮助中心'],
              proList:[{name:'商品名称'},{name:'型号'},{name:'价格'},{name:'所属公司'},],
              isActive:false,
              isAc:false,
              upImg:require('../assets/hello/形状-10-拷贝-2.png'),
              downImg:require('../assets/hello/形状-10-拷贝.png'),
              searchImg:require('../assets/web1/矩形36拷贝5.png'),
              searchImgone:require('../assets/web1/矩形36拷贝2.png'),
              showMask:false,
              showGenduo:false,
              brandList:[],
                 brandList1:[],
                 brandList2:[],
                  countryList:[],
                 countryList1:[],
                 countryList2:[],
              sortName:'',
             closeImg:require('../assets/hello/形状-5.png'),
             openImg:require('../assets/hello/形状-6.png'),
             navList:[  {name:"服务与培训"}, {name:"用户中心"}, {name:"商家入驻"},  {name:"帮助中心"}, ],
             searchList:[  {name:"热门新品"}, {name:"|"}, {name:"灭火器"},   {name:"|"}, {name:"消防水枪"}, {name:"|"},{name:"消防栓"},{name:"|"},{name:'消防疏散指示灯'}],
                 sortList:[],
                    data:[],
                 name: [],
                 msg: 0, //数量总数
                datasize: 12, //每页显示数据量(-1)
                dqy: 1, //页数
                msgs:0,
             msgname: '',
             com: false,
            zongy: [],
            Sum:0,
            agreement:0,
            showIndex:true,
            showload:false,
            import1:1,
          host:"http://"+window.location.host,
           cat_id:0,
          brand_id:0,
          country_id:0,
          price:0,
          price_start:'',
          price_end:'',
          search:""

               }
        },
        created: function(){
          // console.log(window.location.host)
          // this.getData();
          this.getCartList();
          $(function(){
              $(".lanrenzhijia_service").hover(function(){
                $(this).stop().animate({width:'160px'});
              },function(){
                $(this).stop().animate({width:'40px'});
              });
    });
        },
        methods: {
          getCartList(){
               this.$http.post(store.state.config.apiUrlRoot + 'admin/Product/agreementList',{
                 page:this.currentPage,
                 pagecount:this.display,
                 country:this.import1,
                 cat_id:this.cat_id,
                 brand_id:this.brand_id,
                 country_id:this.country_id,
                 price:this.price,
                 price_start:this.price_start,
                 price_end:this.price_end,
                 search:this.search
               }).then((res)=>{
                   var data=res.data
                this.agreement=data.content.agreement
              this.sortList=data.content.catList;
              this.brandList=data.content.brand;
                if(this.brandList.length>9){
                  this.brandList1=this.brandList.slice(0,9);
                  this.brandList2=this.brandList.slice(9,this.brandList.length);
                  }else{
                      this.brandList1=this.brandList;
                      this.brandList2=[];
                  }
                  if(this.import1==2){
                      this.countryList=data.content.country_list;
                  if(this.countryList.length>9){
                  this.countryList1=this.countryList.slice(0,9);
                  this.countryList2=this.countryList.slice(9,this.countryList.length);
                  // console.log(this.brandList2)
                  }else{
                      this.countryList1=this.countryList;
                      this.countryList2=[];
                  }

                  }
                
  
             
                 this.msg=data.content.total_num;
               
                 this.total=data.content.total_num;
                this.name = data.content.list;
           
          
            },
            function(erro){
              
            });

          },
             getCartList1(){
               this.$http.post(store.state.config.apiUrlRoot + 'admin/Product/agreementList',{
                 page:this.currentPage,
                 pagecount:this.display,
                 country:this.import1,
                 cat_id:this.cat_id,
                 brand_id:this.brand_id,
                 country_id:this.country_id,
                 price:this.price,
                 price_start:this.price_start,
                 price_end:this.price_end,
                 search:this.search
               }).then((res)=>{
                   var data=res.data
                this.agreement=data.content.agreement;
              this.brandList=data.content.brand;
                if(this.brandList.length>9){
                  this.brandList1=this.brandList.slice(0,9);
                  this.brandList2=this.brandList.slice(9,this.brandList.length);
                  }else{
                      this.brandList1=this.brandList;
                      this.brandList2=[];
                  }
                  if(this.import1==2){
                      this.countryList=data.content.country_list;
                  if(this.countryList.length>9){
                  this.countryList1=this.countryList.slice(0,9);
                  this.countryList2=this.countryList.slice(9,this.countryList.length);
                  }else{
                      this.countryList1=this.countryList;
                      this.countryList2=[];
                  }

                  }
                
  
             
                 this.msg=data.content.total_num;
               
                 this.total=data.content.total_num;
                this.name = data.content.list;
            },
            function(erro){
              
            });

          },
             pagechange:function(currentPage){
               this.currentPage=currentPage
               this.getCartList1();    
     },
         china(a){
              this.country_id=""
              this.cat_id=""
               this.price='';
                this.price_start='';
                this.price_end="";
                this.search="";
                  this.brand_id="";
           this.sRed=a;
            this.import1=a;
            if(a==1){
              this.showCountry=false
            }else{
              this.showCountry=true
            }
              this.getCartList1();
          },
         
        
          clearPrice(){
            this.price_start='';
            this.price_start='';

          },
          goIndex(){
            
            this.$router.push({path:'/'})

          },
            reload(){
               this.country_id=""
              this.cat_id=""
               this.price='';
                this.price_start='';
                this.price_end="";
                this.search="";
                  this.brand_id="";
                  this.flags=false;
                this.getCartList();
            

          },
          searchKey(){
            this.price='';
           this.price_start='';
           this.price_end="";
          this.cat_id='';
          this.brand_id="";
            this.getCartList1();
      
          },
            searchPrice(){
           this.search="";
          this.cat_id="";
          this.brand_id="";
                  this.getCartList1();
                
       },
        loding(){
            this.$http.post(store.state.config.apiUrlRoot + 'admin/user/workIndex').then(
              function(response){
                var data=response.body;
        
                if(data.code==1){
                  if(data.content.data.roleID==5){
                    window.location.href=this.host+"/zong/#/module";
                  }else{
                      window.location.href=this.host+"/zhi/#/module";
                  }
                }else{
                 this.$message({
                        showClose: true,
                        message: '请您先登录',
                        type: 'success'
                         });  
                }
              },
              );
        // this.$router.push({ path: 'login'});
      },
     
      loding2(){
        this.$http.post(store.state.config.apiUrlRoot + 'admin/user/workIndex').then(
          function(response){
            var data=response.body;
           
            if(data.code==1){
              if(data.content.data.roleID==5){
                window.location.href=this.host+"/zong/#/module";
              }else if(data.content.data.roleID==4){
                               window.location.href=this.host+"/zhi/#/module";
              }else if(data.content.data.roleID==2){
                               window.location.href=this.host+"/supply";
              }else if(data.content.data.roleID==1){
                     window.location.href=this.host+"/admittance/#/module";
              }else if(data.content.data.roleID==7){
                               window.location.href=this.host+"/big/#/module";
              }else if(data.content.data.roleID==8){
                     window.location.href=this.host+"/middle/#/module";
              }else{
                     window.location.href=this.host+"/qiancheng/#/module";
              }
            }else{
                 this.$message({
                        showClose: true,
                        message: '请您先登录',
                        type: 'success'
                       });  
            }
          },
          );
        // this.$router.push({ path: 'login'});
      },
   

      on(el) {

        if(el == "show") {
          this.a = false
          this.data = this.one
          this.name = this.data.slice(0, this.datasize)
          this.msg = this.data.length

        } else {
          this.a = true
          this.data = this.two
          this.name = this.data.slice(0, this.datasize)
          this.msg = this.data.length
        }
      },
         handleGet(index,ins){
           
           this.price='';
           this.price_start='';
           this.price_end="";
           this.search="";
          this.cat_id=this.sortList[index].list[ins].cat_id;
           this.sortName=this.sortList[index].name;
          this.brand_id="";
            this.getCartList1();
           this.showCart=true;
          },
          getPro(index){
          this.BB=index;
            this.price='';
           this.price_start='';
           this.price_end="";
           this.search="";
           this.cat_id="";
           this.country_id=""
           this.brand_id=this.brandList2[index].brand_id
         this.getCartList1();
          },
          getPro1(index){
            this.BB=index;
                this.price='';
           this.price_start='';
           this.price_end="";
           this.search="";
           this.cat_id="";
           this.country_id=""
            this.brand_id=this.brandList1[index].brand_id
           this.getCartList1();
          },
          getCou1(index){
            this.AA1=index;
            this.price='';
           this.price_start='';
           this.price_end="";
           this.search="";
           this.cat_id="";
                this.brand_id="";
            this.country_id=this.countryList1[index].country_id;
            this.getCartList1();

          },
              getCou(index){
            this.AA2=index;
                this.price='';
           this.price_start='';
           this.price_end="";
           this.search="";
           this.cat_id="";
           this.brand_id="";
            this.country_id=this.countryList2[index].country_id;
            this.getCartList1();

          },
           handleDetail(index){
             this.$store.commit("changeStatus",this.agreement)
              this.$router.push({ path: 'detail', query: { productID:index}});
          },
        handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
          changeList(){
                  this.searchImg=require('../assets/web1/矩形36拷贝5_80.png');
      this.searchImgone=require('../assets/web1/矩形36拷贝2_81.png');
        
           this.grid=false;
            this.list=true;
          },
          changeGrid(){
            this.searchImgone=require('../assets/web1/矩形36拷贝2.png'),
                this.searchImg=require('../assets/web1/矩形36拷贝5.png'),
           
            this.list=false;
            this.grid=true;
          },
            // openDiv(index){
              
            //    this.sortList[index].showChild= !this.sortList[index].showChild;
            //    this.sortName=this.sortList[index].name
            //    this.showCart=true;
            //    this.flags=true;
            // },
            //  closeDiv(index){
            //     this.sortList[index].showChild=true;
            // },
              changeli: function(ind, item) {
                this.sortList.forEach(i => {
                    if (i.showChild !== this.sortList[ind].showChild) {
                        i.showChild = true;
                    };
                });
                item.showChild = !item.showChild;

                this.sortName=this.sortList[ind].name
                  this.flags=true;
            },
            doThis: function(index,ins) {
                 this.price='';
           this.price_start='';
           this.price_end="";
           this.search="";
          this.cat_id=this.sortList[index].list[ins].cat_id;
           this.sortName=this.sortList[index].name;
          this.brand_id="";
            this.getCartList1();
            },
       changeRed(a) {
           this.price_start='';
           this.price_end="";
           this.search="";
           this.cat_id="";
           this.brand_id="";
         this.price=a
        this.getCartList1();
        if(this.isActive == true) {
          this.isActive = false;
          this.upImg = require('../assets/hello/形状-10-拷贝-2.png');

        } else {
          this.isActive = true;
          this.isAc=false;
          this.upImg = require('../assets/hello/形状-10.png');
          this.downImg = require('../assets/hello/形状-10-拷贝.png');
        }
        this.status=1;
      },
          changeImg(a) {
           this.price_start='';
           this.price_end="";
           this.search="";
           this.cat_id="";
           this.brand_id="";
            this.price=a
        this.getCartList1();
        if(this.isAc == true) {
          this.isAc = false;
          this.downImg = require('../assets/hello/形状-10-拷贝.png');
        } else {
          this.isAc = true;
          this.isActive=false;
          this.downImg = require('../assets/hello/形状-10-拷贝_11.png');
          this.upImg = require('../assets/hello/形状-10-拷贝-2.png');
        }
        this.status=2;
        
      },
   handleCart(){
         this.$router.push({ path: 'cart'});
         },
            multiSelect(){
        
                this.showMask=!this.showMask; 
            },
             multiSelectone(){
        
                this.showGenduo=!this.showGenduo; 
            },
        },
       
    }
</script>
<style scoped lang="less">
.sort-list-left
{
  width: 100%;
  font-family: "MicrosoftYahei-Bold";
  overflow:hidden;
} 
.sort-list-left li
{
  width: 210px;
  display: block;
  float: left;
  text-align: left;
  padding-left:25px;
  border-bottom:1px solid #dcdcdc;
}
.sort-list-left li span
{
  line-height: 40px;
  height: 40px;
  display: inline-block;
  width: 90%;
  cursor: pointer;
}
.top {
    width: 100%;
    height: 36px;
    background-color: #333333;
    margin: 0 auto;
    line-height: 40px;
  }
  
  .top_1 {
    color: #333;
  }
  .Red{
    color:#e45944;
  }
  
  .a_href {
    color: #333;
    margin: 0 10px;
  }
    .active_ {
    cursor: pointer;
  }
  .active_1:hover{
      transition: all 1s linear; 
       transform: scale(1.1);  
  }
  li {
    list-style: none;
  }
  
  .content {
    width: 1200px;
    margin: 0 auto;
   overflow:hidden;
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
  







.brand-button
{
  margin-top: 5px;
  display: inline-block;
  height: 32px;
  font-size: 10px;
  padding: 5px;
  margin-left: 30px;
  border: none;
  background: #ffffff;
  cursor: pointer;
  line-height: 25px;
}
.open-p
{
    height: 32px;
    margin-top: 0px;
    cursor: pointer;
    display: block;
    padding: 5px;
    text-align: left;
    border: none;
    background: #ffffff;
    margin-bottom: 5px;
    width: 162px;
    padding-right: 5px;
    overflow: hidden;
}
.ft {
    font-weight: bold;
    color:#e45944 !important;
  }
.flex-item {
   margin-right: 9px;
   margin-bottom: 9px;
}
ul,li
{
  list-style: none;
}
.red
{
    color:red;
}
a
{
    text-decoration: none;
}
.white
{
  background: #ffffff;
}
.module
{
  /*  width: 100%;*/
    max-width: 1920px;
     overflow:hidden;
}
.page
{
  margin-top: 60px;
  height: 65px;
  float: right;
  font-size: 14px;
}
.brand-grid-btn-p
{
  width: 76px;
  height:50px;
  margin-top: 0px;
  line-height: 25px;
  text-align: center;
  font-size: 14px;
  float: left;
   border:1px solid #bdbdbd;
  border-left:0 solid #bdbdbd;
  border-bottom:0 solid #bdbdbd;
}
.brand-grid-ul-txt
{
  width: 200px;
  height: 75px;
}
.brand-grid-btn
{
  height: 50px;
  width: 230px;
  margin-left: -10px;
  margin-top: 10px;
}
.brand-grid-content
{
  height: 40px;
  line-height: 20px;
  width: 200px;
  font-size: 14px;
  font-family: bold;
overflow: hidden;
text-overflow:ellipsis;
white-space: nowrap;
}
.brand-list,.brand-grid
{
  width: 100%;
  margin-top: 20px;
}
.brand-list-top
{
 padding-left:20px;
  width: 942px;
  height: 43px;
  border:1px solid #bdbdbd;
  margin-bottom: -12px;
}
.brand-list-top-span
{
  height:43px;
  line-height: 43px;
  margin-left: 62px;
}
.brand-grid-ul-p
{
  font-weight: bolder;
  font-size: 18px;
  color:red;
  margin-top: 0px;
}
.brand-list-bottom
{
  width: 97.8%;
/*  height:200px;*/
  margin-top: 20px;
}
.brand-list-bottom-ul
{
  width:100%;
 border-top: 1px solid #bdbdbd;
}
.brand-grid-ul
{
  width: 100%;
   list-style: none;
   display: flex;
   flex-direction: row;
   flex-wrap: wrap;
   padding-left: 0px;
}
.brand-grid-ul li
{
 width: 230px;
  height: 300px;
  padding-left: 10px;
  padding-top: 10px;
  border:1px solid #bdbdbd;
   background: #ffffff;
   float: left;
  cursor: pointer;
  margin-right:10px;
  margin-bottom: 20px;
}
.brand-list-bottom-ul li
{
  border:1px solid #bdbdbd;
  height: 60px;
  line-height: 60px;
  border-top: 0px solid #bdbdbd;
 background:#ffffff;
}
.brand-list-bottom-txt
{
    height: 60px;
    line-height:60px;
    float: left;
    margin-top: 0px;
    width:200px;
    padding-left:20px;
    overflow:hidden;
    text-overflow:ellipsis; 
    margin-left: -220px;
}
.price-img
{
  position: absolute;
  top:10px;
  left: 200px;
}
.search-price
{
  position: relative;
  margin-left: 30px;
  width: 400px;
  float: left;
}
/*商品分类*/
.search-price-btn
{
  width:150px;
  height: 44px;
  float: right;
}
.search-price-btn img
{
  cursor: pointer;
  /* height: 40px; */
  margin-top: -7px;
}
.price-input
{
  width: 55px;
  height: 23px;
}
.xie
{
  width: 78px;
  height: 100%;
  margin-left: 50px;
  text-align: center;
  float: left;
  cursor: pointer;
}
/*右侧*/
.brandMask
{
/*  padding-left:0px;*/
  padding-right: 60px;
  position: absolute;
  width: 909px;
  background:#ffffff;
  left:54px;
  top: 44px;
  border:1px solid #dcdcdc;
  border-top:0px solid #dcdcdc;
/*  border:1px solid red;*/
 z-index: 200;
 padding-left:20px;
}
.brand-price
{
    /*width: 942px;*/
    height: 44px;
    margin-bottom: 12px;
    line-height: 44px;
    padding-left:20px;
    background: #f0f0f0;
    border:1px solid #dcdcdc;
    margin-bottom:12px;
}
.brandImg
{
  position: absolute;
  top:12px;
  right: 15px;
  cursor: pointer;
}
.ms
{
  vertical-align: middle;
  margin-left: 20px;
}
.gd
{
line-height: 44px;
  margin-left: 90px;
}
.brand
{
    /*width: 942px;*/
    height: 44px;
    margin-bottom: 12px;
    background: #ffffff;
    line-height: 44px;
    padding-left:20px;
    border:1px solid #dcdcdc;
    position: relative;
}
.brand-p
{
    height: 40px;
    line-height:44px;
    float: left;
    margin-top: 0px;
  
 /* padding:10px; */
}
.brand-content
{
    float:left;
    width: 730px;
    height: 100%;
    overflow:hidden;
    padding-left: 10px;
}
.brand-span
{
    margin-left:42px;
}
.sort-right-title
{
    height:50px;
    line-height: 50px;
    width: 964px;
    letter-spacing:0.5px;
}
.sort-right
{
    width: 964px;
    max-height: 2200px;
    float:left;
    margin-left: 25px;
    margin-top: 0px;
    font-size:12px;
    color:#333333;
}
.content-sort
{
    width: 100%;
    min-height: 600px;
    border-top:1px solid #e45944;
}
.open
{
  width: 162px;
  margin-left:-30px;
  padding-left: 48px;
  margin-top:0px;
  line-height: 20px;
}
.open p
{
    height: 20px;
    line-height: 20px;
    margin-top: 0px;
}
.sort-left
{
  width: 210px;
  background:#ffffff;
  border: 1px solid #ffffff;
  box-shadow:0px 0px  2px 2px #eeeeee;
/*  height: 494px;*/
   float: left;
}
.sort-ul
{
  width:169px;
  font-size: 14px;
  color:#333333;
  margin:0;
  height: 100%;
  font-family: "MicrosoftYahei-Bold";
}
.sort-ul-li
{
  width: 185px;
  display: block;
  float: left;
  text-align: left;
  margin-left: -40px;
  padding-left:25px;
  border-bottom:1px solid #dcdcdc;
}
.sort-ul-li:last-child
{
    border-bottom: 0px solid #dcdcdc;
}
.close
{
    font-weight: bold;
    height: 40px;
    line-height: 40px;
    font-size: 14px;
}
.close img
{
    cursor: pointer;
}
.content
{
    width: 1200px;
    margin: 0 auto;
    height: 100%;
}
.nav  
{
    position: absolute;
    width:100%;
    height: 36px;
    background-color: #f2f2f2;
    top: 0px;
    left: 0px;
    line-height: 36px;
    font-family: "MicrosoftYaHei Bold";
    font-size: 12px;
    color:#808080;
}
.nav-img
{
  margin-left: 360px;
  vertical-align: middle;
  margin-right: 5px;
}
.red
{
  color:red;
}
.nav-ul
{
  position: absolute;
  height: 36px;
  line-height: 36px;
  display: block;
  float: right;
  right: 360px;
  top:-10px;
}
.nav-ul-li
{
  width: 65px;
  list-style: none;
 display: block;
  float: left;
  margin-left:47px;
}
.content
{
    width: 1200px;
    margin: 0 auto;
    height: 100%;
}
.content-search
{
  margin-top:36px;
  clear: both;
  width: 100%;
  height: 173px;
}
.top
{
  height: 120px;
  margin-bottom: 10px;
  claer:both;
}
.logo 
{
margin-top: 80px;
height:60px;
width: 321px;
text-align: left;
float: left;
margin-left: 312px;
}
.search
{
   float:left;
   margin-top:50px;
   margin-left: 321px;
   position: relative;
}
.input-text
{
height: 32px;
width: 416px;
outline:none;
border: 2px solid red;
}
.search img
{
position: absolute;
left:420px;
top:0px;
}
.search-ul
{
  height:20px;
  font-size: 12px;
  color: #808080;
  line-height: 20px;
}
.search-ul li
{
  list-style: none;
 display: block;
  float: left;
  margin-right: 2px;
/*  border:1px solid red;*/
}
.search-ul li:hover
{
  color:red;
  cursor: pointer;
}
.cart
{
 /* float: right;
  margin-top:50px;
  width: 130px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: #fffdfd;
  background: #fe4d3c;
  cursor: pointer;*/
   float: right;
  margin-top:50px;
  cursor: pointer;
}
.bottom
{
  clear: both;
  height: 43px;
  line-height: 43px;
}
.bottom-sort
{
  width:211px;
  height: 100%;
  background-color: red;
  float: left;
}
.bottom-sort span
{
  font-size: 16px;
  padding-left:20px;
  color: #ffffff;
  font-weight: bold;
}
.bottom-text
{
  margin-left: 45px;
  width:100px;
  float: left;
  color: red;
  font-weight: bold;
}
.h
{
  width: 60px;
  margin-left: 3px;
  height:3px;
  border:none;
  background-color: red;
  margin-top: -3px;
}
</style>
