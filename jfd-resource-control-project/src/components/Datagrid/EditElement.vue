<script lang="ts">
import { useRoute } from 'vue-router';
import { defineComponent } from 'vue';
import NavMenu from '@/components/NavigationMenu/NavMenu.vue';
export default defineComponent(
    {
        name: 'ResourceRegistry',
        components: {
            NavMenu
        },
        props: {
            text: String,
            personnelNumber: Number
        },
        setup() {
            const route = useRoute();
            const id = route.params.id;
        }
    }
)

</script>

<template>
    <div class="resource-registry__page">
        <header>
            <img class="logo" src="../../assets/img/rc-logo-1920w.svg" alt="Управление загрузкой ресурсов">
            <div class="header-content__nav">
                <nav-menu></nav-menu>
            </div>
        </header>
        <main>
            <div class="page-main__component page-main__card-component">
                <h1>Изменение карточки ресурса</h1>
                <div class="resource-registry__card">
                    <div class="row">
                        <div class="resource-registry__card__input-block">
                            <label for="fioInput">ФИО сотрудника</label>
                            <input id="fioInput" v-model="text" />
                        </div>
                        <div class="resource-registry__card__input-block">
                            <label for="personnelNumberInput">Табельный номер</label>
                            <input id="personnelNumberInput" v-model="personnelNumber" />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>