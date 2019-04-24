<template>
    <div id="countries">
        <h1 class="title">Countries API</h1>
        <p>Powered by <a v-bind:href="this.apiUrl">REST Countries API</a>. Looks up for the closest country name to your input.</p>
        <BInputGroup>
            <BInput v-model="countryName" placeholder="Type a country name..." aria-label="Country name"/>
        </BInputGroup>
        <transition name="fade">
            <h4 class="result-message" v-if="this.countryName !== '' && this.countryName !== ' '">
                {{ this.match }}
            </h4>
        </transition>
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
                apiUrl: 'https://restcountries.eu',
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
                axios.get(ref.apiUrl + '/rest/v2/name/' + ref.countryName)
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
a {
    text-decoration: none;
}
a:hover {
    text-decoration: none;
}
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
.fade-enter-active, .fade-leave-active {
    opacity: 1;
    transition: opacity 0.25s ease;
}
.fade-enter, .fade-leave-to {
    opacity: 0;
}
</style>