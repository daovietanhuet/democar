let menu = [
  {name: "Trang chủ", route: "index.html"},
  {
      name: "Các sản phẩm", 
      route: "products.html",
      subroute: [ 
          {   
              name: "Máy xúc", 
              route: "projects.html",
              subroute: [ 
                  {   
                      name: "Máy xúc", 
                      route: "projects.html",
                      subroute: [ 
                          {   
                              name: "Máy xúc", 
                              route: "projects.html"
                          }
                      ]
                  }
              ]
          }, 
          {
              name: "Máy bơm", 
              route: "projects.html"
          },
          {
              name: "Máy cày", 
              route: "projects.html"
          }
      ]
  },
  { name: "Giới thiệu", route: "about.html" },
  { name: "Tin tức", route: "news.html" },
  { name: "Liên hệ", route: "contact.html" }
]

Vue.component('nested-menu', {
  props: ["list", "first", "main", "mobile", "page", "nav", "footer", "collapse"],
  template: `
    <ul v-bind:class="{dropdownv2: !first, dropdown: first, 'main__menu': main, '': mobile, 'nav__list': nav, 'ft__menu': footer}">
      <li v-for="(value,index) in list" class="drop">
        <a 
          v-bind:href="value.route"
          v-bind:style="{color: (main && value.route == page) ? '#fcc236' : ''}" 
        >{{value.name}}</a>
        <nested-menu v-bind:list="value.subroute" v-bind:mobile="mobile" v-bind:first="main" v-if="value.subroute && !footer && !nav"></nested-menu>
      </li>
    </ul>
  `
})

Vue.component('product-list', {
  props: ["list", "large", "full"],
  data() {
    return {
      local: window.localStorage.getItem('local') ? window.localStorage.getItem('local') : 'vi'
    }
  },
  template: `
    <div>
      <div v-bind:class="{'col-md-3 col-sm-12 col-xs-12': large && !full, 'col-md-4 col-sm-12 col-xs-12': !large && !full, 'col-md-12 col-sm-12 col-xs-12': full}" v-for="item in list">
        <div class="product-details">
            <a v-bind:href="'product-details.html?id=' + item.id">
                <img v-bind:src="item.image" alt="project images">
                <div class="product-name">{{item.name}}</div>
                <div style="padding-top: .5rem; padding-bottom: .5rem">
                  <div style="font-weight: bold" class="product-property">{{ilang('productcode', local)}}</div>
                  <div class="product-property" >{{item.code}}</div>
                  <div style="font-weight: bold" class="product-property">{{ilang('origin', local)}}</div>
                  <div class="product-property">{{item.origin}}</div>
                </div>
            </a>
        </div>
      </div>
    </div>
  `
})

Vue.component('news-list', {
  props: ["list", "sublist"],
  data() {
    return {
      local: window.localStorage.getItem('local') ? window.localStorage.getItem('local') : 'vi'
    }
  },
  template: `
  <div>
    <div class="col-md-4 col-lg-4 col-sm-12 col-xs-12" v-for="item in list">
      <div class="blog">
          <div class="blog__thumb">
              <a v-bind:href="'news-details.html?id=' + item.id">
                  <img v-bind:src="item.image" alt="blog image">
              </a>
          </div>
          <div class="blog__details">
              <h2><a v-bind:href="'news-details.html?id=' + item.id">{{item.title}} </a></h2>
              <div>{{item.createdAt}}</div>
              <div class="post__content" style="padding-bottom: 0;">
                  <p>{{item.shortContent}}</p>
              </div>
              <div class="blog__btn">
                  <a v-bind:href="'news-details.html?id=' + item.id">{{ilang('readmore', local)}}<i class="zmdi zmdi-long-arrow-right"></i></a>
              </div>
          </div>
      </div>
    </div>
    <div class="col-md-4 col-lg-4 col-sm-12 col-xs-12" v-if="sublist">
      <div class="pt--30">
          <div v-for="item in sublist" class="subblog mb--10">
              <img v-bind:src="item.image" alt="latest_news" style="width: 30%; float: left; margin-right: 1rem;"/>
              <h5 style="text-align: justify;">{{item.title}}</h5>
              <p style="text-align: justify;">{{item.shortContent}}</p>
          </div>
      </div>
    </div>
  </div>
  `
})

Vue.component('customfooter', {
  data() {
    return {
      local: window.localStorage.getItem('local') ? window.localStorage.getItem('local') : 'vi'
    }
  },
  template: `
  <footer class="pt--100">
  <div class="ptb--50" data--1f2d30__overlay="9.5" style="background: rgba(0, 0, 0, 0) url(images/bg/2.jpg) no-repeat fixed center center / cover ;">
      <div class="container">
          <div class="row">
              <div class="footer_wrap clearfix">
                  <!-- Start Single Footer -->
                  <div class="col-md-6 col-lg-6 col-sm-12 col-xs-12">
                      <div class="footer">
                          <div class="footer__widget">
                              <h2 class="ft__title">{{ilang('block.contactinfor', local)}}</h2>
                          </div>
                          <div class="ft__details">
                              <p> <i class="zmdi zmdi-pin"></i> {{ilang('detailAddress', local)}} <br> {{ilang('address', local)}} </p>
                              <p> <i class="fa fa-envelope"></i> <a href="#">{{ilang('email', local)}}</a></p>
                              <p> <i class="fa fa-globe" aria-hidden="true"></i> <a href="#">{{ilang('website', local)}}</a></p>
                              <p> <i class="fa fa-phone" aria-hidden="true"></i> <a href="#">{{ilang('hotline', local)}}</a></p>
                          </div>
                      </div>
                  </div>
                  <!-- End Single Footer -->
                  <!-- Start Single Footer -->
                  <div class="col-md-3 col-lg-3 col-sm-12 col-xs-12 xmt-40">
                      <div class="footer quick__link">
                          <h2 class="ft__title">{{ilang('block.quicklink', local)}}</h2>
                          <div class="footer__link">
                              <nested-menu v-bind:list="menu" v-bind:footer="true"></nested-menu>
                          </div>
                      </div>
                  </div>
                  <!-- End Single Footer -->
                  <!-- Start Single Footer -->
                  <div class="col-md-3 col-lg-3 col-sm-12 col-xs-12 xmt-40">
                      <div class="footer quick__link">
                          <h2 class="ft__title">{{ilang('block.products', local)}}</h2>
                          <div class="footer__link">
                              <nested-menu v-bind:list="menu[1].subroute" v-bind:footer="true"></nested-menu>
                          </div>
                      </div>
                  </div>
                  <!-- End Single Footer -->
              </div>
          </div>
      </div>
  </div>
</footer>
  `
})

Vue.component('breadcrumb', {
  props: ["bread"],
  computed: {
    listIndex: function () {
      return list = this.bread.split('.');
    }
  },
  methods: {
    getRoute(index) {
      let query = `menu[${this.listIndex[0]}]`;
      for(let i = 1; i <= index; i ++) {
        query += `.subroute[${this.listIndex[i]}]`
      }
      return query
    }
  },
  template: `
  <div data--black__overlay="6" style="background: rgba(0, 0, 0, 0) url(images/bg/5.jpg) no-repeat scroll center center / cover ;">
            <div class="bradcaump__wrap">
                <div class="container">
                    <div class="row">
                        <div class="col-xs-12">
                
    <div class="bradcaump__inner text-center">
      <h2 class="bradcaump-title">{{ eval(getRoute(listIndex.length - 1) + '.name') }}</h2>
      <nav class="bradcaump-inner">
        <a class="breadcrumb-item" href="index.html">{{ menu[0].name }}</a>
        <span class="brd-separetor">-</span>
        <a class="breadcrumb-item" v-for="(route, index) in listIndex" v-bind:href="eval(getRoute(index) + '.route')" v-if="index != listIndex.length - 1">
          {{eval(getRoute(index) + '.name')}}
          <span class="brd-separetor">-</span>
        </a>
        <span class="breadcrumb-item active">{{ eval(getRoute(listIndex.length - 1) + '.name') }}</span>
      </nav>
    </div>
    </div>
</div>
</div>
</div>
</div>
  `
})

const appVue = new Vue({
  el: '#root',
  data: {
    news: {
      allNews: [
        {
          id: "",
          image: "images/blog/blog-img/3.jpg",
          title: "Lorem ipsum dolor sit amet, cotur adipiscing elit, sed do eiusmod",
          shortContent: "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment",
          createdAt: "19 April"
        },
        {
          id: "",
          image: "images/blog/blog-img/3.jpg",
          title: "Lorem ipsum dolor sit amet, cotur adipiscing elit, sed do eiusmod",
          shortContent: "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment",
          createdAt: "19 April"
        }
      ],
      currentNews: {
        id: "",
        image: "images/blog/big-images/4.jpg",
        title: "Lorem ipsum dolor sit amet, cotur adipiscing elit, sed do eiusmod",
        fullContent: "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment",
        createdAt: "19 April"
      }
    },
    product: {
      allProducts: [
        {
          id: "HGnMeXRH8pvVEdUAPH85",
          image: "images/lst-project-3/2.jpg",
          name: "Máy xúc doosan",
          code: "12345",
          origin: "Hàn Quốc"
        },
        {
          id: "HGnMeXRH8pvVEdUAPH85",
          image: "images/lst-project-3/3.jpg",
          name: "Máy xúc doosan",
          code: "12345",
          origin: "Hàn Quốc"
        },
      ],
      currentProduct: {
        
      }
    },
    local: window.localStorage.getItem('local') ? window.localStorage.getItem('local') : 'vi',
    currentItemsList: [],
    scrollTrigger: 100,
    showScrollTop: false,
    scrollMenu: false,
    pageId: null
  },
  methods: {
    ilang(reference) {
      return ilang(reference, this.local)
    },
    setPageId(id) {
      this.pageId = id
    },
    getQuery() {
      let search = location.search.substring(1);
      return JSON.parse('{"' + decodeURI(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') + '"}')
    },
    scrollTop() {
        var dis = window.document.scrollingElement.scrollTop;
        function frame() {
            dis -= 47  // update parameters
            window.document.scrollingElement.scrollTop = dis
            if (dis <= 0)
              clearInterval(id)
        }
        var id = setInterval(frame, 10)
    },
    scrollHandler() {
      let scrollTop = window.document.scrollingElement.scrollTop;
      this.showScrollTop = scrollTop > this.scrollTrigger;
      this.scrollMenu = scrollTop > this.scrollTrigger;
    },
    getItemsList(dirid) {
      firebase.firestore().collection("directory").doc(dirid).get().then((doc) => {
        if (doc.exists) {
          this.currentItemsList = doc.data().list
        }
      })
    },
    getAllProductInDirectory(dirid, firstEleId) {
      firebase.firestore().collection("products")
      .where("bread", "array-contains", dirid ? dirid : menu[1].id)
      .startAt(firstEleId ? firstEleId : this.currentItemsList[0])
      .limit(20)
      .get()
      .then(querySnapshot => {
        let list = [];
        querySnapshot.forEach(documentSnapshot => {
            var itemVal = documentSnapshot.val();
            list.push(itemVal);
        });
        this.product.allProducts = list;
      })
    },
    getAllNewsInDirectory(dirid, firstEleId) {
      firebase.firestore().collection("news")
      .where("bread", "array-contains", dirid ? dirid : menu[3].id)
      .startAt(firstEleId ? firstEleId : this.currentItemsList[0])
      .limit(20)
      .get()
      .then(querySnapshot => {
        let list = [];
        querySnapshot.forEach(documentSnapshot => {
            var itemVal = documentSnapshot.val();
            list.push(itemVal);
        });
        this.news.allNews = list;
      })
    },
    getProductById(id) {
      console.log("get " + id)
      firebase.auth().signInAnonymously();
      firebase.firestore().collection("products").doc(id).get().then((doc) => {
        if (doc.exists) {
          this.product.currentProduct = doc.data()
        }
      })
    },
    getNewsById(id) {
      firebase.auth().signInAnonymously();
      firebase.firestore().collection("news").doc(id).get().then((doc) => {
        if (doc.exists) {
          this.news.currentNews = doc.data()
        }
      })
    },
    getAbout() {
      firebase.auth().signInAnonymously();
      firebase.firestore().collection("website").doc('about').get().then((doc) => {
        if (doc.exists) {
          this.about = doc.data()
        }
      })
    },
    getProductMenu() {
      firebase.auth().signInAnonymously();
      firebase.firestore().collection("website").doc('productMenu').get().then((doc) => {
        if (doc.exists) {
          menu[1] = doc.data()
        }
      })
    },
    getNewsMenu() {
      firebase.auth().signInAnonymously();
      firebase.firestore().collection("website").doc('newsMenu').get().then((doc) => {
        if (doc.exists) {
          menu[3] = doc.data()
        }
      })
    }
  },
  mounted() {
    window.localStorage.getItem('local') ? {} : window.localStorage.setItem('local', 'vi')

    new Swiper('.swiper-container', {
      direction: 'horizontal',
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    })

    this.scrollHandler();
    window.onscroll = () => {
      this.scrollHandler();
    }

    var firebaseConfig = {
      apiKey: "AIzaSyCup2KVXsvfyVRLIQohAWPlbps5fYPApGI",
      authDomain: "auto-9443f.firebaseapp.com",
      databaseURL: "https://auto-9443f.firebaseio.com",
      projectId: "auto-9443f",
      storageBucket: "auto-9443f.appspot.com",
      messagingSenderId: "326315876903",
      appId: "1:326315876903:web:7818b722fb82eca2dd6402",
      measurementId: "G-85SV3NHNH7"
    };
    firebase.initializeApp(firebaseConfig);

    switch (this.pageId) {
      // case 0: this.getAllProductInDirectory(); getAllNewsInDirectory(); break;
      // case 1: this.getItemsList(this.getQuery().id); getAllProductInDirectory(this.getQuery().id); break
      case 2: this.getAbout(); break;
      case 3: this.getItemsList(this.getQuery().id); getAllNewsInDirectory(this.getQuery().id); break;
      case 4: break;
      case 5: this.getProductById(this.getQuery().id); break;
      case 6: this.getNewsById(this.getQuery().id); break;
    }
  }
})
    
$('.mobile-menu nav').meanmenu({
    meanMenuContainer: '.mobile-menu-area',
    meanScreenWidth: "991",
    meanRevealPosition: "right",
});