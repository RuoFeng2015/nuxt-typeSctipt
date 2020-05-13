import request from '@/utils/request'

export default {
  getData_typejob () {
    return request({
      url: '/index',
      method: 'get'
    })
  },
  getData_jobTab (req:any) {
    return request({
      url: '/position',
      method: 'get',
      params: req
    })
  },
  getData_enterprise (req:any) {
    return request({
      url: '/enterprise',
      method: 'get',
      params: req
    })
  },
  getData_freshlist () {
    return request({
      url: '/freshlist',
      method: 'get'
      // params: req
    })
  },
  getAgreement () {
    return request({
      url: '/agree',
      method: 'get'
      // params: req
    })
  }
}
