<template>
    <div class="request-journal__page">
        <header-menu></header-menu>
        <h1>Журнал заявок</h1>
    </div>
</template>

<script lang="ts">
import HeaderMenu from '@/components/HeaderMenu.vue';

export default {

    name: 'RequestJournal',
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