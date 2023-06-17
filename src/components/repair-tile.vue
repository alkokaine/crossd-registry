<template>
  <app-tile content-class="row-cols-2">
    <div class="row-col">
      <div class="h5">Возможности</div>
      <div class="module_item_content">
        <p>Ведение реестра ОНИ</p>
        <p>Создание, регистрация заявок на ремонт и обследование ОНИ</p>
        <p>Просмотр и анализ данных по подведомственным учреждениям</p>
        <p>Контроль исполнения заявок</p>
      </div>
    </div>
    <div class="row-col">
      <div class="h5">Рабочие места</div>
      <div class="module_item_content">
          <p>Руководитель</p>
          <p>Исполнитель</p>
          <p>Специалист отдела капитального ремонта</p>
          <p>Бухгалтер централизованной бухгалтерии</p>
          <p>Инженер</p>
          <p>Секретарь</p>
      </div>
    </div>
  </app-tile>
</template>
<script>
import AppTile from './app-tile'
export default {
  name: 'repair-tile',
  components: {
    'app-tile': AppTile
  }
}
</script>