import { defineStore } from "pinia";

export const useStudentStore = defineStore({
  id: "students",
  state: () => ({
    student: {},
    students: [],
  }),
  getters: {
    getStudents: (state) => state.students,
  },
  actions: {},
});
