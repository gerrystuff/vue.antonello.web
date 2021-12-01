<template lang="">
    <div class="content">
        <div class="header">
            <ul>
                <li @click="changeFlag()" :class="flag ? 'isActive' : 'notActive'"> GESTION </li>
                <li @click="changeFlag()" :class="!flag ? 'isActive' : 'notActive'"> REPORTES </li>

            </ul>
        </div>

        <div v-if="flag" class="content1">
               <FoodTable :items="alimentos"/>
        </div>

        <div v-else class="content2">
            <InventorysTable :items="inventarios"/>
            <div>

                 {{$store.state.inventario}}

            </div>
        </div>

        

    </div>
</template>
<script>
import { mapState, mapActions } from 'vuex';
import FoodTable from '@/components/inventory/FoodTable.vue'
import InventorysTable from '@/components/inventory/InventorysTable.vue'

export default {
  name: "Inventory",

  components: {
    FoodTable,
    InventorysTable
  },

  data(){
      return {
      flag:true,
      }
  },
  methods: {
      changeFlag(){
          this.flag = !this.flag;
      },
      ...mapActions(["listAlimentos","listInventarios"])
  },

  computed: {
      ...mapState(["alimentos","inventarios" ,"loading"]),
  },

  mounted(){
      this.listAlimentos();
      this.listInventarios();
  }
};
</script>
<style scoped>

.isActive {
    color:blue;
}
.notActive {
    color:black;
}

.content {
padding: 20px;
  height: 95vh;
  width: 88vw;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
}

ul {
    list-style: none;
}

.content1{
  width: 35%;
}

.content2{
  width: 35%;
}

ul li {
    display: inline;
     font-size: 20px;
    font-weight: 700;
    letter-spacing: 2px;
    margin: 20px;
    cursor: pointer;
    
}

.header {
    display: flex;
    justify-content: center;
    align-content: center;
    height: 50px;
}
</style>