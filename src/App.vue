<template>
  <div id="app" class="w-100 pt-5">
    <nav class="navbar fixed-top navbar-dark bg-primary py-0 menu justify-content-center">
      <router-link class="p-2 nav-item fw-bold text-light" v-for="route in routes" :key="route.to" :to="{ name: route.to }" :class="{ 'active': iscurrent(route) }">
        <div class="p-2">
          <span>{{ route.title }}</span>
        </div>
      </router-link>
    </nav>
    <div class="container p-3">
      <router-view></router-view>
    </div>
    <div class="fixed-bottom bg-primary">
      <ul class="rw">
        <li>
            <img class="footer_img" src="" />8-8152-55 03 61
        </li>
        <li>
            <img class="footer_img" src="" />www.cross-d.ru
        </li>
        <li>
            <img class="footer_img" src="" />info@cross-d.ru
        </li>
        <li>
            <img class="footer_img" src="" />г. Мурманск, ул. Челюскинцев, д.7
        </li>
      </ul>
    </div>
  </div>

</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      routes: [{
        to: 'home',
        title: 'О компании'
      },
      {
        to: 'products',
        title: 'Наши продукты',
      },{
        to: 'prices',
        title: 'Цены'
      }, {
        to: 'contact',
        title: 'Связаться с нами'
      }, {
        to: 'docs',
        title: 'Документы'
      }]
    }
  },
  computed: {
    iscurrent ({ $route }) {
      return ({ to }) => $route.name == to
    }
  }
}
</script>

<style>
@import url('bootstrap');

.sc{
  scale: 0.7;
}

.app-icon{
  filter:invert(48%) sepia(115%) saturate(2536%) hue-rotate(-157deg) brightness(118%) contrast(119%);
}
.nav{
  place-content: center;
}

.page__custom-settings.selected{
    --menuLinkColorUnactive: #241c69;
}



  a {
    text-decoration: none;
    font-weight: normal;;
  }
#app {
  font-family: sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.menu-item.selected {
  background: #2478d8;
  color: white;
  /* box-shadow: 0 0 10px 5px gray; */
  border-bottom-left-radius: 63px;
}

p {
  margin: 0;
}

p + p {
  margin-top: 1ch;
}

a {
  color: #ecf0ff;
}

.bg-secondary {
      min-height: 228px;
       background: #2c2c2c !important;
}

.bg-secondary:hover{
background: #2478d8 !important;
}

/* .border{
  display: contents;
} */

.h3, .h5 {
  font-size: 1.25rem;
    font-weight: bold;
  

}

.text-start{
  text-align: center !important;
}

.text-underlined{
  position: relative;
  overflow: hidden;

  will-change: color;
  transition: color .25s ease-out;  
}

.text-underlined::before, 
.text-underlined::after{
  content: "";
  width: 0;
  height: 3px;
  background-color: var(--textUnderlinedLineColor, currentColor);

  will-change: width;
  transition: width .1s ease-out;

  position: absolute;
  bottom: 0;
}

.text-underlined::before{
  left: 50%;
  transform: translateX(-50%); 
}

.text-underlined::after{
  right: 50%;
  transform: translateX(50%); 
}

.text-underlined:hover::before, 
.text-underlined:hover::after{
  width: 100%;
  transition-duration: .2s;
}

.r-link{
  display: var(--rLinkDisplay, inline-flex) !important;
}

.r-link[href]{
  color: var(--rLinkColor) !important;
  text-decoration: var(--rLinkTextDecoration, none) !important;
}

.r-list{
  padding-left: var(--rListPaddingLeft, 0) !important;
  margin-top: var(--rListMarginTop, 0) !important;
  margin-bottom: var(--rListMarginBottom, 0) !important;
  list-style: var(--rListListStyle, none) !important;
}


/*
=====
CORE STYLES
=====
*/

/* .menu{
  --rLinkColor: var(--menuLinkColor, currentColor);
} */

.menu__link{
  display: var(--menuLinkDisplay, block);
}

/* 
focus state 
*/

.menu__link:focus{
  outline: var(--menuLinkOutlineWidth, 2px) solid var(--menuLinkOutlineColor, currentColor);
  outline-offset: var(--menuLinkOutlineOffset);
}

/* 
fading siblings
*/

.menu:hover .menu__link:not(:hover){
  --rLinkColor: var(--menuLinkColorUnactive, rgba(22, 22, 22, .35));
}

/*
=====
PRESENTATION STYLES
=====
*/

/* .menu{
  background-color: var(--menuBackgroundColor, #f0f0f0);
  box-shadow: var(--menuBoxShadow, 0 1px 3px 0 rgba(0, 0, 0, .12), 0 1px 2px 0 rgba(0, 0, 0, .24));
} */

.menu__list{
  display: flex;  
}

.menu__link{
  padding: var(--menuLinkPadding, 1.5rem 2.5rem);
  font-weight: 700;
  text-transform: uppercase;
}

.page__custom-settings{
  --menuBackgroundColor: #2478d8;
  --menuLinkColor: #fff;
  --menuLinkColorUnactive: #241c69;
  --menuLinkOutlineOffset: -.5rem; 
}

.footer_content {
    height: 100%;
    display: flex;
    flex-direction: row;
}

.footer{
background:#2478d8;
padding:30px 0px;
font-family: 'Play', sans-serif;
text-align:center;
}

.rw{
list-style: none;
    color: #fff;
    align-self: center;
     justify-self: center; 
}

</style>

<style scoped>

</style>