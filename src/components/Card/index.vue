<script setup lang="ts">
import CopyRight from "../CopyRight.vue";
import { computed, ref } from "vue";
import { ColorType } from "@/utils/constant";
import axios from "axios";
import { useRouter } from "vue-router";
import Item from "@/components/Card/Item.vue";

interface ICard {
  to: string;
  from: string;
  content: string;
}

const urlParams = window.location.search;
const color = computed(() => Number(urlParams.split("&")[0].split("=")[1]) ?? 0);
const animal = computed(() => Number(urlParams.split("&")[1].split("=")[1]) ?? 0);
const cardContent = ref({
  to: "",
  from: "",
  content: "",
});
const setCard = (card: ICard) => {
  cardContent.value = card;
};
const router = useRouter();

const addCard = async () => {
  if (cardContent.value.to === "") return alert("to를 작성해주세요");
  if (cardContent.value.from === "") return alert("from을 작성해주세요");
  if (cardContent.value.content === "") return alert("내용을 작성해주세요");

  try {
    const { data } = await axios.post("https://doremilan.shop/card", cardContent.value);
    router.push(`/result/${data.card.cardId}?color=${color.value}&animal=${animal.value}`);
  } catch (e) {
    console.log(e);
  }
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
</script>

<template>
  <div :class="`h-screen ${selectBg}`">
    <Item class="px-4" :color="color" :animal="animal" @update="setCard" />

    <div class="flex flex-col items-center justify-center mt-24px px-16px">
      <button
        @click="addCard"
        class="py-2 mb-2 border-none text-2xl text-black bg-green-100 rounded-lg max-w-328px w-full font-Saemaul mt-84px"
      >
        작성 완료
      </button>
      <CopyRight />
    </div>
  </div>
</template>

<style scoped></style>
