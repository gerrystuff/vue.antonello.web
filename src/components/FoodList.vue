<template lang="">
<h1 style="text-align:left;" > Items </h1>

<div style="text-align:left;"  v-for="(item)  in $store.state.foodItems" :key="item.id">
    {{item.title}}
    {{item.price}}
</div>
</template>
<script>
export default {
  name: "FoodList",


  props: {

  },

  data(){
      return {
      }
  },
  methods: {
  

  },



};
</script>

<style scoped>




</style>