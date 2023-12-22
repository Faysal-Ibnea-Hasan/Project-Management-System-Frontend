import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'LoginView',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/LoginView.vue')
    },
    //=================================================================STUDENT================================================================
    {
      path: '/home-student',
      name: 'HomeViewStudent',
      component: () => import('../views/HomeViewStudent.vue')
    },
    {
      path: '/project-student',
      name: 'ProjectViewStudent',
      component: () => import('../views/ProjectViewStudent.vue')
    },
    {
      path: '/group-student',
      name: 'GroupViewStudent',
      component: () => import('../views/GroupViewStudent.vue')
    },
    {
      path: '/request-student',
      name: 'RequestViewStudent',
      component: () => import('../views/RequestViewStudent.vue')
    },
    //=================================================================ADMIN================================================================
    {
      path: '/home-admin',
      name: 'HomeViewAdmin',
      component: () => import('../views/HomeViewAdmin.vue')
    },
    //=================================================================SUPERVISOR================================================================
    {
      path: '/home-supervisor',
      name: 'HomeViewSupervisor',
      component: () => import('../views/HomeViewSupervisor.vue')
    },
  ]
})
router.afterEach((to, from, failure) => {
  if (!failure) {
    setTimeout(() => {
      HSStaticMethods.autoInit();
    }, 100)
  }
});

export default router
