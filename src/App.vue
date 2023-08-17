<script setup>
import { RouterView } from "vue-router";
import Header from "@/components/Header.vue";
</script>

<template>
  <Header />
  <main class="mt-32 px-8 md:w-11/12 lg:w-8/12 m-auto">
    <RouterView />
  </main>
</template>

<style scoped></style>
