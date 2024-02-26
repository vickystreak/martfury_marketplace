import './index.css'
import 'bootstrap/dist/css/bootstrap.css'

import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import {
  faArrowRightFromBracket,
  faRightFromBracket,
  faTableCellsLarge,
  faDatabase,
  faSuitcase,
  faMoneyBill,
  faChartSimple,
  faCartShopping,
  faEnvelope,
  faGear,
  faMagnifyingGlass,
  faSackDollar,
  faArrowUp,
  faArrowDown,
  faGreaterThan,
  faCircle,
} from '@fortawesome/free-solid-svg-icons'
import { faCopyright, faCalendar } from '@fortawesome/free-regular-svg-icons'
library.add(
  faCopyright,
  faRightFromBracket,
  faArrowRightFromBracket,
  faTableCellsLarge,
  faDatabase,
  faSuitcase,
  faGear,
  faMoneyBill,
  faChartSimple,
  faCartShopping,
  faEnvelope,
  faMagnifyingGlass,
  faCalendar,
  faCartShopping,
  faSackDollar,
  faMoneyBill,
  faArrowUp,
  faArrowDown,
  faGreaterThan,
  faCircle
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
app.component('font-awesome-icon', FontAwesomeIcon)
app.component('Button', Button)
app.component('Card', Card)
app.component('Input', Input)

app.mount('#app')
