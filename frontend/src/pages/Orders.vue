<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-white">
      <div class="container-fluid">
        
        <h4>Orders <span class="dashboard-subtitle"></span></h4>

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

    <div class="recent-order-table mt-3">
      <table class="scroll-table mx-auto">
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
                order.payment == 'Paid' ? 'text-success' : 'text-secondary'
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

    <div class="text-end p-2 text-light">
      <router-link to="/neworder" class="router" >
        <button
          class="bg-primary p-2 mr-2 route-link"
          style="border-radius: 10px"
        >
          New Order
        </button>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { createListResource } from 'frappe-ui'

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

.table-head th {
  padding-left: 0.9rem;
  padding-right: 7.2rem;
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
  max-height: 30rem;
  overflow-y: auto;
  position: relative;
  padding-left: 2rem;
}
</style>