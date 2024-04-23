const app = Vue.createApp({
  data() {
    return {
      enteredValue: "",
      goals: [],
      taskVisibility: true,
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredValue);
    },
    toggleTaskList() {
      this.taskVisibility = !this.taskVisibility;
    },
  },
});
app.mount("#assignment");
