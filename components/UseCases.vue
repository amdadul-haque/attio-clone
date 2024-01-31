<script setup lang="js">
import img1 from "../assets/images/use-cases/1.png";
import img2 from "../assets/images/use-cases/2.png";
import img3 from "../assets/images/use-cases/3.png";
import img4 from "../assets/images/use-cases/4.png";
const accordionItems = [
  {
    title: "Sales-led growth.",
    content: "Automate your CRM to perfectly run your sales team processes, freeing your reps to close high-value deals.",
    image: img1,
  },
  {
    title: "Product-led growth.",
    content: "Get full context on users across your whole organization by automatically combining product and CRM data.",
    image: img2,
  },
  {
    title: "Product-led sales.",
    content: "Engage PQLs, nurture leads, and upsell to your existing users thanks to in-depth product data.3",
    image: img3,
  },
  {
    title: "RevOps.",
    content: "Fine-tune your RevOps efforts and extract more MRR from every automation you build.",
    image: img4,
  },
];
</script>
<template>
  <div class="w-full">
    <div class="w-full">
      <div class="w-full max-w-screen-xl relative">
        <details
          v-for="(item, index) in accordionItems"
          :key="index"
          class="group w-full"
        >
          <summary
            class="w-full md:w-1/2 flex cursor-pointer list-none items-center justify-between py-4 text-lg font-medium text-secondary-900 "
          >
            {{ item.title }}
            <div class="text-secondary-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="block h-5 w-5 transition-all duration-300 group-open:rotate-180"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
          </summary>
          <div class="w-full flex justify-between">
            <div class="w-1/2">
              <p class="pb-4 text-secondary-500">{{ item.content }}</p>
            </div>
            <div class="w-1/2 flex justify-center md:justify-end">
              <img :src="item.image" alt="no image" class="w-auto h-[300px] md:h-full absolute top-full md:top-0 left-0 right-0 md:right-0 mx-auto" />
            </div>
          </div>
        </details>
      </div>
    </div>
  </div>
</template>
