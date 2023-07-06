<template>
  <cd-tile>
    <span class="p-3">Цены</span>
    <div> <div class="corner-box-5">
    <div class="corner-icon-cont-5">
        <span class="corner-icon-5">i</span>
        <div class="corner-textbox-5-2">
            Цены рассчитываются индивидуально
        </div>
    </div>
    <div class="corner-textbox-5">
        Питание
    </div>
</div></div>
<div class="corner-box-5">
    <div class="corner-icon-cont-5">
        <span class="corner-icon-5">i</span>
        <div class="corner-textbox-5-2">
            Цены рассчитываются индивидуально
        </div>
    </div>
    <div class="corner-textbox-5">
        Недвижимость
    </div>
</div>
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
<style>
.corner-box-5 {
    display:inline-block;
    margin: 10px;
    width: 300px;
    border: 1px solid #ccc;
    border-radius: 3px;
    padding: 30px;
    overflow: hidden;
    position: relative;
    z-index: 2;
}
.corner-icon-cont-5 {
    color: #fff;
}
.corner-icon-cont-5:before {
    content: '';
    height: 50px;
    width: 50px;
    transition: 0.5s ease;
    border-radius: 0 0% 100% 0;
    background: #337AB7;
    top: 0;
    left: 0;
    position: absolute;
    z-index: 1;
}
.corner-icon-cont-5:hover {
    width: 100%;
    height: 100%;
}
.corner-icon-cont-5:hover:before {
    border-radius: 0;
    width: 150%;
    height: 150%;
    transition: 0.5s ease;
}
.corner-icon-cont-5:hover .corner-icon-5 {
    top: -50%;
    left: -50%;
    transition: 0.5s ease;
}
.corner-icon-cont-5:hover .corner-textbox-5-2 {
    transition: 0.5s ease;
    top: 50%;
    left: 0;
    z-index: 4;
}
.corner-icon-5 {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 3;
    transition: 0.8s ease;
    padding: 10px 16px;
    font-weight: bold;
}
.corner-textbox-5-2 {
    position: absolute;
    top: -200%;
    transform: translateY(-50%);
    transition: 0.4s ease;
    width: 100%;
    color: #fff;
    left: -200%;
    padding: 30px;
}
.corner-textbox-5 {
    text-align: center;
}
</style>