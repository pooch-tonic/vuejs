<template>
    <BButton @click="onClick">
        {{ text }}
    </BButton>
</template>

<script>
import { BButton } from 'bootstrap-vue/es/components';

export default {
    name: 'ClassicButton',
    components: {
        'b-button': BButton,
    },
    props: {
        text: String,
        onClick: Function,
    }
}
</script>

<style>

</style>