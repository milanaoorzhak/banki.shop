<template>
  <div class="painting">
    <img :src="img" alt="painting" />
    <div class="painting-info">
      <p class="painting-title">
        <span>{{ title }}</span>
        <span>{{ author }}</span>
      </p>
      <div class="painting-about-buy">
        <div class="painting-prices">
          <span class="painting-old-price">{{ oldPrice }}</span>
          <span class="painting-new-price">{{ newPrice }}</span>
        </div>
        <Button :text="buttonText" @click="handleClick"></Button>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "./Button";
export default {
  name: "Painting",
  props: {
    img: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    oldPrice: {
      type: String,
      required: false,
    },
    newPrice: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      buttonText: "Купить",
      isProcessing: false,
    };
  },
  methods: {
    handleClick() {
      if (this.isProcessing) return;

      this.buttonText = "Обрабатывается";
      this.isProcessing = true;

      setTimeout(() => {
        this.buttonText = "✓ В корзине";
        this.isProcessing = false;
      }, 2000);
    },
  },
  components: {
    Button,
  },
};
</script>

<style scoped>
.painting {
  border: 1px solid #e1e1e1;
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
</style>
