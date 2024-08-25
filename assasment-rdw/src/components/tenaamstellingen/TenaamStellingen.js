export default {
  data() {
    return {
      vehicles: [],
    };
  },
  methods: {
    async fetchRecentVehicles() {
      try {
        // get the last 7 days
        const dates = [];
        for (let i = 0; i <= 7; i++) {
          const date = new Date();
          date.setDate(date.getDate() - i);
          dates.push(date.toISOString().split("T")[0].replace(/-/g, ""));
        }

        // create a query to fetch all dates
        const query = dates
          .map((date) => `datum_tenaamstelling='${date}'`)
          .join(" OR ");

        const response = await fetch(
          `https://opendata.rdw.nl/resource/m9d7-ebf2.json?$where=${query}`
        );
        let data = await response.json();

        if (data.length > 0) {
          // data sorted by most recent registration date
          data.sort((a, b) =>
            b.datum_tenaamstelling.localeCompare(a.datum_tenaamstelling)
          );
          this.vehicles = data;
        } else {
          alert(
            "Geen voertuigen gevonden die in de laatste 7 dagen zijn tenaamgesteld."
          );
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        alert("Er is een fout opgetreden bij het ophalen van de gegevens");
      }
    },
  },
  async created() {
    await this.fetchRecentVehicles();
  },
};
