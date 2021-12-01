<template>
<table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Alimento</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    <tr  v-for="(item)  in items.alimentos" :key="item.id_alimento">
      <th scope="row">{{item.id_alimento}}</th>
      <td>{{item.nombre}}</td>
      <Eye />
     
      
    </tr>
  </tbody>
</table>
</template>

<script>
import Eye from '@/components/inventory/Eye.vue'

export default {
  name: "FoodTable",
  components: {
      Eye
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