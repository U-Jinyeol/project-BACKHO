<script setup lang="ts">
import Countdown from "@/components/Countdown/index.vue";
import CopyRight from "@/components/CopyRight.vue";
const emit = defineEmits(["update"]);

const nextStep = () => {
  emit("update");
};
</script>

<template>
  <div class="flex flex-col items-center h-auto px-4 pb-10 bg-green-200 bg-center bg-cover pt-28 bg-main-bg">
    <p class="text-4xl text-white main-font font-Rubik">Merry Christmas</p>
    <Countdown />
    <p class="text-xl text-white font-Saemaul mt-60">올 한 해 가장 고마운 사람을 떠올려 보세요!</p>
    <button @click="nextStep" class="py-2 text-xl text-red-500 bg-red-100 rounded-lg w-80 font-Saemaul mt-44">
      시작하기
    </button>
    <CopyRight />
  </div>
</template>
