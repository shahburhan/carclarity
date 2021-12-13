<template>
  <div class="c c">{{ showAnswer ? answer : calculation }}</div>
</template>

<script setup>
import { computed } from "@vue/reactivity";

const calculation = computed(() => {
  return appState.calculation;
});

const answer = computed(() => {
  return appState.answer;
});

const showAnswer = computed(() => {
  return appState.stackTop(appState.stack) == "=";
});
</script>