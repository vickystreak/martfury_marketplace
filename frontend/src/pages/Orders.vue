<!-- <template>
  <div class="max-w-3xl py-12 mx-auto">
    <h2 class="font-bold text-lg text-gray-600 mb-4">
      Welcome {{ session.user }}!
    </h2>

    <Button icon-left="code" @click="ping.fetch" :loading="ping.loading">
      Click to send 'ping' request
    </Button>
    <div>
      {{ ping.data }}
    </div>
    <pre>{{ ping }}</pre>

    <div class="flex flex-row space-x-2 mt-4">
      <Button @click="showDialog = true">Open Dialog</Button>
      <Button @click="session.logout.submit()">Logout</Button>
    </div>

    
    <Dialog title="Title" v-model="showDialog"> Dialog content </Dialog>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Dialog } from 'frappe-ui'
import { createResource } from 'frappe-ui'
import { session } from '../data/session'

const ping = createResource({
  url: 'ping',
  auto: true,
})

const showDialog = ref(false)
</script> -->

<template>
  <div class="grid-container">
    <!-- header -->

    <header class="header">
      <div class="menu-icon">
        <button><span class="material-icons-outlined"> menu </span></button>
      </div>
      <div class="header-left">
        <span class="material-icons-outlined"> search </span>
      </div>
      <div class="header-right">
        <font-awesome-icon
          class="header-right-icons"
          icon="fa-solid fa-bell"
          size="lg"
          style="color:  rgb(215, 81, 13)"
        />
        <font-awesome-icon
          class="header-right-icons"
          icon="fa-solid fa-envelope"
          size="lg"
          style="color:  rgb(215, 81, 13)"
        />

        <font-awesome-icon
          id="popover-icon"
          aria-hidden="true"
          class="header-right-icons"
          icon="fa-solid fa-user"
          size="lg"
          style="color:  rgb(215, 81, 13)"
          @click="togglePopover"
        />

        <div
          id="popover-content"
          class="popover"
          :class="{ active: isPopoverActive }"
        >
          <button
            type="button"
            class="btn logout-btn btn-danger"
            @click="session.logout.submit()"
          >
            Logout
          </button>
        </div>
      </div>
    </header>

    <!-- sidebar -->
    <aside id="sidebar">
      <div class="sidebar-title">
        <div class="sidebar-brand">
          <span class="mart-fury">
            <h4>mart</h4>
            <h4>fury</h4>
          </span>
        </div>
        <span class="material-icons-outlined"> close </span>
      </div>

      <ul class="sidebar-list">
        <router-link to="/" class="router">
          <li class="sidebar-list-item">
            <font-awesome-icon
              icon="fa-solid fa-table-cells-large"
              size="lg"
              style="color: #931f63"
            />
            <h4>Dashboard</h4>
          </li>
        </router-link>

        <router-link to="/products" class="router">
          <li class="sidebar-list-item">
            <font-awesome-icon
              icon="fa-solid fa-database"
              size="lg"
              style="color: #931f63"
            />
            <h4>Products</h4>
          </li>
        </router-link>

        <router-link to="/sales" class="router">
          <li class="sidebar-list-item">
            <font-awesome-icon
              icon="fa-solid fa-money-bill"
              size="lg"
              style="color: #931f63"
            />
            <h4>Sales</h4>
          </li>
        </router-link>

        <router-link to="/orders" class="router">
          <li class="sidebar-list-item">
            <font-awesome-icon
              icon="fa-solid fa-cart-shopping"
              size="lg"
              style="color: #931f63"
            />
            <h4>Orders</h4>
          </li>
        </router-link>

        <router-link to="/payouts" class="router">
          <li class="sidebar-list-item">
            <font-awesome-icon
              icon="fa-solid fa-credit-card"
              size="lg"
              style="color: #931f63"
            />
            <h4>Payouts</h4>
          </li>
        </router-link>

        <li class="sidebar-list-item">
          <font-awesome-icon
            icon="fa-solid fa-gear"
            size="lg"
            style="color: #931f63"
          />
          <h4>Settings</h4>
        </li>
      </ul>
    </aside>

    <!-- main -->
    <main class="main-container">
      <h1>Orders Page</h1>
      <br />
      <br />
      <h2>Click the user icon in nav bar to logout</h2>
    </main>
  </div>
</template>
  
<script setup>
import { Dialog, createListResource, Popover } from 'frappe-ui'
import { session } from '../data/session'
import { userResource } from '../data/user'
import { defineComponent, ref } from 'vue'

const isPopoverActive = ref(false)
const showDialog = ref(false)

const togglePopover = () => {
  isPopoverActive.value = !isPopoverActive.value
}

console.log(userResource)
</script>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: 230px 1fr 1fr 1fr;
  grid-template-rows: 0.2fr 3fr;
  grid-template-areas:
    'sidebar header header header'
    'sidebar main main main';
  height: 100vh;
}

.router {
  text-decoration: none !important;
}

.logout-btn {
  border-radius: 20px;
}
.popover {
  display: none;
  position: absolute;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px;
}

.popover.active {
  display: block;
}
.sidebar-list-item {
  display: flex;
  align-items: center; /* Align items vertically */
  text-decoration: none;
}

.sidebar-list-item h4 {
  padding: 10px;
  color: rgb(0, 0, 0);
  text-decoration: none;
}

/* Logo style  */

.mart-fury {
  display: inline-block; /* Ensure inline display */
}

.mart-fury h4 {
  display: inline; /* Display each <h4> inline */
  margin: 0; /* Remove default margins */
  font-family: 'Protest Guerrilla', sans-serif;
  font-weight: 400;
  font-size: 40px;
  font-style: normal;
}
.mart-fury h4:first-of-type {
  color: black; /* Style the first word (Mart) */
}

.mart-fury h4:last-of-type {
  color: #f77408; /* Style the second word (Fury) */
}
.menu-icon {
  display: none;
}

.header-right-icons {
  padding-right: 20px;
}

.list-icons {
  margin-top: 10px;
}

.material-icon-outlined {
  vertical-align: middle;
  line-height: 1px;
}

/* Header Section */
.header {
  grid-area: header;
  height: 50px;
  background-color: #3b61c1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px 0 30px;
  box-shadow: 0 6px 7px -4px rgba(0, 0, 0, 0.2);
}
.header-right-icons:hover {
  color: greenyellow;
}
/* Sidebar section*/
#sidebar {
  grid-area: sidebar;
  height: 100%;
  background-color: #ced2cc;
  overflow-y: auto;
  transition: all 0.5s;
  -webkit-transition: all 0.5s;
}
.sidebar-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 20px 20px 20px;
  margin-bottom: 30px;
}

.sidebar-title > span {
  display: none;
}

.sidebar-brand {
  margin-top: 5px;
  font-size: 20px;
  font-weight: 700;
}

.sidebar-list {
  padding: 0;
  margin-top: 15px;
  list-style-type: none;
}
.sidebar-list-item {
  padding: 10px 10px;
  font-size: larger;
}
.sidebar-list-item:hover h4 {
  color: red;
  cursor: pointer;
}
/*Main-Container section*/
.main-container {
  grid-area: main;
  background-color: #fef8dd;
  overflow-y: auto;
  padding: 20px 20px;
}
</style>


















  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  