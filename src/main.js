import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'

const messages = {
  en: {
    message: {
      hello: 'hello world',
    },
  },
  ja: {
    message: {
      hello: 'こんにちは、世界。',
    },
  },
}

const i18n = createI18n({
  locale: 'ja',
  messages,
})

const app = createApp(App)
app.use(i18n)
app.mount('#app')
