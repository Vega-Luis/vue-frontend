<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="primary">
      <b-container>
        <b-navbar-brand to="/consults">ConceptProve</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item to="/consults">Consults</b-nav-item>
            <b-nav-item to="/insert">Insert</b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-button
              class="my-2 my-sm-0"
              variant="danger"
              to="/login"
              v-on:click="logOut"
              >Sing Out</b-button
            >
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
  </div>
</template>

<script>
export default {
  methods: {
    logOut() {
      localStorage.clear();
    },
  },
};
</script>