<template>
    <div class="container">
        <div class="view-component">
            <div class="boxpaymentac">
                <form accept-charset="utf-8">
                    <div class="paymentaccount">
                        <div class="label">chọn payment account</div>
                        <div class="dropdown" style="float:left;">
                            <select name="one" class="dropdown-select">
                                <option value="1"> payment account #1</option>
                                <option value="2"> payment account #2</option>
                                <option value="3"> payment account #3</option>
                            </select>
                        </div>
                    </div>
                    <br>
                    <div class="paymentaccount">
                        <div class="label">Thông tin người nhận</div>
                        <input type="text" name="" placeholder="số tài khoản">
                    </div>
                    <br>
                    <div class="paymentaccount">
                        <div class="label" style="margin-right: 140px;">Số tiền</div>
                        <input type="number" name="" placeholder="số tiền">
                    </div>
                    <br>
                    <div class="paymentaccount">
                        <div class="label" style="margin-right: 120px;">nội dung</div>
                        <input type="text" name="" placeholder="nội dung kèm theo">
                    </div>
                    <div class="paymentaccount">
                        <div class="label">Hình thức thanh toán</div>
                        <div class="dropdown" style="float:left;">
                            <select name="one" class="dropdown-select">
                                <option value="1">người nhận thanh toán</option>
                                <option value="2">người chuyển thanh toán</option>
                            </select>
                        </div>
                    </div>
                    <input type="submit" name="" value="Chuyển Tiền">
                </form>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'transfermoney',
    data() {
        return {};
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
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12) !important;
}

input[type="submit"] {
    border: none;
    border-radius: 20px;
    background: #fb2525;
    outline: none;
    height: 40px;
    color: #fff;
    font-size: 18px;
    cursor: pointer;
}

.boxpaymentac {
    width: 500px;
    height: auto;
    background: #cccccc;
    color: #0033cc;
    opacity: 0.89;
    top: 20%;
    left: 40%;
    position: absolute;
    transition: translate(-50%, 50%);
    box-sizing: border-box;
    padding: 10px 30px;
}

.boxpaymentac .paymentaccount {
    padding: 5px;
    margin: 0;
    height: 50px;
}

.boxpaymentac .paymentaccount .label {
    float: left;
    padding-right: 20px;
    position: relative;
    height: 40px;
    padding-top: 10px;
    font-weight: bold;
    font-size: 20px;
}

.boxpaymentac .paymentaccount input {
    float: left;
    padding-right: 18px;
    padding-left: 10px;
    position: relative;
    height: 30px;
    padding-top: 10px;
    border-radius: 10px;
}

.dropdown {
    -moz-border-bottom-colors: none;
    -moz-border-left-colors: none;
    -moz-border-right-colors: none;
    -moz-border-top-colors: none;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.06)) repeat scroll 0 0 #F2F2F2;
    border-color: #FFFFFF #F7F7F7 #F5F5F5;
    border-image: none;
    border-radius: 10px;
    border-style: solid;
    border-width: 1px;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.08);
    display: inline-block;
    height: 40px;
    overflow: hidden;
    position: relative;
    width: 180px;
}

.dropdown:before,
.dropdown:after {
    -moz-border-bottom-colors: none;
    -moz-border-left-colors: none;
    -moz-border-right-colors: none;
    -moz-border-top-colors: none;
    border-color: #888888 rgba(0, 0, 0, 0);
    border-image: none;
    border-style: dashed;
    border-width: 4px;
    content: "";
    height: 0;
    pointer-events: none;
    position: absolute;
    right: 10px;
    top: 9px;
    width: 0;
    z-index: 2;
}

.dropdown:before {
    border-bottom-style: solid;
    border-top: medium none;
}

.dropdown:after {
    border-bottom: medium none;
    border-top-style: solid;
    margin-top: 7px;
}

.dropdown-select {
    background: none repeat scroll 0 0 rgba(0, 0, 0, 0) !important;
    border: 0 none;
    border-radius: 0;
    color: #62717A;
    font-size: 12px;
    height: 28px;
    line-height: 14px;
    margin: 0;
    padding: 6px 8px 6px 10px;
    position: relative;
    text-shadow: 0 1px #FFFFFF;
    width: 130%;
}

.dropdown-select:focus {
    color: #394349;
    outline: 2px solid #49AFF2;
    outline-offset: -2px;
    width: 100%;
    z-index: 3;
}

.dropdown-select>option {
    background: none repeat scroll 0 0 #F2F2F2;
    border-radius: 3px;
    cursor: pointer;
    margin: 3px;
    padding: 6px 8px;
    text-shadow: none;
}
</style>