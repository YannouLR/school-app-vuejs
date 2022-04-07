<template>
  <div class="header">
    <headerDashboard />
  </div>
  <div class="body">
    <h1>Dashboard</h1>
    <h2>Bienvenue sur votre dashboard</h2>
    <div class="cont-dashboard">
      <div class="eleve"></div>
      <div class="professeur"></div>
      <div class="add-class"></div>
      <div class="add-class"></div>
      <div></div>
    </div>
  </div>
</template>

<script>
import headerDashboard from "../components/headerDashboardComponent.vue";

export default {
  components: {
    headerDashboard,
  },
};
</script>

<style scoped>
.header {
  display: flex;
  width: 1%;
  margin-left: 5%;
}

body {
  width: 100%;
}
.body {
  width: 70%;
  margin-top: -40%;
  margin-left: 30rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.eleve,
.professeur,
.add-class {
  border: 1px solid white;
  width: 20%;
  height: 20rem;
}
.cont-dashboard {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 5rem;
  width: 100%;
}
h1,
h2 {
  display: flex;
  justify-content: center;
  margin-left: -5%;
}
</style>
