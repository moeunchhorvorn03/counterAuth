<template>
  <h3>{{ finalCounter }}</h3>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
   computed: {
   //  count(){
   //    return this.$store.getters.finalCounter
   //  }
   ...mapGetters('counter', ['finalCounter'])
  }
}

</script>

<style>

</style>