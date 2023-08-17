<script setup>
import { useRouter } from "vue-router";

const { quiz } = defineProps(["quiz"]);

const router = useRouter();

const navigateToQuiz = () => {
  router.push(`/quiz/${quiz.id}`);
};
</script>

<template>
  <article
    class="w-11/12 md:w-72 my-6 mx-auto padding border rounded-lg shadow hover:cursor-pointer"
    @click="navigateToQuiz"
  >
    <img class="h-48 w-full rounded-t-lg" :src="quiz.image" alt="quiz logo" />
    <div class="py-2 px-4">
      <h2 class="text-xl font-bold">{{ quiz.name }}</h2>
      <p>{{ quiz.questions.length }} Questions</p>
    </div>
  </article>
</template>

<style></style>
