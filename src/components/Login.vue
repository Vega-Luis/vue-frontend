<template>
  <div>
    <b-container>
      <b-row class="justify-content-center mt-4">
        <b-col col md="4">
          <b-card
          title="Sign In"
          bg-variant="light">
              <b-form @submit.prevent="checkCredentials">

                <b-form-group
                  id="input-group-1"
                  label="User Name:"
                  label-for="input-1"
                  label-align="left"
                >
                  <b-form-input
                    id="input-1"
                    v-model="credentials.userName"
                    type="text"
                    placeholder="Enter User Name"
                  ></b-form-input>
                </b-form-group>
                <b-form-group
                  id="input-group-2"
                  label="Password:"
                  label-for="input-2"
                  label-align="left"
                >
                  <b-form-input
                    id="input-2"
                    v-model="credentials.password"
                    type="password"
                    placeholder="Enter password"
                    required
                  >
                  </b-form-input>
                </b-form-group>

                <b-button type="submit" variant="primary">Sign In</b-button>
              </b-form>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
class credentials {
  constructor(userName, password) {
    (this.userName = userName), (this.password = password);
  }
}

export default {
  data() {
    return {
      credentials: new credentials(),
    };
  },
  methods: {
    checkCredentials() {
      fetch("http://localhost:3000/login", {
        method: "POST",
        body: JSON.stringify(this.credentials),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then(function (data) {
          if (data.access != true) {
            window.alert("Invalid credentials");
          } else {
            localStorage.setItem("logged", data.access);
          }
        });
      this.$router.push("/consults");
      this.credentials = new credentials();
    },
  },
};
</script>
