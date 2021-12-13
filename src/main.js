import { createApp, reactive, watch } from 'vue'

const appState = reactive({
    calculation: "0",
    showAnswer: false,
    answer: 0,
    focusScreen: false,
    stack: [],
    currentNumber: 0,
    operationCount: 0,
    precision: false,
    precisionPosition: 10,
    position: 1,
    hasResult: false,
    isOperator: (item) => {
        return ['*', '/', '+', '-'].indexOf(item) > -1
    },
    stackTop: (item) => {
        return item[item.length - 1];
    }
})

watch(
    () => appState.operationCount,
    (old, replaced) => {
        if (appState.stack.length > 0) {

            appState.calculation = "";

            appState.stack.forEach(element => {
                if (appState.isOperator(element) || element == '=') {
                    appState.calculation += ' ';

                    appState.calculation += String(showOperator(element));
                    appState.calculation += ' ';
                } else {
                    appState.calculation += String(element);
                }
            });

            if (appState.currentNumber !== false) {
                appState.calculation += String(appState.currentNumber)
            }
        } else {
            appState.calculation = (appState.currentNumber !== false) ? appState.currentNumber : 0;
        }
    }
);
function reset(type = null) {
    appState.currentNumber = (appState.hasResult && type != 'number') ? appState.answer : false;
    appState.calculation = (appState.hasResult) ? appState.answer : 0;
    appState.position = (appState.hasResult) ? 10 : 1;
    appState.stack = [];
    appState.hasResult = false;
    appState.operationCount = 0;
    appState.precision = false;
    appState.precisionPosition = 1;
}

appState.reset = reset;

function showOperator(o) {
    const od = {
        '*': '×',
        '/': '÷'
    }
    return od[o] ?? o;
}
window.appState = appState


import App from './App.vue'

createApp(App).mount('#app')
