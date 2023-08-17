<script setup>
import { watch, ref } from "vue";

import quizzesData from "@/data/quizzes.json";
import Card from "@/components/Card.vue";

const quizzes = ref(quizzesData);
const search = ref("");

watch(search, () => {
  if (quizzes.value === "") {
    quizzes.value = quizzesData;
  } else {
    quizzes.value = quizzesData.filter((quiz) =>
      quiz.name.toLowerCase().includes(search.value.toLowerCase())
    );
  }
});
</script>

<template>
  <section class="text-center">
    <input
      v-model.trim="search"
      class="border-2 px-2 py-1 max-h-10 rounded"
      type="text"
      placeholder="search"
    />
  </section>
  <section class="flex flex-wrap gap-2 w-auto">
    <Card v-for="quiz in quizzes" :key="quiz.id" :quiz="quiz" class="transition-transform hover:scale-105"/>
  </section>
</template>

<style scoped></style>
