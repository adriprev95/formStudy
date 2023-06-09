<template>
    <div class="w-64 h-80 sm:w-96 sm:h-80 bg-sky-300/40 rounded-xl shadow-sky-500/20">
        <header class=" mx-auto text-center py-3">
            <span class="text-xl sm:text-4xl font-semibold font-sans">Loguin</span>
        </header>
        <section class="w-full h-full py-5 grid grid-cols-1 divide-y-2">
            <form>
                <label class=" flex mx-5 justify-center content-between border-b-2 border-sky-200/40 h-11">
                    <IconUser class="w-8 h-8 mr-5 text-slate-900" />
                    <input v-model="user" class="flex-grow h-8 w-24 bg-transparent border-0 focus:outline-none" type="text"
                        name="user">
                </label>
                <label class=" flex mx-5 justify-center content-between border-b-2 border-sky-200/40 h-20 pt-9">
                    <IconPassword class="w-8 h-8 mr-5" />
                    <input v-model="pass" class="flex-grow h-8 w-24 bg-transparent border-0 focus:outline-none"
                        type="password" name="password">
                </label>
                <div class="mt-6 mx-auto flex flex-wrap justify-center content-center">
                    <button
                        class="w-20 h-7 bg-sky-200 mx-20 rounded-md text-slate-900 hover:bg-sky-300 active:transform active:translate-y-1"
                        v-on:click="loguinAlert()">Loguin</button>
                    <span class="py-2">No tienes cuenta?<RouterLink class="text-sky-900" to="/register"> Registrate
                        </RouterLink>
                    </span>
                </div>
            </form>
        </section>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router'
import IconUser from '@/components/icons/IconUser.vue'
import IconPassword from '@/components/icons/IconPassword.vue'

const pass = ref(null);
const user = ref(null);

function loguinAlert() {
    alert(`Bienvenido ${user.value}`)
}
</script>

<style lang="scss" scoped></style>