<template>
  <div>
    <NuxtPage />
  </div>
</template>

<script setup>
import { useEmployeeStore } from "@/store/employeeStore";

const employeeStore = useEmployeeStore();

onMounted(() => {
  // TODO: Add Conditional and Random to Get
  employeeStore.dummyFetchEmployees();
});
</script>
