import { createStore } from 'vuex';

export default createStore({
    state: {
        foodItems: [],
        images: [
            require("@/statics/fetuccini.jpg"),
            require("@/statics/pizza_margarita.jpg"),
            require("@/statics/frutas.jpg"),
            require("@/statics/pizza_pepperoni.jpg"),
            require("@/statics/bolognesa.jpg"),
        ]
    },

    mutations: {
        addFoodItem( state , foodItem){
            console.log(foodItem)
            state.foodItems.push(foodItem);
        }
    }
})