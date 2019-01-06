<template>
    <div class="createAccount">
        <b-field label="Username" type="is-success" message="This username is available">
            <b-input maxlength="30" v-model="username"  icon-pack="fas" icon="account"></b-input>
        </b-field>
        <b-field label="Password">
            <b-input type="password" v-model="password"  icon-pack="fas" icon="envelope" password-reveal>
            </b-input>
        </b-field>
        <b-field label="Name">
            <b-input v-model="name" icon-pack="fas" icon="envelope"></b-input>
        </b-field>
        <b-field label="Email" type="is-danger" message="This email is invalid">
            <b-input type="email" maxlength="30" v-model="email" icon-pack="fas" icon="envelope">
            </b-input>
        </b-field>
        <b-field label="PhoneNumber" type="is-success" message="This username is available">
            <b-input maxlength="30" v-model="phoneNumber" icon-pack="fas" icon="phone"></b-input>
        </b-field>
        <button class="button btnSubmit">Submit</button>
    </div>
</template>
<script>
    export default {
		data(){
			return {
				username:'',
				password:'',
				name:'',
				email:'',
				phoneNumber:''
			}
		}
	}
</script>
<style type="text/css" src="../../assets/personnel/personnel.css"></style>