<template>
  <footer class="footer">
    <Navigation />
    <div class="contacts">
      <div class="contacts-item">
        <img class="contacts-item-img" src="../assets/phone.svg" />
        <a class="contacts-item-link" href="tel:+7(812)555-55-55"
          >+7 (812) 555-55-555</a
        >
      </div>
      <div class="contacts-item">
        <img class="contacts-item-img" src="../assets/address.svg" />
        <a class="contacts-item-link" href="#"
          >г. Санкт-Петербург, ул. Ефимова, 3</a
        >
      </div>
    </div>
  </footer>
</template>

<script>
import Navigation from "./Navigation";

export default {
  name: "Footer",
  data() {
    return {
      msg: "Footer",
    };
  },
  components: {
    Navigation,
  },
};
</script>

<style scoped>
.footer {
  padding: 0 calc(50% - 1200px / 2);
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e1e1e1;
  padding-top: 24px;
  padding-bottom: 24px;
  background-color: #eceaea;
}

.contacts-addresses-list {
  list-style: none;
}

.contacts {
  display: flex;
  justify-content: flex-end;
}

.contacts .contacts-item:first-child {
  margin-right: 51px;
}

.contacts-item {
  display: flex;
  align-items: center;
}

.contacts-item-img {
  margin-right: 3px;
}

.contacts-item-link {
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  color: #555555;
  text-decoration: none;
}
</style>
