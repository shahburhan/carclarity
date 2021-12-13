<template>
  <div class="s" :class="{'f' : focusScreen}">
    <div class="a">
      <div class="ic">
        <HistoryIcon />
      </div>
      <Answer></Answer>
    </div>
    <Calculation></Calculation>
  </div>
</template>

<script setup>
import HistoryIcon from "./HistoryIcon.vue";
import Calculation from "./Calculation.vue";
import Answer from "./Answer.vue";
import { computed } from "@vue/reactivity";

const focusScreen = computed(() => {
  return appState.focusScreen;
});
</script>