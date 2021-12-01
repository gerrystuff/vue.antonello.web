<template>
<table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Fecha</th>
       <!-- <th scope="col"></th> -->
    </tr>
  </thead>
  <tbody>
    <tr  v-for="(item)  in items.inventarios" :key="item.id_inventario">
      <th scope="row">{{item.id_inventario}}</th>
      <td>{{item.fecha}}</td>
      <List :id="item.id_inventario"/> 
     
      
    </tr>
  </tbody>
</table>
</template>

<script>
import List from '@/components/inventory/List.vue'
export default {
  name: "InventorysTable",
  components: {
      List,
  },
  props: {
    items: Array,
    busy: {
      type: Boolean,
      default: false
    }
  },


}
</script>

<style scoped>

.eye{
    color: blue;
}
</style>