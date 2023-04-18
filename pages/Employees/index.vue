<script setup>
import { useEmployeeStore } from "@/store/employeeStore";
// import { filterEmployees } from "../../utils/employeeData";
import { mount } from "@vue/test-utils";
import { useRouter, useRoute } from "vue-router";
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
const existingFilter = ref("");
const chosenEmployee = reactive(initialEmployee);

const router = useRouter();
const route = useRoute();

onMounted(() => {
  employeeStore.$subscribe((mutation, state) => {
    const filter = route.query.fullName;
    const employeeID = route.query.chosenEmployee;
    
    if (filter) {
      existingFilter.value = filter;
      handleFilterItems(filter);
    }

    if (employeeID) {
      const employeeData = employeeStore.getById(JSON.parse(employeeID));
      chosenEmployee.value = employeeData;
      employeeModalOpen.value = true;
    }
  });
});

const handleEmployeeClick = (employee) => {
  employeeModalOpen.value = true;

  chosenEmployee.value = employee;

  router.push({
    path: "/employees",
    query: {
      ...route.query,
      chosenEmployee: employee.id,
    },
  });
};

const handleModalClose = () => {
  const { chosenEmployee, ...query } = route.query;

  router.push({
    path: "/employees",
    query,
  });

  employeeModalOpen.value = false;
  chosenEmployee.value = initialEmployee;
};

const handlePaginationChange = (newItems) => {
  paginatedItems.value = newItems;
};

const handleSearchParam = (event) => {
  const { fullName, ...query } = route.query;

  var timer = 0;
  clearTimeout(timer);

  timer = setTimeout(() => {
    router.push({
      path: "/employees",
      query:
        event.target.value.length === 0
          ? query
          : {
              ...route.query,
              fullName: event.target.value,
            },
    });

    handleFilterItems(event.target.value);
  }, 1500);
};

const handleFilterItems = (filterQueue) => {
  let filteredItems = employeeStore.items.filter((item) =>
    item.employee_name.toLowerCase().includes(filterQueue.toLowerCase())
  );
  employeeStore.setFilters(filteredItems);
};
</script>

<template>
  <SearchBar @change="handleSearchParam" :value="existingFilter" />

  <SortBar />

  <div class="flex flex-row flex-wrap justify-center gap-4 w-full mt-8">
    <EmployeeCard
      v-for="(employee, x) in paginatedItems"
      :employeeData="employee"
      @handleEmployeeClick="handleEmployeeClick"
      :key="x"
    />
  </div>

  <Pagination
    v-if="employeeStore.filteredItems.length > 0"
    :items="employeeStore.filteredItems"
    :callback="handlePaginationChange"
  />

  <EmployeeModal
    v-if="employeeModalOpen"
    :employeeData="chosenEmployee.value"
    :handleClose="handleModalClose"
  />
</template>
