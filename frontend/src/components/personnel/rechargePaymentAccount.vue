<template>
	<div >
		<b-field label="Payment Account" type="is-success" >
            <b-input maxlength="30" v-model="paymentAccount"  icon="account"></b-input>
        </b-field>
        <b-field label="Money" type="is-success" >
            <b-input maxlength="30" v-model="formatedMoney "  icon="cost"></b-input>
        </b-field>
		<button class="button btnSubmit" @click="submit">Submit</button>
	</div>
</template>
<script >
import numeral from 'numeral'
	export default {
		data(){
			return{
					money:0,
					paymentAccount:''
			}
		
		},
		method:{
			submit(){
				if(this.paymentAccount.length===0){
					alert("Vui lòng nhập Payment Account");
				}
			}
		},
		computed:{
			formatedMoney:function(){
				return numeral(this.money).format('0,0')+' VNĐ';
			}
		}
	};

</script>
<style type="text/css" src="../../assets/personnel/personnel.css"></style>