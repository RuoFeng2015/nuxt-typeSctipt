import axios from 'axios'
import { Notification } from 'element-ui'

// 创建axios 实例
const service = axios.create({
  baseURL: process.env.baseUrl, // api的base_url
  timeout: 10000 // 请求超时时间
})

// request 拦截器
service.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    Promise.reject(error)
  }
)

// response 拦截器
service.interceptors.response.use(
  (response) => {
    const res = response.data
    // 这里处理一些response 正常返回时的逻辑
    if (res.statusCode === '100555') {
      Notification.success({
        title: '错误提示',
        message: res.desc
      })
    }
    return res
  },
  (error) => {
    // 这里处理一些response 出错时的逻辑

    return Promise.reject(error)
  }
)

export default service
