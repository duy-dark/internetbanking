<template>
	<div >
		<b-field label="Username" type="is-success" >
            <b-input maxlength="30" v-model="username"  icon="account"></b-input>
        </b-field>
        <b-field label="Payment Account" type="is-success" >
            <b-input maxlength="30" v-model="paymentAccount"  icon="account"></b-input>
        </b-field>
        <button class="button btnSubmit">Submit</button>
	</div>
</template>
<script >
	export default {
		data(){
			return{
				username:'',
				paymentAccount:''
			}
		}
	};

</script>
<style type="text/css" src="../../assets/personnel/personnel.css"></style>