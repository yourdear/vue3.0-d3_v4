<template>
    <div id="index">
        <Header></Header>
        <div class="content">
            万恶的首页
        </div>

    </div>
</template>

<script>
    import Header from './Header'
    export default {
        name: 'Index',
        data(){
            return{

            }
        },
        components:{
            Header
        }
    }
</script>

<style lang="scss" scoped>
    #index{
        position: relative;
        height: 100%;
        #header{
            left: 0;
        }
        .content{
         padding-top: 60px;
        }
    }
</style>
