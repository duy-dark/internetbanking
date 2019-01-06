<template>
    <div class="navbar-menu">
        <div class="navbar-end">
            {{name}}
            <button class="button btnSubmit" @click="submit">Đăng xuất</button>
        </div>
    </div>
</template>
<script>
export default {

    name: 'accountBar',

    data() {
        return {
            name: 'Nguyễn Tiến Dũng'
        }
    },
    methods: {
        submit() {
            this.name='Cò đẹp trai'
        }
    }
}
</script>
<style lang="css" scoped>
</style>