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
                <li>
                    <router-link to="/Historypayment">Lịch sử giao dịch</router-link>
                </li>
                <li>Đóng tài khoản thanh toán</li>
                <li>Thiết lập danh sách người nhận</li>
            </ul>
        </div>
        <div class="view-component">
            <div class="search">
                <input type=search results=5 name=s>
                <input type="submit" name="" value="search">
            </div>
            <div class="boxdetail">
                <li class="rowdetail">
                    <span>Số Tài Khoản:</span>
                    <span>19284712940</span>
                </li>
                <li class="rowdetail">
                    <span>Số Tài Khoản đã nhận:</span>
                    <span>19284712940</span>
                </li>
                 <li class="rowdetail">
                    <span>Số tiền gửi:</span>
                    <span>19284712940</span>
                </li>
                <li class="rowdetail">
                    <span>Hình thức thanh toán:</span>
                    <span>19284712940</span>
                </li>
                <li class="rowdetail">
                    <span>Thời gian:</span>
                    <span>19284712940</span>
                </li>
            </div>
        </div>
    </div>
</template>
<script>
export default {

    name: 'historypayment',

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

.container .view-component input[type=search] {
    width: 300px;
    height: 30px;
    border-radius: 20px;
    float: left;
    margin: 5px;
}

.container .view-component .search {

    height: 45px;
}

.container .view-component input[type="submit"] {
    border: none;
    border-radius: 20px;
    background: #fb2525;
    outline: none;
    height: 40px;
    color: #fff;
    font-size: 18px;
    cursor: pointer;
    float: left;
    margin: 2px;
}

.container .view-component .boxdetail {
     box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12) !important;
     margin:10px;
     color:#0000ff;
}

.container .view-component .boxdetail li {
    display: flex;
    height: 40px;
    margin: 5px auto;
    left: 40%;
}

.container .view-component .boxdetail .rowdetail span:nth-child(1) {
    margin: 17px;
    float: left;
    font-weight: bold;
    font-size: 20px;
}
.container .view-component .boxdetail .rowdetail span:nth-child(2) {
    margin: 18px;
    float: left;
    font-size: 18px;
}

</style>