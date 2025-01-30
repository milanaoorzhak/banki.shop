<template>
  <button @click="$emit('click')" class="btn">{{text}}</button>
</template>

<script>
export default {
  name: "Button",
  props: {
    text: String
  },
};</script>

<style scoped>
.btn {
  font-size: 14px;
  font-weight: 700;
  line-height: 21px;
  color: #ffffff;
  background-color: #403432;
  min-width: 118px;
  height: 48px;
  text-align: center;
  border: none;
}

.btn:hover {
  background-color: #776763;
}
</style>
