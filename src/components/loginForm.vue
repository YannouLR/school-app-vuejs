<template>
  <div class="hello">
    <h1>Bienvenue sur l'application</h1>

    <div class="form">
      <form @submit.prevent="login">
        <img alt="Vue logo" src="../assets/logo.png" />
        <h2>Veuillez vous connecter</h2>
        <input
          type="email"
          name="email"
          id="email"
          v-model="user.email"
          placeholder="email"
        />
        <input
          type="password"
          name="password"
          v-model="user.password"
          id="password"
          placeholder="Mot de passe"
        />
        <div v-for="error in errors" :key="error">
          <span class="error">{{ error }}</span>
        </div>
        <input type="submit" value="Valider" class="valider" />
      </form>
    </div>
  </div>
</template>

<script>
import jwt_decode from "jwt-decode";

export default {
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
      errors: [""],
    };
  },
  methods: {
    async login() {
      this.errors = [];
      if (this.user.email === "" && this.user.password === "") {
        this.errors.push("Veuillez remplir tous les champs");
        console.log(this.errors);
        return;
      }
      let response = await fetch("http://127.0.0.1:8001/api/login_check", {
        method: "POST",
        body: JSON.stringify(this.user),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((r) => {
          return r.json();
        })
        .catch((e) => {
          return e.json();
        });
      if (response.token) {
        sessionStorage.clear();
        localStorage.clear();
        sessionStorage.setItem("token", response.token);

        var decode = jwt_decode(response.token);
        var role = decode.roles;
        console.log(role);
        if (role.indexOf("ROLE_TEACHER") >= 0) {
          sessionStorage.setItem("role", "Teacher");
        } else if (role.indexOf("ROLE_ADMIN") >= 0) {
          sessionStorage.setItem("role", "Admin");
        } else sessionStorage.setItem("role", "Student");
        this.redirect();
      }
    },
    redirect: function () {
      let role = sessionStorage.getItem("role");
      if (role === "Admin") this.$router.push("/admin");
      if (role === "Teacher") this.$router.push("/teacher");
      if (role === "student") this.$router.push("/student");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  height: 15%;
}
h2 {
  margin: 40px 0 0;
  color: rgb(105, 72, 14);
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
form {
  background-color: rgb(224, 175, 62);
  height: 30rem;
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  border-radius: 20px;
}
.form {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.valider {
  width: 35%;
  cursor: pointer;
}
.error {
  color: red;
}
</style>
