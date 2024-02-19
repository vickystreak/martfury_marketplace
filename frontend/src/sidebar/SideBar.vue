<!-- <template> -->
  <div class="grid-container ">
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
          style="color: black"
        />
        <font-awesome-icon
          class="header-right-icons"
          icon="fa-solid fa-envelope"
          size="lg"
          style="color: black"
        />
        <font-awesome-icon
          id="popover-icon"
          aria-hidden="true"
          @click="togglePopover"
          class="header-right-icons"
          icon="fa-solid fa-user"
          size="lg"
          style="color: black"
        />
        <div class="popover" :class="{ active: isPopoverActive }">
          Popover content goes here
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
        <router-link to="/">
          <li class="sidebar-list-item">
            <font-awesome-icon
              icon="fa-solid fa-table-cells-large"
              size="lg"
              style="color: #931f63"
            />
            <h4>Dashboard</h4>
          </li>
        </router-link>

        <router-link to="/products">
          <li class="sidebar-list-item">
            <font-awesome-icon
              icon="fa-solid fa-database"
              size="lg"
              style="color: #931f63"
            />
            <h4>Products</h4>
          </li>
        </router-link>

        <router-link to="/sales">
          <li class="sidebar-list-item">
            <font-awesome-icon
              icon="fa-solid fa-money-bill"
              size="lg"
              style="color: #931f63"
            />
            <h4>Sales</h4>
          </li>
        </router-link>

        <router-link to="/orders">
          <li class="sidebar-list-item">
            <font-awesome-icon
              icon="fa-solid fa-cart-shopping"
              size="lg"
              style="color: #931f63"
            />
            <h4>Orders</h4>
          </li>
        </router-link>

        <router-link to="/payouts">
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
  </div>
<!-- </template> -->
<script setup>
</script>
<!-- <style scoped> -->
/* .grid-container {
  display: grid;
  grid-template-columns: 230px 1fr 1fr 1fr;
  grid-template-rows: 0.2fr 3fr;
  grid-template-areas:
    'sidebar header header header'
    'sidebar main main main';
  height: 100vh;
} */
/* .sidebar-list-item span h4 {
  display: inline;
  margin: 0;
} */

/* popover */
/* .popover {
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

#popover-icon {
  cursor: pointer;
}

.sidebar-list-item {
  display: flex;
  align-items: center; Align items vertically
}

.sidebar-list-item h4 {
  padding: 10px;
} */

/* Logo style  */

/* .mart-fury {
  display: inline-block; Ensure inline display
} */
/* 
.mart-fury h4 {
  display: inline; Display each <h4> inline
  margin: 0; Remove default margins
  font-family: 'Protest Guerrilla', sans-serif;
  font-weight: 400;
  font-size: 30px;
  font-style: normal;
}
.mart-fury h4:first-of-type {
  color: black; Style the first word (Mart)
} */
/* 
.mart-fury h4:last-of-type {
  color: #ffc300;            Style the second word (Fury)
} */
/* .menu-icon {
  display: none;
}

.header-right-icons {
  padding: 5px;
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
  margin-top: 15px;
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

.list-icons {
  margin-top: 10px;
}
.sidebar-list-item:hover {
  background-color: red;
  cursor: pointer;
}

.material-icon-outlined {
  vertical-align: middle;
  line-height: 1px;
} */

/* Header Section */
/* .header {
  grid-area: header;
  height: 50px;
  background-color: #7da0fa;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px 0 30px;
  box-shadow: 0 6px 7px -4px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
} */
/* Sidebar section*/
/* #sidebar {
  grid-area: sidebar;
  height: 100%;
  background-color: #ced2cc;
  overflow-y: auto;
  transition: all 0.5s;
  -webkit-transition: all 0.5s;
} */
/*Main-Container section*/
/* .main-container {
  grid-area: main;
  background-color: #fef8dd;
  overflow-y: auto;
  padding: 20px 20px;
} */
<!-- </style> -->

