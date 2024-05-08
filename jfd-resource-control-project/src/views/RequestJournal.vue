<template>
    <div class="request-journal__page">
        <header>
            <img class="logo" src="../assets/img/rc-logo-1920w.svg" alt="Управление загрузкой ресурсов">
            <div class="header-content__nav">
                <nav-menu></nav-menu>
            </div>
        </header>
        <main>
            <h1>Журнал заявок</h1>
        </main>
    </div>
</template>

<script lang="ts">
import NavMenu from '@/components/NavigationMenu/NavMenu.vue';

export default {

    name: 'RequestJournal',
    components: {
        NavMenu
    }
}

</script>

<style scoped></style>