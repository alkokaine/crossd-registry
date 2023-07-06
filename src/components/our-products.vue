<template>
  <cd-tile>
    <div class="nav justify-content-around" :class="{ 'root-apps-list' : isroot }">
      <router-link v-for="route in apps" :key="route.to" :to="{ name: route.to }" :class="{ 'root-app': isroot }">
        <div class="app-title menu-item" :class="{ 'selected': iscurrent(route) }" >
          <div :class="{ 'bg-secondary text-white': isroot}">
            <div class="product-image" :class="{ 'hidden': !isroot, 'py-4': isroot }"><img :src="route.img"/></div>
            <div class="p-2">{{ route.title }}</div>
          </div>
        </div>
      </router-link>
    </div>
    <div class="product-content">
      <router-view class="w-auto mx-auto"></router-view>
    </div>
  </cd-tile>
</template>
<script>
import CDTile from './cd-tile'

export default {
  name: 'our-products',
  components: {
    'cd-tile': CDTile
  },
  data () {
    return {
      apps: [{
        title: 'Учёт численности',
        to: 'count',
        img: require('../assets/product-numb-big.svg')
      },{
        title: 'Учёт содержания недвижимости',
        to: 'repair',
        img: require('../assets/product-build-big.svg')
      }, {
        title: 'Учёт ТМЦ',
        to: 'tmc',
        img: require('../assets/product-tmc-big.svg')
      }]
    }
  },
  computed: {
    isroot ({ $route }) {
      return $route.name == 'products'
    },
    iscurrent ({ $route }) {
      return ({ to }) => $route.name == to
    }
  }
}
</script>
<style>
  .root-app {
    width: 300px;
  }
  .app-title {
    height: 100%;
  }
  .hidden {
    display: none;
  }
  .root-apps-list {
  }
</style>