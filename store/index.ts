
import Vue from 'vue'
import Vuex from 'vuex'
import Apps from './modules/app'

Vue.use(Vuex)

// export default new Vuex.Store({})
export default () => {
  return new Vuex.Store({
    modules: {
      Apps
    }
  })
}
