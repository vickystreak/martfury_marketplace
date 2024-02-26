<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-white">
      <div class="container-fluid">
        <h4>Place Order <span class="dashboard-subtitle"></span></h4>

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

    <div>
      <div class="m-3">
        <table>
          <tr>
            <div class="input-box">
              <td>
                <label for="product" style="font-size: 20px">Product :</label>
              </td>
              <td>
                <select
                  v-model="formData.product"
                  id="product"
                  name="product"
                  style="width: 15rem; margin-left: 0.2rem"
                  class="order-input"
                >
                  <option value="Apple Watch Ultra">Apple Watch Ultra</option>
                  <option value="Apple iPhone 15">Apple iPhone 15</option>
                  <option value="Samsung 80cm Smart TV">
                    Samsung 80cm Smart TV
                  </option>
                  <option value="HP - Pavilion x360">HP - Pavilion x360</option>
                  <option value="Samsung Galaxy S24">Samsung Galaxy S24</option>
                  <option value="OnePlus Nord Buds">OnePlus Nord Buds</option>
                </select>
              </td>
            </div>
          </tr>
          <tr>
            <div class="input-box">
              <td style="padding-top: 0.2rem">
                <label for="quantity" style="font-size: 20px">Quantity:</label>
              </td>
              <td>
                <input
                  v-model.number="formData.quantity"
                  type="number"
                  id="quantity"
                  name="quantity"
                  min="1"
                  max="100"
                  value="1"
                  style="-moz-appearance: textfield; width: 15rem"
                  class="order-input"
                />
              </td>
            </div>
          </tr>
          <tr>
            <div class="input-box">
              <td style="padding-top: 0.2rem">
                <label for="date" style="font-size: 20px">Date:</label>
              </td>
              <td>
                <input
                  v-model="formData.date"
                  type="date"
                  id="date"
                  name="date"
                  style="width: 15rem; margin-left: 2.3rem"
                  class="order-input"
                />
              </td>
            </div>
          </tr>
          <tr>
            <div class="input-box">
              <td style="padding-top: 0.2rem">
                <label for="payment" style="font-size: 20px">Payment:</label>
              </td>
              <td>
                <select
                  v-model="formData.payment"
                  id="payment"
                  name="payment"
                  style="width: 15rem"
                  class="order-input"
                >
                  <option value="Paid">Paid</option>
                  <option value="Unpaid">Unpaid</option>
                </select>
              </td>
            </div>
          </tr>
          <tr>
            <div class="input-box">
              <td style="padding-top: 0.2rem">
                <label for="status" style="font-size: 20px">Status:</label>
              </td>
              <td>
                <select
                  v-model="formData.status"
                  id="status"
                  name="status"
                  style="width: 15rem; margin-left: 1.5rem"
                  class="order-input"
                >
                  <option value="Delivered">Delivered</option>
                  <option value="Inprogress">In Progress</option>
                  <option value="Cancelled">Cancelled</option>
                </select>
              </td>
            </div>
          </tr>
          <tr>
            <td></td>
            <td>
              <div class="text-end mt-5">
                <button
                  @click="finalSubmit"
                  class="bg-primary text-light p-2 w-20"
                  style="border-radius: 10px"
                >
                  Submit
                </button>
              </div>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { createListResource } from 'frappe-ui'
import { ref } from 'vue'

const formData = ref({
  product: '',
  quantity: 1,
  date: '',
  payment: 'Paid',
  status: 'Delivered',
})

const orderValues = createListResource({
  doctype: 'Orders',
})

const finalSubmit = () => {
  const saleData = {
    product: formData.value.product,
    quantity: formData.value.quantity,
    date: formData.value.date,
    payment: formData.value.payment,
    status: formData.value.status,
  }
  console.log('Final submission:', saleData)
  orderValues.insert.submit(saleData)
  alert('Successfully New Order Placed')
}
</script>

<style scoped>
input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.order-input {
  border: solid 2px gray;
  outline-color: aliceblue;
}
.order-input:hover {
  border-block-color: yellow;
}
.order-input:focus {
  outline-color: aliceblue;
}
.input-box {
  margin: 20px;
}
</style>