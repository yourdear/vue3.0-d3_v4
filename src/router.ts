import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Common from './views/common/common.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
          path: '/study',
          name: 'Study',
          component: Common,
          children:[
              {
                path: '/',
                name: "Bar",
                component: () => import("./views/study/D3Bar.vue")
              },
              {
                  path: '/study/line',
                  name: "Line",
                  component: () => import("./views/study/D3Line.vue")
              },
              {
                  path: '/study/pie',
                  name: "Pie",
                  component: () => import("./views/study/D3Pie.vue")
              },
          ]
    }
  ]
})
