<template>
  <div class="all">
    <header>
      <div class="dashboard">
        <div class="top-dashboard">
          <h1>Directeur</h1>
        </div>
        <div class="lien">
          <router-link to="/allEleve">Élève</router-link>
          <router-link to="/addEleve">Ajouter un élève</router-link>
          <router-link to="/class">Classes</router-link>
          <router-link to="/allInstit">Professeur</router-link>
          <router-link to="/createClass">Créer une classe</router-link>
        </div>
      </div>
    </header>
  </div>
</template>

<style scoped>
header {
  display: flex;
  width: 25%;
}
.dashboard {
  border: 1px solid white;
  height: 50rem;
  border-radius: 20px;
  margin-left: -70px;
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
  color: rgb(255, 255, 255);
}
.lien a.router-link-exact-active {
  color: orange;
}
</style>
