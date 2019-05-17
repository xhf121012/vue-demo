<template>
    <div class="popup" :class="clazzName">
        <div class="head">
            <a href="javascript:void(0);" @click="close();" class="head-close"></a>
        </div>
        <slot></slot>
    </div>
</template>
<script>
let popupCount = 0;
export default {
    name: "popup",
    props: ["value"],
    data() {
        return {
            clazzName: "hide"
        };
    },
    methods: {
        close() {
            this.$emit("input", false);
        }
    },
    watch: {
        value() {
            if (this.value) {
                popupCount++;
                this.$el.style.display = "block";
                setTimeout(() => (this.clazzName = "show"), 50);
                document.querySelector("#app").style.overflow = "hidden";
            } else {
                popupCount--;
                this.clazzName = "hide";
                setTimeout(() => (this.$el.style.display = "none"), 500);
                if (popupCount <= 0) {
                    document.querySelector("#app").style.overflow =  "auto";
                }
            }
        }
    }
};
</script>

<style scoped>
.popup {
    position: fixed;
    z-index: 100;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.3);
    transition: transform 0.5s;
}
.head {
    height: 30px;
    background-color: azure;
}
.head-close {
    height: 30px;
    width: 30px;
    background-color: bisque;
    display: inline-block;
    position: absolute;
    right: 5px;
}
.hide {
    transform: translateY(100%);
}
.show {
    transform: translateY(0);
}
</style>


