import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'

const app = createApp(App)


app.use(createPinia())
app.use(router)
// 挂载UI库
app.use(ElementPlus)
app.mount('#app')
