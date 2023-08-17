<script setup>
import { RouterLink } from "vue-router";

const { numberOfCorrectAnswers, quizQuestionLength } = defineProps([
  "numberOfCorrectAnswers",
  "quizQuestionLength",
]);
</script>
<template>
  <div class="flex flex-col items-center my-10">
    <p class="text-2xl my-2">Your Results...</p>
    <h1 class="text-7xl font-bold">
      {{ `${numberOfCorrectAnswers}/${quizQuestionLength}` }}
    </h1>
    <RouterLink to="/" class="text-xl p-2 my-20 bg-red-400 rounded-lg"
      >Goto Home</RouterLink
    >
  </div>
</template>
<style scope></style>
