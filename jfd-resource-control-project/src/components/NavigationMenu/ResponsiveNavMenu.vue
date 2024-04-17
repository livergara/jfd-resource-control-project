<script lang="ts">


export default {
    props: ['navLinks'],
    data() {
        return {
            showMobileMenu: false
        }
    },

    methods: {
        showMenu() {
            this.showMobileMenu = !this.showMobileMenu;
        },
    },
}
</script>

<template>
    <div class="responsive-nav-menu">
        <div @click="showMenu()" class="burger-menu-icon">
            <img src="../../assets/icons/burger-menu.svg" alt="">
        </div>
        <!-- @vue-ignore -->
        <div class="nav-content" :class="this.showMobileMenu ? 'open-menu' : 'closed-menu'">
            <ul>
                <li v-for="(menulink, menulinks) in navLinks" :key="menulinks">
                    <router-link :to="menulink.path">
                        {{ menulink.text }}
                    </router-link>
                </li>
            </ul>
            <ul>
                <li>
                    <button class="nav-content-desk">
                        <img src="../../assets/icons/notifications-default.svg" alt="Уведомления">
                    </button>
                    <p class="nav-content-mob">Уведомления</p>
                </li>
                <li>
                    <button class="nav-content-desk">
                        <img src="../../assets/icons/wiki-default.svg" alt="Вики">
                    </button>
                    <p class="nav-content-mob">Обучение</p>
                </li>
            </ul>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.nav-content {
    display: flex;
    justify-content: space-between;
    padding: 10px 30px;
    align-items: center;
}

.burger-menu-icon,
.nav-content-mob {
    display: none;
}

.nav-content-desk {
    display: block;
}

.nav-menu ul li a {
    padding: 10px 20px;
}

@media (max-width: 1919px) {

    .responsive-nav-menu {
        flex-direction: column;
    }

    .open-menu {
        background: linear-gradient(27deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 55%, rgba(41, 41, 41, 1) 100%);
        display: block;
        padding: 90px 70px;
        position: absolute;
        right: 0px;
        top: 0px;
        z-index: 1;
    }

    .closed-menu {
        display: none;
        height: 0;
        padding: 0;
    }

    .nav-menu ul {
        align-items: flex-end;
        flex-direction: column;
        margin: 0;
    }

    .nav-menu li {
        margin: 15px 0px;
    }

    .burger-menu-icon {
        display: block;
        position: relative;
        text-align: right;
        z-index: 10;
    }

    .nav-content-desk {
        display: none;
    }

    .nav-content-mob {
        display: block;
    }

    .nav-menu ul li a {
        padding: 10px 0px;
    }
}
</style>