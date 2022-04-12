<template>
  <div class="home">
    <!--<img alt="Vue logo" src="../assets/logo.png" />-->
    <LoginForm handleSubmit="HandleSubmit" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LoginForm from "@/components/loginForm.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    LoginForm,
  },
});
</script>
