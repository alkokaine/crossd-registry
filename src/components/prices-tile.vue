<template>
  <cd-tile>
    <span class="p-3">Цены</span>
  </cd-tile>
</template>
<script>
import CDTile from './cd-tile'
export default {
  name: 'prices-tile',
  components: {
    'cd-tile': CDTile
  }
}
</script>