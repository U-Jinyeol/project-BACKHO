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
  <div class="mx-auto bg-green-200 max-w-414px w-full h-screen">
    <div v-if="step === 1" class="flex flex-col items-center px-4 bg-cover bg-center h-screen bg-main-bg fade-in-box">
      <Start @update="nextStep" />
    </div>
    <SelectColor v-else-if="step === 2" @update-color="setColor" class="fade-in-box" />
    <SelectAnimal v-else-if="step === 3" @update-animal="setAnimal" class="fade-in-box" />
    <SelectResult v-else :animal-type="selectAnimal" @write-card="moveToCard" class="fade-in-box" />
  </div>
</template>

<style>
.fade-in-box {
  animation: fadein 1s;
  -moz-animation: fadein 1s; /* Firefox */
  -webkit-animation: fadein 1s; /* Safari and Chrome */
  -o-animation: fadein 1s; /* Opera */
}
@keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@-moz-keyframes fadein {
  /* Firefox */
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@-webkit-keyframes fadein {
  /* Safari and Chrome */
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@-o-keyframes fadein {
  /* Opera */
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
