<template lang="html">
<div class="container">
   <div class="card card-container">
       <h1>Login</h1>
       <form @submit.prevent="checkCredentials">
           <input type="text" v-model="credentials.userName" id="inputUserName" placeholder="User Name" required autofocus>
           <input type="password" v-model="credentials.password" id="inputPassword" placeholder="Password" required>
           <button>Login</button>
       </form>
           
    </div>
</div>

</template>

<script>
    class credentials{
        constructor(userName, password) {
            this.userName = userName, 
            this.password = password
            
        }
    }

export default {
    data() {
        return {
            credentials: new credentials()
        }
    },
    methods: {
        checkCredentials() {
            fetch('http://localhost:3000/login', {
                method: "POST",
                body: JSON.stringify(this.credentials),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }).then(res => res.json())
            .then(function(data) {
                localStorage.setItem('logged', data.access);
                if (data.access != true) {
                    window.alert("Invalid credentials")
                }
            })
            this.$router.push('/consults')
            this.credentials = new credentials()
        },
    }

};
</script>

<style lang="css">

</style>