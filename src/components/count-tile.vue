<template>
  <app-tile content-class="row-cols-2">
    <div class="row-col">
      <div class="h5">Возможности</div>
      <div class="module_item_content">
          <p>Ведение учёта численности в разрезе групп и классов</p>
          <p>Формирование сводных ежемесячных отчетов</p>
          <p>Автоматическое формирование отчета по выполнению муниципального задания</p>
          <p>Отправка отчетов в комитет по образованию, формирование сводныхотчетов сотрудниками комитета</p>
      </div>
    </div>
    <div class="row-col">
      <div class="h5">Рабочие места</div>
      <div class="module_item_content">
        <p>Руководитель</p>
        <p>Исполнитель</p>
        <p>Специалист</p>
      </div>
    </div>
  </app-tile>
</template>
<script>
import AppTile from './app-tile'
export default {
  name: 'count-tile',
  components: {
    'app-tile': AppTile
  }
}
</script>