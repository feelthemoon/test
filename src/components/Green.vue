<template>
  <traffic-light :color="'green'" :time="time" :isFlashing="isFlashing" />
</template>

<script>
import TrafficLight from "./TrafficLight";
export default {
  name: "Green",
  data() {
    return {
      time: this.$getFromStorage("timeGreen") ?? 15,
      isFlashing: false,
    };
  },
  mounted() {
    this.$removeStorageItems("timeYellow", "timeRed");
    this.intervalTick();
  },
  methods: {
    intervalTick() {
      this.interval = setInterval(() => {
        this.$saveToStorage("timeGreen", --this.time);
        if (this.time < 0) {
          this.$clearStorage();
          clearInterval(this.interval);
          this.$router.push("/yellow");
        } else if (this.time < 3 && !this.isFlashing) {
          this.isFlashing = true;
        }
      }, 1000);
    },
  },

  components: {
    TrafficLight,
  },
};
</script>

<style scoped></style>
