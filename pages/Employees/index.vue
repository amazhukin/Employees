<script setup>
let dummyData = [
  {
    id: 0,
    employee_image: "https://i.pravatar.cc/64",
    employee_name: "Michael Johnson",
    employee_position: "Software Engineer of 2nd Category",
    employee_salary: 89531,
    employee_age: 27,
  },
  {
    id: 1,
    employee_image: "https://i.pravatar.cc/64",
    employee_name: "Sarah Davis",
    employee_position: "Software Engineer of 1st Category",
    employee_salary: 64520,
    employee_age: 38,
  },
  {
    id: 2,
    employee_image: "https://i.pravatar.cc/64",
    employee_name: "John Wilson",
    employee_position: "Software Engineer of 3rd Category",
    employee_salary: 22934,
    employee_age: 47,
  },
  {
    id: 3,
    employee_image: "https://i.pravatar.cc/64",
    employee_name: "Sophia Brown",
    employee_position: "Software Engineer of 1st Category",
    employee_salary: 37513,
    employee_age: 42,
  },
  {
    id: 4,
    employee_image: "https://i.pravatar.cc/64",
    employee_name: "Alice Taylor",
    employee_position: "Software Engineer of 2nd Category",
    employee_salary: 63197,
    employee_age: 30,
  },
  {
    id: 5,
    employee_image: "https://i.pravatar.cc/64",
    employee_name: "Robert Smith",
    employee_position: "Software Engineer of 3rd Category",
    employee_salary: 54620,
    employee_age: 29,
  },
  {
    id: 6,
    employee_image: "https://i.pravatar.cc/64",
    employee_name: "Emily Williams",
    employee_position: "Software Engineer of 1st Category",
    employee_salary: 77894,
    employee_age: 23,
  },
  {
    id: 7,
    employee_image: "https://i.pravatar.cc/64",
    employee_name: "David Miller",
    employee_position: "Software Engineer of 2nd Category",
    employee_salary: 39089,
    employee_age: 37,
  },
  {
    id: 8,
    employee_image: "https://i.pravatar.cc/64",
    employee_name: "Olivia Jones",
    employee_position: "Software Engineer of 3rd Category",
    employee_salary: 19481,
    employee_age: 44,
  },
  {
    id: 9,
    employee_image: "https://i.pravatar.cc/64",
    employee_name: "Daniel Moore",
    employee_position: "Software Engineer of 1st Category",
    employee_salary: 99616,
    employee_age: 26,
  },
];

const employeeArr = useState("employeeArr", () => []);
const clickedEmployee = useState("clickedEmployee", () => null);

employeeArr.value = dummyData;

const handleEmployeeClick = (employee) => {
  clickedEmployee.value = employee;

  console.log(clickedEmployee, " [CLICKED EMPLOYEE]");
};
</script>

<template>
  <SearchBar />

  <SortBar />

  <div class="flex flex-row flex-wrap justify-center gap-4 w-full mt-8">
    <EmployeeCard
      v-for="(employee, x) in employeeArr"
      :employeeData="employee"
      @handleEmployeeClick="handleEmployeeClick"
      :key="x"
    />
  </div>
  <EmployeeModal
    v-if="clickedEmployee"
    :employeeData="clickedEmployee"
    @click="handleEmployeeClick"
  />
</template>
