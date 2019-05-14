<template>
  <div class="container">
    <div class="screen">
      <quiz-starter v-if="currentPhase == 0"></quiz-starter>
      <quiz-question v-if="currentPhase == 1"></quiz-question>
      <quiz-ending v-if="currentPhase == 2"></quiz-ending>
    </div>
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
    this.currentPhase = 0;
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
    .container {
      background: var(--darkColor);
      display: block;
      height: 100vh;
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
    }

    .screen .question p {
      margin: 0;
      padding: 2em 10px;
    }
  }
</style>
