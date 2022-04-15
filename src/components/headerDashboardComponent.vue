<template>
  <div class="all">
    <header>
      <div class="dashboard">
        <div
          class="top-dashboard"
          v-for="directeurs in director"
          :key="directeurs"
        >
          <h1>Directeur {{ directeurs.lastname }}</h1>
        </div>
        <div class="lien">
          <router-link to="/allEleve">Élève</router-link>
          <router-link to="/addEleve">Ajouter un élève</router-link>
          <router-link to="/class">Classes</router-link>
          <router-link to="/allInstit">Professeur</router-link>
        </div>
      </div>
    </header>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { onMounted } from "@vue/runtime-core";

const director = ref([]);
onMounted(() => {
  fetchStudents();
});
async function fetchStudents() {
  let response = await fetch("http://127.0.0.1:8001/api/directors")
    .then((r) => r.json())
    .catch((e) => {
      console.log(e);
    });
  if (response["hydra:member"]) {
    director.value = response["hydra:member"];
    console.log("directeur", director.value);
  }
}
</script>

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
