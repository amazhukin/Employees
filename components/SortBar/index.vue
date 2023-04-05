<template>
    <div class="flex flex-row items-center w-full p-4 bg-gray-100 border-b-[1px] border-gray-300 gap-8">
        <div class="flex flex-row bg-white rounded">
            <div data-testid="sort-tab-any" class="cursor-pointer hover:bg-blue-300 hover:text-white transition duration-300 border p-2 text-white bg-blue-400">Any</div>
            <div data-testid="sort-tab-working" class="cursor-pointer hover:bg-blue-300 hover:text-white transition duration-300 border p-2">Working</div>
            <div data-testid="sort-tab-away" class="cursor-pointer hover:bg-blue-300 hover:text-white transition duration-300 border p-2">Away</div>
        </div>

        <div class="flex flex-row bg-white rounded">
            <div data-testid="sort-tab-all" class="cursor-pointer hover:bg-blue-300 hover:text-white transition duration-300 border p-2">All</div>
            <div data-testid="sort-tab-employee" class="cursor-pointer hover:bg-blue-300 hover:text-white transition duration-300 border p-2 text-white bg-blue-400">Employee</div>
            <div data-testid="sort-tab-contractor" class="cursor-pointer hover:bg-blue-300 hover:text-white transition duration-300 border p-2">Contractor</div>
            <div data-testid="sort-tab-subcontractor" class="cursor-pointer hover:bg-blue-300 hover:text-white transition duration-300 border p-2">Subcontractor</div>
        </div>
    </div>
</template>