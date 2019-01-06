import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        ttcn: null,
        history: null,
        dsnn: null,
        taikhoan: null,
        isLogged: null,
        refeshToken: null,
        accessToken: null,
        loai: null,
        addedAccount: null,
        addedPaymenAccount: null
    },
    getters: {
        data(state) {
            return { ...state };
        }
    },
    mutations: {
        LOGIN(state, payload) {
            state.isLogged = null;
            axios.post('http://localhost:3000/user/login', payload)
                .then(res => {
                    if (typeof(res.data.auth) === 'undefined') {
                        state.isLogged = false;
                        state.ttcn = null;
                        state.history = null;
                        state.dsnn = null;
                        state.taikhoan = null;
                        state.refeshToken = null;
                        state.accessToken = null;
                        state.loai = null;
                    } else {

                        var o = {
                            USERNAME: payload.USERNAME,
                            token: res.data.access_token
                        };

                        axios.post('http://localhost:3000/accountbank', o)
                            .then(res2 => {

                                state.ttcn = res2.data.TTCN;
                                state.history = res2.data.H;
                                state.dsnn = res2.data.DSNN;
                                state.taikhoan = res2.data.TK;
                                state.refeshToken = res.data.refresh_token;
                                state.accessToken = res.data.access_token;
                                localStorage.setItem("refeshToken", res.data.refresh_token);
                                localStorage.setItem("accessToken", res.data.access_token);
                                localStorage.setItem("name", res2.data.TTCN.NAME);
                                localStorage.setItem("username", res2.data.TTCN.USERNAME);
                                var loai;
                                if (res2.data.TTCN.CHUCVU === undefined) {
                                    loai = 1;
                                } else { loai = 2; }
                                localStorage.setItem("loai", loai);
                                state.isLogged = true;
                            }).catch(err => {

                            });

                    }
                }).catch(err => {});
        },
        LOADALL(state, payload) {
            var fn = function() {
                var o = {
                    USERNAME: localStorage.getItem('username'),
                    token: localStorage.getItem('accessToken'),
                };
                axios.post('http://localhost:3000/accountbank', o)
                    .then(res => {
                        state.ttcn = res.data.TTCN;
                        state.history = res.data.H;
                        state.dsnn = res.data.DSNN;
                        state.taikhoan = res.data.TK;
                    }).catch(err => {
                        setTimeout(fn, 500);
                    });
            };
            fn();
        },
        GETNEWACCESSTOKEN(state) {
            var o = {
                username: localStorage.getItem('username'),
                refeshToken: localStorage.getItem('refeshToken'),
                LOAI: localStorage.getItem('loai')
            };
            axios.post('http://localhost:3000/newtoken/createtoken', o)
                .then(res => {
                    localStorage.setItem("refeshToken", res.data.refresh_token);
                    localStorage.setItem("accessToken", res.data.access_token);
                    localStorage.setItem("name", res.data.user.NAME);
                    localStorage.setItem("username", res.data.user.USERNAME);
                    state.accessToken = res.data.access_token;
                    state.refeshToken = res.data.refresh_token;


                }).catch(err => {});
        },
        DANGXUAT(state) {
            state.ttcn = null;
            state.history = null;
            state.dsnn = null;
            state.taikhoan = null;
            state.isLogged = null;
            state.refeshToken = null;
            state.accessToken = null;
            state.loai = null;

            localStorage.removeItem("refeshToken");
            localStorage.removeItem("accessToken");
            localStorage.removeItem("name");
            localStorage.removeItem("username");
            localStorage.removeItem("loai");
        },
        CREATEACCOUNT(state, payload) {
            state.addedAccount = null;
            axios.post('http://localhost:3000/user/regist', payload)
                .then(res => {
                    state.addedAccount = res.data.added;
                }).catch(err => {
                    state.addedAccount = false;
                });
        },
        CREATEPAYMENTACCOUNT(state, payload) {
            state.addedPaymenAccount = null;
            axios.post('http://localhost:3000/accountbank/addtk', payload)
                .then(res => {
                    state.addedPaymenAccount = res.data.SOTK;
                }).catch(err => {
 
                });
        }

    },

    actions: {

        loadAll(ctx, payload) {
            ctx.commit('LOADALL', payload);
        },
        login(ctx, payload) {
            ctx.commit('LOGIN', payload);
        },
        getNewAccessToken(ctx, payload) {
            ctx.commit('GETNEWACCESSTOKEN', payload);
        },
        dangXuat(ctx) {
            ctx.commit('DANGXUAT');
        },
        createAccount(ctx, payload) {
            ctx.commit('CREATEACCOUNT', payload);
        },
        createPaymentAccount(ctx, payload) {
            ctx.commit('CREATEPAYMENTACCOUNT', payload);
        }


    }
})