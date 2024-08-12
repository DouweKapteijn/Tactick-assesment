<template>
  <div id="base" v-if="vehicleData">
    <h1>Voertuigdetails voor kenteken {{ formattedLicensePlate }}</h1>
    <ul class="my-3 space-y-2">
      <li v-if="vehicleData.merk">
        <strong>Merk:</strong> {{ vehicleData.merk }}
      </li>
      <li v-if="vehicleData.handelsbenaming">
        <strong>Naam:</strong> {{ vehicleData.handelsbenaming }}
      </li>
      <li v-if="vehicleData.voertuigsoort">
        <strong>Voertuigsoort:</strong> {{ vehicleData.voertuigsoort }}
      </li>
      <li v-if="formattedDates[0]">
        <strong>Vervaldatum APK:</strong> {{ formattedDates[0] }}
      </li>
      <li v-if="formattedDates[1]">
        <strong>Laatste tenaamstelling:</strong> {{ formattedDates[1] }}
      </li>
      <li v-if="vehicleData.catalogusprijs">
        <strong>Nieuwprijs:</strong> {{ vehicleData.catalogusprijs }}
      </li>
      <li v-if="vehicleData.tellerstandoordeel">
        <strong>Logische tellerstand:</strong>
        {{ vehicleData.tellerstandoordeel }}
      </li>
    </ul>
    <button @click="$router.push('/')">Back to Search</button>
  </div>
  <div v-else class="p-6 bg-white rounded-lg shadow-md">
    <p>Loading vehicle data...</p>
  </div>
</template>

<script src="./VehicleDetails.js"></script>
