<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-white">
      <div class="container-fluid">
       
        <h4>
          Products <span class="dashboard-subtitle"></span>
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

          <span class="navbar-text">
            <p>
              VIEW YOUR STORE
              <span>
                <font-awesome-icon icon="fa-solid fa-right-from-bracket"
              /></span>
            </p>
          </span>
        </div>
      </div>
    </nav>

    <div class=" container text-left m-5">
      <div class="row ">
        <div
          v-for="(product, index) in products.data"
          :key="index"
          class="col-lg-4 col-md-6 mb-4"
          style="width: 24rem"
        >
          <div
            class="d-flex flex-column"
            style="justify-content: space-between"
          >
            <div class="col-6">
              <img
                :src="product.image"
                class="card-img-top"
                alt="..."
                style="width: 6rem; height: 5rem"
              />
            </div>
            <div class="col-6">
              <h4 class="card-title">{{ product.name }}</h4>
              <br />
              <h6>Quantity : {{ product.quantity }}</h6>
              <h6>MRP : {{ product.mrp_rate }}</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { createListResource } from 'frappe-ui'

const products = createListResource({
  doctype: 'Products',
  fields: ['name', 'type', 'quantity', 'mrp_rate', 'image'],
  auto: true,
})
products.reload()
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
  box-shadow: none; /* Removes the default Bootstrap focus glow/shadow */
}

.product-div{
  border: solid 1px yellowgreen;
}
</style>