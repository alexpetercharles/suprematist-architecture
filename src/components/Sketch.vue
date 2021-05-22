<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';

import useProcessing from '@/modules/useProcessing';

export default defineComponent({
  name: 'Sketch',
  setup() {
    const container = ref({} as HTMLElement);
    onMounted(() => useProcessing(container.value));
    return { container };
  },
});
</script>

<template>
  <div ref="container" class="container" />
</template>

<style lang="scss" scoped>
.container {
  height: 100%;
  width: 100%;
}
</style>
