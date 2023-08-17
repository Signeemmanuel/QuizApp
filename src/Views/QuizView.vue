<script setup>
import { ref, computed } from "vue";
import { useRoute } from "vue-router";

import quizzesData from "@/data/quizzes.json";
import Question from "@/components/Question.vue";
import Result from "@/components/Result.vue";

const route = useRoute();
const quizId = parseInt(route.params.id);
const quiz = quizzesData.find((q) => q.id == quizId);
const currentQuestionIndex = ref(0);
const numberOfCorrectAnswers = ref(0);
const showResult = ref(false);

const questionStatus = computed(
  () => `${currentQuestionIndex.value + 1}/${quiz.questions.length}`
);
const barPercentage = computed(
  () => `${((currentQuestionIndex.value + 1) / quiz.questions.length) * 100}%`
);

const onSelectOption = (isCorrect) => {
  if (isCorrect) {
    numberOfCorrectAnswers.value++;
  }
  if (quiz.questions.length - 1 === currentQuestionIndex.value) {
    showResult.value = true;
  } else {
    currentQuestionIndex.value++;
  }
};
</script>

<template>
  <section>
    <h3 class="text-2xl">Question {{ questionStatus }}</h3>
    <div class="w-full my-1 h-10 border-2 rounded">
      <div class="h-full bg-orange-200" :style="{ width: barPercentage }"></div>
    </div>
  </section>
  <Question
    v-if="!showResult"
    class="my-10"
    :question="quiz.questions[currentQuestionIndex]"
    @selectOption="onSelectOption"
  />
  <Result
    v-else
    :numberOfCorrectAnswers="numberOfCorrectAnswers"
    :quizQuestionLength="quiz.questions.length"
  />
</template>

<style scoped></style>
