<template>
  <div>
    <div>
      <aside style="position: fixed;">
        <div class="sidebar-heading row">
          <div class="col-2 heading-img-div">
            <!-- <input class="profile-img" type="image" src="" alt="" /> -->
          </div>
          <span class="col-8 mt-2">
            <p>
              <span class="text-gray-color">Hello,</span>

              <span>
                <h6>{{ session.user }}</h6></span
              >
            </p></span
          >
          <!-- <div class="col-2"> -->
          <!-- <font-awesome-icon icon="fa-solid fa-arrow-right-from-bracket" /> -->
          <!-- <font-awesome-icon icon="fa-solid fa-right-from-bracket" /> -->
          <!-- </div> -->

          <div class="col-2" @click="showButton">
            <font-awesome-icon icon="fa-solid fa-right-from-bracket" />
          </div>

          <div ref="buttonContainer">
            <button
              v-show="isButtonVisible"
              ref="logoutButton"
              type="button"
              class="btn btn-secondary"
              data-bs-container="body"
              data-bs-toggle="popover"
              data-bs-placement="right"
              data-bs-content="Right popover"
              @click="session.logout.submit()"
            >
              Logout
            </button>
          </div>
        </div>

        <div class="earnings-div" v-for="sale in sales.data" :key="sale">
          <p>
            <span class="text-gray-color">Earning </span>
            <span> <h3>&#8377; {{ sale.earnings }}</h3></span>
          </p>
        </div>
        <div class="sidebar-list-div">
          <ul class="sidebar-list">
            <li class="sidebar-list-item">
              <router-link to="/" class="router">
                <div class="list-div">
                  <h6>
                    <span class="list-icons"
                      ><font-awesome-icon
                        icon="fa-solid fa-table-cells-large"
                        size="sm" /></span
                    >Dashboard
                  </h6>
                </div>
              </router-link>
            </li>
            <li class="sidebar-list-item">
              <router-link to="/products" class="router"
                ><div class="list-div">
                  <h6>
                    <span class="list-icons"
                      ><font-awesome-icon icon="fa-solid fa-database" size="sm"
                    /></span>
                    Products
                  </h6>
                </div></router-link
              >
            </li>
            <li class="sidebar-list-item">
              <div class="list-div">
                <h6>
                  <span class="list-icons"
                    ><font-awesome-icon icon="fa-solid fa-suitcase" size="sm"
                  /></span>
                  Sales
                </h6>
              </div>
            </li>
            <li class="sidebar-list-item">
              <div class="list-div">
                <h6>
                  <span class="list-icons"
                    ><font-awesome-icon icon="fa-solid fa-envelope" size="sm"
                  /></span>
                  Messages
                </h6>
              </div>
            </li>
            <li class="sidebar-list-item">
              <router-link to="/orders" class="router">
                <div class="list-div">
                  <h6>
                    <span class="list-icons"
                      ><font-awesome-icon
                        icon="fa-solid fa-cart-shopping"
                        size="sm" /></span
                    >Orders
                  </h6>
                </div>
              </router-link>
            </li>
            <li class="sidebar-list-item">
              <div class="list-div">
                <h6>
                  <span class="list-icons"
                    ><font-awesome-icon
                      icon="fa-solid fa-chart-simple"
                      size="sm" /></span
                  >Analytics
                </h6>
              </div>
            </li>
            <li class="sidebar-list-item">
              <div class="list-div">
                <h6>
                  <span class="list-icons"
                    ><font-awesome-icon
                      icon="fa-solid fa-money-bill"
                      size="sm" /></span
                  >Payouts
                </h6>
              </div>
            </li>
            <li class="sidebar-list-item">
              <div class="list-div">
                <h6>
                  <span class="list-icons"
                    ><font-awesome-icon
                      icon="fa-solid fa-gear"
                      size="sm" /></span
                  >Settings
                </h6>
              </div>
            </li>
          </ul>
        </div>
        <br />
        <div class="sidebar-footer">
          <span class="mart-fury">
            <h4>mart</h4>
            <h4>fury</h4>
          </span>
          <span class="copyrights"
            ><p>
              <font-awesome-icon icon="fa-regular fa-copyright" />
              <span class="text-gray-color"
                >2024 MartFury Marketplace <br />All Rights Reserved</span
              >
            </p></span
          >
        </div>
      </aside>
    </div>
  </div>
</template>

<script setup>
import { createListResource } from 'frappe-ui';
import { session } from '../data/session'
import { userResource } from '../data/user'
import { ref, watch } from 'vue'

const isButtonVisible = ref(false)
let autoHideTimeout
const buttonContainer = ref(null)

const showButton = () => {
  isButtonVisible.value = true
  autoHideTimeout = setTimeout(() => {
    hideButton()
  }, 3000) // 3 seconds
}

const hideButton = () => {
  isButtonVisible.value = false
  clearTimeout(autoHideTimeout)
}

const sales = createListResource({
  doctype: 'Sales',
  fields: ['name', 'total_orders', 'amount', 'earnings'],
  limit: 1,
  order_by: 'modified desc',
})
sales.reload()
</script>

<style scoped>
</style>
