<template>
    <div class="container">
        <div class="list-link">
            <ul>
                <li>
                    <router-link to="/listpayment">Danh sách tài khoản thanh toán</router-link>
                </li>
                <li>
                    <router-link to="/transfermoney">Chuyển khoản nội bộ</router-link>
                </li>
                <li><router-link to="/Historypayment">Lịch sử giao dịch</router-link></li>
                <li>Đóng tài khoản thanh toán</li>
                <li>Thiết lập danh sách người nhận</li>
            </ul>
        </div>
        <div class="view-component">
            <div class="divcha">
                <div class="row-half">
                    <li><span><strong>Số tài khoản</strong></span><span><strong>Số tiền dư</strong></span><span></span></li>
                    <li>
                        <span>tài khoản a</span>
                        <span>3654891</span>
                        <span><input type="submit" value="Đóng tài khoản"></span>
                    </li>
                    <li>
                        <span>tài khoản a</span>
                        <span>3654891</span>
                        <span><input type="submit" value="Đóng tài khoản"></span>
                    </li>
                    <li>
                        <span>tài khoản a</span>
                        <span>3654891</span>
                        <span><input type="submit" value="Đóng tài khoản"></span>
                    </li>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {

    name: 'list-payment-account',

    data() {
        return {

        };
    },
};
</script>
<style lang="css" scoped>
.container {
    width: 1280px;
    margin: auto;
    padding: 10px 10px;
}

.container .panel-link {
    width: 30%;
    float: left;
}

.container .view-cp {
    width: 70%;
    float: left;
}

.container .list-link {
    width: 30%;
    float: left;

    height: auto;
}

.container .list-link ul {
    position: relative;
    width: 100%;
    margin: auto 0;
    padding: 10px;
    box-sizing: border-box;

}

.container .list-link ul li {
    display: flex !important;
    background: rgba(255, 255, 255, .1);
    padding: 10px 20px;
    color: #0000ff;
    margin: 5px 0;
    transform: .5s;
    border-radius: 5px;
    font-weight: bold;

}

.container .list-link ul li:nth-child(1) {
    background: rgba(255, 255, 255, .2);
}

.container .list-link ul li:nth-child(2) {
    background: rgba(255, 255, 255, .6);
}

.container .list-link ul li:nth-child(3) {
    background: rgba(255, 255, 255, .3);
}

.container .list-link ul li:nth-child(4) {
    background: rgba(255, 255, 255, .2);
}

.container .list-link ul li:hover {
    transform: scale(1.06);
    background: #ccccff;
}

.container .view-component {
    width: 70%;
    float: left;

}
.row-half {
    float: left;
    width: 100%;
}

.divcha {
    padding: 5px 5px;
}

.divcha li {
    display: flex;
    background: rgba(255, 255, 255, .1);
    padding: 10px 20px;
    color: #000;
    margin: 5px 0;
    transform: .5s;
    border-radius: 5px;

}

.divcha li strong {
    font-size: 20px;
    color: #f0f;
}

.divcha li span:nth-child(1) {
    width: 30%;

}

.divcha li span:nth-child(2) {
    width: 30%;
}

.divcha li span:nth-child(3) {
    width: 15%;
}

input[type="submit"] {
    border: none;
    border-radius: 20px;
    background: #fb2525;
    outline: none;
    height: 30px;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
}

input[type="submit"]:hover {
    cursor: pointer;
    background: #ffc107;
    color: #000;
}
</style>