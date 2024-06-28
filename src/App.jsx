import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from "react-router-dom"

import MainLayout from "./layout/MainLayout"
import HomePage from "./pages/HomePage"
import ErrorPage from "./pages/ErrorPage";


const router = createBrowserRouter(
  createRoutesFromElements(
  <Route errorElement={<ErrorPage/>} path="/" element={<MainLayout/>}>
    <Route index element={<HomePage/>}/>
    <Route  element={<HomePage/>}/>
  </Route>
  )
)

function App() {
  return <RouterProvider router={router}/>
};

export default App