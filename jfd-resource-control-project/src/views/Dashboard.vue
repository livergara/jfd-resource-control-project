<template>
    <div class="dashboard__page">
        <header-menu></header-menu>
        <h1>Дашбоард</h1>
    </div>
</template>

<script lang="ts">
import HeaderMenu from '@/components/HeaderMenu.vue';

export default {

    name: 'Dashboard',
    components: {
        HeaderMenu
    }
}

</script>

<style scoped>
h1 {
    color: white;
}
</style>