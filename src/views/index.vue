<template>
  <div>
    <router-link :to="{ path: '/live', query: {userId: 'index'}}">index</router-link>
    {{ $t('live') }}
    {{ $t('work') }}
    <p v-cloak>
      <router-link :to="{ path: '/work', query: {userId: 123}}">{{ message }}</router-link>
    </p>
    <p v-once>
      {{ message }}
    </p>
    <form action="">
      <input type="text" placeholder="请输入" v-model="name">
      <button type="button" @click="submit">submit</button>
    </form>
  </div>
</template>

<script>

export default {
  name: 'Index',
  data() {
    return {
      locale: 'en',
      message: 'message',
      name: '',
    }
  },
  
  watch: {
    locale(language) {
      this.$i18n.locale = language;
    }
  },

  mounted() {
    // setTimeout(() => {
    //   console.log('出发locale')
    //   this.locale = 'ja';
    // }, 2000);
  },

  methods: {
    submit() {
      console.log(this.name, this.$socket.io.emit);
      this.$socket.io.emit('submit', this.name);
    }
  },

  sockets:{//不能改
    connect:function() {//与socket.io连接后回调
      console.log('socket connected');
    },
    login:function(value) {
      console.log(value);//监听login(后端向前端emit  login的回调)
    },
    disconnect: function() {
      console.log('disconnect');
    }
  },
}
</script>

<style>
  [v-cloak] {
    display: none;
  }
</style>
