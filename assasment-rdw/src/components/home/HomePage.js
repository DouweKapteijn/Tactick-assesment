export default {
  data() {
    return {
      searchQuery: "",
    };
  },
  methods: {
    async searchLicensePlate() {
      try {
        const response = await fetch(
          `https://opendata.rdw.nl/resource/m9d7-ebf2.json?kenteken=${this.searchQuery.toUpperCase()}`
        );
        const data = await response.json();

        if (data.length > 0) {
          this.$router.push(`/vehicle/${this.searchQuery.toUpperCase()}`);
        } else {
          alert("Geen voertuig gevonden met dit kenteken.");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        alert("Er is een fout opgetreden bij het ophalen van de gegevens");
      }
    },
  },
};
