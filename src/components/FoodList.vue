<template lang="">
<h1 style="text-align:left;" > Items </h1>


<div  class="foodItem" style="text-align:left;"  v-for="(item,index)  in $store.state.foodItems" :key="item.id">
    
    <div class="content">
      <p>{{item.title}}</p>
      <div>
        <span style="margin-right:5px;"> $ {{item.price}}</span>
        <span @click="remove(index)"><i class="fas fa-trash-alt" style="color:#D11919;"></i></span>
      </div>
    </div>

    <hr class="dashed">
</div>


</template>
<script>
export default {
  name: "FoodList",

  props: {},

  data() {
    return {};
  },
  methods: {
    remove(index){
      console.log(index);
          this.$store.commit('removeFoodItem',index);
      }
    }
};
</script>

<style scoped>
.foodItem {
  display: flex;
  flex-direction: column;
  margin: 10px;
}
.foodItem .content {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  width: 100%;
}

.content p {
  margin:0;
}

hr.dashed {
  width:100%;
  border-top: 3px dashed #bbb;
}
</style>