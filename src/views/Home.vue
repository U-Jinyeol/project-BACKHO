<script setup lang="ts">
import Start from "@/components/Home/Start.vue";
import SelectColor from "@/components/Home/SelectColor.vue";
import SelectAnimal from "@/components/Home/SelectAnimal.vue";
import SelectResult from "@/components/Home/SelectResult.vue";

import { ref } from "vue";
import type { ColorType, AnimalType } from "@/utils/constant";
import { useRouter } from "vue-router";

const router = useRouter();
const step = ref(1);
const selectColor = ref();
const selectAnimal = ref();

const nextStep = () => {
  step.value++;
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
};

const setColor = (color: ColorType) => {
  selectColor.value = color;
  nextStep();
};

const setAnimal = (animal: AnimalType) => {
  selectAnimal.value = animal;
  nextStep();
};

const moveToCard = () => {
  router.push(`/card/?color=${selectColor.value}&animal=${selectAnimal.value}`);
};
</script>

<template>
  <div class="bg-green-200">
    <Start v-if="step === 1" @update="nextStep" />
    <SelectColor v-else-if="step === 2" @update-color="setColor" />
    <SelectAnimal v-else-if="step === 3" @update-animal="setAnimal" />
    <SelectResult v-else :animal-type="selectAnimal" @write-card="moveToCard" />
  </div>
</template>

<style lang="scss" scoped></style>
