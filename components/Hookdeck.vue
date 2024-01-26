<template>
  <div class="w-full py-20">
    <div>
      <h1
        class="text-[32px] md:text-[48px] font-bold text-center text-text-dark"
      >
        Engineering teams everywhere
        <span class="text-blue-500">trust Hookdeck</span>
      </h1>
      <div
        class="w-full mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        <div
          v-for="card in cards"
          :key="card.id"
          class="w-full p-4 flex flex-col gap-6 rounded-xl border border-[#bbb] shadow"
        >
          <p class="text-[16px] text-text-light">
            {{ card.review }}
          </p>
          <div class="flex gap-4 items-center rounded-lg">
            <div>
              <div class="p-2 border rounded-md">
                <img
                  :src="`/_nuxt/${card.avatar}`"
                  :alt="card.title"
                  class="w-12"
                />
              </div>
            </div>
            <div>
              <h3 class="font-semibold text-[16px]">{{ card.name }}</h3>
              <p class="mt-1 text-[14px]">{{ card.designation }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const cards = [
  {
    id: 1,
    review:
      "Webhooks at Contra are mission-critical and Hookdeck lets us sleep at night. Retries are a lifesaver, the log of all requests makes debugging a breeze.",
    avatar: "assets/images/avatar.webp",
    name: "Sara Vieira",
    designation: "Senior Engineer, Contra",
  },
  {
    id: 2,
    review:
      "Webhooks at Contra are mission-critical and Hookdeck lets us sleep at night. Retries are a lifesaver, the log of all requests makes debugging a breeze.",
    avatar: "assets/images/avatar.webp",
    name: "Sara Vieira",
    designation: "Senior Engineer, Contra",
  },
  {
    id: 3,
    review:
      "Webhooks at Contra are mission-critical and Hookdeck lets us sleep at night. Retries are a lifesaver, the log of all requests makes debugging a breeze.",
    avatar: "assets/images/avatar.webp",
    name: "Sara Vieira",
    designation: "Senior Engineer, Contra",
  },
  {
    id: 4,
    review:
      "Webhooks at Contra are mission-critical and Hookdeck lets us sleep at night. Retries are a lifesaver, the log of all requests makes debugging a breeze.",
    avatar: "assets/images/avatar.webp",
    name: "Sara Vieira",
    designation: "Senior Engineer, Contra",
  },
  {
    id: 5,
    review:
      "Webhooks at Contra are mission-critical and Hookdeck lets us sleep at night. Retries are a lifesaver, the log of all requests makes debugging a breeze.",
    avatar: "assets/images/avatar.webp",
    name: "Sara Vieira",
    designation: "Senior Engineer, Contra",
  },
  {
    id: 6,
    review:
      "Webhooks at Contra are mission-critical and Hookdeck lets us sleep at night. Retries are a lifesaver, the log of all requests makes debugging a breeze.",
    avatar: "assets/images/avatar.webp",
    name: "Sara Vieira",
    designation: "Senior Engineer, Contra",
  },
  {
    id: 7,
    review:
      "Webhooks at Contra are mission-critical and Hookdeck lets us sleep at night. Retries are a lifesaver, the log of all requests makes debugging a breeze.",
    avatar: "assets/images/avatar.webp",
    name: "Sara Vieira",
    designation: "Senior Engineer, Contra",
  },
  {
    id: 8,
    review:
      "Webhooks at Contra are mission-critical and Hookdeck lets us sleep at night. Retries are a lifesaver, the log of all requests makes debugging a breeze.",
    avatar: "assets/images/avatar.webp",
    name: "Sara Vieira",
    designation: "Senior Engineer, Contra",
  },
  {
    id: 9,
    review:
      "Webhooks at Contra are mission-critical and Hookdeck lets us sleep at night. Retries are a lifesaver, the log of all requests makes debugging a breeze.",
    avatar: "assets/images/avatar.webp",
    name: "Sara Vieira",
    designation: "Senior Engineer, Contra",
  },
];
</script>

<style lang="scss" scoped></style>
