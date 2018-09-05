<template>
  <div id="app">
    <keep-alive name='App'>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
import { language, languageArea } from './utils/navigatorLanguage.js';
import login from './components/login.vue'
import chatRoom from './components/chatRoom.vue'

export default {
  name: 'App',

  components:{
    login,
    chatRoom,
  },

  beforeMount() { // 每次进入都会执行
    console.info("topic:beforeMount");
  },

  activated() {// 每次进入都会执行
    console.info(this);
  },

  data() {
    return {
       locale: 'en',
    }
  },

  watch: {
    locale(language) {
      this.$i18n.locale = language;
      console.log(this.$i18n.locale);
    }
  },

  created() {
    console.log(language, this.$socket);
    this.locale = language;
    // this.locale = 'ko';
    console.log('created')
    // this.$socket.emit('start');//触发start
    // this.$socket.io.on('loadding', (result) => {
    //   console.log(result);
    // })
  },

  // sockets:{//不能改
  //   connect:function() {//与socket.io连接后回调
  //     console.log('socket connected');
  //   },
  //   login:function(value) {
  //     console.log(value);//监听login(后端向前端emit  login的回调)
  //   }
  // },

  methods: {
    
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
