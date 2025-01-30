<template>
  <nav class="nav">
    <a href="#" class="nav-item">Каталог</a>
    <a href="#" class="nav-item">Доставка</a>
    <a href="#" class="nav-item">Оплата</a>
    <a href="#" class="nav-item">Контакты</a>
    <a href="#" class="nav-item">О компании</a>
  </nav>
</template>

<script>
export default {
  name: "Navigation",
};
</script>

<style scoped>
.nav-item {
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  text-decoration: none;
  color: #343030;
  margin-right: 48px;
}

.nav-item:last-child {
  margin-right: 0;
}

@media (max-width: 600px) {
  .nav {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    padding-left: 10px;
  }
}
</style>
