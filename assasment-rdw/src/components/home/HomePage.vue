<template>
  <div id="base">
    <div>
      <h1>Kentekencheck</h1>
      <form
        @submit.prevent="searchLicensePlate"
        class="space-y-4 flex flex-col"
      >
        <input
          v-model="searchQuery"
          placeholder="kenteken"
          class="max-w-[400px] w-full px-4 py-2 border rounded"
        />
        <button type="submit" class="max-w-[200px] w-full">Zoeken</button>
      </form>
    </div>
    <div>
      <p class="pt-2 pb-4">of ga naar</p>
      <router-link
        to="/tenaamstellingen"
        class="bg-blue-500 text-white font-bold py-2 px-4 rounded max-w-[200px] w-full"
        >Tenaamstellingen van de laatste 7 dagen</router-link
      >
    </div>
  </div>
</template>

<script src="./HomePage.js"></script>
