<script setup lang="ts">
defineProps({
  cardData: {
    type: Object,
    default: {
      card: {
        to: "",
        from: "",
        cardId: "",
        content: "",
      },
    },
  },
});
</script>

<template>
  <div class="h-full">
    <div class="w-full px-6 pb-4 bg-center bg-no-repeat bg-cover rounded-lg bg-card-bg-yellow">
      <div class="flex items-center mb-4 text-lg">
        <p class="mr-1 text-black font-Rubik">to.</p>
        <p class="text-black underline underline-white font-Saemaul">{{ cardData?.card?.to }}</p>
      </div>
      <img src="@/assets/images/result/result-tiger.webp" alt="" class="mb-4" />
      <div class="relative flex flex-col">
        <img
          src="@/assets/images/card/card-tape-yellow.webp"
          alt=""
          class="absolute left-0 right-0 w-20 mx-auto -top-3"
        />
        <div
          class="items-center justify-center w-full px-4 py-5 text-xl leading-5 text-black break-all bg-white h-60 font-Saemaul"
        >
          {{ cardData?.card?.content }}
        </div>
        <img src="@/assets/images/card/card-flower.svg" class="absolute left-0 right-0 mx-auto bottom-1 w-9" />
      </div>

      <div class="flex justify-end text-lg mt-7">
        <p class="mr-1 text-black font-Rubik">from.</p>
        <p class="text-black underline underline-white font-Saemaul">{{ cardData?.card?.from }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
