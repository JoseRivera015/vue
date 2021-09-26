const rootComponent = {
  data() {
    return {
      items: [
        {
          videoLink: '/watch?v=gmW2pe2NT4o',
          videoThumbnailImg: 'https://i.ytimg.com/vi/gmW2pe2NT4o/mqdefault.jpg',
          videoTitle: 'Inta Eyh - XZEEZ Remix (Nancy Ajram) rvrvrvrhrvrvrvrvevevrv rvrvrv ggf fhgh thgf RFC rcrvrhy hbynunrct ujdcjg fbyvtvyrv',
          timeSatus: '2:58',

          channelName: 'VAVA Media',
          videoViews: '15M de vistas',
          releaseDate: 'hace 3 meses',

          channelLink: '/c/VAVAMedia',
          channelImg: 'https://yt3.ggpht.com/ytc/AKedOLSy22zfIa5zHtoUITOaoDej71oWSMUK77gazE8FMQ=s68-c-k-c0x00ffffff-no-rj'
        },
        {
          videoLink: '/watch?v=gmW2pe2NT4o',
          videoThumbnailImg: 'https://i.ytimg.com/vi/gmW2pe2NT4o/mqdefault.jpg',
          videoTitle: 'Inta Eyh - XZEEZ Remix (Nancy Ajram)',
          timeSatus: '2:58',

          channelName: 'VAVA Media',
          videoViews: '15M de vistas',
          releaseDate: 'hace 3 meses',

          channelLink: '/c/VAVAMedia',
          channelImg: 'https://yt3.ggpht.com/ytc/AKedOLSy22zfIa5zHtoUITOaoDej71oWSMUK77gazE8FMQ=s68-c-k-c0x00ffffff-no-rj'
        },
        {
          videoLink: '/watch?v=gmW2pe2NT4o',
          videoThumbnailImg: 'https://i.ytimg.com/vi/gmW2pe2NT4o/mqdefault.jpg',
          videoTitle: 'Inta Eyh - XZEEZ Remix (Nancy Ajram)',
          timeSatus: '2:58',

          channelName: 'VAVA Media',
          videoViews: '15M de vistas',
          releaseDate: 'hace 3 meses',

          channelLink: '/c/VAVAMedia',
          channelImg: 'https://yt3.ggpht.com/ytc/AKedOLSy22zfIa5zHtoUITOaoDej71oWSMUK77gazE8FMQ=s68-c-k-c0x00ffffff-no-rj'
        },
        {
          videoLink: '/watch?v=gmW2pe2NT4o',
          videoThumbnailImg: 'https://i.ytimg.com/vi/gmW2pe2NT4o/mqdefault.jpg',
          videoTitle: 'Inta Eyh - XZEEZ Remix (Nancy Ajram)',
          timeSatus: '2:58',

          channelName: 'VAVA Media',
          videoViews: '15M de vistas',
          releaseDate: 'hace 3 meses',

          channelLink: '/c/VAVAMedia',
          channelImg: 'https://yt3.ggpht.com/ytc/AKedOLSy22zfIa5zHtoUITOaoDej71oWSMUK77gazE8FMQ=s68-c-k-c0x00ffffff-no-rj'
        }
      ]
    }
  },
  methods: {
     cutString: function(str, charNumber) {
      if (str.length >= charNumber) {
        return str.slice(0, charNumber) + '...'
        } else {
          return str
        }
    }
  }
}
const app = Vue.createApp(rootComponent)
const vm = app.mount('#app')
