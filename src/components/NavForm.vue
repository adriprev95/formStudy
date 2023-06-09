<template>
    <nav class="bg-sky-500/40 h-11 w-full flex flex-wrap justify-center content-center gap-4 fixed">
        <button class="w-20 h-7 bg-sky-200 rounded-md text-slate-900 hover:bg-sky-300 active:transform active:translate-y-1"
            v-on:click="$router.push({ name: 'login' })">Login</button>
        <button class="w-20 h-7 bg-sky-200 rounded-md text-slate-900 hover:bg-sky-300 active:transform active:translate-y-1"
            v-on:click="$router.push({ name: 'register' })">Register</button>
    </nav>
</template>

<script setup>
</script>

<style scoped></style>