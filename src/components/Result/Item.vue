<script setup lang="ts">
import { AnimalType, ColorType } from "@/utils/constant";
import { computed } from "vue";

const props = defineProps({
  cardData: {
    type: Object,
    default: {
      card: {
        to: "",
        from: "",
        cardId: "",
        content: "",
      },
    },
  },
  color: {
    type: Number,
    default: 0,
  },
  animal: {
    type: Number,
    default: 0,
  },
});

const selectBg = computed(() => {
  let bgcolor = "";
  let tapeImg = "";
  switch (props.color) {
    case ColorType.RED:
      bgcolor = "bg-red-400";
      tapeImg = "card-tape";
      break;
    case ColorType.GREEN:
      bgcolor = "bg-green-400";
      tapeImg = "card-tape-green";

      break;
    case ColorType.YELLOW:
      bgcolor = "bg-card-bg-yellow";
      tapeImg = "card-tape-yellow";

      break;
    case ColorType.WHITE:
      bgcolor = "bg-card-bg-white";
      tapeImg = "card-tape-white";

      break;
  }
  return { bgcolor, tapeImg };
});
</script>

<template>
  <div class="h-full">
    <div
      :class="`px-6 pt-4 pb-4 ${selectBg.bgcolor} rounded-lg flex flex-col justify-center bg-cover bg-center bg-no-repeat`"
    >
      <img
        v-if="animal === AnimalType.TIGER"
        src="@/assets/images/result/result-tiger.webp"
        alt=""
        class="mt-7 max-w-296px w-full mb-4 h-full mx-auto animate-bounce"
      />
      <img
        v-else
        src="@/assets/images/result/result-rabbit.webp"
        alt=""
        class="mt-7 max-w-296px w-full mb-4 h-full mx-auto animate-bounce"
      />
      <div class="relative flex flex-col">
        <img
          v-if="color === ColorType.RED"
          src="@/assets/images/card/card-tape.png"
          alt=""
          class="absolute left-0 right-0 w-20 mx-auto -top-3"
        />
        <img
          v-if="color === ColorType.YELLOW"
          src="@/assets/images/card/card-tape-yellow.webp"
          alt=""
          class="absolute left-0 right-0 w-20 mx-auto -top-3"
        />
        <img
          v-if="color === ColorType.GREEN"
          src="@/assets/images/card/card-tape-green.webp"
          alt=""
          class="absolute left-0 right-0 w-20 mx-auto -top-3"
        />
        <img
          v-if="color === ColorType.WHITE"
          src="@/assets/images/card/card-tape-white.webp"
          alt=""
          class="absolute left-0 right-0 w-20 mx-auto -top-3"
        />
        <div class="items-center px-4 py-5 text-20px leading-5 text-black break-all bg-white h-60 font-Saemaul">
          <div class="flex items-center text-25px text-black mb-20px">
            <p class="mr-1 font-Rubik">to.</p>
            <p class="underline bg-white underline underline-black font-Saemaul">{{ cardData?.card?.to }}</p>
          </div>
          <p class="text-20px leading-7">{{ cardData?.card?.content }}</p>
          <div class="flex text-25px text-black absolute bottom-20px right-20px">
            <p class="mr-1 font-Rubik">from.</p>
            <p class="underline bg-white-400 underline-black font-Saemaul">{{ cardData?.card?.from }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
