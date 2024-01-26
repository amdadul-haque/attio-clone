<!-- components/Accordion.vue -->

<template>
  <div>
    <div v-for="(item, index) in accordionItems" :key="index" @click="toggleAccordion(index)" class="accordion-item cursor-pointer">
      <div class="accordion-question">
        <span :class="{ 'mr-2': true, 'rotate-180': item.expanded }"><i :class="item.expanded ? 'fas fa-chevron-down' : 'fas fa-chevron-right'"></i></span>
        {{ item.question }}
      </div>
      <div v-if="item.expanded" class="accordion-answer">
        {{ item.answer }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      accordionItems: [
        { question: 'Question 1', answer: 'Answer 1', expanded: true },
        { question: 'Question 2', answer: 'Answer 2', expanded: false },
        // Add more items as needed
      ],
    };
  },
  methods: {
    toggleAccordion(index) {
      this.accordionItems.forEach((item, i) => {
        item.expanded = i === index && !item.expanded;
      });
    },
  },
};
</script>

<style scoped>
.accordion-item {
  margin-bottom: 1rem;
}

.accordion-question {
  display: flex;
  align-items: center;
  padding: 0.5rem;
  background-color: #f0f0f0;
  border: 1px solid #ddd;
}

.accordion-answer {
  padding: 0.5rem;
  background-color: #fff;
  border: 1px solid #ddd;
}

.rotate-180 {
  transform: rotate(180deg);
}
</style>
