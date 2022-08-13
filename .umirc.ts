import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '@umijs/max',
  },
  routes: [
    //  不行，子应用路由跳转被主应用拦截，找不到路由报错
    // {
    //   path: '/',
    //   component: '@/layouts/index.tsx',
    //   routes: [
    //     {
    //       path: '/sub-app',
    //       microApp: 'sub-app',
    //     },
    //   ],
    // },
    //  外边也不行，子应用路由跳转被主应用拦截，找不到路由报错
    {
      name: 'SubApp',
      path: '/sub-app',
      microApp: 'sub-app',
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
    },

    {
      name: '权限演示',
      path: '/access',
      component: './Access',
    },
    {
      name: ' CRUD 示例',
      path: '/table',
      component: './Table',
    },
  ],
  npmClient: 'yarn',
  qiankun: {
    master: {
      apps: [
        {
          name: 'sub-app',
          entry: '//localhost:7100',
        },
      ],
    },
  },
});
