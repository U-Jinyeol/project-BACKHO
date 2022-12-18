<script setup lang="ts">
import Start from "@/components/Home/Start.vue";
import SelectColor from "@/components/Home/SelectColor.vue";
import SelectAnimal from "@/components/Home/SelectAnimal.vue";
import SelectResult from "@/components/Home/SelectResult.vue";

import { ref } from "vue";
import type { ColorType, AnimalType } from "@/utils/constant";
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const step = ref(1);
const selectColor = ref();
const selectAnimal = ref();

const nextStep = () => {
  step.value++;
};

const setColor = (color: ColorType) => {
  console.log("ColorType", color);
  selectColor.value = color;
  nextStep();
};

const setAnimal = (animal: AnimalType) => {
  console.log("AnimalType", animal);
  selectAnimal.value = animal;
  nextStep();
};

const moveToCard = () => {
  router.push(`/card/?color=${selectColor.value}&animal=${selectAnimal.value}`);
};
</script>

<template>
  <div class="bg-green-200 pt-14">
    <Start v-if="step === 1" @update="nextStep" />
    <SelectColor v-else-if="step === 2" @update-color="setColor" />
    <SelectAnimal v-else-if="step === 3" @update-animal="setAnimal" />
    <SelectResult v-else :animal-type="selectAnimal" @write-card="moveToCard" />
  </div>
</template>

<style lang="scss" scoped></style>
