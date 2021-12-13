<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import ButtonPane from "./components/ButtonPane.vue";
import ButtonRow from "./components/ButtonRow.vue";
import Operation from "./components/Operation.vue";
import MultiOperation from "./components/MultiOperation.vue";
import Number from "./components/Number.vue";
import Extra from "./components/Extra.vue";
import Reset from "./components/Reset.vue";
import Result from "./components/Result.vue";
import Screen from "./components/Screen.vue";
import { computed } from "@vue/reactivity";

const n = computed(() => {
  return appState.stack.length > 0 || appState.currentNumber !== false;
});
</script>

<template>
  <div class="container mx-auto">
    <!-- start calculator -->
    <div class="c">
      <!-- start calculator display -->
      <Screen></Screen>

      <!-- start calculator interactions -->
      <div class="i flex">
        <ButtonPane class="hidden sm:flex flex-auto fixed-width">
          <ButtonRow>
            <MultiOperation class="hc sm">
              <template v-slot:first>Rad</template>
              <template v-slot:second>Def</template>
            </MultiOperation>
            <Operation class="sm">x!</Operation>
          </ButtonRow>
          <ButtonRow>
            <Operation class="sm">Inv</Operation>
            <Operation class="sm">sin</Operation>
            <Operation class="sm">ln</Operation>
          </ButtonRow>
          <ButtonRow>
            <Operation class="sm">π</Operation>
            <Operation class="sm">cos</Operation>
            <Operation class="sm">log</Operation>
          </ButtonRow>
          <ButtonRow>
            <Operation class="sm">e</Operation>
            <Operation class="sm">tan</Operation>
            <Operation class="sm">√</Operation>
          </ButtonRow>
          <ButtonRow>
            <Operation class="sm">Ans</Operation>
            <Operation class="sm">EXP</Operation>
            <Operation class="sm">x<sup>y</sup></Operation>
          </ButtonRow>
        </ButtonPane>

        <ButtonPane class="flex-auto">
          <ButtonRow>
            <Operation>(</Operation>
            <Operation>)</Operation>
            <Operation>%</Operation>
            <Reset>{{ n === false ? "AC" : "CE" }}</Reset>
          </ButtonRow>
          <ButtonRow>
            <Number class="h" :value="7"></Number>
            <Number class="h" :value="8"></Number>
            <Number class="h" :value="9"></Number>
            <Operation class="b" :value="'/'">÷</Operation>
          </ButtonRow>
          <ButtonRow>
            <Number class="h" :value="4"></Number>
            <Number class="h" :value="5"></Number>
            <Number class="h" :value="6"></Number>
            <Operation class="b" :value="'*'">×</Operation>
          </ButtonRow>
          <ButtonRow>
            <Number class="h" :value="3"></Number>
            <Number class="h" :value="2"></Number>
            <Number class="h" :value="1"></Number>
            <Operation class="flex-auto b" :value="'-'">−</Operation>
          </ButtonRow>
          <ButtonRow>
            <Number class="h" :value="0">0</Number>
            <Extra class="h b font-bold" :value="'.'">.</Extra>
            <Result class="h r b">=</Result>
            <Operation class="flex-auto b" :value="'+'">+</Operation>
          </ButtonRow>
        </ButtonPane>
      </div>
    </div>
  </div>
</template>

<style>
#app {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
