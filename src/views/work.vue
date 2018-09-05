<template>
  <div>
    <router-link :to="{path: '/', query: {from: 'work', to: 'index' }}">{{ $t('work', {job: job}) }}</router-link>
  </div>
</template>

<script>
export default {
  name: 'Work',
  data() {
    return {
      job: 'Very difficult to get to work!'
    }
  },
  
  mounted() {
    setTimeout(() => {
      this.init();
    }, 2000);
  },

  methods: {
    init() {
      this.job = 'very happy';
    }
  }
}
</script>

<style>

</style>
