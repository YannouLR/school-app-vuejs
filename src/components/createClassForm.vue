<template>
  <div class="cont-dashboard">
    <form class="form">
      <h3>Ajouter un élève</h3>
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
      <select name="classe" id="classe" v-model="user.classe">
        <option value="">classe</option>
        <option value="CP">CP</option>
        <option value="CM1">CM1</option>
        <option value="CM2">CM1</option>
        <option value="CE1">CE1</option>
        <option value="CE2">CE2</option>
      </select>
      <select name="prof" id="prof" v-model="user.professeur">
        <option value="">--Professeur--</option>
        <option value="1er prof">1er prof</option>
        <option value="2eme prof">2eme prof</option>
        <option value="3eme prof">3eme prof</option>
        <option value="4eme prof">4eme prof</option>
      </select>
      <input type="submit" value="Ajouter" class="ajouter" />
    </form>
    <div class="form-add-class">
      <form class="form-add">
        <h3>Résumer de la classe</h3>
        <div>
          <h4>classe de : {{}}</h4>
          <h4>nom du professeur : {{}}</h4>
          <h4>
            nom des élèves :
            <ul>
              <li>Firstname {{}} | Lastname {{}}</li>
            </ul>
          </h4>
        </div>
        <input type="submit" value="Valider la classe" class="valider" />
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        firstname: "",
        lastname: "",
        classe: "",
        professeur: "",
      },
    };
  },
};
</script>

<style scoped>
.cont-dashboard {
  display: flex;
  justify-content: space-around;
  align-self: center;
  width: 100%;
  gap: 10rem;
}
.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  align-items: center;
  background-color: orange;
  height: 30rem;
  width: 50%;
  padding: auto;
  border-radius: 20px;
}
.ajouter {
  width: 30%;
}
.form-add-class {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  background-color: orange;
  border-radius: 20px;
}
.form-add {
  display: flex;
  flex-direction: column;
}
.valider {
  margin: auto;
  width: 30%;
}
</style>
