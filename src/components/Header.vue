<template>
  <header class="header">
    <Navigation />
    <Search />
  </header>
</template>

<script>
import Navigation from "./Navigation";
import Search from "./Search";

export default {
  name: "Header",
  components: {
    Navigation,
    Search,
  },
};
</script>

<style scoped>
.header {
  padding: 24px calc(50% - 1200px / 2);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e1e1e1;
}

@media (max-width: 600px) {
  .header {
    flex-direction: column;
  }
}

@media (max-width: 1024px) {
  .header {
    padding-left: 20px;
    padding-right: 20px;
  }
}
</style>
