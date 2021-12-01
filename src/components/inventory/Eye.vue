<template lang="">
  <td @click="checkEye()">

     <span :class="[this.selected ? 'isSelected' : '','']"> <i class="fas fa-eye"> </i> </span>
  
  <GDialog v-model="value" max-width="270" persistent>
      <div class="custom-dialog">
      <div class="custom-dialog__content">
        <div class="custom-dialog__title">
          Cantidad
        </div>
        
        <div class="custom-dialog__input">
            <input  type="number"  min="0" />
        </div>
      
      </div>

      <div class="custom-dialog__actions">
           <UiButton @click="cancel()">
      Cancelar
    </UiButton>
        <UiButton @click="save()">
          Guardar
        </UiButton>
      </div>
    </div>
  </GDialog>

  </td>
</template>

<style lang="scss">
.isSelected {
  color: green;
}

input {
  width: 60%;
  text-align: center;
}

.custom-dialog {
  &__content {
    padding: 15px 20px 20px 20px;
  }

  &__title {
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 10px;
    text-align: center;
  }

  &__actions {
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;
    border-top: 1px solid rgba(0, 0, 0, 0.12);
  }

  &__input {
    display: flex;
    justify-content: center;
  }
}
</style>



<script>
import "gitart-vue-dialog/dist/style.css";
import { ref } from "vue";
import { GDialog } from "gitart-vue-dialog";

export default {
  name: "Eye",
  data() {
    return {
      selected: false,
    };
  },

  components: {
    GDialog,
  },

  methods: {
    checkEye() {
      this.selected = !this.selected;
      this.onOpen()
    },

    cancel() {
        this.selected = false;
      this.value = false;
    },

    save(){

    }
  },
  setup() {
    const value = ref(false);
    const onOpen = () => {
      value.value = true;
    };

    return {
      value,
      onOpen,
    };
  },
};
</script>