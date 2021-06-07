const rootComponent = {
  data() {
    return root
  }
}
const app = Vue.createApp(rootComponent)
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
app.component('app-navbar',{
  template: `
    <nav class="navbar navbar-expand-md fixed-top navbar-dark bg-dark mb-2">
      <div class="container-fluid d-flex align-items-center">
        <a class="navbar-brand" :href="location(nav[0].link)">
           <img style="height:30px;" :src="location(brand)" alt="JRM">
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
            <a v-for="item in links" :href="item.link" class="btn btn-outline-light me-2">
              <i :class="item.icon"></i>
            </a>
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
