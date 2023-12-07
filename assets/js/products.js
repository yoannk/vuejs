import Vue from 'vue';

new Vue({
    el: '#app',
    data() {
        return {
            firstname: 'Yoann',
        };
    },
    template: '<h1>Hello {{ firstname }} !</h1>',
});
