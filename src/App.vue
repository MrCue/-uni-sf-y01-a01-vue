<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/location">Location</router-link> |
        <router-link to="/menu/meat-dishes">Menu</router-link> |
        <router-link to="/offers">Offers</router-link>
    </div>

      <transition name="slide">
        <router-view />
      </transition>

      <footer></footer>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

section {
    height: 100vh;
}

.slide-leave-active,
.slide-enter-active {
    transition: 0.5s;
}

.slide-enter {
    transform: translate(100%, 0);
}

.slide-leave-to {
    transform: translate(-100%, 0);
}

section {
    font-size: 20px;
    position: absolute;
    width: 100%;
    top: 78px;
    left: 0;
}

</style>
