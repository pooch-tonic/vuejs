<template>
    <BButton @click="navigate(pathName)">
        {{ text }}
    </BButton>
</template>

<script>
import { BButton } from 'bootstrap-vue/es/components';
import router from '../router';

export default {
    name: 'NavigationButton',
    components: {
        'b-button': BButton,
    },
    props: {
        text: String,
        pathName: String,
    },
    methods: {
        navigate(pathName) {
            router.push({ name: pathName });
        }
    }
}
</script>

<style>

</style>