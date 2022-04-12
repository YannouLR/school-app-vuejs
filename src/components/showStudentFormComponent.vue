<template>
  <div class="body">
    <div v-for="student in students" :key="student"></div>
    <h1>{{ students.firstname }} {{ students.lastname }}</h1>
    <div class="eleveId">
      <h3>
        sexe : <span>{{ students.sexe }}</span>
      </h3>
      <h3>
        Addresse email des parents : <span>{{ students.mail_parent }}</span>
      </h3>
      <h3>
        Classe :
        <span v-if="students.Studyplace">{{ students.Studyplace.name }}</span>
      </h3>
      <h3>Instituteur : <span>ici le nom de l'instituteur de l'élève</span></h3>
      <h3 class="moyenne">
        Moyenne :
        <p>- Math : <span>.../20</span></p>
        <p>- Français : <span>.../20</span></p>
        <p>- Histoire : <span>.../20</span></p>
        <p>- Science : <span>.../20</span></p>
        <p>- Sport : <span>.../20</span></p>
      </h3>
      <h3>Moyenne général : <span>0/20</span></h3>
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

const students = ref([]);
onMounted(() => {
  fetchOneStudent();
});
async function fetchOneStudent() {
  let response = await fetch("http://127.0.0.1:8001/api/students/3")
    .then((r) => r.json())
    .catch((e) => {
      console.log(e);
    });
  if (response.sexe === "boy") {
    response.sexe = "Homme";
  } else {
    response.sexe = "Femme";
  }
  students.value = response;
  console.log("test", response);
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
