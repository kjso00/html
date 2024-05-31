<script setup>
    import MyComponent from './components/01_component/MyComponent.vue';

    import Parents from './components/02_slotintro/SlotParents.vue';
</script>

<template>
    <div>
        <h1>component Container</h1>
        <MyComponent/>
    </div>

    <main>
        <Parents/>
    </main>
</template>

<style scoped>
</style>
