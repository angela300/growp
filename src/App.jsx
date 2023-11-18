import './App.css';
import Dashboard from './components/Dashboard/Dashboard'
import Login from './components/Login/Login'
import Register from './components/Register/Register'

//Import React reacter dom
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

//Lets create a router
const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register/>
  },
  {
    path: '/dashboard',
    element: <Dashboard/>
  }
])

function App() {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
