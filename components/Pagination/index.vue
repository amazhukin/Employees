<script setup lang="ts">
import { useEmployeeStore } from "~/store/employeeStore";
import { ref, onMounted, watch } from "vue";
const props = defineProps(["items", "callback"]);

const employeeStore = useEmployeeStore();

const currentPage = ref(1);

const pages = ref();

employeeStore.$subscribe((mutation, state) => {
  handlePagination("FIRST");
  handleMapPageNums();
  handleSetPageItems(1);
});

onMounted(() => {
  handleMapPageNums();
  handleSetPageItems(1);
});

watch(currentPage, (newValue, oldValue) => {
  handleSetPageItems(newValue);
});

const handleSetPageItems = (page: number) => {
  props.callback(
    employeeStore.filteredItems.slice((page - 1) * 5, (page - 1) * 5 + 5)
  );
};

const handlePagination = (ACTION_TYPE: string) => {
  let pagesCount = Math.ceil(employeeStore.filteredItems.length / 5);

  switch (ACTION_TYPE) {
    case "FIRST":
      currentPage.value = 1;
      break;
    case "LAST":
      currentPage.value = pagesCount;
      break;
    case "PREV":
      let prevPage = currentPage.value - 1;
      currentPage.value = prevPage === 0 ? currentPage.value : prevPage;
      break;
    case "NEXT":
      let nextPage = currentPage.value + 1;
      currentPage.value = nextPage > pagesCount ? currentPage.value : nextPage;
      break;
    default:
      currentPage.value = 1;
      break;
  }
};

const handleMapPageNums = () => {
  let count = Math.ceil(employeeStore.filteredItems.length / 5);
  let startPage = 1;
  let paginationLength = count >= 10 ? 10 : count;

  if (currentPage.value >= 6 && currentPage.value + 5 < count) {
    startPage = currentPage.value - 5;
  }

  if (currentPage.value + 5 >= count && currentPage.value > 10) {
    startPage = currentPage.value - 10;
  }
  pages.value = Array.from(
    { length: paginationLength },
    (_, i) => startPage + i
  );
};
</script>

<template>
  <div class="flex justify-between mx-auto w-1/2 mt-10 fixed left-1/4 bottom-4">
    <div>
      <button class="mr-8" @click="handlePagination('FIRST')">
        {{ "<<" }}
      </button>

      <button @click="handlePagination('PREV')">
        {{ "<" }}
      </button>
    </div>

    <div
      v-for="pageNum in pages"
      :key="`page-key-${pageNum}`"
      class="cursor-pointer"
      :data-testid="`page-id-${pageNum}`"
      :class="{ 'text-red-500': pageNum === currentPage }"
      @click="currentPage = pageNum"
    >
      {{ pageNum }}
    </div>

    <div>
      <button @click="handlePagination('NEXT')">
        {{ ">" }}
      </button>
      <button class="ml-8" @click="handlePagination('LAST')">
        {{ ">>" }}
      </button>
    </div>
  </div>
</template>
