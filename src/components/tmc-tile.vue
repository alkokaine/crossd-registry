<template>
  <app-tile content-class="row-cols-2">
    <div class="row-col">
      <div class="h5">Возможности</div>
      <div class="module_item_content">
        <p>Ведение документов прихода и расхода материальных ценностей</p>
        <p>Выгрузка данных в "1С: Бухгалтерия"</p>
        <p>Проведение инвентаризаций</p>
        <p>Просмотр и анализ данных по подведомственным учреждениям</p>
      </div>
    </div>
    <div class="row-col">
      <div class="h5">Рабочие места</div>
      <div class="module_item_content">
        <p>Руководитель</p>
        <p>Исполнитель</p>
        <p>Бухгалтер централизованной бухгалтерии</p>
      </div>
    </div>
  </app-tile>
</template>
<script>
import AppTile from './app-tile'
export default {
  name: 'tmc-tile',
  components: {
    'app-tile': AppTile
  }
}
</script>