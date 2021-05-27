//components
//buttons
app.component('app-link',{
  props: ['link'],
  template: `
    <a :href="link">
      <slot></slot>
    </a>
  `
})
app.component('app-btn-icon',{
  props: ['button'],
  template: `
    <app-link :link="button.link" class="btn btn-outline-light">
      <i :class="button.icon"></i>
    </app-link>
  `
})
app.component('app-btn',{
  props: ['button'],
  template: `
    <app-link class="btn btn-primary" :link="button.link" role="button">{{ button.text }}</app-link>
  `
})
app.component('h1-title',{
  template: `
    <h1 class="fw-bold border-bottom">
      <slot></slot>
    </h1>
  `
})
app.component('h2-title',{
  template: `
    <h2 class="fw-bold border-bottom">
      <slot></slot>
    </h2>
  `
})
//cards
app.component('app-card',{
  props: ['card'],
  template: `
    <div class="card bg-dark">
      <img :src="card.image" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">{{ card.title }}</h5>
        <p class="card-text">{{ card.text }}</p>
        <app-btn :button="card.button"></app-btn>
      </div>
    </div>
  `
})
app.component('app-simple-card',{
  props: ['item'],
  template: `
    <article>
        <a :href="item.link" class="card-title h3 text-decoration-none">{{ item.title }}</a>
        <p class="card-text">{{ item.text }}</p>
        <div class="text-muted fst-italic my-3">{{ item.date }}</div>
        <hr/>
    </article>
  `
})
      //other
app.component('list-group-flush',{
  props: ['item'],
  template: `
    <ul class="list-group list-group-flush">
      <li class="list-group-item bg-dark text-light">
      </li>
    </ul>
  `
})
app.component('list-group-card',{
  props: ['card'],
  template: `
  <div :card="card" class="card bg-black">
    <div class="card-body">
      <h5 class="card-title fw-bold h2">{{ card.title }}</h5>
      <p class="card-text">{{ card.body }}</p>
    </div>
    <ul class="list-group list-group-flush" >
      <li class="list-group-item bg-black text-light" v-for="(item, index) in card.list">
      <a :href="item.link">{{ item.text }}</a>
      </li>
    </ul>
  </div>
  `
})
app.component('kitchen-sink',{
  props: ['card'],
  template: `
    <div :card="card" class="card bg-black" style="width: 18rem;">
      <img :src="card.image" class="card-img-top" :alt="card.alt">
      <div class="card-body">
        <h5 class="card-title">{{ card.title }}</h5>
        <p class="card-text">{{ card.text }}</p>
      </div>
      <list-group-flush v-for="(item, index) in card.list" :item="item" :class="{'fw-bold': index===0}"></list-group-flush>
      <div class="card-body">
        <app-btn-icon v-for="button in card.buttons" :button="button" class="me-2"></app-btn-icon>
      </div>
    </div>
  `
})
app.component('app-carousel',{
  props: ['carousel'],
  template: `
    <div id="carouselExampleControls" class="carousel slide mb-2" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item" v-for="(item, index) in carousel" :class="{'active': index === 0}">
          <img :src="item.image" class="d-block w-100" :alt="item.alt">
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  `
})
app.component('app-jumbotron',{
  props: ['jumbotron'],
  template: `
    <div class="py-5 mb-3 rounded-3 bg-dark text-light">
      <div class="container">
        <div class="lead display-4">
          {{ jumbotron.title }}
        </div>
        <hr>
        <p>{{ jumbotron.text }}</p>
      </div>
    </div>
  `
})
app.component('app-navbar',{
  template: `
    <nav class="navbar navbar-expand-md fixed-top navbar-dark bg-dark mb-2">
      <div class="container-fluid d-flex align-items-center">
        <a class="navbar-brand p-0" href="#">
         <img :src="brand" alt="JRM">
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li v-for="item in nav" class="nav-item">
              
              <a class="nav-link me-2" :href="location(item.link)">
              <i :class="item.icon" class="me-1"></i>
              {{ item.text }}</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `,
  data() {
    return {
      brand: 'images/logo.svg',
      nav: [
        {
          icon: 'bi bi-house-door-fill',
          link: 'index.html',  
          text: 'Inicio'
        },
        {
          icon: 'bi bi-file-person-fill',
          link: 'about.html', 
          text: 'Sobre mi'
        },
        {
          icon: 'bi bi-file-post',
          link: 'blog.html', 
          text: 'Blog'
        },
        {
          icon: 'bi bi-person-lines-fill',
          link: 'contact.html',
          text: 'Contacto'
        }
      ]
    }
  },
  computed: {
  },
  methods: {
    location(link) {
      let prelink = '../'
      let stringToCut = '/vue/'
      let str =  window.location.pathname.slice(stringToCut.length)
      for (count = 0, i = 0; i < str.length; i++) {
        if (str[i] === '/')
        count++
      }
      for (i = 0; i < count; i++) {
        link = prelink + link
      }
      return link
    }
  }
})
app.component('app-footer',{
  template:`
    <div class="bg-dark">
      <div class="container py-2">
        <div class="row justify-content-between align-items-center">
          <div class="col d-flex justify-content-start">
            {{ brandDate }}
          </div>
          <div class="col d-flex justify-content-end">
              <app-btn-icon v-for='item in links' :button="item" class="me-2"></app-btn-icon>
          </div>
        </div>
      </div>
    </div>
  `,
  data() {
    return {
      brand: 'JRM',
      links: [
        {
          icon: 'bi bi-google',
          link: 'https://facebook.com'
        },
        {
          icon: 'bi bi-linkedin',
          link: 'https://linkedin.com'
        }
      ]
    }
  },
  computed: {
    brandDate() {
      return this.brand + ' - ' + new  Date().getFullYear()
    }
  }
})
const vm = app.mount('#app')
