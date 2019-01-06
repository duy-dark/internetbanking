<template>
    <div>
        <div id="menuPanel">
            <div class="btnMenu " @click="clickedBtnCreateAccount">Tạo tài khoản người dùng</div>
            <div class="btnMenu" @click="clickedBtnCreatePaymentAccount">Tạo tài khoản thanh toán cho người dùng</div>
            <div class="btnMenu" @click="clickedBtnRechargePaymentAccount">Nạp tiền vào tài khoản người dùng</div>
        </div>
        <div id="workPanel">
            <CreateAccount v-if="isCreateAccountButtonChoosen" />
            <CreatePaymentAccount v-if="isCreatePaymentAccountButtonChoosen" />
            <RechargePaymentAccount v-if="isRechargePaymentAccountButtonChoosen" />
        </div>
    </div>
</template>
<script>
    import CreateAccount from '../components/personnel/createAccount.vue';
    import CreatePaymentAccount from '../components/personnel/createPaymentAccount.vue';
    import RechargePaymentAccount from '../components/personnel/rechargePaymentAccount.vue';
    export default {

    name: 'personnel',
    components:{
        CreateAccount,CreatePaymentAccount,RechargePaymentAccount
    },
    data(){
        return {
            isCreateAccountButtonChoosen:false,
            isCreatePaymentAccountButtonChoosen:false,
            isRechargePaymentAccountButtonChoosen:false
        }
    },
    methods:{
        clickedBtnCreateAccount(){
            this.isCreateAccountButtonChoosen=true;
            this.isCreatePaymentAccountButtonChoosen=false;
            this.isRechargePaymentAccountButtonChoosen=false;
        },
        clickedBtnCreatePaymentAccount(){
            this.isCreateAccountButtonChoosen=false;
            this.isCreatePaymentAccountButtonChoosen=true;
            this.isRechargePaymentAccountButtonChoosen=false;
        },
        clickedBtnRechargePaymentAccount(){
            this.isCreateAccountButtonChoosen=false;
            this.isCreatePaymentAccountButtonChoosen=false;
            this.isRechargePaymentAccountButtonChoosen=true;
        }
    }
};
</script>
<style type="text/css" src="../assets/personnel/personnel.css"></style>