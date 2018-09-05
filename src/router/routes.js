export default [
  {
    path: '/',
    name: 'index',
    redirect: '/login',
    component: resolve => require(['../views/index.vue'], resolve),
  },
  {
    path: '/work',
    name: 'Work',
    component: resolve => require(['../views/work.vue'], resolve),
  },
  {
    path: '/live',
    name: 'Live',
    component: resolve => require(['../views/live.vue'], resolve),
  },
  {
    path: '/login',
    name: 'Login',
    component: resolve => require(['../components/login.vue'], resolve),
  },
  {
    path: '/chatRoom',
    name: 'chatRoom',
    component: resolve => require(['../components/chatRoom.vue'], resolve),
  },
  {
    path: '*',
    name: 'NotFound',
    component: {
      template: '<div>404</div>'
    }
    // component: resolve => (require() ),
  }
]