<template>
    <div :class="navbar" id="navigation-bar">
        <div class="links">
            <a href="/" class="active" @click="burger">START</a>
            <a href="/app/#/createyourevent" @click="burger">EIGENES EVENT</a>
            <a href="/app/#/projects" @click="burger">PROJEKTE</a>
            <a href="/app/#/about" @click="burger">ABOUT</a>
        </div>
        <a class="icon" @click="burger">
            <font-awesome-icon icon="bars" />            
        </a>
    </div>
</template>

<script>
export default {
    name: "NavigationBar",
    data () {
        return {
            navbar: "navbar"
        }
    },
    methods: {
        burger() {
            if (this.navbar === "navbar") {
                this.navbar += " responsive"
            } else {
                this.navbar = "navbar"
            }
        }
    }
}
</script>

<style scoped>
.navbar {
    background-color: white;
    overflow: hidden;
    display: flex;
    right: 0;
    top: 0;
    z-index: 50;
    position: absolute;
    padding: 0px;
}
.navbar a {
    float: left;
    display: block;
    color: #363636;
    font-family: Museo, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;    
    padding: 0.6em 0.6em;
    text-decoration: none;
    font-size: 17px;
}
.navbar a:hover {
    background-color: lightgray;
    color: black;
}

.navbar a.active {
    background-color: #008FC3;
    color: white;
}

.navbar a.icon {
    display: block;

    background-color: #008FC3;
    color: white;
    right: 0;
    top: 0;
}
.navbar .icon:hover {
    color: black;
}



/* GRID SYSTEM for responsive*/

.navbar a:not(:first-child) {display: none;}
.navbar a.icon {
    float: right;
    display: block;
}

.navbar.responsive a.icon {
    position: absolute;

}
.navbar.responsive a {
    float: none;
    display: block;
    text-align: left;
}



</style>
