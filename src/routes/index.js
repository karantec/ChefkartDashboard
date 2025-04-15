// All components mapping with path for internal routes

import { lazy } from 'react'

const Dashboard = lazy(() => import('../pages/protected/Dashboard'))


const Gallery=lazy(()=>import('../pages/protected/Gallery1'));
const  Testimonial=lazy(()=>import('../pages/protected/Testimonial'));
const Blog=lazy(()=>import('../pages/protected/Blogs'))
const Crousel=lazy(()=>import('../pages/protected/Crousel'))
const Service=lazy(()=>import('../pages/protected/Service'))
const Chef=lazy(()=>import('../pages/protected/ChefDetails'))

const routes = [
  { // the url
  component: Dashboard, // view rendered
  },
  


  {
    path: '/Blog',
    component:Blog,
  },
  
  

  {
    path: '/Gallery',
    component: Gallery,
  },
  {
    path: '/testimonial',
    component: Testimonial,
  },

  {
    path: '/crousel',
    component: Crousel,
  },

  {
    path: '/Chef',
    component: Chef,
  },

  {
    path: '/User',
    component: Crousel,
  },
  {
    path: '/Service',
    component: Service,
  },
  {
    path: '/booking',
    component: Crousel,
  },
 
  

  
]

export default routes
