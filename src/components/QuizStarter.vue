<template>
  <div class="starter">
    <div v-if="phase == 0">
      <h1>HTML5 is <span>easy</span>... Really?</h1>
      <p>¡Hola! Si estás por aquí, probablemente es por alguna de las siguientes razones:</p>
      <ul class="xs">
        <li>Encontraste este minijuego en Internet (<em>¡desde un enlace HTML!</em>).</li>
        <li>Conoces a <a href="https://twitter.com/Manz">Manz</a> y te ha dado la lata para que hagas este test.</li>
        <li>Has dicho a alguien la frase <i>«¿HTML? ¡HTML es fácil!</i> y duda de tu criterio.</li>
        <li>Has dicho a alguien la frase <i>«HTML no es un lenguaje de programación»</i>, y aunque eso es cierto, esta persona piensa que puedes estar menospreciando algo que quizás ni comprendes.</li>
      </ul>
      <button @click="next()">Siguiente</button>
    </div>
    <div v-if="phase == 1">
      <p class="xs">Efectivamente, HTML es un lenguaje de marcado (no un lenguaje de programación) y con dicho lenguaje está hecha la base de cualquier web. Aunque suelen ser mucho más difícil aprender programación, esto no implica automáticamente saber utilizar HTML adecuadamente.</p>

      <ul class="xs">
        <li>A continuación te aparecerán varias preguntas de respuesta múltiple.</li>
        <li>Elige la respuesta correcta. ¡Sólo hay una!</li>
        <li>Todas las preguntas son sobre HTML5 ¡Es muy fácil!</li>
        <li>El tiempo importa, por lo que responde lo más rápido posible.</li>
      </ul>

      <p>Saber HTML5 (su última versión) es sencillo. Dominar HTML5, no tanto... ¡Ahora tienes la oportunidad de demostrar que sabes!</p>

      <button @click="start()">¡Empezar!</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'QuizStarter',
  data() {
    return {
      phase: 0
    }
  },
  methods: {
    next() {
      this.phase++;
    },
    start() {
      this.$parent.currentPhase++;
    }
  }
}
</script>

<style lang="postcss">
  h1 {
    margin: 0.8em 0;
  }

  h1 span {
    color: var(--lightColor);
    display: inline-block;
    animation: fewSpin 1s ease-in-out infinite alternate;
  }

  ul {
    margin: 40px 0;
    text-align: left;
    list-style-type: square;
  }

  .xs {
    font-size: 1.2rem;
  }

  i {
    font-family: var(--alternativeFont);
    font-weight: 700;
    letter-spacing: -1px;
    color: #020000;
  }

  @keyframes fewSpin {
    0% {
      transform: rotate(-4deg);
    }

    100% {
      transform: rotate(4deg);
    }
  }

</style>
