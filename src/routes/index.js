// All components mapping with path for internal routes

import { lazy } from 'react'

const Dashboard = lazy(() => import('../pages/protected/Dashboard'))


const Gallery=lazy(()=>import('../pages/protected/Gallery1'));
const  Testimonial=lazy(()=>import('../pages/protected/Testimonial'));
const Blog=lazy(()=>import('../pages/protected/Blogs'))

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


 
 
  

  
]

export default routes
