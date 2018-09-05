// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import VueI18n from 'vue-i18n';
import lang from './lang';
// import VueSocketio from 'vue-socket.io';
// import socketio from 'socket.io-client';
import WechatPlugin from 'vux/src/plugins/wechat';
// import LoadingPlugin from 'vux/src/plugins/loading';

Vue.config.productionTip = false;

Vue.use(VueI18n);
Vue.use(WechatPlugin);
// Vue.use(LoadingPlugin);
// Vue.use(VueSocketio, socketio('http://10.200.19.125:3000')); // 与服务端链接

const i18n = new VueI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: lang,
})


new Vue({
  el: '#app',
  i18n,
  router,
  components: { App },
  template: '<App/>'
})
