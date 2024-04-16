<script lang="ts">
import NavMenu from '@/components/NavigationMenu/NavMenu.vue';

export default {

    name: 'ProjectsRegistry',
    components: {
        NavMenu
    }
}

</script>

<template>
    <div class="projects-registry__page">
        <nav-menu></nav-menu>
        <h1>Реестр проектов</h1>
    </div>
</template>

<style scoped>
h1 {
    color: white;
}
</style>