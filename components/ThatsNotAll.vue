<template>
  <div class="w-full py-20">
    <div class="w-full max-w-[600px] smd:max-w-[600px] md:max-w-screen-xl mx-auto px-4">
      <div>
        <h1 class="text-[32px] md:text-[48px] text-text-dark font-bold">
          And that's not all...
        </h1>
        <p class="text-[16px] md:text-[20px] text-text-dark mt-2 max-w-[576px]">
          From task management and templates to file sharing and more, Attio’s got your
          entire team covered.
        </p>
      </div>
      <div class="grid max-w-[400px] mx-auto smd:max-w-[600px] lg:max-w-full smd:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10 md:gap-y-20 mt-12 md:mt-24">
        <div v-for="(item, index) in items">
        <h3 class="text-[#232529] text-base font-medium">
          <i :class="item.icon"></i>
          <span class="ml-3">{{ item.title }}</span> 
        </h3>
        <p class="text-text-light text-base">{{item.description}}</p>
        <a v-if="item.link" :href="item.link" class="text-blue-500 transition text-base font-medium hover:underline group">{{item.linkText}}  
          <!-- <i class="hidden fa-solid fa-arrow-up-right-from-square ml-2 group-hover:inline"></i>  -->
          <img src="~assets/images/up-right.svg" alt="arrow" class="hidden group-hover:inline text-blue-500" />
        </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const items = ref([
  { 
    icon: "fa-solid fa-key",
    title: "Permission controls",
    description: "Adjust permissions and control how teammates interact with your Lists and emails.",
   }, 
  { 
    icon: "fa-regular fa-folder",
    title: "File sharing",
    description: "Share the most important customer documents so that your team is always on the same page.",
   }, 
  { 
    icon: "fa-regular fa-file-lines",
    title: "Real-time notes",
    description: "Stop dreading the note-taking process with effortless, real-time collaboration with your teammates.",
   }, 
  { 
    icon: "fa-regular fa-square-check",
    title: "Task management",
    description: "Attio’s natural language task manager ensures your team will work as one single, coordinated unit.",
   }, 
  { 
    icon: "fa-solid fa-diagram-project",
    title: "APIs and webhooks",
    description: "Get creative by integrating the APIs and webhooks you need to enhance your work.",
    link: "#",
    linkText: "Developer docs",
   }, 
  { 
    icon: "fa-brands fa-linkedin",
    title: "LinkedIn extension",
    description: "Import people and company records from LinkedIn and the web with just one click.",
    link: "#",
    linkText: "Download",
   }, 
  ]);
</script>

<style lang="scss" scoped></style>
