<template>
    <div id="app">
        <transition name="fade" :appear="true">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
export default {
    name: "app",
    data() {
        return {};
    }
};
</script>

<style>
body {
    position: absolute;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
}
#app {
    width: 100%;
    height: 100%;
}

.fade-enter {
    transform: translateX(-100%);
    opacity: 0;
}
.fade-enter-to {
    transform: translateX(0);
     opacity: 1;
}
.fade-leave{
    transform: translateX(0);
     opacity: 1;
}
.fade-leave-to {
    transform: translateX(100%);
     opacity: 0;
}
.fade-enter-active,.fade-leave-active {
    transition: all 0.5s;
}
</style>
