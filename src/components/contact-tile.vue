<template>
  <cd-tile>
    <div class="h5 text-start">Связаться с нами</div>
    <form>
      <div class="form-floating mb-3 sc">
        <input type="email" class="form-control" id="floatingInput" placeholder="Имя и отчество">
        <label for="floatingInput">Имя и отчество</label>
      </div>
      <div class="form-floating mb-3 sc">
        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
        <label for="floatingInput">Ваша электронная почта</label>
      </div>
    </form>
  </cd-tile>
</template>
<script>
import CDTile from './cd-tile'
export default {
  name: 'contact-tile',
  components: {
    'cd-tile': CDTile
  }
}
</script>