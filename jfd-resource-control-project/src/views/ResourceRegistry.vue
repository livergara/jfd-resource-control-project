<template>
    <div class="resource-registry__page">
        <nav-menu></nav-menu>
        <h1>Матрица компетенций</h1>
    </div>
</template>

<script lang="ts">
import NavMenu from '@/components/NavigationMenu/NavMenu.vue';

export default {

    name: 'ResourceRegistry',
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