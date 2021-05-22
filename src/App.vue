<script lang="ts">
import { defineComponent } from 'vue';
import Sketch from './components/Sketch.vue';

export default defineComponent({
  name: 'App',
  components: {
    Sketch,
  },
});
</script>

<template>
  <sketch />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
