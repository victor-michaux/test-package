<template>
  <button class="bg-gray-500 rounded-xl shadow-sm">
      <slot/>
  </button>
</template>

<script>
export default {
    name: 'ButtonSecondary'
}
</script>

<style scoped>
  @tailwind base;

  @tailwind components;

  @tailwind utilities;
</style>