<template>
  <div class="header">
    <headerDashboard />
  </div>
  <body>
    <div class="body">
      <h1>Tous les professeurs</h1>
      <allProfFrom />
    </div>
  </body>
</template>

<script>
import allProfFrom from "../components/allProfFromFromComponent.vue";
import headerDashboard from "../components/headerDashboardComponent.vue";

export default {
  components: {
    headerDashboard,
    allProfFrom,
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
  width: 70%;
}
.body {
  width: 100%;
  margin-top: -60%;
  margin-left: 35%;
  display: flex;
  flex-direction: column;
}
</style>
