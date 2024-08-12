export default {
  data() {
    return {
      vehicleData: null,
    };
  },
  computed: {
    formattedLicensePlate() {
      return this.formatLicensePlate(this.vehicleData.kenteken);
    },
    formattedDates() {
      return [
        this.formatDate(this.vehicleData.vervaldatum_apk),
        this.formatDate(this.vehicleData.datum_tenaamstelling),
      ];
    },
  },
  methods: {
    formatLicensePlate(kenteken) {
      const patterns = [
        /^([A-Z]{2})([0-9]{2})([0-9]{2})$/, // XX-99-99
        /^([0-9]{2})([0-9]{2})([A-Z]{2})$/, // 99-99-XX
        /^([0-9]{2})([A-Z]{2})([0-9]{2})$/, // 99-XX-99
        /^([A-Z]{2})([0-9]{2})([A-Z]{2})$/, // XX-99-XX
        /^([A-Z]{2})([A-Z]{2})([0-9]{2})$/, // XX-XX-99
        /^([0-9]{2})([A-Z]{2})([A-Z]{2})$/, // 99-XX-XX
        /^([A-Z]{1})([0-9]{3})([A-Z]{2})$/, // X-999-XX
        /^([A-Z]{2})([0-9]{3})([A-Z]{1})$/, // XX-999-X
        /^([A-Z]{3})([0-9]{2})([A-Z]{1})$/, // XXX-99-X
        /^([A-Z]{1})([0-9]{2})([A-Z]{3})$/, // X-99-XXX
      ];

      for (const pattern of patterns) {
        if (pattern.test(kenteken)) {
          return kenteken.replace(pattern, "$1-$2-$3");
        }
      }
      return kenteken;
    },
    formatDate(dateString) {
      // yyyymmdd => dd-mm-yyyy
      const regex = /^(\d{4})(\d{2})(\d{2})$/;
      if (regex.test(dateString)) {
        return dateString.replace(regex, "$3-$2-$1");
      }
      return dateString;
    },
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
        alert("Geen data gevonden");
        this.$router.push("/");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      alert("Er is een fout opgetreden bij het ophalen van de gegevens");
    }
  },
};
