<template>
    <div>
        <div id="menuPanel">
            <div class="btnMenu ">Tạo tài khoản người dùng</div>
            <div class="btnMenu">Tạo tài khoản thanh toán cho người dùng</div>
            <div class="btnMenu">Nạp tiền vào tài khoản người dùng</div>
        </div>
        <div id="workPanel">
            <div class="btnMenu " @click="clickedBtnCreateAccount">Tạo tài khoản người dùng</div>
            <div class="btnMenu" @click="clickedBtnCreatePaymentAccount">Tạo tài khoản thanh toán cho người dùng</div>
            <div class="btnMenu" @click="clickedBtnRechargePaymentAccount">Nạp tiền vào tài khoản người dùng</div>
        </div>
        <div id="workPanel">
            <CreateAccount v-if="isCreateAccountButtonChoosen" />
        </div>
    </div>
</template>
<script>
    import CreateAccount from '../components/personnel/createAccount.vue';
    export default {

    name: 'personnel',
    components:{
    	CreateAccount
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