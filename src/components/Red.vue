<template>
  <traffic-light :color="'red'" :time="time" :isFlashing="isFlashing" />
</template>

<script>
import TrafficLight from "./TrafficLight";
export default {
  name: "Red",
  components: {
    TrafficLight,
  },
  data() {
    return {
      time: this.$getFromStorage("timeRed") ?? 10,
      isFlashing: false,
    };
  },
  mounted() {
    this.$removeStorageItems("timeYellow", "timeGreen");
    this.intervalTick();
  },
  methods: {
    intervalTick() {
      this.interval = setInterval(() => {
        this.$saveToStorage("timeRed", --this.time);
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
};
</script>

<style scoped></style>
