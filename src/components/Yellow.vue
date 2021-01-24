<template>
  <traffic-light :color="'yellow'" :time="time" :isFlashing="isFlashing" />
</template>

<script>
import TrafficLight from "./TrafficLight";
export default {
  name: "Yellow",
  components: {
    TrafficLight,
  },
  data() {
    return {
      prevRoute: null,
      time: this.$getFromStorage("timeYellow") ?? 3,
      isFlashing: false,
    };
  },
  beforeRouteEnter(to, from, next) {
    next((cur) => {
      cur.prevRoute = from;
    });
  },
  mounted() {
    this.$removeStorageItems("timeGreen", "timeRed");
    this.intervalTick();
  },
  methods: {
    intervalTick() {
      this.interval = setInterval(() => {
        this.$saveToStorage("timeYellow", --this.time);
        if (this.time < 0) {
          this.$clearStorage();
          clearInterval(this.interval);
          this.prevRoute.path === "/red" || this.prevRoute.path === "/"
            ? this.$router.push("/green")
            : this.$router.push("/red");
        } else if (this.time < 3 && !this.isFlashing) {
          this.isFlashing = true;
        }
      }, 1000);
    },
  },
};
</script>

<style scoped></style>
