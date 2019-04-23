<template>
    <li class="todo-item">{{ todo.text }}</li>
</template>

<script>
export default {
    name: 'TodoItem',
    props: {
        todo: Object,
    }
}
</script>

<style>

</style>