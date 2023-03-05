<script>
import QuizStarter from "./components/QuizStarter.vue";
import QuizQuestion from "./components/QuizQuestion.vue";
import QuizEnding from "./components/QuizEnding.vue";
import questions from "./assets/questions.json";

export default {
  name: "App",
  components: {
    "quiz-starter": QuizStarter,
    "quiz-question": QuizQuestion,
    "quiz-ending": QuizEnding,
  },
  data() {
    return {
      currentPhase: 0,
      currentLevel: 0,
      score: 0,
      times: [],
      answers: [],
      questions,
    };
  },
  mounted() {
    this.currentPhase = 0;
    // fix mobile hover
    if ("ontouchstart" in document.documentElement)
      document.body.classList.add("mobile");
  },
};
</script>

<template>
  <div class="container">
    <div class="screen">
      <quiz-starter v-if="currentPhase == 0"></quiz-starter>
      <quiz-question v-if="currentPhase == 1"></quiz-question>
      <quiz-ending v-if="currentPhase == 2"></quiz-ending>
    </div>
  </div>
</template>

<style>
.screen {
  max-width: 800px;
  background-color: var(--dark-color);
  background-image: linear-gradient(
    135deg,
    var(--light-color) 0 25px,
    transparent 25px 100%
  );
  border: 4px solid var(--light-color);
  text-align: center;
  opacity: 0.96;
  box-shadow: 6px 6px 10px rgba(0, 0, 0, 0.5);
  position: relative;
}

.screen .starter,
.screen .ending {
  padding: 5px 45px;
}

@media screen and (max-width: 800px) {
  .container {
    display: block;
    height: 100vh;
  }

  .question {
    min-height: 100vh;
  }

  .question .levels {
    top: auto;
    left: 0;
    right: 0;
    bottom: 0;
    border: 0;
    background: none;
  }

  .screen {
    border: 0;
    background: transparent;
    box-shadow: none;
    background: var(--dark-color);
  }

  .screen .question p {
    margin: 0;
    padding: 2em 10px;
  }

  .author {
    display: none;
  }
}
</style>
