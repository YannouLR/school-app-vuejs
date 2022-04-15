<template>
  <div class="nameProf">
    <h3 v-for="profs in prof" :key="profs">
      <router-link :to="{ name: 'showProf', params: { id: profs.id } }"
        >{{ profs.firstname }} {{ profs.lastname }}</router-link
      >
    </h3>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { onMounted } from "@vue/runtime-core";

const prof = ref([]);
onMounted(() => {
  fetchStudents();
});
async function fetchStudents() {
  let response = await fetch("http://127.0.0.1:8001/api/professors", {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
  })
    .then((r) => r.json())
    .catch((e) => {
      console.log(e);
    });
  if (response["hydra:member"]) {
    prof.value = response["hydra:member"];
    console.log("test", prof.value);
  }
}
</script>

<style scoped>
.nameProf {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  margin-top: 2%;
  background-color: rgb(190, 138, 41);
  border-radius: 20px;
}
h3 a {
  color: rgb(255, 255, 255);
}
h3 a.router-link-exact-active {
  color: orange;
}
h3 {
  display: flex;
  flex-direction: column;
}
</style>
