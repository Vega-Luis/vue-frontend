<template>
  <div>
    <b-container>
      <b-row align-v="stretch" align-h="center">
        <b-col md="9" class="mt-4">
          <b-card>
            <b-row class="my-1">
              <b-col col-bg="primary">
                <label>Article name:</label>
              </b-col>
              <b-col>
                <b-form inline @submit.prevent="consultByName">
                  <b-form-group>
                    <b-form-input v-model="consult.pattern" type="text">
                    </b-form-input>
                    <b-button type="submit" variant="secondary"
                      >Consult</b-button
                    >
                  </b-form-group>
                </b-form>
              </b-col>
            </b-row>
            <b-row class="my-1">
              <b-col>
                <label>Top N rows:</label>
              </b-col>
              <b-col>
                <b-form inline @submit.prevent="consultTopAmount">
                  <b-form-group>
                    <b-form-input v-model="consult.rowAmount" type="number">
                    </b-form-input>
                    <b-button type="submit" variant="secondary"
                      >Consult</b-button
                    >
                  </b-form-group>
                </b-form>
              </b-col>
            </b-row>
          </b-card>
          <div class="mt-5">
            <b-table striped small dark bordered :items="articles"> </b-table>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
class consult {
  constructor(pattern, rowAmount) {
    (this.pattern = pattern || ""), (this.rowAmount = rowAmount || 1000);
  }
}

export default {
  data() {
    return {
      consult: new consult(),
      articles: [],
    };
  },
  methods: {
    consultByName() {
      fetch("http://localhost:3000/consult_by_pattern", {
        method: "POST",
        body: JSON.stringify(this.consult),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          this.articles = data;
          console.log(this.articles);
        });
      this.consult = new consult();
    },
    consultTopAmount() {
      fetch("http://localhost:3000/consult_by_amount", {
        method: "POST",
        body: JSON.stringify(this.consult),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          this.articles = data;
          console.log(this.articles);
        });
      this.consult = new consult();
      this.row = 0;
    },
  },
};
</script>

<style>
</style>