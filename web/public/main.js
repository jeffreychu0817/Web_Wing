

//var demo =new Vue({ el: "#components-demo" });

var app = new Vue({
    el: '#app',
    data: {
      product_1: 'Chinese',
      product_2: 'Korean',
      product_3: 'Japanese',
      image: './image/asian_icon.jpeg'
    },
    methods: {
      torolink(){
        window.location.assign("https://www.toronoodlebar.co.uk/")
      },
      perkorlink(){
        window.location.assign("https://www.bristol247.com/food-and-drink/restaurants/per-kor-res")
      },
      noalink(){
        window.location.assign("https://www.tripadvisor.co.uk/Restaurant_Review-g186220-d1841923-Reviews-NOA_Japanese_Restaurant-Bristol_England")
      },


    }

})


