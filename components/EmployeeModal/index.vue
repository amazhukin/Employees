<script setup>
const props = defineProps(["employeeData", "handleEmployeeClick"]);
const editable = useState('editable', () => false);

const handleSave = () => {
  editable.value = false;
};

const handleDelete = () => {
  // TODO: Handle Delete Method
};

const handleClose = () => {
  // NOT WORKING CURRENTLY
  handleEmployeeClick();
};

</script>

<template>
  <dialog
    open
    class="flex items-center justify-center fixed top-0 left-0 w-screen h-screen bg-gray-600 bg-opacity-30"
  >
    <div class="flex flex-col relative items-center p-8 rounded-lg bg-white">
      <button @click="handleClose" class="absolute top-2 right-2 cursor-pointer">
        <!-- TODO: Close Button -->
        <img width="32" height="32" src="~/assets/icons/close.png" alt="" />
      </button>

      <img
        class="mt-4 rounded-full w-32"
        data-testid="employee-modal-image"
        :src="employeeData.employee_image"
        alt=""
      />

      <h1 class="text-lg font-bold mt-2 mb-4" data-testid="employee-modal-name">
        {{ props.employeeData.employee_name }}
      </h1>

      <ul class="text-gray-400 text-sm">
        <li data-testid="employee-modal-position">
          Position: {{ props.employeeData.employee_position }}
        </li>
        <li data-testid="employee-modal-salary">
          Salary: {{ props.employeeData.employee_salary }}
        </li>
        <li data-testid="employee-modal-age">
          Age: {{ props.employeeData.employee_age }}
        </li>
      </ul>

      <!-- Action Buttons -->
      <div class="flex flex-row justify-between w-full mt-6">
        <button @click="editable ? handleSave() : (editable = true)">{{editable ? 'Save' : 'Edit'}}</button>
        <button>Delete</button>
      </div>
    </div>
  </dialog>
</template>
