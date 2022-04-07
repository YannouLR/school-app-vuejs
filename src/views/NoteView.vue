<template>
  <navComponent />
  <noteList />
</template>

<script>
import navComponent from "../components/navComponent.vue";
import noteList from "@/components/NoteListView.vue";

export default {
  components: {
    navComponent,
    noteList,
  },
};
</script>
