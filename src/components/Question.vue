<script setup>
let { question } = defineProps(["question"]);
const labels = ["A", "B", "C", "D"];

const emit = defineEmits(["selectOption"]);
const emitSelectedOption = (isCorrect) => {
  emit("selectOption", isCorrect);
};
</script>

<template>
  <section>
    <h2 class="text-3xl">{{ question.text }}</h2>
    <div class="text-lg">
      <button type="button"
        v-for="(option, i) in question.options"
        :key="i"
        class="w-full flex gap-4 items-center bg-orange-50 rounded-lg my-2 hover:cursor-pointer transition-transform hover:translate-x-1"
        @click="emitSelectedOption(i === question.answer)"
      >
        <p class="bg-orange-200 py-2 px-3 rounded-l-lg">{{ labels[i] }}.</p>
        <p>{{ option }}</p>
      </button>
    </div>
  </section>
</template>

<style></style>
