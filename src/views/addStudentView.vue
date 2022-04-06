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
      <div class="body">
        <h1>Ajouter un élève</h1>
        <div class="cont-dashboard">
          <form>
            <input
              type="text"
              name="firstname"
              id="firstname"
              placeholder="Prénom"
            />
            <input
              type="text"
              name="lastname"
              id="lastname"
              placeholder="Nom de famille"
            />
            <select name="sexe" id="sexe">
              <option value="">Sexe de l'élève</option>
              <option value="homme">Homme</option>
              <option value="femme">Femme</option>
              <option value="non-binaire">Non-Binaire</option>
            </select>
            <input type="text" name="" />
            <input type="date" />
            <input type="email" />
            <input type="number" />
            <input type="number" />
          </form>
        </div>
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
.body {
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
form {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: orange;
  height: 20rem;
  width: 30%;
}
</style>
