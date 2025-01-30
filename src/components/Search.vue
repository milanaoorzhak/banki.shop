<template>
  <div class="search-container">
    <input v-model="searchQuery" type="text" placeholder="Поиск по названию картины" />
    <Button @click="updateSearch" text="Найти"></Button>
  </div>
</template>

<script>
import Button from "./Button.vue";

export default {
  components: { Button },
  computed: {
    searchQuery: {
      get() {
        return this.$store.state.searchQuery;
      },
      set(value) {
        this.$store.commit("setSearchQuery", value);
      },
    },
  },
  methods: {
    updateSearch() {
      this.$store.commit("setSearchQuery", this.searchQuery);
    },
  },
};
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

.search-container input:active {
  outline: 1px solid #B5B5B5
}
</style>
