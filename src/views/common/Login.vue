<template>
    <div class="home">
        <div class="login">
            <div class="title">Login</div>
            <div>
                <el-input
                        placeholder="用户名"
                        v-model="username"
                        clearable>
                </el-input>
                <div class="split-input"></div>
                <el-input
                        placeholder="密码"
                        v-model="password"
                        clearable>
                </el-input>
            </div>
            <div class="login-btn" @click="toIndex">登录</div>
        </div>

    </div>
</template>


<script>
    export default {
        data() {
            return {
                username: '',
                password: '',
            }
        },
         methods: {
            toIndex() {
                this.$router.push({path:'/index'})
            }
    }
    }
</script>
<style lang="scss">
    .home {
        .el-input--suffix .el-input__inner {
            padding-right: 30px;
            background: #51524b;
            color: #fff
        }
    }
</style>
<style lang="scss" scoped>
    .home {
        position: relative;
        width: 100%;
        height: 100%;
        background: cadetblue;
        .login {
            width: 350px;
            height: 216px;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            .title {
                text-align: center;
                color: #fff;
                font-size: 52px;
                font-family: "Microsoft Himalaya";
                text-shadow: 0 0 5px rgba(255, 255, 255, 0.6);
            }
            .split-input {
                height: 20px;
            }
            .login-btn {
                height: 40px;
                margin-top: 20px;
                background: #2d3a38;
                color: #fff;
                text-align: center;
                line-height: 40px;
                cursor: pointer;
                &:hover {
                    background: #3c3737;
                }
            }
        }
    }
</style>
