# README

`@umijs/max` 模板项目，更多功能参考 [Umi Max 简介](https://next.umijs.org/zh-CN/docs/max/introduce)

## 问题

```js
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
```

![](./demo0.png)

![](./demo.png)
