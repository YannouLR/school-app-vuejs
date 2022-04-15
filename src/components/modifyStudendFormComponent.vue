<template>
  <div class="cont-dashboard">
    <form>
      <input type="text" name="firstname" id="firstname" placeholder="Prénom" />
      <input
        type="text"
        name="lastname"
        id="lastname"
        value="{{ students.lastname }}"
      />
      <select name="sexe" id="sexe">
        <option value="">Sexe de l'élève</option>
        <option value="homme">Homme</option>
        <option value="femme">Femme</option>
        <option value="non-binaire">Non-Binaire</option>
      </select>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="e-mail des parents"
      />
      <select name="classe" id="classe">
        <option value="">classe</option>
        <option value="CP">CP</option>
        <option value="CM1">CM1</option>
        <option value="CM2">CM1</option>
        <option value="CE1">CE1</option>
        <option value="CE2">CE2</option>
      </select>
      <input type="submit" value="Enregistrer" />
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { onMounted } from "@vue/runtime-core";
import { useRoute } from "vue-router";

const students = ref([]);
onMounted(() => {
  fetchOneStudent();
});
const route = useRoute();
async function fetchOneStudent() {
  let response = await fetch(
    `http://127.0.0.1:8001/api/students/${route.params.id}`
  )
    .then((r) => r.json())
    .catch((e) => {
      console.log(e);
    });
  if (response.sexe === "boy") {
    response.sexe = "Homme";
  } else if (response.sexe === "girl") {
    response.sexe = "Femme";
  } else {
    response.sexe = "Non-binaire";
  }
  if (response) {
    students.value = response;
  } else {
    route.push("/allEleve");
  }
  console.log("test", response.firstname);
  console.log("test2", response.noteMatiereStudents);
}
</script>

<style scoped>
.cont-dashboard {
  display: flex;
  justify-content: space-around;
  width: 35%;
}
form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  align-items: center;
  background-color: orange;
  height: 30rem;
  width: 100%;
  padding: auto;
  border-radius: 20px;
}
</style>
