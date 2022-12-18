<script setup lang="ts">
import CopyRight from "@/components/CopyRight.vue";
import type { ColorType } from "@/utils/constant";
import { ref } from "vue";

const emit = defineEmits(["updateColor"]);

const selectItem = ref(-1);
const nextStep = () => {
  if (selectItem.value < 0) return alert("색상을 선택 해주세요");
  emit("updateColor", selectItem.value);
};

const selectColor = (color: ColorType) => {
  selectItem.value = color;
};
</script>

<template>
  <div class="flex flex-col items-center h-screen">
    <div class="flex flex-col mb-28">
      <div class="flex items-end justify-between px-4 mx-auto w-72">
        <img src="@/assets/image/main/select-color-snow.svg" alt="" />
        <img src="@/assets/image/main/select-color-tree.svg" alt="" />
      </div>

      <div class="w-full py-10 text-xl text-center text-black bg-green-100 rounded-2xl font-Saemaul px-14">
        그 사람과 잘 어울리는 색을<br />
        선택 해주세요
      </div>
    </div>

    <div class="flex items-center gap-7">
      <div :class="{ 'is-active': selectItem === 0 }" class="bg-red-400 select-color" @click="selectColor(0)" />
      <div :class="{ 'is-active': selectItem === 1 }" class="bg-green-300 select-color" @click="selectColor(1)" />
      <div
        :class="{ 'is-active': selectItem === 2 }"
        class="bg-center bg-no-repeat bg-cover bg-select-color-yellow select-color"
        @click="selectColor(2)"
      />
      <div
        :class="{ 'is-active': selectItem === 3 }"
        class="bg-center bg-no-repeat bg-cover bg-select-color-white select-color"
        @click="selectColor(3)"
      />
    </div>

    <button @click="nextStep" class="py-3 mb-2 text-2xl text-black bg-green-100 rounded-lg w-80 font-Saemaul mt-44">
      다음
    </button>
    <CopyRight />
  </div>
</template>

<style lang="scss" scoped>
.select-color {
  @apply border-4 border-white rounded-xl w-14 h-14;
}

.is-active {
  @apply border-dashed border-red-200;
}
</style>
