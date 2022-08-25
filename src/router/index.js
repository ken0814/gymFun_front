import { createRouter, createWebHashHistory } from 'vue-router'
import FrontLayout from '@/views/front/FrontLayout.vue'
import FrontHomeView from '@/views/front/HomeView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import { useUserStore } from '@/stores/user'
import Swal from 'sweetalert2'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'frontLayout',
      component: FrontLayout,
      children: [
        {
          path: '',
          name: 'home',
          component: FrontHomeView,
          meta: {
            titile: '前台 || 首頁'
          }
        },
        {
          path: 'register',
          name: 'register',
          component: () => import('@/views/front/RegisterView.vue'),
          meta: {
            title: '前台 || 註冊'
          }
        },
        {
          path: 'login',
          name: 'login',
          component: () => import('@/views/front/LoginView.vue'),
          meta: {
            title: '前台 || 登入'
          }
        },
        {
          path: 'about',
          name: 'about',
          component: () => import('@/views/front/AboutUs.vue'),
          meta: {
            title: '前台 || 關於我們'
          }
        },
        {
          path: 'calculator',
          name: 'calculator',
          component: () => import('@/views/front/TDEECalculator.vue'),
          meta: {
            title: '前台 || 計算機'
          }
        },
        {
          path: 'findCoach',
          name: 'findCoach',
          component: () => import('@/views/front/CoachView.vue'),
          meta: {
            title: '前台 || 找教練'
          }
        },
        {
          path: 'findStudent',
          name: 'findStudent',
          component: () => import('@/views/front/StudentView.vue'),
          meta: {
            title: '前台 || 找學員'
          }
        },
        {
          path: 'findCourse',
          name: 'findCourse',
          component: () => import('@/views/front/CourseView.vue'),
          meta: {
            title: '前台 || 找課程'
          }
        }
      ]
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('@/views/admin/AdminLayout.vue'),
      children: [
        {
          path: '',
          name: 'admin-user',
          component: () => import('@/views/admin/AdminUser.vue'),
          meta: {
            title: '管理後台 || 使用者管理',
            login: true,
            admin: true
          },
        },
        {
          path: 'course',
          name: 'admin-course',
          component: () => import('@/views/admin/AdminCourse.vue'),
          meta: {
            title: '管理員後台 || 課程管理',
            login: true,
            admin: true
          },
        },
        {
          path: 'advertise',
          name: 'admin-advertise',
          component: () => import('@/views/admin/AdminAdvertise.vue'),
          meta: {
            title: '管理後台 || 廣告管理',
            login: true,
            admin: true
          },
        },
      ]
    },
    {
      path: '/student',
      name: 'studentCenter',
      component: () => import('@/views/studentCenter/Layout.vue'),
      children: [
        {
          path: '',
          name: 'studentProfile',
          component: () => import('@/views/studentCenter/Profile.vue'),
          meta: {
            title: '學員中心 || 個人資料',
            login: true
          }
        },
        {
          path: 'course',
          name: 'studentCourse',
          component: () => import('@/views/studentCenter/Course.vue'),
          meta: {
            title: '學員中心 || 我的課程',
            login: true
          }
        },
        {
          path: 'mail',
          name: 'studentMail',
          component: () => import('@/views/studentCenter/Mail.vue'),
          meta: {
            title: '學員中心 || 信箱',
            login: true
          }
        }
      ]
    },
    {
      path: '/coach',
      name: 'cocahCenter',
      component: () => import('@/views/coachCenter/Layout.vue'),
      children: [
        {
          path: '',
          name: 'profile',
          component: () => import('@/views/coachCenter/Profile.vue'),
          meta: {
            title: '教練中心 || 個人資料',
            login: true
          }
        },
        {
          path: 'course',
          name: 'coachCourse',
          component: () => import('@/views/coachCenter/Course.vue'),
          meta: {
            title: '教練中心 || 課程管理',
            login: true
          }
        },
        {
          path: 'student',
          name: 'coachStudent',
          component: () => import('@/views/coachCenter/Student.vue'),
          meta: {
            title: '教練中心 || 學員管理',
            login: true
          }
        },
        {
          path: 'mail',
          name: 'coachMail',
          component: () => import('@/views/coachCenter/Mail.vue'),
          meta: {
            title: '教練中心 || 我的信箱',
            login: true
          }
        }
      ]
    },
    {
      path: '/404',
      name: '404',
      component: NotFoundView,
      meta: {
        title: '404',
        login: false,
        admin: false
      }
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'all',
      redirect: '/404'
    }
  ]
})

router.beforeEach((to, from, next) => {
  const user = useUserStore()
  if (user.isLogin && (to.path === '/register' || to.path === '/login')) {
    next('/')
    Swal.fire({
      icon: 'info',
      title: '提示資訊',
      text: '你目前以是登入狀態，不需要再註冊囉',
      showConfirmButton: false,
      timer: 2000
    })
  } else if (to.meta.login && !user.isLogin) {
    next('/login')
  } else if (to.meta.admin && !user.isAdmin) {
    next('/')
  } else {
    next()
  }
})

export default router
