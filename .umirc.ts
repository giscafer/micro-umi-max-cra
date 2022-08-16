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
    {
      name: 'SubApp',
      path: '/sub-app',
      microApp: 'subApp',
      routes: [
        {
          path: '/sub-app/*',
        },
      ],
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
          name: 'subApp',
          entry: 'http://localhost:7100',
        },
      ],
      sandbox: true,
    },
  },
});
