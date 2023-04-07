<script setup>
const props = defineProps(["employeeData"]);
</script>

<template>
  <div
    class="flex flex-col items-center border rounded-md p-4 pb-6 cursor-pointer"
    @click="$emit('handleEmployeeClick', props.employeeData)"
  >
    <div class="w-full">
      <!-- TODO: OPTIONS -->
      <div
        class="flex items-center justify-center ml-auto mb-2 w-6 h-6 rounded-full cursor-pointer"
      >
        <img width="24" src="../../assets/icons/options.png" alt="" />
      </div>
    </div>

    <img
      class="rounded-full border mb-4"
      data-testid="employee-card-image"
      src="https://i.pravatar.cc/64"
      alt=""
    />

    <h2 class="text-base" data-testid="employee-card-name">
      {{ props.employeeData.employee_name }}
    </h2>

    <h4
      class="text-sm italic text-gray-500"
      data-testid="employee-card-position"
    >
      {{ props.employeeData.employee_position }}
    </h4>
  </div>
</template>
