<template>
    <div>
        <div class="title">Recharge Payment Account</div>
        <b-field label="Payment Account" :type="{'is-success':paymentAccount!=='','is-danger':paymentAccount===''}" :message="{'Please enter payment account':paymentAccount===''}">
            <b-input maxlength="30" v-model="paymentAccount" icon="account"></b-input>
        </b-field>
        <b-field label="Money" :type="{'is-success':money!=='','is-danger':money===''}" :message="{'Please enter a number':money===''}">
            <b-input maxlength="30" type="number" v-model="money " icon="cash"></b-input>
        </b-field>
        <button class="button btnSubmit" @click="submit" :disabled="enoughInfo">Recharge</button>
        <br><br>
        <b-notification type="is-success"><b><i>Recharging  payment account successfully !</i></b>
            <br>
            {{paymentAccount}}
        </b-notification>
    </div>
</template>
<script>
    import numeral from 'numeral'
	export default {
		data(){
			return{
					money:0,
					paymentAccount:''

			}
		
		},
		methods:{
			submit(){
				
			}
		},
		computed:{
			enoughInfo:function(){
				return !(this.paymentAccount!=='' && this.money!=='');
			}
		}
	};

</script>
<style type="text/css" src="../../assets/personnel/personnel.css"></style>