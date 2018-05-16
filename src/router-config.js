
import Hello from './components/Hello.vue'
import First from './components/First.vue'
import car from './components/car.vue'
import module from './page/module.vue'
import Test from './components/test.vue'
import Detail from './components/Detail.vue'
import Login from './components/login.vue'
import Reg from './components/register.vue'
import forgotPas from './components/forgotPas.vue'
import sortAll from './components/sortAll.vue'
import shop from './components/shop.vue'
import shop1 from './components/shop1.vue'
import shoptwo from './components/shoptwo.vue'
import shopthree from './components/shopthree.vue'
import shopmore from './components/common/shopmore.vue'
import moresecond from './components/common/shopmoretwo.vue'
import chak from './components/chakangend.vue'
import cai from "./components/cai.vue"
import san from "./components/san.vue"
import help from "./components/help.vue"
// import slider from './page/slider.vue'
// import sliderBasic from './page/slider_basic.vue'
// import login from './page/login.vue'
// import test from './page/test.vue'
import page404 from './page/404.vue'



export default [
 {
        path: '/shopone', component: shop1
    },
   
    {
        path: '/', 
        component: resolve=>require(['./components/First.vue'],resolve)
    },
      {
        path: '/cai', component: cai
    },
     {
        path: '/shopmore', component: shopmore
    },
    {
        path: '/moresecond', component: moresecond
    },
    {
        path: '/car', component: car
    },
     {
        path: '/help', component: help
    },
     {
        path: '/san', component: san
    },
    {
        path: '/shop', component: shop
    },
    {
        path: '/shoptwo', component: shoptwo
    },
     {
        path: '/shopthree', component: shopthree
    },
    //   {
    //     path: '/tes', component: tes
    // },
    //   {
    //     path: '/login', component: login
    // },
      {
    path: '/protocol',
    component: Hello
   },
    {
        path: '/module', component: module,
    },
     {
        path: '/many', component: chak,
    },
      {
        path: '404', component: page404,
    },
     {
        path: '/cart', component: Test,
    },
        {
        path: '/detail', component: Detail,
    },
      {
        path: '/login', component: Login,
    },
     {
        path: '/sortAll',
        name:'sortAll',
       component: sortAll  ,
    },
     {
        path: '/register', component: Reg ,
    },
    {
        path: '/forgotPas', component: forgotPas,
    },
]
