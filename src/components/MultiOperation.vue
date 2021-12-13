<template>
  <td class="flex-auto">
    <CButton :type="'operation'">
      <slot name="first"></slot>
    </CButton>
    <CButton :type="'operation'">
      <slot name="second"></slot>
    </CButton>
  </td>
</template>

<script setup>
import CButton from "./CButton.vue";
</script>