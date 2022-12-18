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
  <div :class="`flex flex-col items-center h-screen bg-center bg-no-repeat bg-cover ${selectAnimalType}`">
    <div class="mt-3"></div>
    <div
      v-if="animalType === 0"
      class="flex flex-col mt-16 text-xl text-center text-black bg-green-100 py-11 rounded-2xl font-Saemaul px-14"
    >
      호랑이를 좋아하는 그 사람에게<br />
      2022 호랑이 해 동안<br />
      고마운 마음을 전해보세요.
    </div>
    <div
      v-else
      class="flex flex-col mt-16 text-xl text-center text-black bg-green-100 py-11 rounded-2xl font-Saemaul px-14"
    >
      토끼를 좋아하는 그 사람에게<br />
      2023 토끼해의<br />
      새해 인사를 전해보세요.<br />
    </div>
    <div class="mt-10"></div>
    <button @click="nextStep" class="py-3 mb-2 text-2xl text-black bg-green-100 rounded-lg w-80 font-Saemaul mt-80">
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
</style>
