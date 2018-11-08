<template>
    <div id="common">
        <Header></Header>
        <Left></Left>
        <router-view class="common-solo"></router-view>
    </div>
</template>

<script>
    import Header from "../common/Header"
    import Left from  "../common/Left"
    export default {
        data(){
            return{}
        },
        components:{
            Header,
            Left
        }
    }
</script>
<style lang="scss">
   #common{
       position: relative;
       height: 100%;

       #header{
           height: 60px;
           background: #666;
           color: #fff;
       }
       #left{
           position: absolute;
           width: 120px;
           top: 60px;
           bottom: 0;
           background: #999;
       }
       .common-solo{
           position: absolute;
           left: 120px;
           top: 60px;
           right: 0;
           bottom: 0;
           background: #ccc;
       }
   }
</style>
