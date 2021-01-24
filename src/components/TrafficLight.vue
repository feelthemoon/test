<template>
  <div
    class="traffic-light"
    :class="{
      stop: color === 'red',
      wait: color === 'yellow',
      go: color === 'green',
    }"
  >
    <span
      class="red traffic-light__signal"
      :class="{ flash: isFlashing && color === 'red' }"
    >
      {{ color === "red" && time >= 0 ? time : "" }}
    </span>
    <span
      class="yellow traffic-light__signal"
      :class="{ flash: isFlashing && color === 'yellow' }"
    >
      {{ color === "yellow" && time >= 0 ? time : "" }}
    </span>
    <span
      class="green traffic-light__signal"
      :class="{ flash: isFlashing && color === 'green' }"
    >
      {{ color === "green" && time >= 0 ? time : "" }}
    </span>
  </div>
</template>

<script>
export default {
  name: "TrafficLight",
  props: {
    color: String,
    time: Number | String,
    isFlashing: Boolean,
  },
};
</script>

<style lang="scss">
.traffic-light {
  display: flex;
  flex-direction: column;
  &.stop {
    .red {
      opacity: 1;
    }
    .green {
      opacity: 0.4;
    }
    .yellow {
      opacity: 0.4;
    }
  }
  &.wait {
    .red {
      opacity: 0.4;
    }
    .green {
      opacity: 0.4;
    }
    .yellow {
      opacity: 1;
    }
  }
  &.go {
    .red {
      opacity: 0.4;
    }
    .green {
      opacity: 1;
    }
    .yellow {
      opacity: 0.4;
    }
  }
  &__signal {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .red {
    background-color: red;
  }
  .green {
    background-color: green;
  }
  .yellow {
    background-color: #d2d200;
    margin: 20px auto;
  }
  .flash {
    animation: flash 0.5s linear infinite both;
  }
}
@keyframes flash {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>
