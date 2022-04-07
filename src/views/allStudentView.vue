<template>
  <div class="header">
    <headerDashboard />
  </div>
  <body>
    <div class="body">
      <h1>Tous les élèves</h1>
      <allStudentList />
    </div>
  </body>
</template>

<script>
import headerDashboard from "../components/headerDashboardComponent.vue";
import allStudentList from "@/components/allStudentListComponent.vue";

export default {
  components: {
    headerDashboard,
    allStudentList,
  },
};
</script>

<style scoped>
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
.header {
  display: flex;
  width: 1%;
  margin-left: 5%;
}
</style>
