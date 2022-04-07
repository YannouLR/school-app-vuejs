<template>
  <NavComponent />
  <addNoteForm />
</template>

<script>
import addNoteForm from "@/components/addNoteFormComponent.vue";
import NavComponent from "@/components/navComponent.vue";

export default {
  components: {
    addNoteForm,
    NavComponent,
  },
};
</script>
