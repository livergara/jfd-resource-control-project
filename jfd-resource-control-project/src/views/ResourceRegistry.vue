<script lang="ts">
import Datagrid from '@/components/Datagrid/Datagrid.vue';
import NavMenu from '@/components/NavigationMenu/NavMenu.vue';

export default {

    name: 'ResourceRegistry',
    components: {
        NavMenu,
        Datagrid
    }
}

</script>

<template>
    <div class="resource-registry__page">
        <header>
            <img class="logo" src="../assets/img/rc-logo-1920w.svg" alt="Управление загрузкой ресурсов">
            <div class="header-content__nav">
                <nav-menu></nav-menu>
            </div>
        </header>
        <main>
            <div class="page-title__block">
                <h1>Матрица компетенций</h1>
                <button class="button-default">Добавить ресурс</button>
            </div>
            <div class="page-main__component">
                <Datagrid />
            </div>
        </main>
    </div>
</template>

<style scoped></style>