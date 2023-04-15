<script setup>
const props = defineProps(["value"]);
</script>

<template>
    <div class="flex flex-row items-center w-full p-4 bg-gray-100 border-b-[1px] border-gray-300 gap-8">
        <div class="flex flex-row bg-white p-2 rounded">
          <div class="flex justify-center items-center w-5 mr-2">
            <img src="../../assets/icons/search.png" alt="Search" />
          </div>  

            <input data-testid="search-input" @input="$event => $emit('change', $event)" :value="value" type="text" placeholder="Search" class="pl-2 outline-none" />
        </div>
    </div>
</template>
