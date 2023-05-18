<template>
  <div class="commonBox" :style="`width:${width};height:${height};`">
    <div class="commonBox-header flex">
      <div class="commonBox-header-title">{{title}}</div>
      <div class="commonBox-header-btn" v-show="showBtn" @click="goBtn">进入模块</div>
    </div>
    <div class="commonBox-content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  // 可以设置传来值的类型和默认值
  width: {
    type: String,
    default: '100%'
  },
  height: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    default: ''
  },
  showBtn: {
    type: Boolean,
    default: false
  }
})
const emit = defineEmits(["clickBtn"]);
const goBtn = function() {
  emit('clickBtn')
}
</script>

<style lang="less">
  .commonBox{
    display: flex;
    flex-direction: column;
    &-header{
      background: linear-gradient(to right, rgba(0, 175, 248, 0.1), rgba(255,255,255,0.1));
      box-shadow: 0 0 0.03rem rgba(0, 175, 248, 0.5);
      padding: .1rem;
      &-title, &-btn{
        color: #00aff8;
        font-size: .18rem;
        font-weight: 400;
      }
      &-btn{
        cursor: pointer;
      }
    }
    &-content{
      flex: 1;
      background-color: rgba(0,175,248,.05);
      padding: .1rem;
    }
  }
</style>
