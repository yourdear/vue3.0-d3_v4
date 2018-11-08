<template>
    <div id="left">
     <div class="left-logo">logo</div>
      <ul class="routers-ul">
          <li>
              <router-link to="/study">d3-v5-柱状图</router-link>
          </li>
          <li>
              <router-link to="/study/Line">d3-v5-折线图</router-link>
          </li>
          <li>
              <router-link to="/study/pie">d3-v5-饼图</router-link>
          </li>
          <li></li>
          <li></li>
      </ul>
    </div>
</template>

<style lang="scss">
  .left-logo{
      height: 60px;
      background: #001529;
      font-family: "Microsoft Himalaya";
      font-size: 48px;
      color: #fff;
      line-height: 60px;
      text-shadow: 2px 2px 10px rgba(255,255,255,1);
  }
    .routers-ul{
        margin-top: 20px;
        li{
            height: 34px;
            line-height: 34px;
        }
    }
</style>
