<script setup lang="ts">
import CopyRight from "../CopyRight.vue";
import { computed, ref } from "vue";
import { AnimalType, ColorType } from "@/utils/constant";
import axios from "axios";
import { useRoute, useRouter } from "vue-router";
import { shareKakao } from "./kakaoShare";
import TigerRed from "@/components/Result/Tiger/Red.vue";
import TigerGreen from "@/components/Result/Tiger/Green.vue";
import TigerYellow from "@/components/Result/Tiger/Yellow.vue";
import TigerWhite from "@/components/Result/Tiger/White.vue";

interface ICard {
  to: string;
  from: string;
  content: string;
}

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
  <div :class="`h-auto ${selectBg} pt-14 pb-10`">
    <div v-if="animal === AnimalType.TIGER">
      <div v-if="color === ColorType.RED">
        <TigerRed :cardData="cardData" class="px-4" />
      </div>
      <div v-else-if="color === ColorType.GREEN">
        <TigerGreen :cardData="cardData" class="px-4" />
      </div>
      <div v-else-if="color === ColorType.YELLOW">
        <TigerYellow :cardData="cardData" class="px-4" />
      </div>
      <div v-else>
        <TigerWhite :cardData="cardData" class="px-4" />
      </div>
    </div>

    <!-- <div v-else>
      <div v-if="color === ColorType.RED">
        <TigerRed class="px-4" />
      </div>
      <div v-else-if="color === ColorType.GREEN">
        <TigerGreen class="px-4" />
      </div>
      <div v-else-if="color === ColorType.YELLOW">
        <TigerYellow class="px-4" />
      </div>
      <div v-else>
        <TigerWhite class="px-4" />
      </div>
    </div> -->

    <div class="flex flex-col justify-center mt-6">
      <button @click="shareKakao()" class="bg-yellow-200 btn-style">카카오톡 전송</button>
      <button @click="returnToStart" class="bg-green-100 btn-style">처음으로</button>
      <CopyRight />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.btn-style {
  @apply py-2 mx-auto mb-2 text-2xl text-black rounded-lg w-80 font-Saemaul;
}
</style>
