<template>
  <div class="all">
    <header>
      <div class="dashboard">
        <div class="top-dashboard">
          <h1>Directeur</h1>
        </div>
        <div class="lien">
          <router-link to="/addEleve">Élève</router-link>
          <router-link to="/dashboard">Professeur</router-link>
          <router-link to="/dashboard">Créer une classe</router-link>
        </div>
      </div>
    </header>
    <body>
      <h1>Dashboard</h1>
      <h2>Bienvenue sur votre dashboard</h2>
      <div class="cont-dashboard">
        <div class="eleve"></div>
        <div class="professeur"></div>
        <div class="add-class"></div>
        <div></div>
      </div>
    </body>
  </div>
</template>

<style>
.all {
  display: flex;
  justify-content: space-evenly;
}
header {
  display: flex;
  width: 25%;
}
.dashboard {
  border: 1px solid white;
  height: 50rem;
  border-radius: 20px;
}
.top-dashboard {
  border: 1px solid white;
  height: 5rem;
  width: 20rem;
  border-radius: 20px;
}
.lien {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 10%;
}
.lien a {
  text-decoration: none;
  color: white;
}
.lien a.router-link-exact-active {
  color: orange;
}
body {
  width: 100%;
}
.eleve,
.professeur,
.add-class {
  border: 1px solid white;
  width: 20%;
  height: 20rem;
}
.cont-dashboard {
  display: flex;
  justify-content: space-around;
}
</style>
