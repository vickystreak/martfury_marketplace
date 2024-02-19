<!-- <template>
  <div class="m-3 flex flex-row items-center justify-center">
    <Card title="Login to your FrappeUI App!" class="w-full max-w-md mt-4">
      <form class="flex flex-col space-y-2 w-full" @submit.prevent="submit">
        <Input
          required
          name="email"
          type="text"
          placeholder="johndoe@email.com"
          label="User ID"
        />
        <Input
          required
          name="password"
          type="password"
          placeholder="••••••"
          label="Password"
        />
        <Button :loading="session.login.loading" variant="solid"
          >Login</Button
        >
      </form>
    </Card>
  </div>
</template>

<script lang="ts" setup>
import { session } from '../data/session'

function submit(e) {
  let formData = new FormData(e.target)
  session.login.submit({
    email: formData.get('email'),
    password: formData.get('password'),
  })
}
</script> -->

<template>
  <div class="login-main min-h-screen flex items-center justify-center">
    <div class="w-full max-w-md p-6 bg-white rounded-md shadow-md">
      <h2 class="text-2xl font-semibold mb-4 text-center">
        Secure login
        <img
          class="login-logo text-center m-auto"
          src="https://seeklogo.com/images/M/mf-logo-EBF1B2EB26-seeklogo.com.png"
        />
      </h2>
      <form class="flex flex-col space-y-4" @submit.prevent="submit">
        <div>
          <label for="email" class="block text-gray-600 text-sm">User ID</label>
          <input
            id="email"
            v-model="email"
            type="text"
            name="email"
            class="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
            placeholder="johndoe@email.com"
            required
          />
        </div>
        <div>
          <label for="password" class="block text-gray-600 text-sm"
            >Password</label
          >
          <input
            id="password"
            v-model="password"
            type="password"
            name="password"
            class="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
            placeholder="••••••"
            required
          />
        </div>
        <button
          :disabled="session.login.loading"
          class="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
        >
          <span v-if="session.login.loading">Logging in...</span>
          <span v-else>Login</span>
        </button>
      </form>
    </div>
  </div>
</template>
 
<script lang="ts" setup>
import { ref } from 'vue'
import { session } from '../data/session'

const email = ref('')
const password = ref('')

function submit() {
  session.login.submit({ email: email.value, password: password.value })
  console.log('Email:', email.value)
  console.log('Password:', password.value)
  console.log(session.login.submit)
}
</script>
<style scoped>
.login-main {
  background-repeat: no-repeat;
  background-image: url('https://images.pexels.com/photos/4483862/pexels-photo-4483862.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
  background-size: cover;
}
.login-logo {
  width: 60px;
}
</style>
