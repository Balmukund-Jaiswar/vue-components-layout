import { createApp } from 'vue'
import App from './App.vue'
import BaseBorder from './components/BaseBorder'

const app = createApp(App);

app.component('base-border',BaseBorder)

app.mount('#app');