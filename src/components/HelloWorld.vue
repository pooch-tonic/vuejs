<template>
    <div class="hello">
        <ClassicButton 
        v-bind:onClick="toggleDisplayTime" 
        v-bind:text="this.displayTime ? 'Hide current time' : 'Display current time'"/>
        <transition name="strip">
            <BAlert v-if="displayTime" show>Current time: {{ this.currentTime }}</BAlert>
        </transition>

        <div class="todos">
            <ul>
                <TodoItem
                v-for="todo in todos"
                v-bind:todo="todo"
                v-bind:key="todo.id"
                />
            </ul>
        </div>

        <div class="input">
            <BInputGroup>
                <BInput v-model="firstName" placeholder="First name" aria-label="First name"/>
            </BInputGroup>
            <BInputGroup>
                <BInput v-model="lastName" placeholder="Last name" aria-label="Last name"/>
            </BInputGroup>
        </div>

        <p class="message" v-if="fullName !== '' && fullName !== ' '">
            Hello, {{ this.fullName }}!
        </p>

        <NavigationButton 
        pathName="Countries" 
        text="Countries API"
        />
    </div>
</template>

<script>
import { BInput, BInputGroup, BAlert } from 'bootstrap-vue/es/components';
import ClassicButton from './ClassicButton';
import NavigationButton from './NavigationButton';
import TodoItem from './TodoItem.vue';

export default {
    name: 'HelloWorld',
    components: {
        TodoItem,
        ClassicButton,
        NavigationButton,
        'b-input': BInput,
        'b-input-group': BInputGroup,
        'b-alert': BAlert,
    },
    props: {
        msg: String
    },
    methods: {
        toggleDisplayTime: function() {
            this.displayTime = !this.displayTime;
            this.currentTime = new Date().toLocaleString();
        },
        updateFullName: function() {
            this.fullName = this.firstName.charAt(0).toUpperCase() + this.firstName.slice(1) + " " + this.lastName.toUpperCase();
        }
    },
    watch: {
        firstName: function() {
            this.updateFullName();
        },
        lastName: function() {
            this.updateFullName();
        }
    },
    data() {
        return {
            currentTime: new Date().toLocaleString(),
            displayTime: false,
            firstName: "",
            lastName: "",
            fullName: "",
            todos: [
                {
                    id: 0,
                    text: "Learn."
                },
                {   
                    id: 1,
                    text: "Code."
                },
                {
                    id: 2,
                    text: "Run."
                }
            ]
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
.alert {
    display: block;
}
.input-group {
    margin: 10px auto;
}
.input {
    margin: 40px auto;
    width: 50%;
}
.todos {
    margin-top: 15px;
}
.strip-enter-active, .strip-leave-active {
    transition: transform 0.15s ease;
    transform-origin: top;
}
.strip-enter, .strip-leave-to {
    transform: scaleY(0);
}
</style>
