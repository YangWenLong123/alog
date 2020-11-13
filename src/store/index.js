import Vue from 'vue';
import Vuex from 'vuex';
import User from './modules/user';
import getters from './getters';


Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        User
    },
    getters
});

export default store;
