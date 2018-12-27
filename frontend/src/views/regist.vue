<template>
	<div class="loginon">
		<div class="signup">
			<form accept-charset="utf-8">
				<h1>Sign Up</h1>
				<input type="text" name="" placeholder="full name">
				<input type="text" name="" placeholder="Username">
				<input type="password" name="" placeholder="Password">
				<input type="password" name="" placeholder="confirm password">
				<input type="text" name="" placeholder="Address	">
				<input type="text" name="" placeholder="Email">
				<br>
				<br>
				<input type="submit" name="" value="Regist">
				<div class="msg">
					congratulations sign up successfully!!
				</div>
			</form>
		</div>
	</div>
</template>

<script>
export default {

  name: 'regist',

  data() {
    return {

    };
  },
};
</script>

<style lang="css" scoped>
.loginon{
	
	margin: 0;
	padding: 0;
	background: url('../assets/backgroundlogin.jpg');
	background-position: center;
	background-size: cover;
	height:720px;
}
.signup{
	background:rgba(44,62,80,0.7);
	padding: 40px;
	height: 430px;
	width: 400px;
	margin:auto;
	margin-top: 80px;
	margin-left: 180px;
	margin: 0 auto;
}
form{
	width: 390px;
	text-align: center;
}
input{
	width: 80%;
	text-align: center;
	background:transparent;
	border:none;
	border-bottom: 1px solid #fff;
	font-family: 'Play',sans-serif;
	font-size: 16px;
	font-weight: 200px;
	padding: 10px 0;
	transition: border 0.5s;
	outline: none;
	color:#fff;
	padding: 12px 10px;
}
input[type="submit"]{
	cursor: pointer;
	border: none;
	background:white;
	color: #000;
	font-size: 16px;
	line-height: 25px;
	padding: 10px 0;
	border-radius: 15px;	
}
input[type="submit"]:hover{
	
	background-color:#ff0;
	color: black;
	font-size: 25px;
	font-weight: bold;
}
h1{
	color:white;

}
.msg{
	color: white;
}
::placeholder{
	color: aliceblue;
	opacity: 0.8;
}
</style>
