<template>
  <div id="app">
    <nav>
      <ul>
        <li>
        <router-link  to="/consults">Consults</router-link>
        <router-link  to="/insert">Insert</router-link>
        <router-link to="/">Login</router-link>
        </li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
import Login from './components/Login.vue'
import Consults from './components/Consults.vue'
import Insert from './components/Insert.vue'
export default {
  name: 'App',
  components: {
    Login,
    Insert,
    Consults
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
