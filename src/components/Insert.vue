<template>
<div>
<div>
    <form @submit.prevent="insertArticle">
        <input type="text" v-model="article.name" placeholder="Article name" required>
        <input type="number"  v-model="article.price" step="any" placeholder="Article price" required>
        <button type="submit">Insert</button>

    </form>
</div>
</div>
</template>

<script>
class article {
    constructor (name, price) {
        this.name = name,
        this.price = price
    }
}

export default {
    data() {
        return {
            article: new article()
        }
    },
    methods: {
        insertArticle() {
            fetch('http://localhost:3000/insert', {
                method: "POST",
                body: JSON.stringify(this.article),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }).then(res => res.json())
            .then(function(data) {
                if(data.access != true) {
                    window.alert("Insertion failed")
                } else {
                    window.alert("Insertion successfull")
                }
            })
            this.article = new article()
        }
    }
    
}
</script>

<style>

</style>