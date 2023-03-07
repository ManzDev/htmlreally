<script>
import Prism from "prismjs";
import { toHuman } from "../modules/toHuman.js";
import "prismjs/themes/prism-okaidia.css";
import "prismjs/components/prism-markup.min.js";

export default {
  name: "QuizQuestion",
  data() {
    return {
      currentLevel: 0,
      totalLevels: this.$root.questions.length,
      question: undefined,
      hint: undefined,
      options: undefined,
      solution: undefined,
      preCodeElement: undefined,
      score: this.$root.score,
      time: 0,
      timer: undefined,
    };
  },
  watch: {
    currentLevel() {
      if (this.currentLevel <= this.$root.questions.length) {
        this.question = this.$root.questions[this.currentLevel - 1].question;
        this.hint = this.$root.questions[this.currentLevel - 1].hint;
        this.preCodeElement.textContent = this.hint;
        this.options = this.$root.questions[this.currentLevel - 1].options;
        this.solution = this.$root.questions[this.currentLevel - 1].solution;
        this.update();
      } else this.end();
    },
  },
  mounted() {
    this.currentLevel = 1;
    this.preCodeElement = this.$el.querySelector(".hint pre code");
    this.preCodeElement.classList.add("language-html");
  },
  methods: {
    update() {
      Prism.highlightElement(this.preCodeElement);
      this.time = 0;
      if (this.timer) clearInterval(this.timer);
      this.timer = setInterval(() => {
        this.time++;
      }, 1000);
    },
    toHuman(arg) {
      return toHuman(arg);
    },
    check(pressed) {
      this.$root.times.push(this.time);
      this.$root.answers.push(pressed);
      if (pressed === this.solution) {
        if (this.time > 60) this.$root.score += 5;
        else if (this.time > 30) this.$root.score += 10;
        // <= 30
        else this.$root.score += 20;
      }
      this.currentLevel++;
      event.target.blur();
    },
    end() {
      this.$parent.currentPhase++;
    },
  },
};
</script>

<template>
  <div class="question">
    <p>{{ question }}</p>
    <div class="hint">
      <pre class="highlight"><code></code></pre>
    </div>
    <div class="options">
      <button v-for="(op, i) in options" :key="i" @click="check(i)">
        {{ op }}
      </button>
    </div>
    <div class="levels">{{ currentLevel }} / {{ totalLevels }}</div>
    <div class="author">LenguajeHTML.com</div>
    <time>{{ toHuman(time) }}</time>
  </div>
</template>

<style src="./QuizQuestion.css" scoped></style>
