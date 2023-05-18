<script setup lang="ts">
import MenuBar from './components/menuBar.vue';
const setHtmlFontSize = () => {
  const htmlDom = document.getElementsByTagName('html')[0];
  let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
  if (htmlWidth >= 750) {
    htmlWidth = 750;
  }
  if (htmlWidth <= 320) {
    htmlWidth = 320;
  }
  htmlDom.style.fontSize = `${htmlWidth / 10}px`;
};
window.onresize = setHtmlFontSize;
setHtmlFontSize();
</script>

<template>
  <div class="root">
    <div class="root-header flex">
      <div class="root-header-title">天集舱</div>
      <div class="root-header-earth">
        <span class="root-header-earth-con"></span>
      </div>
      <div class="root-header-logo">TIANJI<br/>CANG</div>
    </div>
    <RouterView class="root-main"/>
  </div>
</template>

<style lang="less">
.root{
  width: 100vw;
  height: 100vh;
  background: url("./assets/image/bg.png");
  background-size: cover;
  padding: 1rem .3rem .4rem;
  box-sizing: border-box;
  &-header{
    position: absolute;
    top: .1rem;
    transform: translateX(-50%);
    left: 50%;
    &-title{
      font-size: .3rem;
      font-weight: 600;
    }
    &-earth{
      width: .38rem;
      height: .38rem;
      display: inline-block;
      margin-left: .1rem;
      position: relative;
      text-align: center;
      background: url('./assets/image/circle.png');
      background-size: cover;
      border-radius: 50%;
      -webkit-animation: earthMove 5s linear infinite;
      animation: earthMove 5s linear infinite;
      @keyframes earthMove{
      100% {
        -webkit-transform: rotate(1turn);
        transform: rotate(1turn);
      }
    }
      &-con{
        width: .3rem;
        height: .3rem;
        position: absolute;
        left: 50%;
        top: 50%;
        -webkit-transform: translate(-50%,-50%);
        transform: translate(-50%,-50%);
        border-radius: 50%;
        display: inline-block;
        background: url('./assets/image/earth.png') 50% no-repeat;
        background-size: cover;
      }
    }
    &-logo{
      font-size: .1rem;
      font-weight: 100;
      color: #00aff8;
      margin-left: .1rem;
      display: inline-block;
      line-height: .15rem;
    }
  }
}
.root-main{
  width: 100%;
  height: 100%;
}
</style>
