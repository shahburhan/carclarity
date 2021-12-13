<template>
  <td class="flex-auto">
    <CButton :type="'result'" :value="'result'" @click="calculate">
      <slot></slot>
    </CButton>
  </td>
</template>

<script>
import CButton from "./CButton.vue";
export default {
  props: ["value"],
  components: { CButton },

  setup(props) {
    function stackLast() {
      if (appState.currentNumber !== false) {
        appState.stack.push(appState.currentNumber);
        appState.stack.push("=");
        appState.operationCount++;
        appState.currentNumber = false;
      }
    }
    function calculate() {
      stackLast();
      if (
        appState.stack.length &&
        !appState.isOperator(appState.stackTop(appState.stack))
      ) {
        let i = 0;
        var el1 = undefined;
        var el2 = undefined;
        var op = undefined;

        while (appState.stack[i] != undefined) {
          i++;

          if (el1 == undefined) {
            el1 = appState.stack[i - 1];
            continue;
          }
          if (op == undefined) {
            op = appState.stack[i - 1];
            continue;
          }
          if (el2 == undefined) {
            el2 = appState.stack[i - 1];
          }
          if (el1 != undefined && op != undefined && el2 != undefined) {
            el1 = doMath(el1, el2, op);
            el2 = undefined;
            op = undefined;
          }
        }

        appState.hasResult = true;
        if (isNaN(el1)) {
          appState.answer = "Error";
        } else {
          appState.answer = el1;
        }
        appState.operationCount++;
      }

      document.querySelector(".c").classList.add("r");
      setTimeout(() => {
        document.querySelector(".c").classList.remove("r");
      }, 150);
    }
    function doMath(el1, el2, op) {
      if (el1 == undefined || el2 == undefined) {
        return false;
      }
      switch (op) {
        case "/":
          return parseFloat(el1) / parseFloat(el2);
          break;
        case "*":
          return parseFloat(el1) * parseFloat(el2);
          break;
        case "+":
          return parseFloat(el1) + parseFloat(el2);
          break;
        case "-":
          return parseFloat(el1) - parseFloat(el2);
          break;

        default:
          break;
      }
    }
    return {
      calculate,
    };
  },
};
</script>