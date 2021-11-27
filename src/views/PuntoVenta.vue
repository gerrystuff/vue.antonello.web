<template>
  <div class="content">
    <div class="menu">
      <MenuItem 
        title="Fetuccini Alfredo" 
        price="105.00"
        recipe= "[Pasta Fetuccine,Mantequilla,Queso Parmesano,Crema de Leche,Sal,Pimienta Blanca,Nuez]"
        indexImage="0" />

      <MenuItem 
        title="Pizza Margarita" 
        price="145.00"
        recipe= "[Masa,Queso Mozzarella,Albahaca,Tomate,Pimienta Negra,Sal,Aceita de oliva]"
        indexImage="1" />
        
      <MenuItem 
        title="Coctel Frutas" 
        price="65.00"
        recipe= "[Fresa,Platano,Piña,Melon]"
        indexImage="2" />

      <MenuItem 
        title="Pizza Pepperoni" 
        price="120.00"
        recipe= "[Masa,Queso Mozzarella,Pepperoni]"
        indexImage="3" />

      <MenuItem 
        title="Spaghetti Bolognesa" 
        price="155.00"
        recipe= "[Pasta Linguini,Mantequilla,Carne Molida,Sal]"
        indexImage="4" />



    </div>

    <div  class="sell">
      
      <div class="selected">

      <FoodList ref="foodList"/>
      </div>


      <div class="payment">

      </div>
        
    </div>

  </div>
</template>

<script>
import MenuItem from "@/components/MenuItem";
import FoodList from '@/components/FoodList.vue'

export default {
  components: { MenuItem, FoodList },
 
 methods: {

 }


};
</script>

<style scoped>
.content {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  flex-direction: column;
  height: 90vh;
  margin: 30px 25px 0;
}

.menu {
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: center;
  height: fit-content;
}

.sell{
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  height: 100%;
  margin: 0 55px 0 55px;

}

.selected{
  display: flex;
  flex-direction: column;
  padding: 15px;
  width: 70%;
  margin-right: 35px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
}



.payment{
  margin-top: auto;
  width: 30%;
  height: 50%;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
}

</style>