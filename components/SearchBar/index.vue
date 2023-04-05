<template>
    <div class="flex flex-row items-center w-full p-4 bg-gray-100 border-b-[1px] border-gray-300 gap-8">
        <div class="flex flex-row bg-white p-2 rounded">
            <img src="#" alt="Search" class="ml-4">

            <input data-testid="search-input" type="text" placeholder="Search" />
        </div>

        <div class="flex flex-row gap-4">
            <!-- TODO: Export to Reusable Component -->
            <div class="hover:bg-blue-300 hover:text-white transition duration-300 cursor-pointer bg-white p-2 rounded">Skills</div>
            <div class="hover:bg-blue-300 hover:text-white transition duration-300 cursor-pointer bg-white p-2 rounded">Company</div>
            <div class="hover:bg-blue-300 hover:text-white transition duration-300 cursor-pointer bg-white p-2 rounded">Department</div>
            <div class="hover:bg-blue-300 hover:text-white transition duration-300 cursor-pointer bg-white p-2 rounded">Position</div>
            <div class="hover:bg-blue-300 hover:text-white transition duration-300 cursor-pointer bg-white p-2 rounded">Group</div>
            <div class="hover:bg-blue-300 hover:text-white transition duration-300 cursor-pointer bg-white p-2 rounded">Unit</div>
            <div class="hover:bg-blue-300 hover:text-white transition duration-300 cursor-pointer bg-white p-2 rounded">People Location</div>
            <div class="hover:bg-blue-300 hover:text-white transition duration-300 cursor-pointer bg-white p-2 rounded">Country of Office</div>
            <div class="hover:bg-blue-300 hover:text-white transition duration-300 cursor-pointer bg-white p-2 rounded">Location Country</div>
        </div>
    </div>
</template>