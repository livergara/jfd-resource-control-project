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
        <header>
            <img class="logo" src="../assets/img/rc-logo-1920w.svg" alt="Управление загрузкой ресурсов">
            <div class="header-content__nav">
                <nav-menu></nav-menu>
            </div>
        </header>
        <h1>Реестр проектов</h1>
    </div>
</template>

<style scoped></style>