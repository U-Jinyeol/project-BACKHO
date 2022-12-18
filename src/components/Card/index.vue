<script setup lang="ts">
import Tiger from "./Tiger/index.vue";
import CopyRight from "../CopyRight.vue";
import { computed, ref } from "vue";
import { AnimalType } from "@/utils/constant";
import axios from "axios";

const urlParams = window.location.search;
console.log("urlParams", urlParams);
const color = computed(() => Number(urlParams.split("&")[0].split("=")[1]) ?? 0);
const animal = computed(() => Number(urlParams.split("&")[1].split("=")[1]) ?? 0);
const cardContent = ref({
  to: "",
  from: "",
  content: "",
});
const setCard = (card) => {
  console.log("setCard", card);
  cardContent.value = card;
};

const addCard = async () => {
  try {
    const result = await axios.post("https://doremilan.shop/card", cardContent.value);
    console.log("서버통신", result);
  } catch (e) {
    console.log(e);
  }
};
</script>

<template>
  <div class="h-screen bg-red-300">
    <div v-if="animal === AnimalType.TIGER">
      <Tiger class="px-4" @update="setCard" />
    </div>
    <div v-else></div>
    <div class="flex flex-col justify-center">
      <button
        @click="addCard"
        class="py-2 mx-auto mt-20 mb-2 text-2xl text-black bg-green-100 rounded-lg w-80 font-Saemaul"
      >
        작성 완료
      </button>
      <CopyRight />
    </div>
  </div>
</template>

<style scoped></style>
