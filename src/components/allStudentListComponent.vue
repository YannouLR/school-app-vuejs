<template>
  <div class="nameEleve">
    <table class="test">
      <thead>
        <tr>
          <th>Prénom</th>
          <th>Nom de famille</th>
          <th></th>
        </tr>
      </thead>
      <tbody v-for="student in students" :key="student">
        <tr>
          <td>{{ student.firstname }}</td>
          <td>{{ student.lastname }}</td>
          <td>
            <router-link :to="{ name: 'showEleve', params: { id: student.id } }"
              >Afficher la fiche</router-link
            >
          </td>
        </tr>
      </tbody>
    </table>
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
  let response = await fetch("http://127.0.0.1:8001/api/students", {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
  })
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
}
.test {
  display: flex;
  flex-direction: column;
  background-color: rgb(190, 138, 41);
  border-radius: 20px;
  padding-top: 1%;
  padding-bottom: 1%;
  width: 100%;
}
table {
  color: white;
}
tbody tr {
  display: flex;
  align-content: center;
  justify-content: space-evenly;
}
thead tr {
  display: flex;
  justify-content: space-evenly;
}
tbody td {
  display: flex;
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
