<script setup lang="ts">
import moment from "moment";
import { ref } from "vue";
import CountDownItem from "@/components/Countdown/Item.vue";

const salesTimeStamp = (day: moment.MomentInput) => {
  return moment.utc(day).format();
};

const christMasDay = salesTimeStamp("2022-12-25 00:00:00");

const salesDay = ref(christMasDay);
</script>

<template>
  <CountDownItem :timestamp-end="salesDay" />
</template>
