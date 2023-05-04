<template>
  <div class="Region">
    <div id="#region"></div>
  </div>
</template>

<script setup>
import { getCurrentInstance } from 'vue'
const { appContext } = getCurrentInstance()
const $echarts = appContext.app.config.globalProperties.$echarts;
</script>

<style>
  .Region{}
</style>
