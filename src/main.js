import Vue from 'vue'
import App from './App.vue'
import store from './vuex/store'
import VueResource from 'vue-resource'
vue.use(VueResource)
import './unit/const';
import './control';
import { subscribeRecord } from './unit';
subscribeRecord(store); // 将更新的状态记录到localStorage
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#root',
  render: h => h(App),
  store: store
})
export default {
  name: 'hello',
  data () {
    return {
    }
  },
  methods: {
    getList() {
      this.$http.get('/home/getlist',{}).then((response) => {
        console.log(response);
      })
    }
  }
}

