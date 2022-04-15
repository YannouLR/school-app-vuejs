<template>
  <div class="all">
    <header>
      <headerDashboard />
    </header>
    <body>
      <showProfForm />
    </body>
  </div>
</template>

<script>
import headerDashboard from "../components/headerDashboardComponent.vue";
import showProfForm from "@/components/showProfFormComponent.vue";

export default {
  components: {
    headerDashboard,
    showProfForm,
  },
};
</script>

<style scoped>
body {
  width: 100%;
}
.body {
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.all {
  display: flex;
  justify-content: space-evenly;
  gap: 10rem;
}
h1 {
  display: flex;
  align-self: center;
  margin-left: 10%;
}
.eleveId {
  background-color: rgb(137, 78, 0);
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  height: 45rem;
  margin-left: 11%;
  width: 80%;
  border-radius: 20px;
}
h3 a {
  color: rgb(255, 255, 255);
}
h3 a.router-link-exact-active {
  color: orange;
}
</style>
