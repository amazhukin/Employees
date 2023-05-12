<script setup>
import { ref, computed } from "vue";

const menuItems = ref([
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]);

const headlines = [
  "Welcome to our company!",
  "We are the best in the business!",
  "Join us and build your career!",
];

const headline = computed(
  () => headlines[Math.floor(Math.random() * headlines.length)]
);

</script>

<template>
  <div>
    <nav class="bg-blue-500">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <img class="h-8 w-8" src="/logo.svg" alt="Logo" />
            </div>
            <div class="hidden md:block">
              <div class="ml-10 flex items-baseline space-x-4">
                <a
                  v-for="item in menuItems"
                  :key="item.name"
                  :href="item.href"
                  class="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-blue-700"
                  >{{ item.name }}</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <div class="relative bg-white overflow-hidden">
      <div class="max-w-7xl mx-auto h-screen">
        <img
          src="../../assets/images/bg-1.jpg"
          alt="Background"
          class="w-full h-full object-cover absolute inset-0"
        />
        <div class="absolute inset-0 bg-gray-900 opacity-25"></div>
        <div
          class="relative px-4 py-12 flex flex-col items-center justify-center h-full"
        >
          <h1 class="text-6xl font-bold text-white mb-6">{{ headline }}</h1>
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            @click="$router.push('/employees')"
          >
            View Employees
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
