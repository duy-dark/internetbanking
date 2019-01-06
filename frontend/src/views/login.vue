<template>
    <div class="loginon">
        <div class="loginbox">
            <img src="./../assets/avatar.png" class="avatar">
            <h1>Login here</h1>
            <form accept-charset="utf-8" v-on:submit.prevent>
                <p>USERNAME</p>
                <input type="text" placeholder="enter username" v-model="username">
                <p>PASSWORD</p>
                <input type="password" placeholder="enter password" v-model="password">
                <div class="g-recaptcha" data-sitekey="6LeKOocUAAAAAOKGoQA4zNJHdvVFLvhsIvX2XU_j"></div>
                <input type="submit" name="" value="LOGIN" @click="login">
                <br>
                <b-notification type="is-danger" v-if="loggedFail"><b><i>Tên đăng nhập hoặc mật khẩu không đúng !</i></b>
                </b-notification>
                <router-link to="/regist">Register</router-link>
            </form>
        </div>
    </div>
</template>
<script>
export default {

    name: 'login',

    data() {
        return {
            username: '',
            password: '',
            loggedFail: false
        };
    },
    methods: {
        login() {
            this.loggedFail = false;
            if (grecaptcha.getResponse().length === 0) {
                var ttdn = {
                    USERNAME: this.username,
                    PASSWORD: this.password
                }
                this.$store.dispatch('login', ttdn);
                var self = this;
                var fn = function() {
                    if (self.$store.state.isLogged === null) {
                        setTimeout(fn, 200);
                    } else {

                        if (self.$store.state.isLogged === true) {
                            if (self.$store.state.ttcn.CHUCVU !== undefined) {
                                self.$router.push({ 'path': '/personnel' });
                            } else {
                                self.$router.push({ 'path': '/customer' });
                            }

                        } else {
                            self.isLogging = false;
                            self.loggedFail = true;
                        }
                    }
                };
                fn();



            } else {
                alert('Please check recaptchar !');
            }
        }
    }
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

.g-recaptcha {
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