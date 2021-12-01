<template lang="">
    <td @click="checkList()">
        <span :class="[this.selected ? 'isSelected' : '','']"><i class="fas fa-list"></i></span>
    </td>
</template>
<script>
import { mapState, mapActions } from 'vuex';

export default {
    name:"List",
    props:{
        id:Number
    },
    data(){
        return {
            selected:false,
        }
    },

    methods: {
        checkList(){
            this.selected = !this.selected;

            this.listInventarioById(this.id);
        },
        ...mapActions(["listInventarioById"])
        
    },
      computed: {
      ...mapState(["inventario"]),
  },
    
}
</script>
<style lang="scss">
    .isSelected {
  color: green;
}
</style>