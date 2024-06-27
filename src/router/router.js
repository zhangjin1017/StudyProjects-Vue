// router.js
import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '../components/HelloWorld.vue';
import ImportExcel from '../components/ImportExcel.vue';
import ZjTest1 from '../components/ZjTest1.vue';
import dubang from '../components/dubang/main.vue';
import verify from '../components/verify/main.vue';
import echart from '../components/echarts/main.vue';
import tuodong from '../components/baby/tuodong.vue';
import tuodong2 from '../components/baby/tuodong2.vue';
import chatOnline from '../components/chat/main.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HelloWorld
    },
    {
      path: '/import-excel',
      name: 'importExcel',
      component: ImportExcel
    },
    {
      path: '/zj-test1',
      name: 'zjTest1',
      component: ZjTest1
    },
    {
      path: '/dubang',
      name: 'dubang',
      component: dubang
    },
    {
      path: '/verify',
      name: 'verify',
      component: verify
    },
    {
      path: '/echart',
      name: 'echart',
      component: echart
    },
    {
      path: '/tuodong',
      name: 'tuodong',
      component: tuodong
    },
    {
      path: '/tuodong2',
      name: 'tuodong2',
      component: tuodong2
    },
    {
      path: '/chatOnline',
      name: 'chatOnline',
      component: chatOnline
    }
  ]
});
