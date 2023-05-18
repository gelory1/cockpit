<template>
  <div class="region">
    <div id="region" style="width: 100%; height: 100%"></div>
  </div>
</template>

<script setup>
import { getCurrentInstance, onMounted } from 'vue';
import geoJson from '../../assets/data/region.json'
const { appContext } = getCurrentInstance()
const echarts = appContext.app.config.globalProperties.$echarts;

onMounted(() => {
  let region = echarts.init(document.getElementById('region'));
  echarts.registerMap('CN', geoJson);
  region.setOption({
    toolbox: {
      show: true,
      orient: 'vertical',
      left: 'right',
      top: 'center',
      feature: {
        dataView: { readOnly: false },
        restore: {},
        saveAsImage: {}
      }
    },
    series: [
      {
        name: '香港18区人口密度',
        type: 'map',
        map: 'CN',
        label: {
          show: true
        },
        itemStyle: {
          areaColor: '#133752',
          borderColor: '#3c90c9',
          borderWidth: 1,
          shadowBlur: 4,
          shadowOffsetY: 0,
          shadowOffsetX: 0,
          shadowColor: `rgb(56, 125, 194)`
        }
      }
    ]
  })
})

</script>

<style>
.region{
  width: 100%;height: 100%;
}
</style>
