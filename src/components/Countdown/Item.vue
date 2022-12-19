<script setup lang="ts">
import moment from "moment";
import { ref, computed, watch, onUnmounted } from "vue";
import { dayCounter, hourCounter, minuteCounter, secondCounter } from "@/utils/countdown";

const emit = defineEmits(["update:timestampEnd"]);

const props = defineProps({
  timestampEnd: {
    type: String,
    default: moment.utc().format(),
  },
});

const remainingDate = ref(0);
const days = computed(() => dayCounter(remainingDate.value));
const hours = computed(() => hourCounter(remainingDate.value));
const minutes = computed(() => minuteCounter(remainingDate.value));
const seconds = computed(() => secondCounter(remainingDate.value));
const endDate = ref(props.timestampEnd);

watch(
  () => props.timestampEnd,
  () => {
    endDate.value = props.timestampEnd;
  }
);

const updateTime = () => {
  const today = moment.utc().format();
  const diff = moment(endDate.value).diff(today);
  if (diff < 0) emit("update:timestampEnd", today);
  return (remainingDate.value = diff);
};

updateTime();
const timer = setInterval(updateTime, 1000);

onUnmounted(() => {
  clearInterval(timer);
});
</script>

<template>
  <div class="flex justify-between text-3xl text-white w-28 font-Saemaul">
    <p>
      {{ days }}
    </p>
    :
    <p>
      {{ hours }}
    </p>
    :
    <p>
      {{ minutes }}
    </p>
    :
    <p>
      {{ seconds }}
    </p>
  </div>
</template>

<style lang="scss" scoped></style>
