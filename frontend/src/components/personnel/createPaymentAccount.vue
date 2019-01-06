<template>
    <div>
        <div class="title">Create Payment Account</div>
        <b-field label="Username" :type="{'is-success':username!=='','is-danger':username===''}" :message="{'Please enter username of customer':username===''}">
            <b-input maxlength="30" v-model="username" icon="account"></b-input>
        </b-field>
        <button class="button btnSubmit" @click="submit" :disabled="enoughInfo">Create</button>
        <br><br>
        <b-notification type="is-success"><b><i>Payment account is created :</i></b>
        	<br>
		{{paymentAccount}}
        </b-notification>

    </div>
</template>
<script>
    export default {
		data(){
			return{
				username:'',
				paymentAccount:'sdas'
			}
		},
		methods:{
			submit(){
				
			}
		},
		computed:{
			enoughInfo:function(){
				return (this.username==='');
			}
		}
	};

</script>
<style type="text/css" src="../../assets/personnel/personnel.css"></style>