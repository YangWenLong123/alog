const state = {
    cound: 5
};

const mutations = {
    JIA_COUND: state => {
        state.cound++;
    }
};

const actions = {
    JiaCound({ commit }) {
        commit('JIA_COUND');
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
};

