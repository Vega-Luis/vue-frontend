<template>
  <div id="app">
    <NavBar v-if="!isLoginPage"></NavBar>
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import Login from "./components/Login.vue";
import Consults from "./components/Consults.vue";
import Insert from "./components/Insert.vue";

export default {
  name: "App",
  components: {
    NavBar,
    Login,
    Insert,
    Consults,
  },
  computed: {
    isLoginPage() {
      console.log(this.$route.path);
      return this.$route.path == "/login";
    },
  },
};
</script>