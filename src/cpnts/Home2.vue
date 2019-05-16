<template>
    <div class="home2">
        <p>this is home2</p>
        <p>
            <router-link to="/home1">to Home1</router-link>
        </p>
    </div>
</template>
<script>
export default {
    name: "home2"
};
</script>
<style scoped>
.home2 {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: bisque;
}
</style>