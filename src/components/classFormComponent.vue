<template>
  <div class="classe-list">
    <ul>
      <li><router-link to="/allEleve">CP</router-link></li>
      <li><router-link to="/allEleve">CM1</router-link></li>
      <li><router-link to="/allEleve">CM2</router-link></li>
      <li><router-link to="/allEleve">CE1</router-link></li>
      <li><router-link to="/allEleve">CE2</router-link></li>
    </ul>
  </div>
</template>

<style>
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
