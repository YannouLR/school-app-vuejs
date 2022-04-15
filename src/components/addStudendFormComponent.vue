<template>
  <div class="cont-dashboard">
    <form @submit.prevent="addStudent">
      <input
        type="text"
        v-model="user.firstname"
        name="firstname"
        id="firstname"
        placeholder="Prénom"
      />
      <input
        type="text"
        v-model="user.lastname"
        name="lastname"
        id="lastname"
        placeholder="Nom de famille"
      />
      <input
        type="email"
        v-model="user.email"
        name="email"
        id="email"
        placeholder="e-mail des parents"
      />
      <input
        type="password"
        id="password"
        name="password"
        v-model="user.password"
        placeholder="password"
      />
      <select name="sexe" id="sexe" v-model="user.sexe">
        <option value="">Sexe de l'élève</option>
        <option value="homme">Homme</option>
        <option value="femme">Femme</option>
        <option value="non-binaire">Non-Binaire</option>
      </select>
      <select name="classe" id="classe" v-if="classe" v-model="user.Studyplace">
        <option value="">classe</option>
        <option value="CP" v-for="classes in classe" :key="classes">
          {{ classes.name }}
        </option>
      </select>
      <input type="submit" value="Enregistrer" />
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { onMounted } from "@vue/runtime-core";

const user = ref({
  firstname: "",
  lastname: "",
  email: "",
  sexe: "",
  Studyplace: "",
});
const classe = ref();
const new_student = ref(null);
onMounted(() => {
  fetchClasses();
});
async function fetchClasses() {
  let response = await fetch("http://127.0.0.1:8001/api/studies")
    .then((r) => r.json())
    .catch((e) => {
      console.log(e);
    });
  if (response["hydra:member"]) {
    classe.value = response["hydra:member"];
    console.log("classe", classe.value);
  }
}
async function addStudent() {
  console.log("user", user.value);
  let response = await fetch("http://127.0.0.1:8001/api/students", {
    method: "POST",
    body: JSON.stringify(user.value),
    headers: {
      "Content-Type": "application/ld+json",
      // Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
  })
    .then((r) => r.json())
    .catch((e) => {
      console.log(e);
    });
  if (response["hydra:member"]) {
    new_student.value = response["hydra:member"];
    console.log("add student", new_student.value);
    console.log("add student", response);
  }
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
