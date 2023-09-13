<script setup>
const flashHandle = (title, message, level) => {
    import('@/components/composables/useFlash').then(module => module.useFlash().flash(title, message, level))
}
</script>

<template>
    <h1>My page</h1>
    <div>
        <button @click="flashHandle('Welcome!', 'I am in My Page', 'info')">Click Me</button>
    </div>
</template>