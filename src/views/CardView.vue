<script setup lang="ts">
import Card from "@/components/Card/index.vue";
import { AnimalType } from "@/utils/constant";
import { computed } from "vue";

const urlParams = window.location.search;
console.log("urlParams", urlParams);
const color = computed(() => Number(urlParams.split("&")[0].split("=")[1]) ?? 0);
const animal = computed(() => Number(urlParams.split("&")[1].split("=")[1]) ?? 0);

// const cardType = () => {
//   switch (animal) {
//     case AnimalType.TIGER:
// 			if()
//       break;
//     case AnimalType.RABBIT:
//       break;
//   }
// };
</script>

<template>
  <Card class="h-screen pt-14" />
</template>

<style scoped></style>
