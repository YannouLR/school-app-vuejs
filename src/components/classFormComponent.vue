<template>
  <div class="classe-list">
    <ul>
      <li><router-link to="/classCP">CP</router-link></li>
      <li><router-link to="/classCM1">CM1</router-link></li>
      <li><router-link to="/classCM2">CM2</router-link></li>
      <li><router-link to="/classCE1">CE1</router-link></li>
      <li><router-link to="/classCE2">CE2</router-link></li>
    </ul>
  </div>
</template>

<style scoped>
.classe-list {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: orange;
  border-radius: 20px;
}
ul {
  display: flex;
  flex-direction: column;
  gap: 5rem;
  margin: auto;
  margin-top: 3%;
  margin-bottom: 3%;
}
ul a {
  text-decoration: none;
  color: rgb(0, 0, 0);
}
</style>
