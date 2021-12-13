<template>
  <span @click="interact">
    <slot>{{ value }}</slot>
  </span>
</template>

<script>
export default {
  props: {
    type: String,
    value: String | Number,
  },
  setup(props) {
    function interact() {
      appState.showAnswer = true;
      appState.focusScreen = true;

      if (!canContinue(props.value, props.type)) {
        return;
      }

      if (!hadTime()) {
        return;
      }

      appState.operationCount++;

      switch (props.type) {
        case "reset":
          reset();
          break;
        case "operator":
          handleOperator();
          break;
        case "number":
          handleNumber();
          break;
        case "decimal":
          appState.precision = true;
          appState.currentNumber = appState.currentNumber + ".";
          break;

        default:
          break;
      }
    }
    function canContinue(value, type) {
      if (value == "result") {
        appState.operationCount++;
        return false;
      }
      if (appState.hasResult) {
        appState.reset(type);
      }
      return true;
    }
    function reset() {
      appState.reset();
    }
    function handleOperator() {
      if (
        appState.isOperator(props.value) &&
        appState.currentNumber === false
      ) {
        if (appState.stack.length == 0) appState.stack.push(0);

        appState.stack.pop();
        appState.stack.push(props.value);
      } else {
        appState.stack.push(appState.currentNumber);
        appState.stack.push(props.value);
        appState.currentNumber = false;
        appState.precision = false;
        appState.position = 1;
        appState.precisionPosition = 10;
      }
    }

    function handleNumber() {
      if (appState.currentNumber === false) {
        appState.currentNumber = 0;
      }
      if (appState.precision) {
        appState.currentNumber =
          String(appState.currentNumber) + String(props.value);
      } else {
        appState.currentNumber = appState.currentNumber * appState.position;
        appState.currentNumber += parseFloat(props.value);
        appState.position = 10;
      }
    }
    function hadTime() {
      if (props.value == undefined) {
        alert("Oops, we ran outta time! Don't worry, we still got google :)");
        return false;
      }
      return true;
    }
    return {
      interact,
    };
  },
};
</script>