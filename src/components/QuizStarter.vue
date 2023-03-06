<script>
export default {
  name: "QuizStarter",
  data() {
    return {
      phase: 0,
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
      <h1>HTML5 is <span>easy</span>... Really?</h1>
      <p>
        ¡Hola! Si has llegado hasta aquí, probablemente ha sido por alguna de
        las siguientes razones:
      </p>
      <ul class="xs">
        <li>
          <span>🙋‍♂️</span> Encontraste este minijuego en Internet (<em
            >¡desde un enlace HTML!</em
          >).
        </li>
        <li>
          <span>👨‍🎓</span> Conoces a
          <a href="https://twitter.com/Manz">Manz</a> y te ha insistido para que
          hagas este test.
        </li>
        <li>
          <span>🤷‍♂️</span> Has dicho a alguien la frase
          <i>«¿HTML? ¡HTML es fácil!</i> y duda de tu criterio.
        </li>
        <li>
          <span>🤦</span> Has dicho a alguien la frase
          <i>«HTML no es un lenguaje de programación»</i>, y aunque eso es
          cierto, esta persona piensa que podrías estar menospreciando algo que
          quizás no comprendes.
        </li>
      </ul>
      <button @click="next()">Siguiente</button>
    </div>

    <div v-if="phase == 1">
      <p class="xs">
        Efectivamente, HTML es un lenguaje de marcado
        <i>—no un lenguaje de programación—</i> y con dicho lenguaje está hecha
        la base de cualquier web. Aunque sea mucho más difícil aprender
        programación,
        <strong
          >saber programar no implica saber escribir HTML adecuadamente</strong
        >: semántica, SEO, sintaxis, fallbacks, código obsoleto, compatibilidad
        entre navegadores, malas prácticas...
      </p>

      <ul class="xs">
        <li>
          <span>⏩</span> A continuación te aparecerán varias preguntas de
          respuesta múltiple.
        </li>
        <li>
          <span>🏆</span> Elige la respuesta adecuada... ¡Sólo hay una correcta!
        </li>
        <li>
          <span>🙄</span> Todas las preguntas son sobre HTML5 ¡Es muy fácil! ¿O
          no?
        </li>
        <li>
          <span>🔨</span> OJO: Es un <strong>test de estrés</strong> (50
          preguntas). Tardarás unos 10-15min.
        </li>
        <li>
          <span>⏲️</span> El tiempo importa, por lo que responde lo más rápido
          posible.
        </li>
        <li>
          <span>📋</span> Al final del test, aparecerá un resumen de los
          aciertos y errores.
        </li>
      </ul>

      <p>
        Saber HTML5 (su última versión) es sencillo. Dominar HTML5, no tanto...
        ¡Ahora tienes la oportunidad de demostrar lo que sabes!
      </p>

      <button @click="start()">¡Empezar!</button>
    </div>

  </div>
</template>

<style scoped>
h1 {
  margin: 0.8em 0;
}

h1 span {
  color: var(--light-color);
  display: inline-block;
  animation: fewSpin 1.4s ease-in-out infinite alternate;
}

button {
  margin-bottom: 2em;
}

ul {
  margin: 40px 0;
  text-align: left;
  list-style-type: none;
  padding-left: 20px;

  & span {
    display: inline-block;
    width: 30px;
  }
}

.xs {
  font-size: 1.2rem;
}

i {
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
