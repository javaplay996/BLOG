import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import news from '@/views/modules/news/list'
    import bozhu from '@/views/modules/bozhu/list'
    import discussbokewenzhang from '@/views/modules/discussbokewenzhang/list'
    import bokewenzhang from '@/views/modules/bokewenzhang/list'
    import discussshipinxinxi from '@/views/modules/discussshipinxinxi/list'
    import storeup from '@/views/modules/storeup/list'
    import discussredianxinwen from '@/views/modules/discussredianxinwen/list'
    import redianxinwen from '@/views/modules/redianxinwen/list'
    import wenzhangfenlei from '@/views/modules/wenzhangfenlei/list'
    import messages from '@/views/modules/messages/list'
    import shipinxinxi from '@/views/modules/shipinxinxi/list'
    import shipinfenlei from '@/views/modules/shipinfenlei/list'
    import config from '@/views/modules/config/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/news',
        name: '系统公告',
        component: news
      }
      ,{
	path: '/bozhu',
        name: '博主',
        component: bozhu
      }
      ,{
	path: '/discussbokewenzhang',
        name: '博客文章评论',
        component: discussbokewenzhang
      }
      ,{
	path: '/bokewenzhang',
        name: '博客文章',
        component: bokewenzhang
      }
      ,{
	path: '/discussshipinxinxi',
        name: '视频信息评论',
        component: discussshipinxinxi
      }
      ,{
	path: '/storeup',
        name: '我的收藏管理',
        component: storeup
      }
      ,{
	path: '/discussredianxinwen',
        name: '热点新闻评论',
        component: discussredianxinwen
      }
      ,{
	path: '/redianxinwen',
        name: '热点新闻',
        component: redianxinwen
      }
      ,{
	path: '/wenzhangfenlei',
        name: '文章分类',
        component: wenzhangfenlei
      }
      ,{
	path: '/messages',
        name: '留言板管理',
        component: messages
      }
      ,{
	path: '/shipinxinxi',
        name: '视频信息',
        component: shipinxinxi
      }
      ,{
	path: '/shipinfenlei',
        name: '视频分类',
        component: shipinfenlei
      }
      ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
