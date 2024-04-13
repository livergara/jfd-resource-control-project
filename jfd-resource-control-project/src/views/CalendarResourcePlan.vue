<template>
    <div class="calendar-resource-plan__page">
        <header-menu></header-menu>
        <h1>Календарно-ресурсный план</h1>
    </div>
</template>

<script lang="ts">
import HeaderMenu from '@/components/HeaderMenu.vue';

export default {

    name: 'CalendarResourcePlan',
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