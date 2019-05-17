<template>
    <div id="app">
        <div class="container">
            <ul>
                <li v-for="data in dataList" :key="data" @click="showDailog(data)">{{data}}</li>
            </ul>
        </div>

        <popup v-model="popups.demo">
            <h5>{{selectText}}</h5>
        </popup>
    </div>
</template>
<script>
import Popup from "./cpnts/Popup";
import Vue from "vue";
Vue.component("Popup", Popup);
export default {
    name: "scroll",
    data() {
        return {
            dataList: [],
            popups: {
                demo: false
            },
            selectText: null
        };
    },
    methods: {
        showDailog(data) {
            this.selectText = data;
            this.popups.demo = true;
            clearInterval(this.$options.interval);
        }
    },
    mounted() {
        this.$options.interval = setInterval(
            () => this.dataList.push(new Date().getTime()),
            20
        );
    }
};
</script>

<style scoped>
ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
}

li {
    text-align: center;
    margin: 10px;
    padding: 5px;
    border: solid 1px #ccc;
    background-color: aliceblue;
}
</style>


