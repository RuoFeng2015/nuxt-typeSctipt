module.exports = {
  dev: {
    MODE: 'development',
    ENV_API: 'https://ggg.jiupinle.cn/home/v1/'
  },
  pre: {
    MODE: 'testing',
    ENV_API: 'https://jpl-api.besteast.cn/home/v1/'
  },
  pro: {
    MODE: 'production',
    ENV_API: 'https://api.jiupinle.cn/home/v1/'
  },
  tookenKey: 'pc_token'
}
