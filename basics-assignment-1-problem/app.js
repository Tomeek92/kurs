const app = Vue.createApp({
  data() {
    return {
      myName: "Tomasz",
      myAge: 32,
      myAgePlus5: 37,
      myLink:
        "https://tinypic.com/hs-fs/hubfs/TP%20Blog_7_Header.png?width=896&height=612&name=TP%20Blog_7_Header.png",
    };
  },
  methods: {
    myFavoriteNumberFunction() {
      const number = Math.random();
      if (number === 8) {
        return "My favorite number is 8!" + number;
      } else {
        return "Is not my favorite number!" + number;
      }
    },
  },
});

app.mount("#assigment");
