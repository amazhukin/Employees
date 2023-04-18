<template>
  <div>
    <NuxtPage />
  </div>
</template>

<script setup>
import { useEmployeeStore } from "@/store/employeeStore";

const employeeStore = useEmployeeStore();

onMounted(() => {
  employeeStore.dummyFetchEmployees();
});
</script>
