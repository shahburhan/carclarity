<template>
  <td class="flex-auto">
    <CButton :type="'number'" :value="value">
      <slot>{{ value }}</slot>
    </CButton>
  </td>
</template>

<script>
import CButton from "./CButton.vue";
export default {
  props: { value: String | Number },
  components: { CButton },
};
</script>