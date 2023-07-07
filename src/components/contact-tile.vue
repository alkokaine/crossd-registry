<template>
  <cd-tile>
    <div class="h5 text-start">Связаться с нами</div>
    <form class="w-50 mx-auto" action="mailto:info@cross-d.ru" method="post" enctype="text/plain">
      <div class="form-floating mb-3">
        <input type="text" class="form-control" name="subject" id="subject" placeholder="Имя и отчество">
        <label for="subject">Имя и отчество</label>
      </div>
      <div class="form-floating mb-3">
        <input type="email" class="form-control" name="email" id="email" placeholder="name@example.com">
        <label for="email">Ваша электронная почта</label>
      </div>
      <div class="form-floating mb-3">
        <textarea class="form-control" name="body" id="body"></textarea>
        <label for="body">Ваш вопрос</label>
      </div>
      <input class="btn btn-primary" type="submit" value="Отправить"/>
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