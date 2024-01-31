<!-- <template>
  <div :class="[bgColor, 'py-10 flex justify-between']">
    <button @click="changeColor('red')" >
      red
    </button>
    <button @click="changeColor('blue')">
      blue
    </button>
  </div>
</template>

<script setup lang="js">
import { ref } from 'vue';

const bgColor = ref('');
function changeColor(color) {
  bgColor.value = color === 'red' ? 'bg-red' : (color === 'blue' ? 'bg-blue' : '');
}
</script>

<style scoped>
.bg-red {
  background-color: red;
}

.bg-blue {
  background-color: blue;
}
</style> -->


<script setup lang="js">
import img1 from "../assets/images/use-cases/1.png";
import img2 from "../assets/images/use-cases/2.png";
import img3 from "../assets/images/use-cases/3.png";
import img4 from "../assets/images/use-cases/4.png";
const accordionItems = [
  {
    title: "Sales-led growth.",
    content: "Automate your CRM to perfectly run your sales team processes, freeing your reps to close high-value deals.",
    defaultOpen: true,
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

import { ref } from 'vue';
const imageUrl = ref(img1);

const toggleAccordion = (index) => {
  const items = document.querySelectorAll(".accordion-item");
  const arrows = document.querySelectorAll(".arrow");
  items.forEach((item, i) => {
    if (i !== index) {
      item.classList.add("hidden");
    }
  });
  items[index].classList.remove("hidden");
  arrows.forEach((arrow, i) => {
    if (i !== index) {
      arrow.classList.remove("rotate-180");
    }
  });
  arrows[index].classList.add("rotate-180");
  imageUrl.value = accordionItems[index].image;
  console.log(imageUrl.value + " " + accordionItems[index].image);
};
</script>
<template>
  <div class="w-full">
    <div class="w-full">
      <div class="w-full max-w-screen-xl">
        <div
          class="w-full flex flex-col md:flex-row gap-5 justify-between pb-10 md:pb-20"
        >
          <h1
            class="text-text-dark text-[32px] md:text-[48px] font-semibold leading-tight max-w-[550px]"
          >
            Automate your way to
            <span class="text-text-light">GTM success.</span>
          </h1>
          <p class="max-w-[400px] text-[20px] text-text-dark font-medium">
            No matter your GTM motion or strategy, Attio is the perfect way to
            drive it forward.
          </p>
        </div>
      </div>
      <div class="w-full max-w-screen-xl flex flex-col gap-5 lg:gap-24 md:flex-row">
        <div class="w-full md:w-1/2">
          <div
            v-for="(item, index) in accordionItems"
            :key="index"
            class="w-full"
          >
            <div
              class="w-ful flex cursor-pointer list-none items-center justify-between py-6 text-lg font-medium text-secondary-900 border-y"
              @click="toggleAccordion(index)"
            >
            <h2 class="text-[18px] text-text-main font-medium">
              {{ item.title }}
            </h2>
              <div class="text-secondary-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="block h-4 w-4 transition-all duration-300 arrow"
                  :class="{ 'rotate-180': index === 0 }"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div>
            </div>
            <div
              class="w-full flex justify-between accordion-item"
              :class="{ hidden: !item.defaultOpen }"
            >
              <p class="py-4 text-text-main text-[16px] md:text-[18px]">{{ item.content }}</p>
            </div>
          </div>
        </div>
        <div class="w-full md:w-1/2 flex justify-center md:justify-end">
          <img :src="imageUrl" class="w-full h-auto md:w-auto max-w-[550px] rounded-xl" />
        </div>
      </div>
    </div>
  </div>
</template>
