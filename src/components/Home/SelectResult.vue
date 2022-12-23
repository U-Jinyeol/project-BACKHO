<script setup lang="ts">
import CopyRight from "@/components/CopyRight.vue";
import { ref, computed } from "vue";

const props = defineProps({
  animalType: {
    type: Number,
    default: 0,
  },
});

const emit = defineEmits(["writeCard"]);

const nextStep = () => {
  emit("writeCard");
};

const selectAnimalType = computed(() =>
  props.animalType === 0 ? "bg-select-result-tiger" : "bg-select-result-rabbit"
);
</script>

<template>
  <div
    :class="`flex h-full flex-col items-center pb-10 bg-center bg-cover ${selectAnimalType} pt-80px px-16px  mx-auto`"
  >
    <div v-if="animalType === 0" class="text-box">
      호랑이를 좋아하는 그 사람에게<br />
      2022 호랑이 해 동안<br />
      고마운 마음을 전해보세요.
    </div>
    <div v-else class="text-box">
      토끼를 좋아하는 그 사람에게<br />
      2023 토끼해의<br />
      새해 인사를 전해보세요.<br />
    </div>
    <button
      @click="nextStep"
      class="py-2 mb-2 border-none text-2xl text-black bg-green-100 rounded-lg max-w-328px w-full font-Saemaul mt-359px"
    >
      다음
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

.text-box {
  @apply flex flex-col mt-16 text-xl leading-5 text-center text-black bg-green-100 py-11 rounded-2xl font-Saemaul max-w-276px w-full;
}
</style>
