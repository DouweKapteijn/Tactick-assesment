export default {
  data() {
    return {
      vehicleData: null,
    };
  },
  async created() {
    const kenteken = this.$route.params.kenteken;
    try {
      const response = await fetch(
        `https://opendata.rdw.nl/resource/m9d7-ebf2.json?kenteken=${kenteken}`
      );
      const data = await response.json();

      if (data.length > 0) {
        this.vehicleData = data[0];
      } else {
        alert("Vehicle data not found");
        this.$router.push("/");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      alert("There was an error fetching data from the API.");
    }
  },
};
