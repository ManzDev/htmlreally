<script>
// import snarkdown from "snarkdown";
import MarkdownIt from "markdown-it";

const md = new MarkdownIt({ html: true });
import start1 from "../assets/start-1.md?raw";
import start2 from "../assets/start-2.md?raw";
import start3 from "../assets/start-3.md?raw";

export default {
  name: "QuizStarter",
  data() {
    return {
      phase: 0,
      text: {
        start1: md.render(start1),
        start2: md.render(start2),
        start3: md.render(start3),
      },
    };
  },
  methods: {
    next() {
      this.phase++;
    },
    start() {
      this.$parent.currentPhase++;
    },
  },
};
</script>

<template>
  <div class="starter">
    <div v-if="phase == 0">
      <div v-html="text.start1"></div>
      <button @click="next()">Me interesa... ➜</button>
    </div>

    <div v-if="phase == 1">
      <div v-html="text.start2"></div>
      <button @click="next()">Instrucciones ➜</button>
    </div>

    <div v-if="phase == 2">
      <div v-html="text.start3"></div>
      <button @click="start()">¡Empezar! ➜</button>
    </div>
  </div>
</template>

<style>
h1 {
  margin: 0.8em 0;
}

h1 em {
  color: var(--light-color);
  display: inline-block;
  font-family: var(--header-font);
  font-weight: normal;
  font-style: normal;
  animation: fewSpin 1.4s ease-in-out infinite alternate;
}

.starter button {
  margin-bottom: 2em;
}

br {
  margin-bottom: 2em;
}

ul {
  margin: 40px 0;
  text-align: left;
  list-style-type: none;
  padding-left: 20px;

  & em {
    display: inline-block;
  }
}

mark {
  background: none;
  color: white;
  text-decoration-style: wavy;
  text-decoration-color: var(--intense-color);
  text-decoration-line: underline;
}

strong {
  color: var(--intense-color);
}

ul {
  font-size: 1.2rem;
}

em {
  display: inline-block;
  font-family: var(--alternative-font);
  font-weight: 700;
  letter-spacing: -1px;
  color: #3a0202;
}

@keyframes fewSpin {
  0% {
    transform: rotate(-8deg);
  }

  100% {
    transform: rotate(8deg);
  }
}
</style>
