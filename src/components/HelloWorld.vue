<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <div class="form">
      <form>
        <img alt="Vue logo" src="../assets/logo.png" />
        <h2>Veuillez vous connecter</h2>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Nom d'utilisateur"
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Mot de passe"
        />
        <select name="grade" id="grade">
          <option value="">--Séléctionner votre statut--</option>
          <option value="élève">élève</option>
          <option value="professeur">professeur</option>
          <option value="directeur">directeur</option>
        </select>
        <input type="submit" value="Valider" class="valider" />
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: String,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  height: 15%;
}
h2 {
  margin: 40px 0 0;
  color: rgb(105, 72, 14);
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
form {
  background-color: rgb(224, 175, 62);
  height: 30rem;
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  border-radius: 20px;
}
.form {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.valider {
  width: 35%;
  cursor: pointer;
}
</style>
