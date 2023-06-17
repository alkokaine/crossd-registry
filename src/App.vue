<template>
  <div id="app" class="container w-100">
    <div class="nav">
      <router-link v-for="route in routes" :key="route.to" :to="{ name: route.to }" class="menu-item" :class="{ 'selected': iscurrent(route) }">
        <div class="p-2">
          <span>{{ route.title }}</span>
        </div>
      </router-link>
    </div>
    <div class="mx-3">
      <router-view></router-view>
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
        title: 'О нас'
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
  a {
    text-decoration: none;
  }
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.menu-item {
  font-weight: bold;
}
.menu-item.selected {
  background: gray;
  color: white;
  box-shadow: 0 0 10px 5px gray;
}

.scale-enter-active,
.scale-leave-active {
  transition: all 0.5s ease;
}

.scale-enter-from,
.scale-leave-to {
  opacity: 0;
  transform: scale(0.9);
}

</style>
<style>
  
</style>
