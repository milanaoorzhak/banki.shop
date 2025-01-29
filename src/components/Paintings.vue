<template>
  <section class="paintings">
    <Painting
      v-for="(painting, index) in paintings"
      :key="index"
      :img="painting.img"
      :title="painting.title"
      :author="painting.author"
      :oldPrice="painting.oldPrice"
      :newPrice="painting.newPrice"
    />
  </section>
</template>

<script>
import Painting from "./Painting";
export default {
  name: "Paintings",
  data() {
    return {
      paintings: [
        {
          img: require("@/assets/venus.png"),
          title: "«Рождение Венеры»",
          author: "Сандро Боттичелли",
          oldPrice: "2 000 000 $",
          newPrice: "1 000 000 $",
        },
        {
          img: require("@/assets/secret.png"),
          title: "«Тайная вечеря»",
          author: "Леонардо да Винчи",
          oldPrice: "",
          newPrice: "3 000 000 $",
        },
        {
          img: require("@/assets/adam.png"),
          title: "«Сотворение Адама»",
          author: "Микеланджело",
          oldPrice: "6 000 000 $",
          newPrice: "5 000 000 $",
        },
        {
          img: require("@/assets/lesson.png"),
          title: "«Урок анатомии»",
          author: "Рембрандт",
          oldPrice: "",
          newPrice: "",
        },
      ],
    };
  },
  components: {
    Painting,
  },
};
</script>

<style scoped>
.paintings {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  align-content: center;
}
</style>
