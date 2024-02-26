<template>
  <div class="row grid-container">
    <div class="col-2 sidebar">
      <router-view name="sidebar" />
    </div>
    <div class="col-10 main">
      <router-view />
    </div>
  </div>
</template>


<script setup>
import { session } from './data/session'
</script>
