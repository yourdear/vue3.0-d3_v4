<template>
    <div id="header">
      <div id="logo">logo</div>
        <ul id="header-ul">
            <li>
                <router-link to="/index">首页</router-link>
            </li>
            <li>
                <router-link to="/study">d3</router-link>
            </li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>
</template>

<style lang="scss">
    #header{
        position: absolute;
        width: 100%;
        right: 0;
        height: 60px;
        background: #fff;
        box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
        #logo{
            float: left;
            height: 60px;
            width: 255px;
            background: #001529;
            font-family: "Microsoft Himalaya";
            font-size: 48px;
            color: #fff;
            line-height: 60px;
            text-shadow: 2px 2px 10px rgba(255,255,255,1);
        }
        #header-ul{
            margin-left: 285px;
            width: auto;
            li{
                float: left;
                width: auto;
                line-height: 60px;
                margin-right: 20px;
                a{
                    color: #000;
                    font-size: 18px;
                }
            }
            &:after{
                display: block;
                content: '';
                clear: both;
            }
        }
    }
</style>
