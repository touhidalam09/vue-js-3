<script setup>
const flashHandle = (title, message, level) => {
    import('@/components/composables/useFlash').then(module => module.useFlash().flash(title, message, level))
}
</script>

<template>
    <h1 class="flex justify-center font-bold text-red-900">My page</h1>
    <div class="flex justify-center mt-4 mb-4">
        <button class="py-3 px-3 border-2 border-s-orange-300"
            @click="flashHandle('Welcome!', 'I am in My Page', 'info')">Click Me</button>
    </div>
</template>