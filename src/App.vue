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
  <MenuBar />
  <RouterView />
</template>

<style>
</style>
