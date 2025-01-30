<template>
  <div class="modal" v-if="isOpen">
    <div class="modal-content">
      <button class="close-btn" @click="closeModal">×</button>
      <h3>{{ painting.title }}</h3>
      <p><strong>Автор:</strong> {{ painting.author }}</p>
      <div class="slider">
        <img :src="currentImage" alt="painting image" />
        <div class="slider-controls">
          <button @click="prevImage">❮</button>
          <button @click="nextImage">❯</button>
        </div>
      </div>
      <div class="prices">
        <span v-if="painting.oldPrice" class="old-price">{{ painting.oldPrice }}</span>
        <span class="new-price">{{ painting.newPrice }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    painting: Object,
    isOpen: Boolean
  },
  data() {
    return {
      currentImageIndex: 0
    };
  },
  computed: {
    currentImage() {
      return this.painting.images[this.currentImageIndex];
    }
  },
  methods: {
    closeModal() {
      this.$emit('close');
    },
    prevImage() {
      if (this.currentImageIndex > 0) {
        this.currentImageIndex--;
      } else {
        this.currentImageIndex = this.painting.images.length - 1;
      }
    },
    nextImage() {
      if (this.currentImageIndex < this.painting.images.length - 1) {
        this.currentImageIndex++;
      } else {
        this.currentImageIndex = 0;
      }
    }
  }
};
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  position: relative;
  max-width: 800px;
  width: 100%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 24px;
  background: transparent;
  border: none;
  cursor: pointer;
}

.slider {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.slider img {
  max-width: 100%;
  max-height: 400px;
  object-fit: contain;
  border-radius: 8px;
}

.slider-controls {
  position: absolute;
  top: 50%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  transform: translateY(-50%);
}

.slider-controls button {
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  border-radius: 50%;
}

.slider-controls button:hover {
  background: rgba(0, 0, 0, 0.7);
}

.prices {
  margin-top: 20px;
}

.old-price {
  text-decoration: line-through;
  color: gray;
}

.new-price {
  font-size: 1.5em;
  color: green;
}
</style>