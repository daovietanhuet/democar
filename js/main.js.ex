Vue.component("nested-menu",{props:["list","first","main","mobile","bread","nav","footer","collapse"],computed:{breadshift:function(){let e=this.bread.split(".");return e.shift(),e.join(".")}},template:'\n    <ul v-bind:class="{dropdownv2: !first, dropdown: first, \'main__menu\': main, \'\': mobile, \'nav__list\': nav, \'ft__menu\': footer}">\n      <li v-for="(value,index) in list" class="drop">\n        <a \n          v-bind:href="value.route"\n          v-bind:style="{color: (bread && parseInt(bread.split(\'.\')[0]) == index) ? \'#fcc236\' : \'\'}" \n        >{{value.name}}</a>\n        <nested-menu v-bind:bread="(bread ? breadshift : bread)" v-bind:list="value.subroute" v-bind:mobile="mobile" v-bind:first="main" v-if="value.subroute && !footer && !nav"></nested-menu>\n      </li>\n    </ul>\n  '}),Vue.component("product-list",{props:["list","large","full"],data:()=>({local:window.localStorage.getItem("local")?window.localStorage.getItem("local"):"vi"}),template:'\n    <div>\n      <div v-bind:class="{\'col-md-3 col-sm-12 col-xs-12\': large && !full, \'col-md-4 col-sm-12 col-xs-12\': !large && !full, \'col-md-12 col-sm-12 col-xs-12\': full}" v-for="(item, index) in list">\n        <div class="product-details">\n            <a v-bind:href="\'product-details.html?id=\' + item.id + \'&bread=\' + item.bread">\n                <img v-bind:src="item.imagesDirs + \'0.jpg\'" alt="project thumbnails">\n                <div class="product-name">{{item.name}}</div>\n                <div style="padding-top: .5rem; padding-bottom: .5rem">\n                  <div style="font-weight: bold" class="product-property">{{ilang(\'productcode\', local)}}</div>\n                  <div class="product-property" >{{item.code}}</div>\n                  <div style="font-weight: bold" class="product-property">{{ilang(\'origin\', local)}}</div>\n                  <div class="product-property">{{item.origin}}</div>\n                </div>\n            </a>\n        </div>\n      </div>\n    </div>\n  '}),Vue.component("news-list",{props:["list","sublist"],data:()=>({local:window.localStorage.getItem("local")?window.localStorage.getItem("local"):"vi"}),template:'\n  <div>\n    <div class="col-md-4 col-lg-4 col-sm-12 col-xs-12" v-for="item in list">\n      <div class="blog">\n          <div class="blog__thumb">\n              <a v-bind:href="\'news-details.html?id=\' + item.id + \'&bread=\' + item.bread">\n                  <img v-bind:src="item.thumbnail" alt="blog thumbnail">\n              </a>\n          </div>\n          <div class="blog__details">\n              <h2><a v-bind:href="\'news-details.html?id=\' + item.id + \'&bread=\' + item.bread">{{item.title}} </a></h2>\n              <div>{{item.createdAt}}</div>\n              <div class="post__content" style="padding-bottom: 0;">\n                  <p>{{item.shortContent}}</p>\n              </div>\n              <div class="blog__btn">\n                  <a v-bind:href="\'news-details.html?id=\' + item.id + \'&bread=\' + item.bread">{{ilang(\'readmore\', local)}}<i class="zmdi zmdi-long-arrow-right"></i></a>\n              </div>\n          </div>\n      </div>\n    </div>\n    <div class="col-md-4 col-lg-4 col-sm-12 col-xs-12" v-if="sublist">\n      <div class="pt--30">\n          <div v-for="item in sublist" class="subblog mb--10">\n              <img v-bind:src="item.thumbnail" alt="latest_news" style="width: 30%; float: left; margin-right: 1rem;"/>\n              <h5 style="text-align: justify;">{{item.title}}</h5>\n              <p style="text-align: justify;">{{item.shortContent}}</p>\n          </div>\n      </div>\n    </div>\n  </div>\n  '}),Vue.component("customfooter",{props:["menu"],data:()=>({local:window.localStorage.getItem("local")?window.localStorage.getItem("local"):"vi"}),template:'\n  <footer class="pt--100">\n  <div class="ptb--50" data--1f2d30__overlay="9.5" style="background: rgba(0, 0, 0, 0) url(images/bg/footer.jpg) no-repeat fixed center center / cover ;">\n      <div class="container">\n          <div class="row">\n              <div class="footer_wrap clearfix">\n                  \x3c!-- Start Single Footer --\x3e\n                  <div class="col-md-6 col-lg-6 col-sm-12 col-xs-12">\n                      <div class="footer">\n                          <div class="footer__widget">\n                              <h2 class="ft__title">{{ilang(\'block.contactinfor\', local)}}</h2>\n                          </div>\n                          <div class="ft__details">\n                              <p> <i class="zmdi zmdi-pin"></i> {{ilang(\'detailAddress\', local)}} <br> {{ilang(\'address\', local)}} </p>\n                              <p> <i class="fa fa-envelope"></i> <a href="#">{{ilang(\'email\', local)}}</a></p>\n                              <p> <i class="fa fa-globe" aria-hidden="true"></i> <a href="#">{{ilang(\'website\', local)}}</a></p>\n                              <p> <i class="fa fa-phone" aria-hidden="true"></i> <a href="#">{{ilang(\'hotline\', local)}}</a></p>\n                          </div>\n                      </div>\n                  </div>\n                  \x3c!-- End Single Footer --\x3e\n                  \x3c!-- Start Single Footer --\x3e\n                  <div class="col-md-3 col-lg-3 col-sm-12 col-xs-12 xmt-40">\n                      <div class="footer quick__link">\n                          <h2 class="ft__title">{{ilang(\'block.quicklink\', local)}}</h2>\n                          <div class="footer__link">\n                              <nested-menu v-bind:list="menu" v-bind:footer="true"></nested-menu>\n                          </div>\n                      </div>\n                  </div>\n                  \x3c!-- End Single Footer --\x3e\n                  \x3c!-- Start Single Footer --\x3e\n                  <div class="col-md-3 col-lg-3 col-sm-12 col-xs-12 xmt-40">\n                      <div class="footer quick__link">\n                          <h2 class="ft__title">{{ilang(\'block.products\', local)}}</h2>\n                          <div class="footer__link">\n                              <nested-menu v-bind:list="menu[1].subroute" v-bind:footer="true"></nested-menu>\n                          </div>\n                      </div>\n                  </div>\n                  \x3c!-- End Single Footer --\x3e\n              </div>\n          </div>\n      </div>\n  </div>\n</footer>\n  '}),Vue.component("breadcrumb",{props:["bread","menu"],computed:{listIndex:function(){return list=this.bread.split(".")}},methods:{getRoute(e){let t=`this.menu[${this.listIndex[0]}]`;for(let l=1;l<=e;l++)t+=`.subroute[${this.listIndex[l]}]`;return t},getBread(){let res="";for(let i=0;i<this.listIndex.length;i++)eval(this.getRoute(i))&&(res+=`<a class="breadcrumb-item" href="${eval(this.getRoute(i)+".route")}">${eval(this.getRoute(i)+".name")}</a>\n          `),i!==this.listIndex.length-1&&(res+='<span class="brd-separetor">-</span>');return res},getTitle(){return eval(this.getRoute(this.listIndex.length-1))?eval(this.getRoute(this.listIndex.length-1)+".name"):""}},template:'\n  <div data--black__overlay="6" v-bind:style="{background: \'rgba(0, 0, 0, 0) url(images/bg/bread/\' + bread + \'.jpg) no-repeat scroll center center / cover\'}">\n            <div class="bradcaump__wrap">\n                <div class="container">\n                    <div class="row">\n                        <div class="col-xs-12">\n                \n    <div class="bradcaump__inner text-center">\n      <h2 class="bradcaump-title" v-html="getTitle()"></h2>\n      <nav class="bradcaump-inner">\n        <a class="breadcrumb-item" href="index.html">{{ menu[0].name }}</a>\n        <span class="brd-separetor">-</span>\n        <span v-html="getBread()"></span>\n      </nav>\n    </div>\n    </div>\n</div>\n</div>\n</div>\n</div>\n  '});const appVue=new Vue({el:"#root",data:{menu:[{route:"index.html",dirs:["index"],name:"Trang chủ"},{name:"Các sản phẩm",dirs:["index"],subroute:[],route:"products.html?bread=1"},{name:"Giới thiệu",route:"about.html?bread=2",dirs:["index"],bread:"2"},{bread:"3",subroute:[],dirs:["index"],name:"Tin tức",route:"news.html?bread=3"},{route:"contact.html?bread=4",dirs:["index"],bread:"4",name:"Liên hệ"}],news:{allNews:[]},product:{allProducts:[]},local:window.localStorage.getItem("local")?window.localStorage.getItem("local"):"vi",scrollTrigger:100,showScrollTop:!1,scrollMenu:!1,pageId:null},methods:{ilang(e){return ilang(e,this.local)},setPageId(e){this.pageId=e},getQuery(){let e=location.search.substring(1);return e&&0!=e.length?JSON.parse('{"'+decodeURI(e).replace(/"/g,'\\"').replace(/&/g,'","').replace(/=/g,'":"')+'"}'):{}},scrollTop(){var e=window.document.scrollingElement.scrollTop;var t=setInterval(function(){e-=47,window.document.scrollingElement.scrollTop=e,e<=0&&clearInterval(t)},10)},scrollHandler(){let e=window.document.scrollingElement.scrollTop;this.showScrollTop=e>this.scrollTrigger,this.scrollMenu=e>this.scrollTrigger},getRef(bread){let breadPage={0:"index",1:"products",2:"about",3:"news",4:"contact"},query=bread?"this.menu["+bread.split(".").join("].subroute[")+"]":"this.menu",rootIndex=bread?bread.split(".")[0]:"0";return{root:breadPage[rootIndex],ref:eval(query),query:query}}},mounted(){if(window.localStorage.getItem("local")||window.localStorage.setItem("local","vi"),this.menu=main_menu,0==this.pageId||1==this.pageId||5==this.pageId){let e=[];products.map((t,l)=>{t.bread.startsWith(this.getQuery().bread||"1")&&(t.id=l,e.push(t))}),this.product.allProducts=e}let e=new Swiper(".swiper-thumb",{spaceBetween:10,slidesPerView:5,loadPrevNextAmount:5,preloadImages:!1,lazy:!0,loop:!0,freeMode:!0,watchSlidesVisibility:!0,loopedSlides:5,watchSlidesProgress:!0});new Swiper("#swiper-container",{direction:"horizontal",loop:!0,autoplay:{delay:3e3},loopedSlides:5,preloadImages:!1,loadPrevNextAmount:5,lazy:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},thumbs:{swiper:e}}),this.scrollHandler(),window.onscroll=(()=>{this.scrollHandler()})}});$(".mobile-menu nav").meanmenu({meanMenuContainer:".mobile-menu-area",meanScreenWidth:"991",meanRevealPosition:"right"});