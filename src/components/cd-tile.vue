<template>
  <div class="cd-tile">
    <div class="cd-tile--content container my-3">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'cd-tile'
  }
</script>
<style>
  .cd-tile {
    min-height: 70vmin;
    max-height: 80vmin;
    display: grid;
    align-content: center !important;
  }
</style>