<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
const navigateToHome = () => {
  router.push("/");
};
</script>

<template>
  <header
    class="w-full py-4 px-4 md:px-10 lg:px-40 shadow fixed z-10 top-0 bg-white"
  >
    <div class="flex flex-wrap gap-3 items-center justify-between">
      <h1
        @click="navigateToHome"
        class="text-5xl text-orange-500 font-bold hover:cursor-pointer"
      >
        QuizApp
      </h1>
    </div>
  </header>
</template>

<style scoped></style>
