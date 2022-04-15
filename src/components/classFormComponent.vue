<template>
  <div class="nameStudy">
    <div v-for="studies in study" :key="studies">
      <h3>
        <li>
          <router-link
            :to="{ name: 'studentClass', params: { id: studies.id } }"
            >{{ studies.name }}</router-link
          >
        </li>
      </h3>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { onMounted } from "@vue/runtime-core";

const study = ref([]);
onMounted(() => {
  fetchStudents();
});
async function fetchStudents() {
  let response = await fetch("http://127.0.0.1:8001/api/studies", {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
  })
    .then((r) => r.json())
    .catch((e) => {
      console.log(e);
    });
  if (response["hydra:member"]) {
    study.value = response["hydra:member"];
    console.log("test", study.value);
  }
}
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
  color: rgb(255, 255, 255);
}
h3 {
  color: rgb(255, 255, 255);
}
h3 a.router-link-exact-active {
  color: orange;
}
</style>
