<template lang="">
    <div @click="add" class="card">
        <div class="content"> 

      <img :src="images[indexImage]"/> 
        
            <p style="margin:5px 0 0 0;">
            {{title}}
            </p>
        </div>
        
    </div>
</template>




<script>

import { mapState } from 'vuex';

export default {
  name: "MenuItem",
  props: {
    indexImage: Number,
    title: String,
    price: Number,
    recipe: Array
  },

  data() {
    return {};
  },

  methods: {
      add(){
          this.$store.commit('addFoodItem',{
              "title"  : this.title,
              "price"  : this.price,
              "recipe" : this.recipe
          });
      }
  },

  computed: mapState(['images'])
};
</script>



<style scoped>
.card {
  margin: 10px;
  width: 220px;
  height: 170px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
}
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.content {
  height: 155px;
  margin: 5px;
  display: flex;
  flex-direction: column;
}
p {
}
</style>