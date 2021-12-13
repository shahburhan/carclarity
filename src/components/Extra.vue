<template>
  <td class="flex-auto">
    <CButton :type="'decimal'" :value="value">
      <slot></slot>
    </CButton>
  </td>
</template>

<script>
import CButton from "./CButton.vue";
export default {
  props: ["value"],
  components: { CButton },

  setup(props) {},
};
</script>