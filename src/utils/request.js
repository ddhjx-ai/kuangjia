import axios from 'axios'
import store from '@/store'
import NProgress from 'nprogress'
import { Message } from 'element-ui'

// 初始化进度条，取消进度条读取时的圈圈
NProgress.configure({ showSpinner: false })
const request = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 20000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
})

// 请求拦截器
request.interceptors.request.use(
  config => {
    config.headers.token = store.state.token
    // 请求数据过程中，开启进度条
    NProgress.start()
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 响应拦截器
request.interceptors.response.use(
  response => {
    // 获取数据后，关闭进度条
    NProgress.done()
    return response
  },
  error => {
    Message.error({
      message: error.message
    })
    // 获取数据失败也关闭进度条
    NProgress.done()
    return Promise.reject(error)
  }
)

export default request
