<template>
  <div class="menuBar flex">
    <div class="menuBar-logo">TIANJI</div>
    <div class="menuBar-btns flex">
      <RouterLink :to="`/${item.code}`" active-class="active" v-for="item in menu" :key="item.code"><div class="menuBar-btns-item">
        {{item.name}}
      </div></RouterLink>
    </div>
  </div>
</template>

<script setup>
  import { ref, reactive } from 'vue';
  import { RouterLink } from 'vue-router'
  const menu = reactive([
    {
      name: '总览',
      code: ''
    },
    {
      name: '大湾区区位概览',
      code: 'region'
    },
    {
      name: '宣传片',
      code: 'advertising'
    },
    {
      name: '东莞黄江',
      code: 'hj'
    },
    {
      name: '中山小榄',
      code: 'zs'
    },
    {
      name: '深圳嵘兴',
      code: 'sz'
    },
    {
      name: '南京江来',
      code: 'nj'
    },
    {
      name: '湖南衡阳',
      code: 'hy'
    }
  ])
</script>

<style lang="less">
  .menuBar{
    padding: 0.1rem 0.4rem;
    .active{
      color: white
    }
    &-logo{
      padding-right: 0.2rem;
    }
    &-btns {
      flex: 1;
      &-item{
        padding: 0.1rem;
        border: 1px solid red;
      }
    }
  }
</style>
