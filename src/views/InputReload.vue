<script setup>
import { useStorage } from "@/components/composables/useStorage.js"


let username = useStorage('username', '');
let email = useStorage('email', '');

let obj = useStorage('form', {
    one: 'one',
})

setTimeout(() => {
    obj.value.one = "Change"
}, 5000)


</script>


<template>
    <h1 class="flex justify-center font-bold text-red-900 mb-8">Reload Hold Input Value</h1>

    <div class="flex justify-center mb-4">
        <label class="block  text-gray-700 text-sm font-bold mb-2" for="username">
            Username:
        </label>
        <input v-model="username"
            class="ml-4 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username" type="text" placeholder="Username">
    </div>
    <div class="flex justify-center mb-4">
        <label class="block  text-gray-700 text-sm font-bold mb-2" for="username">
            email:
        </label>
        <input v-model="email"
            class="ml-4 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email" type="email" placeholder="Email">
    </div>
</template>