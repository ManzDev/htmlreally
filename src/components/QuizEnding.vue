<template>
  <div class="ending">
    <h1 class="note">{{ calificationNote }}</h1>
    <p>{{ customMessage }}</p>
    <p>Has obtenido un <strong>{{ calificationNumber }}</strong> y tardado <time>{{ totalTime | toHuman }}</time></p>
    <div class="grid">
      <div v-for="(q, i) in questions"
           :key="i"
           :class="{ okay: isCorrect(i) }"
           :data-tippy-content="safe(q.question, i)"
      >
        <span>#{{ i+1 }}</span>
        <span v-if="isCorrect(i)">✔️</span>
        <span v-else>❌</span>
        <div class="progress">
          <div class="fill" :style="{ width: `${ (times[i] * 100) / maxQuestionTime }%` }"></div>
        </div>
      </div>
    </div>
    <div class="points">{{ score }}/{{ maxScore }}</div>
  </div>
</template>

<script>
import tippy from 'tippy.js';
import { toHuman } from '/mixins/index.js';

export default {
  name: 'QuizEnding',
  filters: {
    toHuman
  },
  data() {
    return {
      score: this.$root.score,
      maxScore: this.$root.questions.length * 20,
      times: this.$root.times,
      answers: this.$root.answers,
      questions: this.$root.questions,
      maxQuestionTime: 30,
      calificationNumber: undefined
    }
  },
  computed: {
    totalTime() {
      return this.times.reduce((p, c) => p + c);
    },
    calificationNote() {
      if (this.calificationNumber < 5)
        return 'Insuficiente';
      else if (this.calificationNumber < 6)
        return 'Suficiente';
      else if (this.calificationNumber < 8)
        return 'Bien';
      else if (this.calificationNumber < 10)
        return 'Notable';
      else
        return 'Sobresaliente';
    },
    customMessage() {
      if (this.calificationNumber < 1)
        return '¿En serio te dedicas a esto? Hasta pulsando opciones al azar obtienes puntuaciones más altas que esta. ¡Hay que esforzarse especialmente para obtener esta calificación!';
      else if (this.calificationNumber < 2)
        return '¡Oh! ¡Qué lástima! Parece que el HTML no es una de tus virtudes. Quizás puedas dedicarte al mundo de la programación, porque el del etiquetado HTML parece que te cuesta.';
      else if (this.calificationNumber < 3)
        return '¡Vaya, vaya! ¿Pero qué calificación es esta? ¡Espero que no hayas llegado aquí con la intención de sacar una buena nota, porque no has llegado ni al suficiente!';
      else if (this.calificationNumber < 4)
        return '¡Oh! Me temo mucho que esto es un suspenso. Debes aprender más para considerarte un buen conocedor del lenguaje de marcado HTML5.';
      else if (this.calificationNumber < 5)
        return '¡Uy! Casi llegas al aprobado, pero no pudo ser. Espero que no seas de esos que dicen con retintín que HTML5 no es un lenguaje de programación, porque si no llegas ni al aprobado de HTML5...';
      else if (this.calificationNumber < 6)
        return '¡Anda! ¡Por los pelos! Parece que tienes los conocimientos justos de HTML5 como para aprobar, pero poco más. Tendrás que estudiar un poco más de HTML para dominarlo.';
      else if (this.calificationNumber < 7)
        return 'No está mal. Te has defendido bien, joven padawan. Pero recuerda que el miedo lleva a la ira, la ira lleva al odio y el odio lleva al sufrimiento. Veo mucho miedo al HTML5 en ti.';
      else if (this.calificationNumber < 9)
        return '¡No te defiendes nada mal en el mundo del lenguaje HTML5! Parece que llevas tiempo en esto, o al menos lo has estudiado y sabes de que hablas.';
      else if (this.calificationNumber < 10)
        return '¡Eh! ¿Dónde aprendiste tanto sobre HTML5? Tú sabes de lo que hablas y pareces estar muy bien informado. ¡Enhorabuena, maestro del HTML5!';
      else
        return '¡Asombroso! ¿Seguro que no has hecho trampas? Una de dos: Deberías estar creando una nueva especificación en el consorcio W3.org o dejar de mirar en el código fuente para obtener las soluciones.';
    }
  },
  created() {
    this.calificationNumber = ~~(((this.score / this.maxScore) * 10) * 10) / 10;
  },
  mounted() {
    tippy('.grid > div');
  },
  methods: {
    isCorrect(i) {
      return this.answers[i] === this.questions[i].solution
    },
    safe(text, i) {
      return text.replace(/</g, '&lt;').replace(/>/g, '&gt;') + '<hr>Respondiste: ' +
             this.questions[i].options[this.answers[i]].replace(/</g, '&lt;').replace(/>/g, '&gt;');
    }
  }
}
</script>

<style lang="postcss" scoped>
  .ending {
    position: relative;
  }

  .note {
    color: #222;
    background: #eee;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
    box-shadow: 3px 3px 4px rgba(0, 0, 0, 0.5);
    display: inline-block;
    padding: 10px 40px;
    margin: 40px 0 20px 0;
    transform: rotate(3deg);
  }

  .points {
    position: absolute;
    top: 6px;
    right: 6px;
  }

  h1 {
    margin: 0.8em 0;
  }

  .grid {
    max-width: 800px;
    padding-bottom: 50px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 5px;
    user-select: none;

    & .okay { background: #296d04; }

    & div {
      background: var(--lightColor);
      cursor: pointer;
    }
  }

  .progress {
    width: 100%;
    height: 8px;
    background: grey;

    & .fill {
      width: 50%;
      height: 100%;
      background: yellow;
    }
  }
</style>
