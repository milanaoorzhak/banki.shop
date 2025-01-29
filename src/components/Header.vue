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
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e1e1e1;
}
</style>
