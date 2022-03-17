<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="primary">
    <b-container>
    <b-navbar-brand to="/consults">ObsidanCode</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item to="/consults">Consults</b-nav-item>
        <b-nav-item to="/insert">Insert</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em>User</em>
          </template>
          <b-dropdown-item to="/">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
    </b-container>
  </b-navbar>

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