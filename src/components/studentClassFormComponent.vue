<template>
  <div class="nameStudy">
    <h3>Classe de {{ studentClass.name }}</h3>
    <h3 v-for="student in studentClass.student" :key="student">
      <li>
        {{ student.firstname }} {{ student.lastname }}
        <span
          ><button>
            <router-link :to="{ name: 'showEleve', params: { id: student.id } }"
              >Fiche élève</router-link
            >
          </button></span
        >
      </li>
    </h3>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import { onMounted } from "@vue/runtime-core";

const studentClass = ref([]);
onMounted(() => {
  fetchOneStudy();
  //   fetchStudents();
});
const route = useRoute();

async function fetchOneStudy() {
  let response = await fetch(
    `http://127.0.0.1:8001/api/studies/${route.params.id}`,
    {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
    }
  )
    .then((r) => r.json())
    .catch((e) => {
      console.log(e);
    });
  if (response) {
    studentClass.value = response;
    console.log("test", studentClass.value);
  }
}
// async function fetchStudents() {
//   let responses = await fetch("http://127.0.0.1:8001/api/students/")
//     .then((r) => r.json())
//     .catch((e) => {
//       console.log(e);
//     });
//   if (responses["hydra:member"]) {
//     studentClass.value = responses["hydra:member"];
//     console.log("test", studentClass.value);
//   }
// }
</script>

<style scoped>
.nameStudy {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 2%;
  background-color: rgb(190, 138, 41);
  border-radius: 20px;
}
h3 a {
  color: rgb(0, 0, 0);
}
h3 {
  color: rgb(255, 255, 255);
}
</style>
