<template>
  <div class="body">
    <h1>{{ prof.firstname }} {{ prof.lastname }}</h1>
    <div class="eleveId">
      <h3>Age : {{ prof.age }}</h3>
      <h3>Adresse email: {{ prof.email }}</h3>
      <h3>Salaire : {{ prof.salary }} €</h3>
      <h3>
        Classe attribuée :
        <span v-if="prof.studyplace">{{ prof.studyplace.name }}</span>
      </h3>
      <div class="form">
        <form>
          <h3 class="h3-exclure">Expulser</h3>
          <div class="radio">
            <label for="definitif">Définitivement</label>
            <input type="radio" name="definitif" id="definitif" />
          </div>
          <div class="temp">
            <label for="temporairement">Temporairement</label>
            <input
              type="number"
              name="temporairement"
              id="temporairement"
              min="1"
              max="3"
            />
          </div>
          <input type="submit" value="Exclure" class="exclure" />
        </form>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { onMounted } from "@vue/runtime-core";
import { useRoute } from "vue-router";

const prof = ref([]);
onMounted(() => {
  fetchOneStudent();
});
const route = useRoute();
async function fetchOneStudent() {
  let response = await fetch(
    `http://127.0.0.1:8001/api/professors/${route.params.id}`,
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
  if (response.sexe === "boy") {
    response.sexe = "Homme";
  } else if (response.sexe === "girl") {
    response.sexe = "Femme";
  } else {
    response.sexe = "Non-binaire";
  }
  if (response) {
    prof.value = response;
  } else {
    route.push("/allEleve");
  }
  console.log("test", response);
  console.log("test2", response.noteMatiereStudents);
}
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
}
form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
  gap: 2rem;
  background-color: black;
  width: 70%;
  margin: auto;
  height: 20rem;
  border-radius: 20px;
}
.exclure {
  width: 50%;
  cursor: pointer;
}
.radio {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.temp {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.h3-exclure {
  margin-bottom: -10px;
  font-size: 2rem;
}
#temporairement {
  margin: auto;
}
</style>
