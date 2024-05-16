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
        data: () => ({
            positions: [{ id: 10, name: "Junior" }, { id: 11, name: "Middle" }, { id: 12, name: "Senior" }],
            busynessPercent: [{ id: 20, name: "50%" }, { id: 21, name: "100%" }],
            resourceOwners: [
                { id: 30, name: "Месропян Карен Сиракович" },
                { id: 31, name: "Калиниченко Андрей Иванович" },
                { id: 32, name: "Токарь Евгений Владимирович" },
                { id: 33, name: "Джинчарадзе Екатерина Вахтанговна" },
                { id: 34, name: "Лебедева Оксана Олеговна" },
                { id: 35, name: "Мирзабеков Союмбек Гасанович" }
            ]

        }),
        props: {
            text: String,
            personnelNumber: Number,
            email: String,
            role: String,
            projects: String,
            selectedPosition: String,
            selectedBusynes: String,
            selectedResourceOwner: String
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
                <h1>Создание карточки ресурса</h1>
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
                    <div class="row">
                        <div class="resource-registry__card__input-block">
                            <label for="email">Почта</label>
                            <input id="email" v-model="email" />
                        </div>
                        <div class="resource-registry__card__input-block">
                            <label for="dropdownPosition">Должность</label>
                            <div class="dropdown">
                                <select v-model="selectedPosition" id="dropdownPosition">
                                    <option v-for="position in positions" :key="position.id" :value="position">
                                        {{ position.name }}
                                    </option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="resource-registry__card__input-block-100">
                            <label for="role">Роль</label>
                            <input id="role" v-model="role" />
                        </div>
                    </div>
                    <div class="row">
                        <div class="resource-registry__card__input-block">
                            <label for="dropdownBusyness">Процент занятости</label>
                            <div class="dropdown">
                                <select v-model="selectedBusynes" id="dropdownBusyness">
                                    <option v-for="busyness in busynessPercent" :key="busyness.id" :value="busyness">
                                        {{ busyness.name }}
                                    </option>
                                </select>
                            </div>
                        </div>
                        <div class="resource-registry__card__input-block">
                            <label for="dropdownResourceOwner">Владелец ресурса</label>
                            <div class="dropdown">
                                <select v-model="selectedResourceOwner" id="dropdownResourceOwner">
                                    <option v-for="resourceOwner in resourceOwners" :key="resourceOwner.id"
                                        :value="resourceOwner">
                                        {{ resourceOwner.name }}
                                    </option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="resource-registry__card__input-block-100">
                            <label for="projects">Проекты</label>
                            <input id="projects" v-model="projects" />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>