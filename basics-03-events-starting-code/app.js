const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmedName: "",
    };
  },
  methods: {
    confirmedInput() {
      this.confirmedName = this.name;
    },
    getName(event) {
      this.name = event.target.value;
    },
    add() {
      this.counter--;
    },
    reduce() {
      this.counter++;
    },
  },
});

app.mount("#events");
