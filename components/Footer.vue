<template>
  <footer class="bg-[#1C1D1F] w-full">
    <div
      class="w-full max-w-[500px] smd:max-w-screen-xl mx-auto px-4 flex flex-col gap-8 smd:flex-row py-10"
    >
      <div class="smd:w-1/5 flex smd:flex-col justify-between">
        <a href="#">
          <h2 class="text-[50px] text-white-main">Logo</h2>
        </a>
        <div class="flex gap-8 mt-5">
          <a href="#" class="text-[#8f99a8] hover:text-white-main transition-all">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="#" class="text-[#8f99a8] hover:text-white-main transition-all">
            <i class="fab fa-linkedin-in"></i>
          </a>
          <a href="#" class="text-[#8f99a8] hover:text-white-main transition-all">
            <i class="fab fa-facebook-f"></i>
          </a>
        </div>
      </div>
      <div class="w-full grid grid-cols-2 smd:grid-cols-3 lg:grid-cols-6 text-[#6f7988]">
        <div v-for="(item, index) in footerLinks" :key="index">
          <h3 class="text-[#8f99a8] text-base font-medium">{{ item.title }}</h3>
          <div class="mt-3 flex flex-col gap-2">
            <a
              v-for="(link, index) in item.items"
              :key="index"
              :href="link.link"
              class="text-[#6f7988] text-base hover:text-[#8f99a8] transition-all flex items-center gap-2"
            >
              <span>{{ link.text }}</span>
              <img v-if="link.hasArrow" src="~assets/images/up-right.svg" alt="arrow" />
              <span
                v-if="link.isNew"
                class="text-white-main bg-blue-500 text-[10px] leading-normal py-[2px] px-2 rounded-md"
                >New</span
              >
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-[#232529] py-4">
      <div class=" w-full max-w-[500px] smd:max-w-screen-xl mx-auto px-4">
        <div class="flex gap-y-3 gap-x-8 flex-wrap">
          <a href="#" class="text-[#6f7988] hover:text-[#8f99a8] transition-all">
            © 2023 Attio Ltd. All rights reserved.
          </a>
          <a href="#" class="text-[#6f7988] hover:text-[#8f99a8] transition-all">
            Terms & Conditions
          </a>
          <a href="#" class="text-[#6f7988] hover:text-[#8f99a8] transition-all">
            Privacy Policy
          </a>
        </div>
    </div>
      </div>
  </footer>
</template>

<script setup>
const products = ref([
  { text: "Changelog", link: "#", isNew: true, hasArrow: false },
  { text: "Linkedin extension", link: "#", isNew: false, hasArrow: true },
  { text: "Gmail extension", link: "#", isNew: false, hasArrow: true },
  { text: "iOS app", link: "#", isNew: false, hasArrow: true },
  { text: "Android app", link: "#", isNew: false, hasArrow: true },
  { text: "Security", link: "#", isNew: false, hasArrow: false },
]);
const imports = ref([
  { text: "Salesforce", link: "#", isNew: false, hasArrow: false },
  { text: "Hubspot", link: "#", isNew: false, hasArrow: false },
  { text: "Pipedrive", link: "#", isNew: false, hasArrow: false },
  { text: "Zoho", link: "#", isNew: false, hasArrow: false },
  { text: "Excel", link: "#", isNew: false, hasArrow: false },
  { text: "CSV", link: "#", isNew: false, hasArrow: false },
]);
const company = ref([
  { text: "Customers", link: "#", isNew: true, hasArrow: false },
  { text: "Blog", link: "#", isNew: false, hasArrow: false },
  { text: "Careers", link: "#", isNew: false, hasArrow: false },
  { text: "About", link: "#", isNew: false, hasArrow: false },
]);
const forWhom = ref([
  { text: "Startups", link: "#", isNew: false, hasArrow: false },
  { text: "Deal floe", link: "#", isNew: false, hasArrow: false },
]);
const resources = ref([
  { text: "Startup program", link: "#", isNew: false, hasArrow: false },
  { text: "Help center", link: "#", isNew: false, hasArrow: false },
  { text: "Automation templates", link: "#", isNew: false, hasArrow: false },
  { text: "Developers", link: "#", isNew: false, hasArrow: false },
  { text: "System status", link: "#", isNew: false, hasArrow: true },
]);
const integrations = ref([
  { text: "Email & Calendar", link: "#", isNew: false, hasArrow: false },
  { text: "Census", link: "#", isNew: false, hasArrow: false },
  { text: "Segment", link: "#", isNew: false, hasArrow: false },
  { text: "June", link: "#", isNew: false, hasArrow: false },
  { text: "Slack", link: "#", isNew: false, hasArrow: false },
  { text: "Outreach", link: "#", isNew: false, hasArrow: false },
  { text: "Minmax", link: "#", isNew: false, hasArrow: false },
  { text: "Mailchip", link: "#", isNew: false, hasArrow: false },
  { text: "Typeform", link: "#", isNew: false, hasArrow: false },
  { text: "Pylon", link: "#", isNew: false, hasArrow: false },
  { text: "Zapier", link: "#", isNew: false, hasArrow: true },
  { text: "Make", link: "#", isNew: false, hasArrow: true },
  { text: "Realy.app", link: "#", isNew: false, hasArrow: true },
]);

const footerLinks = ref([
  { title: "Products", items: products },
  { title: "Imports", items: imports },
  { title: "Company", items: company },
  { title: "For whom", items: forWhom },
  { title: "Resources", items: resources },
  { title: "Integrations", items: integrations },
]);
</script>

<style lang="scss" scoped></style>
