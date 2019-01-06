<template>
    <div>
        <div class="title">Đóng tài khoản thanh toán</div>
        <b-field label="Số tài khoản :" :type="{'is-success':stk!=='','is-danger':stk===''}" :message="{'Please enter payment account number':stk===''}">
            <b-input maxlength="30" v-model="stk" icon="account"></b-input>
        </b-field>
        <b-field label="Expanded">
            <b-select placeholder="Select a payment account number" expanded>
                <option v-for="item in arr " :value="item.vl">{{item.vl}}</option>
            </b-select>
        </b-field>
        <button class="button btnSubmit" @click="submit" :disabled="enoughInfo">DELETE ACCOUNT PAYMENT</button>
        <br><br>
        <b-notification type="is-danger" v-if="arr.length===1"><b><i>Can't delete last payment account !</i></b>
        </b-notification>
        <b-notification type="is-success"><b><i>Deleted payment account {{stk}} !</i></b>
        </b-notification>

    </div>
</template>
<script>
export default {

    name: 'closePaymentAccount',

    data() {
        return {
            stk: 'dfdd',
            arr:[{vl:'0'},{vl:'1'},{vl:'2'}]
        }
    },
    methods: {
        submit() {
        	
        }
    },
    computed: {
        enoughInfo: function() {
            return (this.stk === ''||this.arr.length<=1);
        }
    }

};
</script>
<style lang="css" scoped>
</style>