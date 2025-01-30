<template>
  <section>
    <div class="paintings" v-if="filteredPaintings.length">
      <Painting v-for="(painting, index) in filteredPaintings" :key="index" :painting="painting" />
    </div>
    <p v-else>Ничего не найдено</p>
  </section>
</template>

<script>
import Painting from "./Painting";
import { mapState } from "vuex";

export default {
  name: "Paintings",
  components: {
    Painting,
  },
  computed: {
    ...mapState(["searchQuery"]),
    paintings() {
      return [
        {
          img: require("@/assets/venus.png"),
          title: "«Рождение Венеры»",
          author: "Сандро Боттичелли",
          oldPrice: "2 000 000 $",
          newPrice: "1 000 000 $",
          images: [require("@/assets/venus.png"), require("@/assets/secret.png"), require("@/assets/adam.png")]
        },
        {
          img: require("@/assets/secret.png"),
          title: "«Тайная вечеря»",
          author: "Леонардо да Винчи",
          oldPrice: "",
          newPrice: "3 000 000 $",
          images: [require("@/assets/venus.png"), require("@/assets/secret.png"), require("@/assets/adam.png")]
        },
        {
          img: require("@/assets/adam.png"),
          title: "«Сотворение Адама»",
          author: "Микеланджело",
          oldPrice: "6 000 000 $",
          newPrice: "5 000 000 $",
          images: [require("@/assets/venus.png"), require("@/assets/secret.png"), require("@/assets/adam.png")]
        },
        {
          img: require("@/assets/lesson.png"),
          title: "«Урок анатомии»",
          author: "Рембрандт",
          oldPrice: "",
          newPrice: "",
          images: [require("@/assets/venus.png"), require("@/assets/secret.png"), require("@/assets/adam.png")]
        },
      ];
    },
    filteredPaintings() {
      if (!this.searchQuery) return this.paintings;
      const query = this.searchQuery.toLowerCase();
      return this.paintings.filter(
        (painting) =>
          painting.title.toLowerCase().includes(query) ||
          painting.author.toLowerCase().includes(query)
      );
    },
  },
};
</script>

<style scoped>
.paintings {
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  flex-wrap: wrap;
  align-content: center;
}

@media (max-width: 600px) {
  .paintings {
    flex-direction: column;
  }
}
</style>
