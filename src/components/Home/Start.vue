<script setup lang="ts">
import Countdown from "@/components/Countdown/index.vue";
import CopyRight from "@/components/CopyRight.vue";

const emit = defineEmits(["update"]);

const nextStep = () => {
  emit("update");
};
</script>

<template>
  <div class="flex flex-col items-center justify-center pt-31.38888vw sm:pt-140px">
    <p class="text-10vw md:text-36px text-white main-font font-Rubik mb-17px min-w-max">Merry Christmas</p>
    <Countdown />
    <p class="text-5.5555vw md:text-xl text-white font-Saemaul mt-238px bg-green-200 bg-opacity-50 px-4">
      올 한 해 가장 고마운 사람을 떠올려 보세요!
    </p>
    <button
      @click="nextStep"
      class="py-2 mb-2 border-none text-2xl text-red-500 bg-red-100 rounded-lg font-Saemaul mt-359px max-w-328px w-full"
    >
      시작하기
    </button>
    <CopyRight />
  </div>
</template>
