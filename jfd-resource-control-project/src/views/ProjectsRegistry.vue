<template>
    <div class="projects-registry__page">
        <header-menu></header-menu>
        <h1>Реестр проектов</h1>
    </div>
</template>

<script lang="ts">
import HeaderMenu from '@/components/HeaderMenu.vue';

export default {

    name: 'ProjectsRegistry',
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