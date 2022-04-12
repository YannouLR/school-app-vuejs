<template>
  <div class="nameEleve">
    <div v-for="student in students" :key="student">
      <h3>{{ student.firstname }} {{ student.lastname }}</h3>
      <button>
        <router-link :to="{ name: 'showEleve', params: { id: student.id } }"
          >Afficher la fiche</router-link
        >
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { onMounted } from "@vue/runtime-core";

const students = ref([]);
onMounted(() => {
  fetchStudents();
});
async function fetchStudents() {
  let response = await fetch("http://127.0.0.1:8001/api/students")
    .then((r) => r.json())
    .catch((e) => {
      console.log(e);
    });
  if (response["hydra:member"]) {
    students.value = response["hydra:member"];
    console.log("test", students.value);
  }
}
</script>

<style scoped>
.nameEleve {
  display: flex;
  flex-wrap: wrap;
  gap: 10rem;
  justify-content: center;
  margin-top: 2%;
  background-color: rgb(190, 138, 41);
  border-radius: 20px;
}
h3 a {
  color: rgb(255, 255, 255);
}
h3 {
  color: rgb(255, 255, 255);
}
h3 a.router-link-exact-active {
  color: orange;
}
</style>
