<template>
    <div>
        <div id="menuPanel">
            <div class="title" style="text-align:center;background-color:white !important;border: 1px solid black !important;">
                Menu Panel
            </div>
            <div @click="clickedBtnCreateAccount" :class="{'activeMenu':isCreateAccountButtonChoosen,'btnMenu':true}">Tạo tài khoản người dùng</div>
            <div class="btnMenu" @click="clickedBtnCreatePaymentAccount" :class="{'activeMenu':isCreatePaymentAccountButtonChoosen,'btnMenu':true}">Tạo tài khoản thanh toán cho người dùng</div>
            <div class="btnMenu" @click="clickedBtnRechargePaymentAccount" :class="{'activeMenu':isRechargePaymentAccountButtonChoosen,'btnMenu':true}">Nạp tiền vào tài khoản người dùng</div>
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
            isCreateAccountButtonChoosen:true,
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
    },
    computed:{

    }
};
</script>
<style type="text/css" src="../assets/personnel/personnel.css"></style>