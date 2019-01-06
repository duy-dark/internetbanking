<template>
    <div class="createAccount">
        <div class="title">Create Account</div>
        <b-field label="Username":type="{'is-success':username!=='','is-danger':username===''}" :message="{'Please enter username of customer':username===''}">
            <b-input maxlength="30" v-model="username"  icon="account"></b-input>
        </b-field>
        <b-field label="Password" :type="{'is-success':password!=='','is-danger':password===''}" :message="{'Please enter password of customer':password===''}">
            <b-input type="password" v-model="password" icon="lock" password-reveal>
            </b-input>
        </b-field>
        <b-field label="nameC" :type="{'is-success':nameC!=='','is-danger':nameC===''}" :message="{'Please enter name of customer':nameC===''}">
            <b-input v-model="nameC"  icon="account"></b-input>
        </b-field>
        <b-field label="Email"  :type="{'is-success':email!=='','is-danger':email===''}" :message="{'Please enter email of customer':email===''}">
            <b-input type="email" maxlength="30" v-model="email" icon-pack="fas" icon="envelope">
            </b-input>
        </b-field>
        <b-field label="PhoneNumber" :type="{'is-success':phoneNumber!=='','is-danger':phoneNumber===''}" :message="{'Please enter phone number of customer':phoneNumber===''}">
            <b-input maxlength="30" type="number" v-model="phoneNumber" icon-pack="fas" icon="phone"></b-input>
        </b-field>
        <button class="button btnSubmit"  @click="submit" :disabled="enoughInfo">Create</button>
    </div>
</template>
<script>
    export default {
		data(){
			return {
				username:'',
				password:'',
				nameC:'',
				email:'',
				phoneNumber:''
			}
		},
        methods:{
            submit(){
                
            }
        },
        computed:{
            enoughInfo:function(){
                return (this.username===''||this.password===''||this.nameC===''||this.email===''||this.phoneNumber==='');
            }
        }

	};
</script>
<style type="text/css" src="../../assets/personnel/personnel.css"></style>