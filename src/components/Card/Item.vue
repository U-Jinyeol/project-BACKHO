<script setup lang="ts">
import { ColorType } from "@/utils/constant";
import { ref, watch, computed } from "vue";

const props = defineProps({
  color: {
    type: Number,
    default: 0,
  },
  animal: {
    type: Number,
    default: 0,
  },
});

const emit = defineEmits(["update"]);

const to = ref("");
const from = ref("");
const content = ref("");

watch(
  () => [to.value, from.value, content.value],
  () => {
    emit("update", { to: to.value, from: from.value, content: content.value });
  }
);

const selectBg = computed(() => {
  let bgcolor = "";
  switch (props.color) {
    case ColorType.RED:
      bgcolor = "bg-red-400";
      break;
    case ColorType.GREEN:
      bgcolor = "bg-green-400";
      break;
    case ColorType.YELLOW:
      bgcolor = "bg-card-bg-yellow";
      break;
    case ColorType.WHITE:
      bgcolor = "bg-card-bg-white";
      break;
  }
  return bgcolor;
});
</script>

<template>
  <div>
    <div :class="`px-6 pb-4 ${selectBg} bg-center bg-no-repeat bg-cover rounded-lg`">
      <div class="flex justify-between">
        <div class="flex flex-col md:text-31px text-8.6111vw text-red-600 font-Rubik mt-11 max-w-172px w-full">
          <p>Merry</p>
          <p>Christmas</p>
          <div class="flex mb-4 text-lg mt-7">
            <p class="text-black font-Rubik">to.</p>
            <input
              maxlength="10"
              v-model="to"
              class="text-black underline underline-black font-Saemaul w-full"
              type="text"
              placeholder="해적왕 호랭이"
            />
          </div>
        </div>
        <img src="@/assets/images/card/card-tiger.webp" alt="" class="mt-7 w-26.1111vw h-full md:w-110px" />
      </div>

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

        <textarea
          v-model="content"
          class="items-center justify-center px-4 py-5 text-28px leading-8 h-60 font-Saemaul"
          maxlength="100"
          placeholder="ex. 새해를 준비하는 연말입니다. 여러분 모두가 한 해 마무리 잘 하시고, 행복한 크리스마스 보내길 바랍니다. Merry Christmas!"
        />
        <img src="@/assets/images/card/card-flower.svg" class="absolute left-0 right-0 mx-auto bottom-1 w-9" />
      </div>

      <div class="flex text-lg mt-7 max-w-min mr-0 ml-auto">
        <p class="mr-1 text-black font-Rubik">from.</p>
        <input
          maxlength="10"
          v-model="from"
          class="text-black underline underline-black bg font-Saemaul w-auto"
          type="text"
          placeholder="달나라 토깽이"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
input::placeholder {
  color: black;
}

input {
  background-color: transparent;
}
</style>
