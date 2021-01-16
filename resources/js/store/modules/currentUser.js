const state = {
    user: {}
};
const getters = {};
const actions = {
    getUser({ commit }) {
        axios.get("/api/v1/user/current").then(res => {
            commit("setUser", res.data);
        });
    },
    loginUser({}, user) {
        axios
            .post("/api/v1/user/login", {
                email: user.email,
                password: user.password
            })
            .then(res => {
                if (res.data.access_token) {
                    localStorage.set("blog_token", res.data.access_token);
                }
                window.location.replace("/home");
            });
    }
};
const mutations = {
    setUser(state, data) {
        state.user = data;
    }
};

export default {
    namespaces: true,
    state,
    getters,
    actions,
    mutations
};
