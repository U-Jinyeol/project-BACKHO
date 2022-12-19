<script setup lang="ts">
import { ref, watch } from "vue";
const emit = defineEmits(["update"]);

const to = ref("");
const from = ref("");
const content = ref("");

watch(
  () => [to.value, from.value, content.value],
  () => {
    emit("update", { to: to.value, from: from.value, content: content.value });
  }
);
</script>

<template>
  <div>
    <div class="w-full px-6 pb-4 bg-green-400 rounded-lg">
      <div class="flex">
        <div class="flex flex-col text-3xl text-red-600 font-Rubik mt-11">
          <p>Merry</p>
          <p>Christmas</p>
          <div class="flex mb-4 text-lg mt-7">
            <p class="mr-1 text-white font-Rubik">to.</p>
            <input
              maxlength="10"
              v-model="to"
              class="text-white underline bg-green-400 underline-white font-Saemaul"
              type="text"
              placeholder="해적왕 호랭이"
            />
          </div>
        </div>
        <img src="@/assets/images/card/card-tiger.webp" alt="" class="h-auto mt-7 w-28" height="auto" />
      </div>
      <div class="relative flex flex-col">
        <img
          src="@/assets/images/card/card-tape-green.webp"
          alt=""
          class="absolute left-0 right-0 w-20 mx-auto -top-3"
        />
        <textarea
          v-model="content"
          class="items-center justify-center w-full px-4 py-5 text-sm leading-5 h-60 font-Saemaul"
          maxlength="240"
          placeholder="ex. 새해를 준비하는 연말입니다. 여러분 모두가 한 해 
마무리 잘 하시고, 행복한 크리스마스 보내길 바랍니다. Merry Christmas!"
        />
        <img src="@/assets/images/card/card-flower.svg" class="absolute left-0 right-0 mx-auto bottom-1 w-9" />
      </div>

      <div class="flex justify-end text-lg mt-7">
        <p class="mr-1 text-white font-Rubik">from.</p>
        <input
          maxlength="10"
          v-model="from"
          class="text-white underline bg-green-400 underline-white font-Saemaul"
          type="text"
          placeholder="달나라 토깽이"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
