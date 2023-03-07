<script>
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

<style src="./QuizStarter.css"></style>
