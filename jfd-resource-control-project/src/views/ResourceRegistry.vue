<template>
    <div class="resource-registry__page">
        <header-menu></header-menu>
    </div>
</template>

<script lang="ts">
import HeaderMenu from '@/components/HeaderMenu.vue';

export default {

    name: 'ResourceRegistry',
    components: {
        HeaderMenu
    }
}

</script>

<style scoped>
h1 {
    color: darkgreen;
}
</style>