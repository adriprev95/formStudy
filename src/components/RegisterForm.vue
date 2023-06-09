<template>
    <div class="w-screen h-auto sm:w-96 sm:h-auto ">
        <div class="bg-sky-300/20 shadow-sky-500/20">
            <header class=" mx-auto text-center py-3">
                <span class="text-xl sm:text-4xl font-semibold font-sans">Register</span>
            </header>
            <section class="w-full h-full py-5 grid grid-cols-1 divide-y-2">
                <form class="grid grid-cols-2">
                    <div>
                        <label
                            class=" flex flex-col mx-5 justify-center content-between border-b-2 border-sky-200/40 h-14 my-2">
                            <span class="text-slate-900 font-medium text-lg w-full">Usuario:</span>
                            <input v-model="userRegister.user"
                                class="text-lg bg-transparent border-0 focus:outline-none w-full" type="text" name="user">
                        </label>
                        <label
                            class=" flex flex-col mx-5 justify-center content-between border-b-2 border-sky-200/40 h-14 my-2">
                            <span class="text-slate-900 font-medium text-lg w-full">Correo:</span>
                            <input v-model="userRegister.correo"
                                class="text-lg bg-transparent border-0 focus:outline-none w-full" type="email" name="email">
                        </label>
                        <label
                            class=" flex flex-col mx-5 justify-center content-between border-b-2 border-sky-200/40 h-14 my-2">
                            <span class="text-slate-900 font-medium text-lg w-full">Edad:</span>
                            <input v-model="userRegister.edad"
                                class="text-lg bg-transparent border-0 focus:outline-none w-full" type="number" min="5"
                                max="120" name="age">
                        </label>
                        <label
                            class=" flex flex-col mx-5 justify-center content-between border-b-2 border-sky-200/40 h-14 my-2">
                            <span class="text-slate-900 font-medium text-lg w-full">Contraseña:</span>
                            <input class="text-lg bg-transparent border-0 focus:outline-none w-full" type="password"
                                name="user">
                        </label>
                        <label
                            class=" flex flex-col mx-5 justify-center content-between border-b-2 border-sky-200/40 h-14 my-2">
                            <span class="text-slate-900 font-medium text-sm w-full">Confirmar contraseña:</span>
                            <input class="text-lg bg-transparent border-0 focus:outline-none w-full" type="password"
                                name="user">
                        </label>
                    </div>
                    <div>
                        <label
                            class=" flex flex-col mx-5 justify-center content-between border-b-2 border-sky-200/40 h-14 my-2">
                            <span class="text-slate-900 font-medium text-lg w-full">Color:</span>
                            <select v-model="userRegister.color"
                                class="text-lg bg-transparent border-0 focus:outline-none w-full" name="colorFav">
                                <option value="blue">Azul</option>
                                <option value="yellow">Amarillo</option>
                                <option value="red">Rojo</option>
                                <option value="green">Verde</option>
                                <option value="oranje">Naranja</option>
                            </select>
                        </label>
                        <label
                            class=" flex flex-col mx-5 justify-center content-between border-b-2 border-sky-200/40 h-14 my-2">
                            <span class="text-slate-900 font-medium text-lg w-full">Foto:</span>
                            <input :value="userRegister.file" @change="changeFile()"
                                class="text-lg bg-transparent border-0 focus:outline-none w-full" type="file"
                                name="picture">
                        </label>
                        <label
                            class=" flex flex-col mx-5 justify-center content-between border-b-2 border-sky-200/0 h-auto my-2">
                            <span class="text-slate-900 font-medium text-lg w-full">Idioma:</span>
                            <div class="grid grid-cols-3 gap-3 text-sm">
                                <div>
                                    <input v-model="userRegister.idioma" type="radio" id="espanol" name="idioma"
                                        value="espanol">
                                    <label for="espanol">Español</label>
                                </div>
                                <div>
                                    <input v-model="userRegister.idioma" type="radio" id="ingles" name="idioma"
                                        value="ingles">
                                    <label for="espanol">Ingles</label>
                                </div>
                                <div>
                                    <input v-model="userRegister.idioma" type="radio" id="frances" name="idioma"
                                        value="frances">
                                    <label for="espanol">Frances</label>
                                </div>
                                <div>
                                    <input v-model="userRegister.idioma" type="radio" id="italiano" name="idioma"
                                        value="italiano">
                                    <label for="espanol">Italiano</label>
                                </div>
                                <div>
                                    <input v-model="userRegister.idioma" type="radio" id="chino" name="idioma"
                                        value="chino">
                                    <label for="espanol"> Chino</label>
                                </div>
                            </div>
                        </label>
                    </div>
                </form>
            </section>
            <footer>
                <div class="mt-1 mx-auto flex flex-col justify-center content-center">
                    <div class="py-2 mx-auto">
                        <input v-model="userRegister.terminos" type="checkbox" name="terminos" id="">
                        <span> Estoy de acuerdo con los terminos y condiciones</span>
                    </div>
                    <button
                        class="w-32 h-7 bg-sky-200 rounded-md mx-auto text-slate-900 hover:bg-sky-300 active:transform active:translate-y-1"
                        v-on:click="registerAlert">Registrarse</button>
                    <span class="py-2 mx-auto">
                        <RouterLink class="text-sky-900" to="/loguin"> Ya tengo cuenta
                        </RouterLink>
                    </span>
                </div>
            </footer>
        </div>
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
/* import IconUser from '@/components/icons/IconUser.vue'
import IconPassword from '@/components/icons/IconPassword.vue' */
import { ref } from 'vue';

const userRegister = ref({
    idioma: null,
    user: null,
    correo: null,
    color: null,
    edad: null,
    terminos: null,
    file: null
})

/* const idioma = ref(null);
const user = ref(null);
const correo = ref(null);
const color = ref(null);
const edad = ref(null);
 */

function registerAlert() {
    alert(
        `
        Usuario: ${userRegister.value.user}
        Correo: ${userRegister.value.correo}
        Edad: ${userRegister.value.edad}
        Color: ${userRegister.value.color}
        Idioma: ${userRegister.value.idioma}
        Acepto: ${userRegister.value.terminos ? 'si' : 'no'}
        `
    )
}

function changeFile(e) {
    console.log(e)
}

</script>

<style lang="scss" scoped></style>