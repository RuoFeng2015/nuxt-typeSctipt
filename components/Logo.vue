<template>
  <div @click="handleMessage">
    <h1>标题：{{ title }}</h1>
    <h3>message:{{ message }}</h3>
    <h2>a+b:{{ abPlus }}</h2>
    {{ $store.state.Apps.wheels }}
  </div>
</template>
<script lang='ts'>
import { Component, Vue, Watch, Prop, Emit } from 'nuxt-property-decorator'
import {
  namespace
} from 'vuex-class'

const Vehicle = namespace('Apps')
// @Component 装饰器使类成为Vue组件：
@Component
export default class App extends Vue {
    private message: string = 'hello、世界！';
    a = 1;
    b = 2;

    //! 修饰符 表示强制解析（也就是告诉typescript编译器，我这里一定有值）
    @Prop({ default: 'Nuxt' }) title!: string;
    mounted () {
      console.log(process.env.baseUrl, '坏境变量')
      // console.log('%c 🍻 this.$store: ', 'font-size:20px;background-color: #FCA650;color:#fff;', this.$store)
    }

    @Vehicle.Mutation('puncture')
    public mutationPuncture!: (n: number) => void;

    private reverseMessage () {
      this.message = this.message
        .split('')
        .reverse()
        .join('')
    }

    // 坑点 父组件接收到的名字要用  @handle-message
    @Emit()
    private handleMessage ():number {
      this.mutationPuncture(1)
      this.message = '5555' + Math.random() * 10
      this.a = Math.random() * 10
      return this.a
    }

    private get abPlus (): Number {
      return this.a + this.b
    }

    // immediate 初始化就执行一次
    // deep开启深度监听
    @Watch('message', { immediate: true, deep: true })
    onMessageChange (val: string) {
      console.log('%c 🦑 val: ', 'font-size:20px;background-color: #465975;color:#fff;', val)
      // console.log(
      //   '%c 🥓 val: ',
      //   'font-size:20px;background-color: #33A5FF;color:#fff;',
      //   val
      // )
    }
}
</script>
<style>
  .NuxtLogo {
    animation: 1s appear;
    margin: auto;
  }

  @keyframes appear {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
</style>
