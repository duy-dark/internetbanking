<template>
	<div >
		<b-field label="Username" type="is-success" >
            <b-input maxlength="30" v-model="username"  icon="account"></b-input>
        </b-field>
        <b-field label="Money" type="is-success" >
            <b-input maxlength="30" v-model="money"  icon="cost"></b-input>
        </b-field>
		<button class="button btnSubmit">Submit</button>
	</div>
</template>
<style type="text/css" src="../../assets/personnel/personnel.css"></style>