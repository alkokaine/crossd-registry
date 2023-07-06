<template>
  <cd-tile>
    <div>Документы</div>
    <div class="corner-box-6"><a :href="s1.default" target="_blank" download="download">Документ 1</a>   <div class="corner-ribbon-6 corner-ribbon-6-top-left">
        <span>Информация</span>
    </div>
    <div class="corner-ribbon-6 corner-ribbon-6-top-right">
        <span>Информация</span>
    </div> 
</div>

    <div class="corner-box-6"><a :href="s2.default" target="_blank" download="download">Документ 2</a> <div class="corner-ribbon-6 corner-ribbon-6-top-left">
        <span>Информация</span>
    </div>
    <div class="corner-ribbon-6 corner-ribbon-6-top-right">
        <span>Информация</span>
    </div> </div>
  </cd-tile>
</template>
<script>
  import CDTile from './cd-tile'
  export default {
    name: 'docs-tile',
    components: {
      'cd-tile': CDTile
    },
    data () {
      return {
        // s1,
        // s2
        
        s1: require('../assets/s1.pdf'),
        s2: require('../assets/s2.pdf')
      }
    }
  }
</script>

<style>


.corner-box-6 {
    position: relative;
    display: inline-block;
    width: 300px;
    padding: 60px;
    margin: 10px;
    min-height: 160px;
    border: 2px solid #BFE2FF;
    text-align: center;
}
.corner-ribbon-6 {
    width: 150px;
    height: 150px;
    overflow: hidden;
    position: absolute;
}
.corner-ribbon-6::before, .corner-ribbon-6::after {
    position: absolute;
    z-index: -1;
    content: '';
    display: block;
    border: 5px solid #2980b9;
}
.corner-ribbon-6 span {
    position: absolute;
    display: block;
    width: 225px;
    padding: 15px 0;
    background-color: #337AB7;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
    color: #fff;
    font: 700 18px/1 'Lato', sans-serif;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
    text-transform: uppercase;
    text-align: center;
}
.corner-ribbon-6-top-left {
    top: -10px;
    left: -10px;
}
.corner-ribbon-6-top-left::before, .corner-ribbon-6-top-left::after {
    border-top-color: transparent;
    border-left-color: transparent;
}
.corner-ribbon-6-top-left::before {
    top: 0;
    right: 0;
}
.corner-ribbon-6-top-left::after {
    left: 0;
    bottom: 0;
}
.corner-ribbon-6-top-left span {
    right: -25px;
    top: 30px;
    transform: rotate(-45deg);
}
.corner-ribbon-6-top-right {
    top: -10px;
    right: -10px;
}
.corner-ribbon-6-top-right::before, .corner-ribbon-6-top-right::after {
    border-top-color: transparent;
    border-right-color: transparent;
}
.corner-ribbon-6-top-right::before {
    top: 0;
    left: 0;
}
.corner-ribbon-6-top-right::after {
    right: 0;
    bottom: 0;
}
.corner-ribbon-6-top-right span {
    left: -25px;
    top: 30px;
    transform: rotate(45deg);
}


.corner-box-6>a{
color: darkslateblue !important;

}


</style>