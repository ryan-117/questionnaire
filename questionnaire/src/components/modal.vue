<template>
    <div class="modal" v-show="isShowModal">
        <div class="content">
            <p>{{ msg }}</p>
            <!-- <button @click="closeModal">确定</button> -->
        </div>
    </div>
</template>
<script>
export default {
    // data() {
    //     // return {
    //     //     isShow: false
    //     // }
    // },
    props: ["msg","isShowModal"],
    methods: {
        closeModal() {
            this.isShowModal = false;
            // window.close()
        }
    }
}
</script>

<style lang="less" scoped>
.modal {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #00000030;
    display: flex;
    justify-content: center;
    align-items: center;
    .content {
        width: 2.4rem;
        background-color: #fff;
        padding: 0.2rem;
        border-radius: 0.1rem;
        p {
            font-size: 0.16rem;
            line-height: 1.5;
            color: #333;
            text-align: center;
            width: 2.4rem;
        }
        button {
            background-color: #2863f3;
            width: 2rem;
            height: 0.4rem;
            display: block;
            margin: 0.2rem auto 0;
            border: none;
            border-radius: 0.2rem;
            color: #fff;
            font-size: 0.18rem;
            letter-spacing: 0.04rem
        }
    }
}
</style>

