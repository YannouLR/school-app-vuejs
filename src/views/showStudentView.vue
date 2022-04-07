<template>
  <div class="all">
    <header>
      <headerDashboard />
    </header>
    <body>
      <div class="body">
        <h1>Nom et prenom de l'élève</h1>
        <div class="eleveId">
          <h3>sexe : <span>ici le sexe de l'élève</span></h3>
          <h3>
            Addresse email des parents : <span>ici le mail des parents</span>
          </h3>
          <h3>Classe : <span>ici la classe de l'élève</span></h3>
          <h3>
            Instituteur : <span>ici le nom de l'instituteur de l'élève</span>
          </h3>
          <h3 class="moyenne">
            Moyenne :
            <p>- Math : <span>.../20</span></p>
            <p>- Français : <span>.../20</span></p>
            <p>- Histoire : <span>.../20</span></p>
            <p>- Science : <span>.../20</span></p>
            <p>- Sport : <span>.../20</span></p>
          </h3>
          <h3>Moyenne général : <span>0/20</span></h3>
          <showStudentForm />
          <!--<div class="form">
            <form>
              <h3 class="h3-exclure">Expulser</h3>
              <div class="radio">
                <label for="definitif">Définitivement</label>
                <input type="radio" name="definitif" id="definitif" />
              </div>
              <div class="temp">
                <label for="temporairement">Temporairement</label>
                <input
                  type="number"
                  name="temporairement"
                  id="temporairement"
                  min="1"
                  max="3"
                />
              </div>
              <input type="submit" value="Exclure" class="exclure" />
            </form>
          </div>-->
        </div>
      </div>
    </body>
  </div>
</template>

<script>
import headerDashboard from "../components/headerDashboardComponent.vue";
import showStudentForm from "@/components/showStudentFormComponent.vue";

export default {
  components: {
    headerDashboard,
    showStudentForm,
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
