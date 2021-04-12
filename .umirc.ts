import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/',
      component: '@/layouts/index',
      routes: [
        { path: '/', component: '@/pages/index' },
        { path: '/list', component: '@/pages/list' },
        { path: '/employee/:key', component: '@/pages/employee' },
        { path: '/employee', component: '@/pages/employee' },
      ],
    },
  ],
  fastRefresh: {},
  dva: {},
});
