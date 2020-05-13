import env from './env'
export default {
  env: {
    baseUrl: env[process.env.MODE].ENV_API
  },
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: 'red' },
  /*
  ** Global CSS
  */
  css: [
    {
      src: '~assets/css/main.scss',
      lang: 'scss'
    },
    'element-ui/lib/theme-chalk/index.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/element-ui',
    {
      src: '~/plugins/axios',
      ssr: true
    }

  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxt/typescript-build'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/style-resources'
  ],
  axios: {
    prefix: '/home/v1/',
    proxy: true
    // credentials: true // 表示跨域请求时是否需要使用凭证
  },
  proxy: {
    '/home/v1': {
      target: env[process.env.MODE].ENV_API,
      changOrigin: true,
      pathRewrite: {
        '^/home/v1': '/'
      }
    }
  },
  styleResources: {
    scss: './assets/css/main.scss'
  },
  /*
  ** Build configuration
  */
  build: {
    transpile: [/^element-ui/]
    // styleResources: {
    //   scss: './assets/css/main.scss',
    //   options: {
    //     // See https://github.com/yenshih/style-resources-loader#options
    //     // Except `patterns` property
    //   }
    // },
    /*
    ** You can extend webpack config here
    */
    // extend (config, ctx) {

    // }
  }
}
