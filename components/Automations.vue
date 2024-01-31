<template>
  <div class="w-full py-20">
    <div class="w-full flex flex-col md:flex-row gap-5 justify-between pb-10 md:pb-24">
      <h1
        class="text-text-dark text-[32px] md:text-[48px] font-semibold leading-tight max-w-[550px]"
      >
        <span class="text-text-light">Integrate</span> automations with your
        stack.
      </h1>
      <p class="max-w-[400px] text-[20px] text-text-dark font-medium">
        Attio Automations allows you to orchestrate your GTM efforts using the
        best tools in your stack.
      </p>
    </div>
    <div class="w-full grid smd:grid-cols-3 lg:grid-cols-3 gap-10">
      <!-- Use v-for to dynamically generate cards -->
      <div v-for="card in cards" :key="card.id" class="flex gap-3 rounded-lg border p-5">
        <div>
          <div class="p-2 border rounded-md">
            <img src="~assets/images/icons/slack.svg" alt="slack" class="w-12" />
            <!-- <img :src="`/_nuxt/${card.icon}`" :alt="card.title" class="w-12" /> -->
          </div>
        </div>
        <div>
          <h3 class="font-semibold text-[16px]">{{ card.title }}</h3>
          <p class="mt-1 text-[14px]">{{ card.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Define an array of data for the cards
import slack from '../assets/images/icons/slack.svg'
const cards = [
  {
    id: 1,
    title: 'Slack',
    description: 'Send notifications to your team when a new lead is created.',
    icon: slack,
  },
  {
    id: 2,
    title: 'Slack',
    description: 'Send notifications to your team when a new lead is created.',
    icon: slack,
  },
  {
    id: 3,
    title: 'Slack',
    description: 'Send notifications to your team when a new lead is created.',
    icon: slack,
  },
  {
    id: 4,
    title: 'Slack',
    description: 'Send notifications to your team when a new lead is created.',
    icon: slack,
  },
  {
    id: 5,
    title: 'Slack',
    description: 'Send notifications to your team when a new lead is created.',
    icon: slack,
  },
  {
    id: 6,
    title: 'Slack',
    description: 'Send notifications to your team when a new lead is created.',
    icon: slack,
  },
];
</script>

<style lang="scss" scoped></style>
