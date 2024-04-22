const app = Vue.createApp({
  data() {
    return {
      number: 0,
    };
  },
  computed: {
    result() {
      if (this.number < 37) {
        return "Not yet now ;D";
      } else if (this.number === 37) {
        return this.number;
      } else {
        return "To much!";
      }
    },
  },
  watch: {
    result() {
      console.log("watcher executing...");
      const that = this;
      setTimeout(function () {
        that.number = 0;
      }, 5000);
    },
  },
  methods: {
    addNumber(num) {
      this.number = this.number + num;
    },
    minusNumber(num) {
      this.number = this.number - num;
    },
  },
});

app.mount("#assignment");
