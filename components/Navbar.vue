<!-- components/Navbar.vue -->
<template>
  <nav class="p-4 pb-0 smd:pb-4 sticky top-0 bg-white-bg border-b z-[100]">
    <div class="max-w-[600px] smd:max-w-screen-xl mx-auto flex items-center justify-between">
      <div class="flex items-center gap-10">
        <a href="/" class="text-text-dark font-bold text-xl">Your Logo</a>
        <div class="hidden smd:flex ">
          <a href="#" class="text-text-dark px-4 py-[6px] rounded-md hover:bg-gray-100 transition-all">Home</a>
          <a href="#" class="text-text-dark px-4 py-[6px] rounded-md hover:bg-gray-100 transition-all">About</a>
          <a href="#" class="text-text-dark px-4 py-[6px] rounded-md hover:bg-gray-100 transition-all">Services</a>
          <a href="#" class="text-text-dark px-4 py-[6px] rounded-md hover:bg-gray-100 transition-all">Contact</a>
        </div>
      </div>
      <div class="hidden smd:flex gap-3">
        <a href="#">
          <button
            class="bg-transparent text-black-main text-[16px] font-semibold px-4 py-2 rounded-xl border border-gray-400 hover:border-black-main transition-all"
          >
            Sign In
          </button>
        </a>
        <a href="#">
          <button
            class="bg-black-main hover:bg-black-text text-white-main text-[16px] font-semibold px-4 py-2 rounded-xl transition-all"
          >
            Start for free
          </button>
        </a>
      </div>
      <!-- Add a responsive menu button for small screens -->
      <button @click="toggleMenu" class="smd:hidden text-text-dark">
        <i v-if="isMenuOpen" class="fas fa-times"></i>
        <i v-else class="fas fa-bars"></i>
      </button>
    </div>
    <!-- Responsive menu for small screens -->
    <div v-if="isMenuOpen" class="w-full max-w-[600px] smd:max-w-screen-xl mx-auto smd:hidden mt-4 flex flex-col mobile-menu-animation">
      <a href="#" class="block text-text-dark border-y py-4 px-2">Home</a>
      <a href="#" class="block text-text-dark border-y py-4 px-2">About</a>
      <a href="#" class="block text-text-dark border-y py-4 px-2">Services</a>
      <a href="#" class="block text-text-dark border-y py-4 px-2">Contact</a>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>

<style scoped>
/* Add your custom styles here if needed */
</style>
