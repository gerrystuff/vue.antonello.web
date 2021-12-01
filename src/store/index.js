import axios from 'axios';
import { createStore } from 'vuex';

export default createStore({
    state: {
        foodItems: [],
        loading:false,
        inventarios:[],
        inventario: [],
        images: [
            require("@/statics/fetuccini.jpg"),
            require("@/statics/pizza_margarita.jpg"),
            require("@/statics/frutas.jpg"),
            require("@/statics/pizza_pepperoni.jpg"),
            require("@/statics/bolognesa.jpg"),
        ],

        alimentos: [],
        importe: 0
    },

    actions: {
    
        listAlimentos({commit}){
            commit('SET_LOADING',true);
            axios.get('http://localhost:8080/api/inventory/alimentos')
            .then(res => commit('SET_ALIMENTOS',res.data))
            .finally(() => commit('SET_LOADING',false));
        },

        listInventarios({commit}){
            commit('SET_LOADING',true);
            axios.get('http://localhost:8080/api/inventory/inventarios')
            .then(res => commit('SET_INVENTARIOS',res.data))
            .finally(() => commit('SET_LOADING',false));
        },

        listInventarioById({commit},id){
            commit('SET_LOADING',true);
            axios.get(`http://localhost:8080/api/inventory/inventarios/${id}`)
            .then(res => commit('SET_INVENTARIO',res.data))
            .finally(() => commit('SET_LOADING',false));
        }
    },

    mutations: {

        SET_LOADING(state,newValue){
            state.loading = newValue
        },

        SET_ALIMENTOS(state,alimentos){
            state.alimentos = alimentos;
        },
        
        SET_INVENTARIOS(state,inventarios){
            state.inventarios = inventarios;
        },

        SET_INVENTARIO(state,inventario){
            state.inventario = inventario;
        },

        addFoodItem( state , foodItem){
            state.importe += parseInt(foodItem.price);
            state.foodItems.push(foodItem);
        },

        removeFoodItem(state,index){
            state.importe -= parseInt(state.foodItems[index].price);
            state.foodItems.splice(index,1);

        }
    }
})