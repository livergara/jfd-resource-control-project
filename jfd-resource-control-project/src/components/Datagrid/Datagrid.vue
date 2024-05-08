<script lang="ts">

export default {

}
</script>

<template>
    <table>
        <thead>
            <th>@</th>
            <th>ФИО</th>
            <th>Почта</th>
            <th>Должность</th>
            <th>Роль</th>
            <th>% занятости</th>
            <th>Проекты</th>
        </thead>
        <tbody>
            <td><a href="/edit/{{ item.id }}">Редактировать</a></td>
            <td>Иванов Иван Иванович</td>
            <td>IIIvaniv@mail.ru</td>
            <td>Middle</td>
            <td>Разработчик Vue</td>
            <td>100%</td>
            <td>Сайт КриптоПро</td>
        </tbody>
    </table>
</template>

<style lang="scss"></style>