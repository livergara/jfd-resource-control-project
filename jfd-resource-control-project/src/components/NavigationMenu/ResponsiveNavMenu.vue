<script lang="ts">


export default {
    props: ['navLinks']
}
</script>

<template>
    <div>
        <ul>
            <li v-for="(menulink, menulinks) in navLinks" :key="menulinks">
                <router-link :to="menulink.path">
                    {{ menulink.text }}
                </router-link>
            </li>
        </ul>
    </div>
</template>


<style lang="scss" scoped></style>