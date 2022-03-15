<template>
<div> <div>
    <div class="consults-container">
        <div>
            <form @submit.prevent="consultByName">
            <input type="text" v-model="consult.pattern" placeholder="Insert article name">
            <button>Consult</button>
            </form>
        </div>
        <div>
            <form @submit.prevent="consultTopAmount">
            <input type="number"  v-model="consult.rowAmount" placeholder="Insert number of rows">
            <button>Consult</button>
            </form>
        </div>

    </div>
    </div>
    <div>
        <table>
            <thead>
                <tr>
                    <th>Article</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="article of articles">
                    <td>{{article.Name}}</td>
                    <td>{{article.Price}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>    
</template>

<script>
class consult {
    constructor(pattern, rowAmount) {
        this.pattern = pattern || "",
        this.rowAmount = rowAmount || 1000000
    }
}

export default {
    data() {
        return {
            consult: new consult(),
            articles: []
        }
    },
    methods: {
        consultByName() {
            fetch('http://localhost:3000/consult_by_pattern', {
                method: "POST",
                body: JSON.stringify(this.consult),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }).then(res => res.json())
            .then(data => {
                this.articles = data;
                console.log(this.articles)
            });
            this.consult = new consult()
            

        },
        consultTopAmount() {
            fetch('http://localhost:3000/consult_by_amount', {
                method: "POST",
                body: JSON.stringify(this.consult),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }).then(res => res.json())
            .then(data => {
                this.articles = data;
                console.log(this.articles)
            });
            this.consult = new consult()

        }
    }
    
}
</script>

<style>

</style>