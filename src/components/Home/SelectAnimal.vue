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
  <div class="flex flex-col items-center h-screen">
    <div class="flex flex-col mb-20">
      <div class="flex items-end justify-between px-4 mx-auto w-72">
        <img src="@/assets/image/main/select-color-snow.svg" alt="" />
        <img src="@/assets/image/main/select-color-tree.svg" alt="" />
      </div>

      <div class="w-full py-10 text-xl text-center text-black bg-green-100 rounded-2xl font-Saemaul px-14">
        그 사람이 좋아하는<br />
        동물은 무엇인가요?
      </div>
    </div>
    <div class="flex items-center gap-8">
      <div
        :class="{ 'is-active': selectItem === 0 }"
        class="bg-select-animal-tiger select-animal"
        @click="selectAnimal(0)"
      />
      <div
        :class="{ 'is-active': selectItem === 1 }"
        class="bg-select-animal-rabbit select-animal"
        @click="selectAnimal(1)"
      />
    </div>

    <button @click="nextStep" class="py-3 mb-2 text-2xl text-black bg-green-100 rounded-lg w-80 font-Saemaul mt-44">
      선택완료
    </button>
    <CopyRight />
  </div>
</template>

<style lang="scss" scoped>
.select-animal {
  @apply bg-center border-4 border-white bg-no-repeat bg-cover rounded-full w-28 h-28;
}

.is-active {
  @apply border-4 border-dashed border-red-200;
}
</style>
