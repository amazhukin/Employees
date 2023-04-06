<template>
  <h1></h1>

  <SearchBar />

  <SortBar />

  <div class="flex flex-row flex-wrap justify-center gap-4 w-full mt-8">
    <EmployeeCard
      v-for="(employee, x) in dummyData"
      v-bind:employeeData="employee"
      :key="x"
    />
  </div>
</template>

<script>
export default {
  name: "Employees",
  data() {
    return {
      dummyData: [
        {
          id: 0,
          employee_name: "Avad Mussa",
          employee_position: "Software Engineer of 2nd Category",
        },
        {
          id: 1,
          employee_name: "Avad Mussa",
          employee_position: "Software Engineer of 2nd Category",
        },
        {
          id: 2,
          employee_name: "Avad Mussa",
          employee_position: "Software Engineer of 2nd Category",
        },
        {
          id: 3,
          employee_name: "Avad Mussa",
          employee_position: "Software Engineer of 2nd Category",
        },
        {
          id: 4,
          employee_name: "Avad Mussa",
          employee_position: "Software Engineer of 2nd Category",
        },
      ],
    };
  },
};
</script>
