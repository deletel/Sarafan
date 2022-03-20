import Vue from 'vue'
import 'api/resource'
import '@babel/polyfill'
import router from 'router/router'
import Vuetify from 'vuetify'
import App from 'pages/App.vue'
import store from 'store/store'
import { connect } from './util/ws'
import 'vuetify/dist/vuetify.min.css'

if (frontendData.profile) {
    connect()
}

Vue.use(Vuetify)

new Vue({
    el: '#app',
    store,
    router,
    render: a => a(App)
})