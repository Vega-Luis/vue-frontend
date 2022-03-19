<template>
  <div>
    <b-container>
      <b-row>
        <b-col class="mt-5">
          <b-card>
            <b-form @submit.prevent="insertArticle">
              <b-form-group
                label="Article name:"
                label-for="input-1"
                label-align="left"
              >
                <b-form-input
                  id="input-1"
                  v-model="article.name"
                  type="text"
                  required
                >
                </b-form-input>
              </b-form-group>
              <b-form-group
                label="Article price"
                label-for="input-2"
                label-align="left"
              >
                <b-form-input
                  id="input-2"
                  v-model="article.price"
                  type="number"
                  step="any"
                  required
                ></b-form-input>
              </b-form-group>
              <b-button type="submit" variant="secondary">Insert</b-button>
            </b-form>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
class article {
  constructor(name, price) {
    (this.name = name), (this.price = price);
  }
}

export default {
  data() {
    return {
      article: new article(),
    };
  },
  methods: {
    insertArticle() {
      fetch("http://localhost:3000/insert", {
        method: "POST",
        body: JSON.stringify(this.article),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then(function (data) {
          if (data.access != true) {
            window.alert("Insertion failed");
          } else {
            window.alert("Insertion successfull");
          }
        });
      this.article = new article();
    },
  },
};
</script>

<style>
</style>