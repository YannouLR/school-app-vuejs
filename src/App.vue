<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/note">Afficher les notes</router-link> |
    <router-link to="/addNote">Ajouter une note</router-link> |
    <router-link to="/dashboard">Dashboard</router-link>
  </nav>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #b98742;
}
body {
  background-color: black;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #ffffff;
}

nav a.router-link-exact-active {
  color: #b98742;
}
</style>
