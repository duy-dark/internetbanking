<template>
    <div class="list-link">
        <ul>
            <li>Danh sách tài khoản thanh toán</li>
            <li>Chuyển khoản nội bộ</li>
            <li>Lịch sử giao dịch</li>
            <li>Đóng tài khoản thanh toán</li>
            <li>Thiết lập danh sách người nhận</li>
        </ul>
    </div>
</template>
<script>
export default {

    name: 'categories',

    data() {
        return {

        };
    },
};
</script>
<style lang="css" scoped>
.list-link {
    
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12) !important;
    background: #ffcc99;
    height: auto;
}

.list-link ul {
    position: relative;
    width: 100%;
    margin: auto 0;
    padding: 10px;
    background: rgba(0, 0, 0, .1);
    box-shadow: inset 0 0 15px rgba(0, 0, 0, .5);
    box-sizing: border-box;
}

.list-link ul li {
    display: flex;
    background: rgba(255, 255, 255, .1);
    padding: 5px 10px;
    color: #000;
    margin: 5px;
    transform: .5s;
    height: 35px;
    border-radius: 5px;
}

.list-link ul li:nth-child(1) {
    background: rgba(255, 255, 255, .2);
}

.list-link ul li:nth-child(2) {
    background: rgba(255, 255, 255, .6);
}

.list-link ul li:nth-child(3) {
    background: rgba(255, 255, 255, .3);
}

.list-link ul li:nth-child(4) {
    background: rgba(255, 255, 255, .2);
}

.list-link ul li:hover {
    transform: scale(1.06);
    background: #ccccff;
}
</style>