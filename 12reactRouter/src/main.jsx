import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { Home, About, Layout, Contact, User, Github} from './components/index.js'
import {githubInfoLoader} from './components/Github/Github.jsx'


//Method 1
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "/about",
//         element: <About />
//       },
//       {
//         path: "contact-us",
//         element: <Contact/>
//       }
//     ]
//   }
// ])

//Method 2, which sir prefers
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
        <Route path='' element={<Home />} />
        <Route path='/about-us' element={<About />} />
        <Route path='/contact-us' element={<Contact />} />
        <Route path='/user/:userId' element={<User />} />
        <Route 
        loader={githubInfoLoader}
        path='/github' element={<Github />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}> /</RouterProvider>
  </StrictMode>,
)
