export default [
  {
    path: '/users',
    component: () => import('@/views/layout/common'),
    redirect: {
      name: 'user-list'
    },
    children: [
      {
        path: 'list',
        name: 'user-list',
        component: () => import('@/views/user/list'),
        meta: {
          title: '用户列表',
          // 配置角色，在全局路由守卫中判断$route.meta.title.role是否是admin，是的情况下才跳转到该页面
          role: 'admin'
        }
      },
      {
        path: 'edit',
        name: 'user-edit',
        component: () => import('@/views/user/edit'),
        meta: {
          title: '用户编辑'
        }
      }
    ]
  }
]
