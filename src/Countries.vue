<template>
    <div id="countries">
        <p>{{ this.apiUrl }}</p>
    </div>
</template>

<script>
    export default {
        name: 'Countries',
        data() {
            return {
                apiUrl: 'https://restcountries.eu/rest/v2/',
            }
        }
    }
</script>

<style>

</style>