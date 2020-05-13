// import { Notification } from 'element-ui'
// import { getToken } from './../utils'
// export default function (app) {
//   console.log('%c 🍩 app: ', 'font-size:20px;background-color: #4b4b4b;color:#fff;', process.env.NODE_ENV)
//   const axios = app.$axios
//   // 基本配置
//   axios.defaults.timeout = 10000
//   axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

//   // 请求回调
//   axios.onRequest((config) => {
//     // 这里可以自定义一些config 配置
//     const token = getToken()
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`
//     }
//     return config
//   })

//   // 返回回调
//   axios.onResponse((response) => {
//     const res = response.data
//     if (res.statusCode === '100555') {
//       Notification.success({
//         title: '错误提示',
//         message: res.desc
//       })
//       // console.log('%c 🍔 res: ', 'font-size:20px;background-color: #7F2B82;color:#fff;', res)
//     }
//     console.log('axios')
//     // return res
//   })

//   // 错误回调
//   axios.onError((error) => {
//     return Promise.reject(error)
//   })
// }
