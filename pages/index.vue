<template>
  <div class="container">
    <div>
      <!-- {{ list }}11 -->
      <p v-for="(item,index) in list" :key="index">
        {{ item.firm_name }}11
      </p>
      <logo @handle-message="handleMessages" />
      <h1 class="title">
        jpl-es
      </h1>
      <h2 class="aaa">
        My solid Nuxt.js project
      </h2>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import homeApi from '@/api/home'
import Logo from '~/components/Logo.vue'

export default Vue.extend({
  components: {
    Logo
  },
  asyncData () {
    // 这里一定要记得return出去 否则不执行
    return homeApi.getData_typejob().then((res:any) => {
      console.log(res)
      // asyncData 会把返回到的数据映射到data中的list上 这里不能访问this
      return { list: res.result.job_fair }
    })
  },
  data () {
    return {
      list: ''

    }
  },
  methods: {
    handleMessages (es: any) {
      console.log(
        '%c 🍻 e: ',
        'font-size:20px;background-color: #FFDD4D;color:#fff;',
        es
      )
    }
  }
})
</script>
<style lang='scss'>
  .container {
    font-size: 30px;
    color: pink;
    .title {
      color: $jplcolor;
    }
  }
</style>
<style>
  .container {
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .title {
    font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
      "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
  }

  .subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }

  .links {
    padding-top: 15px;
  }
</style>
