<template>
    <div class="calendar-resource-plan__page">
        <nav-menu></nav-menu>
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

<style scoped>
h1 {
    color: white;
}
</style>