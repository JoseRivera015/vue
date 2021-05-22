const rootComponent = {
        data() {
          return {
            brand: 'JRM' ,
            posts: [
              {
                id: 1,
                title: `JavaScriptNotes for professionals`,
                body: '',
                images: ''
              }
            ]
          }
        }
      }
      const app = Vue.createApp(rootComponent)
      //components
      //buttons
      app.component('app-link',{
        props: ['link'],
        template: `
          <a  v-if="external" :href="link">
            <slot></slot>
          </a>
          <router-link v-else :to="link">
            <slot></slot>
          </router-link>          
        `,
        computed: {
          external() {
            return this.link.includes('http') || !this.link.substring(0,1).includes('/')? true : false
          }
        }
      })
      app.component('app-btn-icon',{
        props: ['button'],
        template: `
          <app-link :link="button.link"
          class="btn btn-outline-light">
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
      //other
      app.component('list-group-flush',{
        props: ['item'],
        template: `
          <ul class="list-group list-group-flush">
            <li class="list-group-item bg-dark text-light">{{ item }}</li>
          </ul>
        `
      })
      app.component('kitchen-sink',{
        props: ['card'],
        template: `
          <div :card="card" class="card bg-dark" style="width: 18rem;">
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
          <div class="p-4 mb-3 rounded-3 bg-dark text-light">
            <div class="lead display-4">{{ jumbotron.title }}</div>
            <hr>
            <p>{{ jumbotron.text }}</p>
          </div>
        `
      })
      app.component('app-navbar',{
        props:['shared'],
        template: `
          <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark mb-2">
            <div class="container-fluid">
              <a class="navbar-brand" href="#">{{ shared.brand }}</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li v-for="item in nav" class="nav-item">
                    <router-link class="nav-link" :to="item.to">{{ item.text }}</router-link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        `,
        data() {
          return {
            nav: [
              {
                to: '/',  
                text: 'Inicio'
              },
              {
                to: '/about', 
                text: 'Nosotros'
              }
            ]
          }
        }
      })
      app.component('app-footer',{
        props: ['shared'],
        template:`
          <div class="bg-dark">
            <div class="container py-2">
              <div class="row justify-content-between align-items-center">
                <div class="col d-flex justify-content-start">
                  {{ brand }}
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
          brand() {
            return this.shared.brand + ' - ' + new  Date().getFullYear()
          }
        }
      })
      //pages
      app.component('app-page-home', {
        props: ['shared'],
        template:`
          <div class="container my-3">
            <app-carousel :carousel="carousel"></app-carousel>
            <app-jumbotron :jumbotron="intro"></app-jumbotron>
            <h2>Novedades</h2>
            <div class="row">
              <div v-for="card in cards" class="col-12 col-sm-6 col-md-4 col-xl-3">
                <app-card :card="card" class="mb-2"></app-card>
              </div>
            </div>   
          </div>
        `,
        data() {
          return {
            carousel: [
              {
                image: 'https://picsum.photos/800/300',
                alt: ''
              },
              {
                image: 'https://picsum.photos/800/300',
                alt: ''
              }
            ],
            intro: {
              title: 'Bienvenido a JRM Diseño Web',
              text: 'En éste, mi espacio de internet, demostraré mis capacidades para el diseño y desarrollo web, entre otras cosas. Acompáñame en este viaje de crecimiento personal.'
            },
            cards: [
             {
                image: 'https://picsum.photos/300/200',
                alt: '...',
                title: 'JavaScript Notes for Professionals',
                text: 'Adaptacion del manual de Javascript, en html.',
                button: {
                  link: 'JavaScriptNotesForProfessionals.html',
                  text: 'Ver más'
                }
              },
              {
                image: 'https://v3.vuejs.org/logo.png',
                alt: '...',
                title: 'Vue',
                text: 'The Progressive JavaScript Framework',
                button: {
                  link: 'https://v3.vuejs.org/',
                  text:'Ir al sitio'
                }
              },
              {
                image: 'https://getbootstrap.com/docs/5.0/assets/img/bootstrap-icons@2x.png',
                alt: '...',
                title: 'Bootstrap',
                text: 'Framework de CSS',
                button: {
                  link: 'https://getbootstrap.com/',
                  text:'Ir al sitio'
                }
              }
            ]
          }
        }
      })
      app.component('app-page-about', {
        props: ['shared'],
        template:`
          <div class="container my-3 d-flex justify-content-center">
            <kitchen-sink v-for="card in cards" :card="card"></kitchen-sink> 
          </div>
        `,
        data() {
          return{
            title: 'Sobre mí',
            cards: [
              {
                image: 'https://picsum.photos/400/200',
                alt: 'yo',
                title: 'Jose Carlos Rivera',
                text: 'Me considero una persona responsable, optimista, creativa impulsador de metas y desafios prsonales, capaz de vencer los miedos para generar cambios, con capacidad para el trabajo en equipo',
                list: ['Estudiante en computacion', 'Estudiante en diseño gráfico'],
                buttons: [
                  {
                    icon: 'bi bi-facebook',
                    link: 'https://facebook.com'
                  },
                  {
                    icon: 'bi bi-linkedin',
                    link: 'https://linkedin.com'
                  }
                ]
              }
            ]
          }
        }
      })
      //posts
      //routing
      const router = VueRouter.createRouter({
        history: VueRouter.createWebHashHistory(),
        routes:  [
          { 
            path: '/', 
            component: { 
              name: 'router-home',
              props: ['shared'],
              template:`
                <app-page-home :shared="shared"></app-page-home>
              `
            }
          },
          { 
            path: '/about', 
            component: {
              name: 'router-about',
              props: ['shared'],
              template:`
                <app-page-about :shared="shared"></app-page-about>
              `
            }
          }
        ] 
      })
      app.use(router)
      const vm = app.mount('#app')