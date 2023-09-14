<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="w-full h-10 bg-blue-950 text-white">
    <nav class="flex justify-center divide-x-2">
      <RouterLink class="py-2 px-2 hover:bg-blue-500" to="/">My Page</RouterLink>
      <RouterLink class="py-2 px-2 hover:bg-blue-500" to="/home">Home</RouterLink>
      <RouterLink class="py-2 px-2 hover:bg-blue-500" to="/input">input</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

