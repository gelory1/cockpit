<template>
  <div class="region">
    <div id="region" style="width: 100%; height: 100%"></div>
  </div>
</template>

<script setup>
import { getCurrentInstance, onMounted } from 'vue';
import geoJson from '../../assets/data/region.json'
import wqJson from '../../assets/data/wanqu.json'
const { appContext } = getCurrentInstance()
const echarts = appContext.app.config.globalProperties.$echarts;
const points = [
  {
    name: '长三角经济圈',
    value: [120.47,31.23, 55]
  },
  {
    name: '中部地区',
    value: [112.982279,28.19409, 55]
  },
  {
    name: '粤港澳大湾区',
    value: [114.173355,22.320048, 5]
  }
];

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
    geo: {
      roam: false,
      map: "CN",
      label: {
        normal: {
          show: false
        },
        emphasis: {
          show: false
        }
      },
      zoom: 1.2,
      itemStyle: {
        normal: {
          label: {
            show: false
          },
          areaColor: "#00172B",
          borderWidth: 1,
          shadowColor: "rgba(0,145,207, .5)",
          shadowBlur: 1,
          borderColor: "#0095d4"
        },
        emphasis: {
          areaColor: "#00172B",
          label: {
            show: false
          }
        }
      },
    },
    series: [
      {
        type: "map",
        roam: !1,
        geoIndex: 1,
        map: "CN",
        label: {
          normal: {
            show: !1
          },
          emphasis: {
            show: !1
          }
        },
        zoom: 1.2,
        tooltip: {
          show: !1
        },
        itemStyle: {
          normal: {
            label: {
              show: !1
            },
            areaColor: "#00172B",
            borderWidth: 1,
            borderColor: "#044065"
          },
          emphasis: {
            areaColor: "#00172B",
            label: {
              show: !1
            }
          }
        },
      }, {
        type: "effectScatter",
        name: "",
        coordinateSystem: "geo",
        data: points,
        symbolSize: 5,
        showEffectOn: "render",
        rippleEffect: {
          brushType: "stroke",
          scale: 6
        },
        hoverAnimation: !1,
        label: {
          normal: {
            formatter: "{b}",
            position: "right",
            show: !0
          },
          emphasis: {
            color: "#ffbf19"
          }
        },
        itemStyle: {
          normal: {
            color: "#7ec0fa",
            shadowBlur: 10,
            shadowColor: "#7ec0fa"
          },
          emphasis: {
            color: "#ffbf19",
            shadowBlur: 10,
            borderColor: "#ffbf19",
            shadowColor: "#ffbf19"
          }
        },
        zlevel: 3
      }, {
        name: "\u4e0a\u6d77",
        type: "lines",
        coordinateSystem: "geo",
        zlevel: 2,
        large: !1,
        effect: {
          show: !0,
          period: 4,
          trailLength: .1,
          color: "#fff",
          symbolSize: 3
        },
        tooltip: {
          show: !1
        },
        lineStyle: {
          normal: {
            color: "#009de2",
            width: 1,
            curveness: .15
          }
        },
        data: [
          {
            "coords": [
              [114.173355,22.320048],
              [120.47,31.23]
            ]
          },
          {
            "coords": [
              [114.173355,22.320048],
              [112.982279,28.19409]
            ]
          }
        ]
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
