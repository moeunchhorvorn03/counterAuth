<template>
  <button @click="increment">Add 1</button>
  <button @click="increase({n: 10})">Add 10</button>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    methods: {
        // addOne(){
        //     this.$store.dispatch('increment')
        // }
        ...mapActions('counter', ['increment','increase'])
    }
}
</script>

<style>

</style>