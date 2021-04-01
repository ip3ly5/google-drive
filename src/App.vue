<template>
    <div id="nav">
      <router-link to="/" class="logo-link">My workspace</router-link>
      <div v-if="this.$route.name!='Login'" class="logout-button" @click="logout"><div>Logout</div><i class="fas fa-sign-out-alt"></i></div>
    </div>
    <router-view/>
</template>

<script>

  export default {
    methods:{
      logout(){
        localStorage.removeItem('token');
        this.$router.go({name: 'Login'})
      }  
    }
  }
</script>

<style>
html, body {
  padding:0;
  margin:0;
  box-sizing:border-box;
}

html {
  display:flex;
  height:100vh;
}

body {
  display:flex;
  flex:1;
}

input {
    margin:.5em 0;
    height: 2.5rem;
    padding: 0px 0.5rem;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 0.3rem;
    font-size: inherit;
    font-weight: inherit;
    font-family: inherit;
    outline: none;
}

#app {
  font-family:'Roboto', sans-serif;
  -webkit-font-smoothing:antialiased;
  -moz-osx-font-smoothing:grayscale;
  flex-direction:column;
  display:flex;
  flex:1;
  color:rgb(31, 31, 58);
}

#nav {
  height:4em;
  position:fixed;
  width:100%;
  background-color:white;
  display:flex;
  align-items:center;
  justify-content: space-between;
  box-shadow:0px 0px 10px rgb(223, 223, 223);
  z-index:5;
}

#nav a {
  text-decoration:none;
}

.main {
  background-color:#F8F9FD;
  flex:1;
  padding:4rem 4rem;
}

.logo-link {
  font-size:1.5em;
  text-transform:uppercase;
  margin-left:4rem;
  color:#377BDD;
  font-weight:500;
}

h2 {
  font-weight:400;
  color:rgb(117, 117, 117);
}

h3 {
  font-weight:500;
  color:rgb(71, 71, 71);
  font-size:1.4em;
  margin:.5em 0;
}

h4 {
  font-weight:400;
  font-size:1em;
  color:rgb(148, 148, 148);
  margin: .5em 0;
}

.logout-button {
  color:#377BDD;
  margin-right:6rem;
  display:flex;
  align-items:center;
}

.logout-button div {
  margin:.5em;
}

.logout-button:hover {
  cursor:pointer;
}

.standard-button {
    padding: .75em 1em;
    background-color: #377BDD;
    color: white;
    border-radius: .25em;
    transition:all .5s;
}

.standard-button:hover {
  transform:scale(1.05);
  cursor:pointer;
  background-color:#588fdb;
}

</style>
