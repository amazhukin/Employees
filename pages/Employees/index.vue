<script setup>
let dummyData = [
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
];

let employeeArr = useState("employeeArr", () => dummyData);
</script>

<template>
  <SearchBar />

  <SortBar />

  <div class="flex flex-row flex-wrap justify-center gap-4 w-full mt-8">
    <EmployeeCard
      v-for="(employee, x) in employeeArr"
      :employeeData="employee"
      :key="x"
    />
  </div>
</template>
