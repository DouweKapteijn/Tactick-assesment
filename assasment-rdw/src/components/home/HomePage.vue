<template>
  <div id="base">
    <h1>Kentekencheck</h1>
    <form @submit.prevent="searchLicensePlate" class="space-y-4 flex flex-col">
      <input
        v-model="searchQuery"
        placeholder="kenteken"
        class="max-w-[400px] w-full px-4 py-2 border rounded"
      />
      <button type="submit" class="max-w-[200px] w-full">Zoeken</button>
    </form>
  </div>
</template>

<script src="./HomePage.js"></script>
