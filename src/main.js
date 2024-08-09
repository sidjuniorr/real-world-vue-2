import { createApp } from 'vue';  // Importa a função createApp do Vue
import App from './App.vue';  // Importa o componente raiz App
//import './assets/main.css';  // Importa o arquivo CSS principal
import { createPinia } from 'pinia';  // Importa a função createPinia do Pinia
import router from '/src/router/index.js';  // Importa a configuração do roteador

const app = createApp(App);  // Cria a instância do aplicativo Vue

app.use(createPinia());  // Registra o Pinia para gerenciamento de estado
app.use(router);  // Registra o roteador para gerenciamento de rotas

app.mount('#app');  // Monta o aplicativo Vue no elemento HTML com id 'app'
