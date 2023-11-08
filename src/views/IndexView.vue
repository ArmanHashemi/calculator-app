<template>
  <div class="flex flex-wrap justify-center">
    <div class="w-full lg:w-1/2">
      <user-manual />
    </div>
    <div class="w-full lg:w-1/2 bg-gray-800 p-10 rounded-xl max-w-2xl">
      <div class="calculator-font calculator-display p-5 text-right text-white text-3xl mb-4 bg-gray-700 rounded h-16">{{display}}</div>
      <div class="grid grid-cols-4 gap-4">
        <button
            v-for="button in buttons"
            :data-key="button.symbol"
            :key="button.symbol"
            :class="`${button.background} ${button.size} py-3 text-white rounded text-xl`"
            @click="onButtonClick(button.symbol)"
        >
          {{ button.symbol }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {buttons} from "@/constants/buttons";
import {onMounted, onUnmounted, ref} from "vue";
import UserManual from "@/components/UserManual.vue";
const display = ref('');

const calculate = () => {
  try {
    // Unsafe eval for simplicity, but consider a safer evaluation method for a real app
    display.value = eval(display.value.replace('×', '*').replace('÷', '/')).toString();
  } catch (error) {
    display.value = 'Error'
  }
}
const onButtonClick = (button: string) => {

  switch (button) {
    case 'AC':
      display.value = '';
      break
    case 'DE':
      display.value = display.value.slice(0, -1);
      break
    case '=':
        calculate()
      break
    default:
      display.value += button

  }
}
// Function to animate the button corresponding to the pressed key
const animateButton = (key: string) => {
// Map the key to the corresponding button symbol if needed
  const keyToSymbolMap: { [key: string]: string } = {
    '*': '×',
    '/': '÷'
  };
  // Use the mapping if the key is '*' or '/', otherwise use the key as is
  const symbol = keyToSymbolMap[key] || key;

  // Select the button that has a data-key attribute matching the symbol
  const button = document.querySelector(`button[data-key="${symbol}"]`);
  if (button) {
    button.classList.add('animate'); // Add your animation class
    setTimeout(() => {
      button.classList.remove('animate'); // Remove the class after the animation
    }, 200); // Adjust the duration to match your CSS animation
  }
};
const appendSymbol = (symbol: string) => {
  display.value += symbol;
  animateButton(symbol);
};
const deleteLastEntry = () => {
  // Delete the last character
  display.value = display.value.slice(0, -1);
  // If the last character is now a dot, delete it as well
  if (display.value.endsWith('.')) {
    display.value = display.value.slice(0, -1);
  }};

const clearAll = () => {
  display.value = '';
};

// Function to handle keydown events
const handleKeydown = (event: KeyboardEvent) => {
  const { key } = event;

  const keyAsNumber = parseFloat(key);

  // Check if the parsed number is a number and not NaN
  if (!isNaN(keyAsNumber)) {
    appendSymbol(key);
  } else {
    // Use switch-case for non-numeric keys
    switch (key) {
      case '.':
      case '+':
      case '-':
        appendSymbol(key);
        break;
      case '*':
        appendSymbol('×');
        break
      case '/':
        appendSymbol('÷');
        break
      case 'Backspace':
        deleteLastEntry();
        break;
      case 'Escape':
        clearAll();
        break;
      case 'Enter':
        calculate();
        break;
      default:
        break;
    }
  }

};

onMounted(() => {
  window.addEventListener('keydown', handleKeydown);
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown);
});
</script>
<style scoped lang="scss">
.animate {
  animation: pop 0.2s ease-in-out;
}

@keyframes pop {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}
</style>
