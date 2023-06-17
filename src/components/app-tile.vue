<template>
  <cd-tile>
    <div class="app-info">
      <div class="p-2 m-2">
        <div class="d-flex flex-nowrap flex-row">
          <div class="app-icon p-3">
            <img :src="$route.meta.icon"/>
          </div>
          <div class="m-2 text-start">
            <div class="app-name h3">{{ $route.meta.name }}</div>
            <div class="app-description h4">{{ $route.meta.description }}</div>
          </div>
        </div>
      </div>

      <div class="row w-100 text-start" :class="contentClass">
        <slot></slot>
      </div>
    </div>
  </cd-tile>
</template>

<script>
import CDTile from './cd-tile.vue'
export default {
  components: { 
    'cd-tile': CDTile
   },
  props: {
    contentClass: { type: String }
  }
}
</script>

<style>

</style>