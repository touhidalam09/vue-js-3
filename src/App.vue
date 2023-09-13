<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">My Page</RouterLink>
      <RouterLink to="/home">Home</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

