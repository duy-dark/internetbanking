<template>
    <div>
        <AccountBar/>
        <div id="menuPanel">
            <div class="title" style="text-align:center;background-color:white !important;border: 1px solid black !important;">
                Menu Panel
            </div>
            <div @click="clickedBtnListPaymentAccount" :class="{'activeMenu':isListPaymentAccountButtonChoosen,'btnMenu':true}">Danh sách tài khoản TT</div>

            <div  @click="clickedBtnTransferMoney" :class="{'activeMenu':isTransferMoneyButtonChoosen,'btnMenu':true}">Chuyển khoản nội bộ</div>

            <div  @click="clickedBtnHistoryPayment" :class="{'activeMenu':isHistoryPaymentButtonChoosen,'btnMenu':true}">Lịch sử giao dịch</div>

            <div  @click="clickedBtnClosePaymentAccount" :class="{'activeMenu':isClosePaymentAccountButtonChoosen,'btnMenu':true}">Đóng tài khoản thanh toán</div>

            <div  @click="clickedBtnSetReceiverList" :class="{'activeMenu':isSetReceiverListButtonChoosen,'btnMenu':true}">Thiết lập danh sách người nhận</div>
        </div>
        <div id="workPanel">
            <ListPaymentAccount v-if="isListPaymentAccountButtonChoosen" />
            <TransferMoney v-if="isTransferMoneyButtonChoosen" />
            <SetReceiverList v-if="isSetReceiverListButtonChoosen" />
            <ClosePaymentAccount v-if="isClosePaymentAccountButtonChoosen" />
            <HistoryPayment v-if="isHistoryPaymentButtonChoosen" />
        </div>
    </div>
</template>
<script>
    import HistoryPayment from '../components/customer/historypayment.vue';
    import ListPaymentAccount from '../components/customer/list-payment-account.vue';
    import TransferMoney from '../components/customer/transfermoney.vue';
    import SetReceiverList from '../components/customer/setReceiverList.vue';
    import ClosePaymentAccount from '../components/customer/closePaymentAccount.vue';
    import AccountBar from '../components/accountBar.vue';
    export default {

    name: 'customer',
    components:{
        HistoryPayment,ListPaymentAccount,TransferMoney,SetReceiverList,ClosePaymentAccount,AccountBar
    },
    data(){
        return {
            isListPaymentAccountButtonChoosen:true,
            isTransferMoneyButtonChoosen:false,
            isSetReceiverListButtonChoosen:false,
            isClosePaymentAccountButtonChoosen:false,
            isHistoryPaymentButtonChoosen:false
        }
    },
    methods:{
        clickedBtnListPaymentAccount(){
            this.isListPaymentAccountButtonChoosen=true;
            this.isTransferMoneyButtonChoosen=false;
            this.isSetReceiverListButtonChoosen=false;
            this.isClosePaymentAccountButtonChoosen=false;
            this.isHistoryPaymentButtonChoosen=false;
        },
        clickedBtnTransferMoney(){
            this.isListPaymentAccountButtonChoosen=false;
            this.isTransferMoneyButtonChoosen=true;
            this.isSetReceiverListButtonChoosen=false;
            this.isClosePaymentAccountButtonChoosen=false;
            this.isHistoryPaymentButtonChoosen=false;
        },
        clickedBtnSetReceiverList(){
            this.isListPaymentAccountButtonChoosen=false;
            this.isTransferMoneyButtonChoosen=false;
            this.isSetReceiverListButtonChoosen=true;
            this.isClosePaymentAccountButtonChoosen=false;
            this.isHistoryPaymentButtonChoosen=false;
        },
        clickedBtnClosePaymentAccount(){
            this.isListPaymentAccountButtonChoosen=false;
            this.isTransferMoneyButtonChoosen=false;
            this.isSetReceiverListButtonChoosen=false;
            this.isClosePaymentAccountButtonChoosen=true;
            this.isHistoryPaymentButtonChoosen=false;
        },
        clickedBtnHistoryPayment(){
            this.isListPaymentAccountButtonChoosen=false;
            this.isTransferMoneyButtonChoosen=false;
            this.isSetReceiverListButtonChoosen=false;
            this.isClosePaymentAccountButtonChoosen=false;
            this.isHistoryPaymentButtonChoosen=true;
        }
    },
    computed:{

    }
};
</script>
<style type="text/css" src="../assets/personnel/personnel.css"></style>