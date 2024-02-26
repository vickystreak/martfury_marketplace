


<template>
  <!-- main  -->
  <div>
    <nav
      class="navbar navbar-expand-lg navbar-light bg-white"
      style="position: sticky"
    >
      <div class="container-fluid">
        <h4>
          Dashboard <span class="dashboard-subtitle">Everything here</span>
        </h4>

        <!-- Toggle button for mobile views -->
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav mx-auto">
            <li class="nav-item">
              <div class="search-bar-div d-flex align-items-center">
                <span class="icon-container me-2">
                  <!-- Container for the icon -->
                  <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                </span>

                <form class="search-bar d-flex" role="search">
                  <input
                    class="form-control me-2 search-input"
                    type="search"
                    placeholder="Search anything"
                    aria-label="Search"
                  />
                </form>
              </div>
            </li>
          </ul>

          <router-link to="/products" class="router route-link">
            <span class="navbar-text route-link">
              <p>
                VIEW YOUR STORE
                <span>
                  <font-awesome-icon icon="fa-solid fa-right-from-bracket"
                /></span>
              </p>
            </span>
          </router-link>
        </div>
      </div>
    </nav>

    <div class="dashboard-main row">
      <div class="col-9">
        <div class="d-flex flex-column">
          <div class="dashboard-content dashboard-chart row">
            <div class="dashboard-content col-8">
              <h3>Sales Reports</h3>
              <div class="chart-div w-100">
                <img src="../assets/chart1.jpg" alt="" />
              </div>
            </div>
            <div class="dashboard-content col-4">
              <h3>Earnings</h3>
              <div class="container">
                <div class="row">
                  <div class="col-md-3 col-sm-6">
                    <div class="progress">
                      <span class="progress-left">
                        <span class="progress-bar blue">5%</span>
                      </span>
                      <span class="progress-right">
                        <span class="progress-bar green">5%</span>
                      </span>
                      <span class="progress-value">90%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="recent-order-div">
            <h4>Recent Orders</h4>
            <div class="recent-order-table">
              <table class="scroll-table">
                <thead class="table-head">
                  <th>ID</th>
                  <th>Date</th>
                  <th class="colspan-6">Products</th>
                  <th>Payment</th>
                  <th>Fulfillment</th>
                  <th>Total</th>
                </thead>
                <tbody class="table-body">
                  <tr v-for="order in orders.data" :key="order">
                    <td>{{ order.name }}</td>
                    <td>{{ formatDate(order.date) }}</td>
                    <td>{{ order.product }}</td>
                    <td
                      :class="
                        order.payment == 'Paid'
                          ? 'text-success'
                          : 'text-secondary'
                      "
                    >
                      {{ order.payment }}
                    </td>
                    <td>
                      <span v-if="order.status == 'Delivered'">
                        <font-awesome-icon
                          icon="fa-solid fa-circle"
                          style="color: green"
                          size="2xs"
                        />&nbsp; {{ order.status }}
                      </span>
                      <span v-else>
                        <span v-if="order.status == 'Inprogress'">
                          <font-awesome-icon
                            icon="fa-solid fa-circle"
                            style="color: yellow"
                            size="2xs"
                          />&nbsp;{{ order.status }}
                        </span>
                        <span v-else>
                          <font-awesome-icon
                            icon="fa-solid fa-circle"
                            style="color: red"
                            size="2xs"
                          />&nbsp;{{ order.status }}
                        </span>
                      </span>
                    </td>
                    <td>&#8377; {{ order.total_amount }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <router-link to="/products" class="router route-link">
              <div class="w-25 mt-3 route-link">
                <h6 class="table-botton-text mr-3 text-primary route-link">
                  View All Orders&nbsp;&nbsp;<font-awesome-icon
                    icon="fa-solid fa-greater-than"
                  />
                </h6>
              </div>
            </router-link>
          </div>
        </div>
      </div>
      <div class="dashboard-content col-3 d-flex flex-column">
        <div class="statics-div">
          <div style="display: flex; justify-content: space-between">
            <span class="p-1"><h4>Statics</h4></span>

            <span>
              <div class="dropdown">
                <span class="icon">
                  <font-awesome-icon icon="fa-regular fa-calendar" />
                </span>
                <select name="days" id="days">
                  <option value="30" selected>Last 30 days</option>
                  <option value="60">Last 60 days</option>
                  <option value="90">Last 90 days</option>
                </select>
              </div>
            </span>
          </div>
          <div
            class="statics-child orders-div p-0.5 w-70 h-20"
            v-for="sale in sales.data"
            :key="sale"
          >
            <div class="row m-2">
              <div class="col-4 mt-3">
                <font-awesome-icon
                  class="orders-icon"
                  icon="fa-solid fa-cart-shopping"
                  size="lg"
                />
              </div>
              <div class="col-8">
                <h6 class="statics-text">Orders</h6>
                <span class="statics-values"
                  >{{ sale.total_orders }}&nbsp;
                  <span class="statics-percentage-green"
                    ><font-awesome-icon
                      icon="fa-solid fa-arrow-up"
                      size="sm"
                    />&nbsp; 12.5%
                  </span>
                </span>
              </div>
            </div>
          </div>
          <div
            class="statics-child revenue-div mt-1 p-0.5 w-70 h-20"
            v-for="sale in sales.data"
            :key="sale"
          >
            <div class="row m-2">
              <div class="col-4 mt-3">
                <font-awesome-icon
                  class="revenue-icon"
                  icon="fa-solid fa-sack-dollar"
                  size="lg"
                />
              </div>
              <div class="col-8">
                <h6 class="statics-text">Revenue</h6>
                <span class="statics-values"
                  >&#8377; {{ sale.amount }}&nbsp;
                  <span class="statics-percentage-green"
                    ><font-awesome-icon
                      icon="fa-solid fa-arrow-up"
                      size="sm"
                    />&nbsp;7.1%
                  </span>
                </span>
              </div>
            </div>
          </div>
          <div
            class="statics-child earning-div mt-1 p-0.5 w-70 h-20"
            v-for="sale in sales.data"
            :key="sale"
          >
            <div class="row m-2 justify-content-around">
              <div class="col-4 mt-3">
                <font-awesome-icon
                  class="earning-icon"
                  icon="fa-solid fa-money-bill"
                  size="lg"
                />
              </div>
              <div class="col-8">
                <h6 class="statics-text">Earnings</h6>
                <span class="statics-values"
                  >&#8377; {{ sale.earnings }}&nbsp;
                  <span class="statics-percentage-red">
                    <font-awesome-icon
                      icon="fa-solid fa-arrow-down"
                    />&nbsp;0.3%
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="countries-div mt-1">
          <h4>Top Countries</h4>
          <div class="w-70 h-27">
            <div class="row">
              <div class="col-6">
                <ul class="country1" style="list-style-type: disc">
                  <li style="font-size: 14px">United States</li>
                  <p class="country-percentage">80%</p>
                </ul>
              </div>
              <div class="col-6">
                <ul class="country2" style="list-style-type: disc">
                  <li style="font-size: 14px">France</li>
                  <p class="country-percentage">65%</p>
                </ul>
              </div>
            </div>
            <div class="row w-30">
              <div class="col-6 w-5">
                <ul class="country3" style="list-style-type: disc">
                  <li style="font-size: 14px">Germany</li>
                  <p class="country-percentage">52%</p>
                </ul>
              </div>
              <div class="col-6">
                <ul class="country4" style="list-style-type: disc">
                  <li style="font-size: 14px">Russia</li>
                  <p class="country-percentage">35%</p>
                </ul>
              </div>
            </div>
          </div>
          <div class="world-map w-75">
            <img class="h-30" src="../assets/world_map.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { session } from '../data/session'
import { createListResource } from 'frappe-ui'
import { ref, onMounted } from 'vue'
import Chart from 'chart.js'

const orders = createListResource({
  doctype: 'Orders',
  fields: ['name', 'date', 'product', 'payment', 'status', 'total_amount'],
  auto: true,
  limit: 3,
  onSuccess(doc) {
    // console.log("datas",doc)
  },
})
orders.reload()

const formatDate = (dateString) => {
  const date = new Date(dateString)
  const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]
  const month = monthNames[date.getMonth()]
  const day = date.getDate()
  const year = date.getFullYear()
  return `${month} ${day}, ${year}`
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
.dashboard-subtitle {
  display: block;
  font-size: 0.9rem;
  color: #737373;
  font-weight: 500;
}
.icon-container {
  display: flex;
  align-items: center;
}
.search-bar-div {
  border: none;
  width: 30rem;
}
.search-bar {
  width: 28rem;
  outline: none;
  border: none;
}
.search-input:focus {
  box-shadow: none;
}

/* progress bar css */
.progress {
  width: 150px;
  height: 150px;
  line-height: 150px;
  background: none;
  margin: 0 auto;
  box-shadow: none;
  position: relative;
}

.progress:after {
  content: '';
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 12px solid #fff;
  position: absolute;
  top: 0;
  left: 0;
}

.progress > span {
  width: 50%;
  height: 100%;
  overflow: hidden;
  position: absolute;
  top: 0;
  z-index: 1;
}

.progress .progress-left {
  left: 0;
}

.progress .progress-bar {
  width: 100%;
  height: 100%;
  background: none;
  border-width: 12px;
  border-style: solid;
  position: absolute;
  top: 0;
}

.progress .progress-left .progress-bar {
  left: 100%;
  border-top-right-radius: 80px;
  border-bottom-right-radius: 80px;
  border-left: 0;
  transform-origin: center left;
  animation: loading-1 1.8s linear forwards;
}

.progress .progress-right {
  right: 0;
}

.progress .progress-right .progress-bar {
  left: -100%;
  border-top-left-radius: 80px;
  border-bottom-left-radius: 80px;
  border-right: 0;
  transform-origin: center right;
  animation: loading-2 1.8s linear forwards;
}

.progress .progress-value {
  width: 90%;
  height: 90%;
  border-radius: 50%;
  background: #ffffff;
  font-size: 24px;
  color: #d10b4f;
  line-height: 135px;
  text-align: center;
  position: absolute;
  top: 5%;
  left: 5%;
}

.progress .blue .progress-bar {
  border-color: #d10b4f;
}

.progress .green .progress-bar {
  border-color: #33cc33;
}

@keyframes loading-1 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(180deg);
  }
}

@keyframes loading-2 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(144deg);
  }
}

/* main content  */

.chart_div {
  border: 1px solid black;
  width: 10rem;
  height: 5rem;
}

.dropdown {
  display: flex;
  align-items: center;
}
.dropdown select {
  border: none;
  outline: none;
  appearance: none;
}
.dropdown select:active {
  border: white;
  outline: white;
}
.dashboard-content {
  /* border: solid 1px black; */
}
.statics-child {
  border-radius: 10px;
}
.orders-div {
  background-color: #ffebed;
}
.statics-text {
  font-size: 0.9rem;
  color: #737373;
}
.statics-values {
  font-size: 1.2rem;
  font-weight: 500;
}
.statics-percentage-green {
  font-size: 0.7rem;
  color: #008d00;
}
.statics-percentage-red {
  font-size: 0.7rem;
  color: #e27100;
}
.orders-icon {
  color: #ffad01;
}
.revenue-icon {
  color: #ff8d1c;
}
.earning-icon {
  color: #1ce21c;
}
.revenue-div {
  background-color: #ffcad0;
}
.earning-div {
  background-color: #d1edff;
}
.table-head th {
  padding-left: 0.9rem;
  padding-right: 3rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  position: sticky;
  z-index: 1;
  top: 0;
  background-color: white;
  text-align: left;
  color: #737373;
}
.table-head th {
  border-bottom: solid 1px #737373;
}
.table-body td {
  padding: 0.8rem;
  justify-content: center;
  border-bottom: solid 1px #737373;
}
tr td:last-child {
  font-size: 1.1rem;
  font-weight: 800;
}
tr td:nth-child(1) {
  color: #737373;
}
tr td:nth-child(-n + 5) {
  font-size: 1rem;
  font-weight: 500;
}
tr:hover {
  background-color: #d9dbd9;
}
tr:hover td:first-child {
  color: #389cee;
}

.table-botton-text {
  color: #65b9fc;
}
.recent-order-table {
  max-height: 15rem;
  overflow-y: auto;
  position: relative;
  padding-left: 2rem;
}

.country1 li::marker {
  color: rgb(241, 241, 21);
  font-size: 20px;
}
.country2 li::marker {
  color: red;
  font-size: 20px;
}
.country3 li::marker {
  color: green;
  font-size: 20px;
}
.country4 li::marker {
  color: lightblue;
  font-size: 20px;
}
.country-percentage {
  font-size: 14px;
  font-weight: 600;
}
.world-map {
  margin-top: 0%;
  margin: 0 auto;
}
</style>