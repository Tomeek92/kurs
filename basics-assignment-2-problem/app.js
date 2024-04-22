const app = Vue.createApp({
  data() {
    return {
      name: "",
      confirmedName: "",
    };
  },
  methods: {
    showAlert() {
      alert("Unexpected Error");
    },
    getName(event) {
      this.name = event.target.value;
    },
    confirmedInput() {
      this.confirmedName = this.name;
    },
  },
});

app.mount("#assignment");
