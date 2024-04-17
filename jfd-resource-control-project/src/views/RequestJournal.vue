<template>
    <div class="request-journal__page">
        <nav-menu></nav-menu>
        <h1>Журнал заявок</h1>
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