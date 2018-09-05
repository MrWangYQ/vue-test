<template>
  <div>
    <router-link :to="{path: '/work', query: {name: 'work', age: '18'}}">{{ $t('live') }}</router-link>
  </div>
</template>

<script>

export default {
  name: 'Live',
}

</script>

<style>

</style>
