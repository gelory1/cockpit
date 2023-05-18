import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'

import * as echarts from 'echarts';
import { Map3DChart } from 'echarts-gl/charts';

echarts.use([Map3DChart]);


const app = createApp(App)
app.config.globalProperties.$echarts = echarts

app.use(createPinia())
app.use(router)

app.mount('#app')
