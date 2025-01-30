<template>
  <div :class="['painting', { 'sold': !hasPrices }]">
    <img :src="painting.img" alt="painting" @click="openModal" />
    <div class="painting-info">
      <p class="painting-title" @click="openModal">
        <span>{{ painting.title }}</span>
        <span>{{ painting.author }}</span>
      </p>
      <div class="painting-about-buy" v-if="hasPrices">
        <div class="painting-prices">
          <span class="painting-old-price">{{ painting.oldPrice }}</span>
          <span class="painting-new-price">{{ painting.newPrice }}</span>
        </div>
        <Button :text="buttonText" @click="handleClick"></Button>
      </div>
      <div class="painting-about-buy" v-else>
        <p class="sold-message">Продана на аукционе</p>
      </div>
    </div>

    <Modal :painting="painting" :isOpen="isModalOpen" @close="isModalOpen = false" />
  </div>
</template>

<script>
import Button from "./Button";
import Modal from './Modal.vue';
import { mapState, mapActions } from 'vuex';

export default {
  name: "Painting",
  props: {
    painting: {
      type: Object,
    },
  },
  components: {
    Button,
    Modal,
  },
  data() {
    return {
      isModalOpen: false
    };
  },
  computed: {
    hasPrices() {
      return this.painting.oldPrice || this.painting.newPrice;
    },
    buttonText() {
      return this.$store.getters.getCartState(this.painting.title);
    }
  },
  methods: {
    ...mapActions([
      'addToCart',
      'setProcessing',
      'resetState'
    ]),

    handleClick() {
      if (this.buttonText === 'Обрабатывается') return;

      this.setProcessing(this.painting.title);

      setTimeout(() => {
        this.addToCart(this.painting.title);
      }, 2000);
    },

    openModal() {
      this.isModalOpen = true;
    },
  },
};
</script>

<style scoped>
.painting {
  border: 1px solid #e1e1e1;
  margin-bottom: 20px;
}

.sold {
  opacity: 0.5;
}

.painting-info {
  padding-top: 20px;
  padding-right: 24px;
  padding-bottom: 24px;
  padding-left: 24px;
}

.painting-title {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  font-size: 18px;
  font-weight: 400;
  line-height: 27px;
  color: #343030;
}

.painting-old-price {
  font-size: 14px;
  font-weight: 300;
  line-height: 21px;
  color: #a0a0a0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}

.painting-new-price {
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  color: #343030;
}

.painting-about-buy {
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  margin-top: 22px;
}

@media (max-width: 600px) {
  .painting {
    margin-bottom: 20px;
  }
}
</style>
