<template>
  <!--<div class="all">-->
  <div class="header">
    <headerDashboard />
  </div>
  <body>
    <div class="body">
      <h1>Ajouter un élève</h1>
      <addStudendForm />
    </div>
  </body>
  <!--</div>-->
</template>

<script>
import headerDashboard from "../components/headerDashboardComponent.vue";
import addStudendForm from "@/components/addStudendFormComponent.vue";

export default {
  components: {
    headerDashboard,
    addStudendForm,
  },
};
</script>

<style scoped>
.header {
  display: flex;
  width: 1%;
  margin-left: 5%;
}
.dashboard {
  border: 1px solid white;
  height: 50rem;
  border-radius: 20px;
  margin-left: 20rem;
}
.top-dashboard {
  border: 1px solid white;
  height: 5rem;
  width: 20rem;
  border-radius: 20px;
}
.lien {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 10%;
}
.lien a {
  text-decoration: none;
  color: white;
}
.lien a.router-link-exact-active {
  color: orange;
}
.body {
  width: 100%;
  margin-top: -40%;
  margin-left: 10rem;
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
</style>
