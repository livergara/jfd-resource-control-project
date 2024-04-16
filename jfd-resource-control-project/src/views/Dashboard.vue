<template>
    <div class="dashboard__page">
        <nav-menu></nav-menu>
        <h1>Дашбоард</h1>
    </div>
</template>

<script lang="ts">
import NavMenu from '@/components/NavigationMenu/NavMenu.vue';

export default {

    name: 'Dashboard',
    components: {
        NavMenu
    }
}

</script>

<style scoped>
h1 {
    color: white;
}
</style>