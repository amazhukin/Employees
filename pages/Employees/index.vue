<script setup>
import { useEmployeeStore } from "@/store/employeeStore";

const employeeStore = useEmployeeStore();

const initialEmployee = {
  id: -1,
  employee_image: "",
  employee_name: "",
  employee_position: "",
  employee_salary: -1,
  employee_age: -1,
};

const paginatedItems = ref([]);
const employeeModalOpen = ref(false);
const chosenEmployee = reactive(initialEmployee);

const handleEmployeeClick = (employee) => {
  if (!employeeModalOpen.value) employeeModalOpen.value = true;

  chosenEmployee.value = employee;
};

const handleModalClose = () => {
  employeeModalOpen.value = false;
  chosenEmployee.value = initialEmployee;
};

const handlePaginationChange = (newItems) => {
  paginatedItems.value = newItems;
};
</script>

<template>
  <SearchBar />

  <SortBar />

  <div class="flex flex-row flex-wrap justify-center gap-4 w-full mt-8">
    <EmployeeCard
      v-for="(employee, x) in paginatedItems"
      :employeeData="employee"
      @handleEmployeeClick="handleEmployeeClick"
      :key="x"
    />
  </div>

  <Pagination :items="employeeStore.items" :callback="handlePaginationChange" />

  <EmployeeModal
    v-if="employeeModalOpen"
    :employeeData="chosenEmployee.value"
    :handleClose="handleModalClose"
  />
</template>
