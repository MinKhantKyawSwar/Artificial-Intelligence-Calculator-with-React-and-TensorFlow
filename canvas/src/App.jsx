import React from 'react'
import Canvas from "./Screen/Canvas"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const paths = [
  {
    path: "/",
    element: (
      <Canvas/>
    )
  }
]

const BrowserRouter = createBrowserRouter(paths);

const App = () => {
 
  return (
    <>
      <RouterProvider router ={BrowserRouter}/>
    </>
  )
}

export default App