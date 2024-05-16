import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ResourceRegistry from '../views/ResourceRegistry.vue'
import ProjectsRegistry from '../views/ProjectsRegistry.vue'
import CalendarResourcePlan from '@/views/CalendarResourcePlan.vue'
import RequestJournal from '@/views/RequestJournal.vue'
import Dashboard from '@/views/Dashboard.vue'
import EditElementResource from '@/components/DatagridResource/EditElementResource.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/resource-registry',
      name: 'resource-registry',
      component: ResourceRegistry
    },
    {
      path: '/projects-registry',
      name: 'projects-registry',
      component: ProjectsRegistry
    },
    {
      path: '/calendar-resource-plan',
      name: 'calendar-resource-plan',
      component: CalendarResourcePlan
    },
    {
      path: '/request-journal',
      name: 'request-journal',
      component: RequestJournal
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/edit/:id',
      component: EditElementResource
    }
  ]
})

export default router
