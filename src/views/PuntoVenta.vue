<template>
  <div class="content">
    <div class="menu">
      <MenuItem
        title="Fetuccini Alfredo"
        price="105.00"
        recipe="[Pasta Fetuccine,Mantequilla,Queso Parmesano,Crema de Leche,Sal,Pimienta Blanca,Nuez]"
        indexImage="0"
      />

      <MenuItem
        title="Pizza Margarita"
        price="145.00"
        recipe="[Masa,Queso Mozzarella,Albahaca,Tomate,Pimienta Negra,Sal,Aceita de oliva]"
        indexImage="1"
      />

      <MenuItem
        title="Coctel Frutas"
        price="65.00"
        recipe="[Fresa,Platano,Piña,Melon]"
        indexImage="2"
      />

      <MenuItem
        title="Pizza Pepperoni"
        price="120.00"
        recipe="[Masa,Queso Mozzarella,Pepperoni]"
        indexImage="3"
      />

      <MenuItem
        title="Spaghetti Bolognesa"
        price="155.00"
        recipe="[Pasta Linguini,Mantequilla,Carne Molida,Sal]"
        indexImage="4"
      />
    </div>

    <div class="sell">
      <div class="selected">
        <FoodList />
      </div>

      <div class="payment">
        <div class="total" style=" height:70%; ">
          <p>$ {{$store.state.importe}}</p>
        </div>

        <div class="pay">
          <button type="button" style="width:70%;git s" class="btn btn-success"> Pagar </button>
        </div>
      </div>


    </div>
  </div>
</template>

<script>
import MenuItem from "@/components/MenuItem";
import FoodList from "@/components/FoodList.vue";

export default {
  components: { MenuItem, FoodList },


data(){
  return {
    importe: 0
  } 
},
  methods: {
    
  },
};
</script>

<style scoped>


.total {
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;

}


.payment p {
  font-size: 30px;
  font-weight: 700;
}

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

.sell {
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  height: 100%;
  margin: 0 55px 0 55px;
}

.selected {
  display: flex;
  flex-direction: column;
  padding: 15px;
  width: 70%;
  margin-right: 35px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
}

.payment {
  padding: 15px;
  margin-top: auto;
  width: 30%;
  height: 50%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>