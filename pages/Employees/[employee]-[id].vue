<script setup>

console.log('[ACCESSING EMPLOYEE PAGE]')

</script>

<template>
    <h1>Employee's Page {{ $route.params.employee }}</h1>
    <h4>Employee ID: {{ $route.params.id}}</h4>
</template>