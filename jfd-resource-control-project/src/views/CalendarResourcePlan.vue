<template>
    <div class="calendar-resource-plan__page">
        <header>
            <img class="logo" src="../assets/img/rc-logo-1920w.svg" alt="Управление загрузкой ресурсов">
            <div class="header-content__nav">
                <nav-menu></nav-menu>
            </div>
        </header>
        <h1>Календарно-ресурсный план</h1>
    </div>
</template>

<script lang="ts">
import NavMenu from '@/components/NavigationMenu/NavMenu.vue';

export default {

    name: 'CalendarResourcePlan',
    components: {
        NavMenu
    }
}

</script>

<style scoped></style>