<template lang="">
<h1> Hello </h1>
</template>
<script>
export default {
  name: "FoodList",
  props: {

  },

  data(){
      return {
          list: ["1","2","3","4"]
      }
  },
  methods: {

    getItemFood(itemFood){
      console.log(itemFood);
    }
  }


};
</script>

<style scoped>




</style>