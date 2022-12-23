<script setup lang="ts">
import CopyRight from "@/components/CopyRight.vue";
import type { AnimalType } from "@/utils/constant";
import { ref } from "vue";

const emit = defineEmits(["updateAnimal"]);

const selectItem = ref(-1);

const nextStep = () => {
  if (selectItem.value < 0) return alert("동물을 선택 해주세요");
  emit("updateAnimal", selectItem.value);
};

const selectAnimal = (animal: AnimalType) => {
  selectItem.value = animal;
};
</script>

<template>
  <div class="flex flex-col items-center h-auto bg-green-200 pb-10 pt-14 px-16px mx-auto">
    <div class="flex flex-col mb-20">
      <div class="flex items-end justify-between px-4 mx-auto w-72">
        <img src="@/assets/images/home/select-color-snow.svg" alt="" />
        <img src="@/assets/images/home/select-color-tree.svg" alt="" />
      </div>

      <div class="w-288px py-10 text-xl text-center text-black bg-green-100 rounded-2xl font-Saemaul mx-auto">
        그 사람이 좋아하는<br />
        동물은 무엇인가요?
      </div>
    </div>
    <div class="flex items-center gap-8">
      <div
        :class="{ 'is-active': selectItem === 0 }"
        class="bg-green-500 bg-select-animal-tiger select-animal"
        @click="selectAnimal(0)"
      />
      <div
        :class="{ 'is-active': selectItem === 1 }"
        class="bg-green-500 bg-select-animal-rabbit select-animal"
        @click="selectAnimal(1)"
      />
    </div>
    <button
      @click="nextStep"
      class="py-2 mb-2 border-none text-2xl text-black bg-green-100 rounded-lg max-w-328px w-full font-Saemaul mt-44"
    >
      다음
    </button>
    <CopyRight />
  </div>
</template>

<style lang="scss" scoped>
.select-animal {
  @apply bg-center border-solid border-3px border-white bg-no-repeat bg-contain rounded-full w-28 h-28;
}

.is-active {
  @apply border-dashed border-red-200;
}
</style>
