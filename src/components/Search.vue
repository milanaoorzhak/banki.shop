<template>
  <div class="search-container">
    <input type="text" placeholder="Поиск по названию картины" />
    <button type="button">Найти</button>
  </div>
</template>

<script>
import Button from "./Button";
</script>

<style scoped>
.search-container {
  display: flex;
  border: 1px solid #e1e1e1;
}

.search-container input {
  width: 100%;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  padding-top: 14px;
  padding-bottom: 14px;
  padding-left: 16px;
  padding-right: 60px;
  flex-grow: 1;
  border: none;
  outline: none;
}

.search-container button {
  font-size: 14px;
  font-weight: 700;
  line-height: 21px;
  color: #fff;
  border: none;
  padding: 14px 36px;
  background: #403432;
}
</style>
