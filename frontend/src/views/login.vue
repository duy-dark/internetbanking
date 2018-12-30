    <template>
    <div class="loginon">
        <div class="loginbox">
            <img src="./../assets/avatar.png" class="avatar">
            <h1>Login here</h1>
            <form accept-charset="utf-8">
                <p>USERNAME</p>
                <input type="text" placeholder="enter username">
                <p>PASSWORD</p>
                <input type="password" placeholder="enter password">
                <div class="g-recaptcha" data-sitekey="6LfvCoUUAAAAAJTPJE3sf_Uqs4PY_ORQN8Fgt42o"></div>
                <input type="submit" name="" value="LOGIN">
                <a href="">Lost your password</a>
                <br>
                <router-link to="/regist">Don't have account?</router-link>
            </form>
        </div>
    </div>
    
</template>

<script>
export default {

    name: 'login',

    data() {
        return {

        };
    },
};
</script>
<style lang="css" scoped>
.loginon {

    margin: 0;
    padding: 0;
    background: url('../assets/backgroundlogin.jpg');
    background-position: center;
    background-size: cover;
    height: 720px;
}

.loginbox {
    width: 400px;
    height: 520px;
    background: #222;
    color: #ffffff;
    opacity: 0.89;
    top: 20%;
    left: 40%;
    position: absolute;
    transition: translate(-50%, 50%);
    box-sizing: border-box;
    padding: 70px 30px;
}

.avatar {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    position: absolute;
    top: -10%;
    left: 35%;
}

.h1 {
    margin: 0;
    padding: 0 0 10px;
    text-align: center;
    font-size: 22px;
}

.loginbox p {
    margin: 0;
    padding: 0;
    font-weight: bold;

}
.g-recaptcha{
	height: 90px;
	padding: 5px;
	width: 300px;
	margin: 0;
}
.loginbox input {
    width: 100%;
    margin-bottom: 20px;

}

.loginbox input[type="text"],
input[type="password"] {
    border: none;
    border-bottom: 1px solid #fff;
    background: transparent;
    outline: none;
    height: 40px;
    color: #fff;
    font-size: 16px;
}

.loginbox input[type="submit"] {
    border: none;
    border-radius: 20px;
    background: #fb2525;
    outline: none;
    height: 40px;
    color: #fff;
    font-size: 18px;
    cursor: pointer;
}

.loginbox input[type="submit"]:hover {
    cursor: pointer;
    background: #ffc107;
    color: #000;
}

.loginbox a {
    text-decoration: none;
    font-size: 12px;
    line-height: 20px;
    color: darkgrey;
}
</style>