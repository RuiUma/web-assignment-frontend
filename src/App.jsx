// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { RouterProvider, } from "react-router-dom";
import router from './routes/routes.jsx';


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <p className="text-3xl font-bold underline">this is a test text</p>
      <RouterProvider router={router} />
    </>
  )
}

export default App
