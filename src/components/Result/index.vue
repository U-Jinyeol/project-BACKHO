<script setup lang="ts">
import CopyRight from "../CopyRight.vue";
import { computed, ref } from "vue";
import { ColorType } from "@/utils/constant";
import axios from "axios";
import { useRoute, useRouter } from "vue-router";
import { shareKakao } from "./kakaoShare";
import Item from "@/components/Result/Item.vue";

const urlParams = window.location.search;
const color = computed(() => Number(urlParams.split("&")[0].split("=")[1]) ?? 0);
const animal = computed(() => Number(urlParams.split("&")[1].split("=")[1]) ?? 0);

const cardData = ref({
  to: "",
  from: "",
  content: "",
  cardId: "",
});

const { params } = useRoute();
const router = useRouter();

const returnToStart = () => {
  router.push("/");
};

const selectBg = computed(() => {
  let bgcolor = "";
  switch (color.value) {
    case ColorType.RED:
      bgcolor = "bg-red-300";
      break;
    case ColorType.GREEN:
      bgcolor = "bg-green-600";
      break;
    case ColorType.YELLOW:
      bgcolor = "bg-yellow-100";
      break;
    case ColorType.WHITE:
      bgcolor = "bg-gray-100";
      break;
  }
  return bgcolor;
});

const fetchCard = async () => {
  try {
    const { data } = await axios.get(`https://doremilan.shop/card/${params.id}`);
    cardData.value = data;
  } catch (e) {
    console.log(e);
  }
};
fetchCard();
</script>

<template>
  <div :class="`h-auto ${selectBg}`">
    <Item :cardData="cardData" class="px-4" :color="color" :animal="animal" />
    <div :class="`flex flex-col justify-center mt-24px px-16px ${selectBg}`">
      <button @click="shareKakao()" class="bg-yellow-200 btn-style">카카오톡 전송</button>
      <button @click="returnToStart" class="bg-green-100 btn-style">처음으로</button>
      <CopyRight />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.btn-style {
  @apply py-2 mx-auto mb-2 text-2xl text-black rounded-lg max-w-328px w-full font-Saemaul;
}
</style>
