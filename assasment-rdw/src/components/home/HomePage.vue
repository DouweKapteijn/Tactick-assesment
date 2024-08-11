<template>
  <div id="home">
    <h1>Kenteken Search</h1>
    <form @submit.prevent="searchLicensePlate">
      <input v-model="searchQuery" placeholder="Enter license plate" />
      <button type="submit">Search</button>
    </form>
  </div>
</template>

<script src="./HomePage.js"></script>
