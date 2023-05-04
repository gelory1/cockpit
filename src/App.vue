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
    <MenuBar />
    <RouterView class="root-main"/>
  </div>
</template>

<style>
.root{
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
}
.root-main{
  flex: 1;
}
</style>
