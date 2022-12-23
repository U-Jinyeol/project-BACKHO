<script setup lang="ts">
import moment from "moment";
import { ref, computed } from "vue";
import CountDownItem from "@/components/Countdown/Item.vue";

const dDay = ref(false);

const salesTimeStamp = (day: moment.MomentInput) => {
  return moment(day).format();
};

const christMasDay = salesTimeStamp("2022-12-25 00:00:00");
const salesDay = ref(christMasDay);

const theEnd = (payload: Date) => {
  console.log("payload", payload);
  dDay.value = true;
};
</script>

<template>
  <div v-if="!dDay" class="bg-red-200 w-150px px-5 py-2px bg-opacity-80 animate-bounce">
    <CountDownItem @update:timestampEnd="theEnd" :timestamp-end="salesDay" />
  </div>
</template>
