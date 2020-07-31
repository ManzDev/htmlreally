import Vue from "vue";
import App from "./App";

import questions from "~/assets/questions.json";

const app = new Vue({
  el: "#app",
  data() {
    return {
      currentLevel: 0,
      score: 0,
      times: [],
      answers: [],
      questions,
    };
  },
  render: (h) => h(App),
});

console.log(app.score);
