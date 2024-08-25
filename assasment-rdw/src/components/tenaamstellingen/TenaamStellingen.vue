<template>
  <div id="base" v-if="vehicles">
    <h1>Voertuigen tenaamgesteld in de laatste 7 dagen</h1>
    <ul class="my-3 space-y-2">
      <li
        v-for="vehicle in vehicles"
        :key="vehicle.kenteken"
        class="space-y-2 bg-slate-100 rounded-md p-2 pb-3"
      >
        <header class="text-lg font-bold">
          {{ vehicle.merk }} {{ vehicle.handelsbenaming }}
        </header>
        <strong>Kenteken:</strong> {{ vehicle.kenteken }}
        <p>
          <router-link
            class="bg-blue-500 text-white font-bold py-2 px-4 rounded max-w-[200px] w-full"
            :to="`/vehicle/${vehicle.kenteken}`"
          >
            Details
          </router-link>
        </p>
      </li>
    </ul>
    <button @click="$router.push('/')">Terug naar Zoeken</button>
  </div>
  <div v-else class="p-6 bg-white rounded-lg shadow-md">
    <p>Voertuigen laden...</p>
  </div>
</template>

<script src="./TenaamStellingen.js"></script>
