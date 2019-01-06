<template>
    <div class="navbar-menu">
        <div class="navbar-end accountDetail">
            <b-icon icon="account" size="is-medium">
            </b-icon>
            <p>{{name}}</p>
            <button class="button btnSubmit" @click="logout">Đăng xuất</button>
        </div>
    </div>
</template>
<script>
export default {

    name: 'accountBar',

    data() {
        return {
            name: ''
        }
    },
    methods: {
        logout() {
            this.$store.dispatch('dangXuat');
            this.$router.push({ 'path': '/' });
        }
    },
    created: function() {
        var self = this;
        var fn0 = function() {
            self.$store.dispatch('getNewAccessToken');
            setTimeout(fn0, 2000);
        };
        var fn1 = function() {
            self.$store.dispatch('loadAll');
            setTimeout(fn1, 1000);
        };
        fn1();

        var fn = function() {
            if (self.$store.state.ttcn === null) {
                setTimeout(fn, 200);
            } else {
                self.name = self.$store.state.ttcn.NAME;
            }
        };
        fn();
        fn0()

    }
};
</script>
<style lang="css" scoped>
.accountDetail button {
    margin-bottom: 15px;
}

.accountDetail p {
    display: inline-block;
    margin: 0px 10px;
    padding-top: 5px;
}
</style>