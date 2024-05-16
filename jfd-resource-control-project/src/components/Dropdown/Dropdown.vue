<script lang="ts">
export default {
    data() {
        return {
            selected: ''
        }
    }
}
</script>

<template>
    <div id="v-model-select" class="dropdown">
        <select v-model="selected" id="pet-dropdown">
            <option disabled value="">Выберите один из вариантов</option>
            <option>А</option>
            <option>Б</option>
            <option>В</option>
        </select>
    </div>
</template>

<style lang="scss"></style>