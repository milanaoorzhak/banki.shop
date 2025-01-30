<template>
  <section class="main">
    <h1>Картины эпохи Возрождения</h1>
    <Paintings />
  </section>
</template>

<script>
import Paintings from "./Paintings";
export default {
  name: "Main",
  data() {
    return {
      msg: "Main",
    };
  },
  components: {
    Paintings,
  },
};
</script>

<style scoped>
.main {
  padding: 0 calc(50% - 1200px / 2);
}

h1 {
  font-size: 24px;
  font-weight: 700;
  line-height: 36px;
  color: #343030;
  margin-top: 45px;
  margin-bottom: 39px;
}

@media (max-width: 1024px) {
  .main {
    padding-left: 20px;
    padding-right: 20px;
  }
}
</style>
