<template>
  <td class="flex-auto">
    <CButton :type="'reset'" :value="'reset'">
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