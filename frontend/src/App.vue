<template>
    <div id="app">
        <!-- <div class="wrapper">
            <header>
                <nav>
                    <div class="menu-icon">
                        <i class=""></i>
                    </div>
                    <div class="logo">
                        Logo
                    </div>
                    <div class="menu">
                        <ul>
                            <li><a href="#">home</a></li>
                            <li><a href="#">about</a></li>
                            <li><a href="#">blog</a></li>
                            <li><a href="#">contact</a></li>
                        </ul>
                    </div>
                </nav>
            </header>/header
        </div> -->
        <div id="nav">
            <router-link to="/login">Login</router-link> |
            <router-link to="/customer">Customer</router-link> |
            <router-link to="/personnel">Personnel</router-link> |
        </div>
        <router-view />
    </div>
</template>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

header {
    width: 100%;
    height: 50px;
    background: #000;
}

.logo {
    position: fixed;
    float: left;
    margin: 16px 36px;
    color: #fff;
    font-weight: bold;
    font-size: 24px;
}

nav {
    position: fixed;
    width: 100%;
}

nav ul {
    list-style: none;
    background: rgba(0, 0, 0, 0);
    overflow: hidden;
    color: #fff;
    padding: 0;
    text-align: center;
    margin: 0;
    transition: 1s;
}

nav.black ul {
    background: #000;
}

nav ul li {
    display: inline-block;
    padding: 20px;
}

nav ul li a {
    text-decoration: none;
    color: #fff;
    font-size: 20px;

}

.menu-icon {
    width: 100%;
    background: #000;
    text-align: center;
    box-sizing: border-box;
    padding: 15px 24px;
    cursor: pointer;
    color: #fff;
    display: none;
}

@media(max-width: 580px) {
    .logo {
        position: fixed;
        top: 0;
        margin-top: 16px;
    }

    nav ul {
        max-height: 0px;
        background: #000;
    }

    nav.black ul {
        background: #000;
    }

    .showing {
        max-height: 20em;
    }

    nav ul li {
        box-sizing: border-box;
        width: 100%;
        padding: 24px 0;
        text-align: center;
    }

    .menu-icon {
        display: block;
    }
}
</style>