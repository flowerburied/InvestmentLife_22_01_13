import { createStore } from "vuex";
import { useRouter } from "vue-router";
export default createStore({
    state: {
        test: "6666",
        userinfo: null,
        maskList: null,
        timeout: null
    },
    mutations: {
        SET_MASK_LIST(state, step) {
            state.maskList = step
        },
        SET_USER_INFO(state, step) {
            state.userinfo = step
        },
        SET_TEST(state, step) {
            state.test = step
        },
        SET_TIME_OUT(state, step) {
            state.test = step
        },
    },
    actions: {
        testFun({ commit, state }, step) {
            console.log("SET_TEST1", state.test)
            commit("SET_TEST", step)
            console.log("SET_TEST2", state.test)
        },
        starytime({ commit }) {
            const router = useRouter();
            let param = setTimeout(() => {
                console.log('router', router)
                router.push("/signup");
            }, 300000);
            // 00
            commit('SET_TIME_OUT', param)
        },
        stopTime({ commit, state }) {
            console.log("state.timeout", state.timeout)
            clearTimeout(state.timeout)
            let param = null
            commit('SET_TIME_OUT', param)
        },

    },
    modules: {},
});