<template>
    <div id="left">
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
    .routers-ul{
        padding-top: 20px;
        box-sizing: border-box;
        li{
            height: 34px;
            line-height: 34px;
        }
    }
</style>
