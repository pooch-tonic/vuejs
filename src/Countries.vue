<template>
    <div id="countries">
        <h1 class="title">Countries API</h1>
        <p>Powered by <a href="this.apiurl">REST Countries API</a>. Looks up for the closest country name to your input.</p>
        <BInputGroup>
            <BInput v-model="countryName" placeholder="Type a country name..." aria-label="Country name"/>
        </BInputGroup>
        <h4 class="result-message">
            {{ this.match }}
        </h4>
        <NavigationButton
        pathName="Home"
        text="Go back"
        />
    </div>
</template>

<script>
    import axios from 'axios';
    import lodash from 'lodash';
    import { BInput, BInputGroup } from 'bootstrap-vue/es/components';
    import NavigationButton from './components/NavigationButton';
    export default {
        name: 'Countries',
        components: {
            NavigationButton,
            'b-input': BInput,
            'b-input-group': BInputGroup,
        },
        data() {
            return {
                apiUrl: 'https://restcountries.eu/rest/v2/',
                countryName: '',
                match: ''
            }
        },
        watch: {
            countryName: function() {
                this.debouncedGetMatchingCountry();
            }
        },
        methods: {
            getMatchingCountry: function() {
                this.match = 'Loading...'
                let ref = this;
                axios.get(ref.apiUrl + 'name/' + ref.countryName)
                    .then(function (response) {
                        let data = response.data;
                        if (data.length !== 0) {
                            ref.match = data[0].name;
                        }
                    })
                    .catch(function (error) {
                        ref.match = 'No matching country!'
                    })
            }
        },
        created: function () {
            this.debouncedGetMatchingCountry = _.debounce(this.getMatchingCountry, 800)
        }
    }
</script>

<style>
.title {
    margin-bottom: 25px;
}
.input-group {
    margin: 10px auto;
    width: 50%;
}
.result-message {
    margin: 40px 0;
}
</style>