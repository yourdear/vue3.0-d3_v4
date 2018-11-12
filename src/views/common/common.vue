<template>
    <div id="common">
        <Header></Header>
        <Left></Left>
        <router-view class="common-solo"></router-view>
    </div>
</template>

<script>
    import Header from "./Header"
    import Left from "./Left"
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

       #left{
           position: absolute;
           width: 255px;
           top: 60px;
           bottom: 0;
           background: #002140;
           color: #fff;
       }
       .common-solo{
           position: absolute;
           left: 255px;
           top: 60px;
           right: 0;
           bottom: 0;

   }
   }
</style>
