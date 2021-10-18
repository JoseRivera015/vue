const rootComponent = {
  data() {
    return {
      kiss: [
        {
          phrase: "Guapo el que lo lea"
        },
        {
          phrase: "Eres una hermosura :3"
        },
        {
          phrase: "¡Que hoy te vaya bien!"
        }
      ],
      count: 0
    }
  },
  methods: {
    getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    SetRandomCount() {
      this.count = this.getRandomInt(0, this.kiss.length -1)
    },
    randomPhrase() {
      return this.kiss[this.count].phrase
    }

  }
}
const app = Vue.createApp(rootComponent)
const vm = app.mount('#app')