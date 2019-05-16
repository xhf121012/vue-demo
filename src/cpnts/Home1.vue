<template>
    <div class="home1">
        <p>this is home1</p>
        <p>
            <router-link to="/home2">to Home2</router-link>
        </p>
    </div>
</template>
<script>
export default {
    name: "home1"
};
</script>
<style scoped>
.home1 {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: aquamarine;
}
</style>


