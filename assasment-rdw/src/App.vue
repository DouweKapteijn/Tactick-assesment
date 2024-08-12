<template>
  <div class="bg-gray-100">
    <div
      id="app"
      class="flex max-w-screen-xl px-4 py-8 mx-auto font-semibold font-sans min-h-screen"
    >
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>
