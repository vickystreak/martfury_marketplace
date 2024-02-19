import './index.css'
import 'bootstrap/dist/css/bootstrap.css';

import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import {
  faTableCellsLarge,
  faDatabase,
  faMoneyBill,
  faCartShopping,
  faCreditCard,
  faGear,
  faBell,
  faUser,
  faEnvelope
} from '@fortawesome/free-solid-svg-icons'

library.add(
  faTableCellsLarge,
  faDatabase,
  faMoneyBill,
  faCartShopping,
  faCreditCard,
  faGear,
  faBell,
  faUser,
  faEnvelope
)

import {
  Button,
  Card,
  Input,
  setConfig,
  frappeRequest,
  resourcesPlugin,
} from 'frappe-ui'

let app = createApp(App)

setConfig('resourceFetcher', frappeRequest)

app.use(router)
app.use(resourcesPlugin)
app.component('Button', Button)
app.component('Card', Card)
app.component('Input', Input)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
