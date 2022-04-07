<template>
  <div class="cont-dashboard">
    <form>
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
      <select name="sexe" id="sexe">
        <option value="">Sexe de l'élève</option>
        <option value="homme">Homme</option>
        <option value="femme">Femme</option>
        <option value="non-binaire">Non-Binaire</option>
      </select>
      <input
        type="email"
        v-model="user.email"
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

<script>
export default {
  data() {
    return {
      user: {
        firstname: "",
        lastname: "",
        email: "",
      },
    };
  },
};
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
