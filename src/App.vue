<template>
  <div class="screen">
    <quiz-starter v-if="currentPhase == 0"></quiz-starter>
    <quiz-question v-if="currentPhase == 1"></quiz-question>
    <quiz-ending v-if="currentPhase == 2"></quiz-ending>
  </div>
</template>

<script>
import QuizStarter from '/components/QuizStarter';
import QuizQuestion from '/components/QuizQuestion';
import QuizEnding from '/components/QuizEnding';

export default {
  name: 'App',
  components: {
    'quiz-starter': QuizStarter,
    'quiz-question': QuizQuestion,
    'quiz-ending': QuizEnding
  },
  data() {
    return {
      currentPhase: 0
    }
  },
  mounted() {
    this.currentPhase = 0; // 1
  }
}
</script>

<style lang="postcss">
  .screen {
    max-width: 800px;
    background-color: var(--darkColor);
    background-image: linear-gradient(135deg, var(--lightColor) 0 25px, transparent 25px 100%);
    border: 4px solid var(--lightColor);
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
    body {
      height: 100vh;
    }

    .screen {
      width: 97%;
      height: 100%;
      margin: 0;
    }
  }
</style>
