<template>
  <span v-if="showStack"> {{ calculation }}</span>
  <span v-if="showAnswer && !showStack"> Ans = {{ answer}}</span>
</template>

<script setup>
import { computed } from "@vue/reactivity";

const answer = computed(() => {
  return appState.answer;
});

const calculation = computed(() => {
  return appState.calculation;
});

const showAnswer = computed(() => {
  return appState.showAnswer;
});

const previousAnswer = computed(() => {
  return appState.previousAnswer;
});

const showStack = computed(() => {
  return appState.stackTop(appState.stack) == "=";
});
</script>