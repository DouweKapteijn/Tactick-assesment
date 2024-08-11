<template>
  <div id="vehicle-details" v-if="vehicleData">
    <h1>Vehicle Details for {{ vehicleData.kenteken }}</h1>
    <ul>
      <li>Merk: {{ vehicleData.merk }}</li>
      <li>Handelsbenaming: {{ vehicleData.handelsbenaming }}</li>
      <li>Voertuigsoort: {{ vehicleData.voertuigsoort }}</li>
      <li>Vervaldatum APK: {{ vehicleData.vervaldatum_apk }}</li>
    </ul>
    <button @click="$router.push('/')">Back to Search</button>
  </div>
  <div v-else>
    <p>Loading vehicle data...</p>
  </div>
</template>

<script src="./VehicleDetails.js"></script>
