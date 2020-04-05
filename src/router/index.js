import Vue from 'vue'
import NProgress from 'nprogress'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

let routes = []
const requireContext = require.context(
  './', // 在当前文件夹下查找
  true, // 是否下转查找
  /\.js$/ // 查找以.js为后缀的文件
)
console.log(requireContext)
requireContext.keys().forEach(filename => {
  // console.log(filename) 获取到该文件夹下的所有文件
  if (filename === './index.js') return
  const routerModule = requireContext(filename)
  // console.log(routerModule) 获取到对应模块文件中的内容
  routes = [...routes, ...(routerModule.default || routerModule)]
})
console.log(routes)

/* const route = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  ...[routes]
] */

const router = new VueRouter({
  routes
})

// 动态路由
router.addRoutes([
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  }
])

// 路由跳转，显示进度条
router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})
router.afterEach((to, from) => {
  NProgress.done()
})

export default router
