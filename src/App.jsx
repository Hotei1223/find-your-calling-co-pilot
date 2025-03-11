
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Landing from "./pages/Landing"
import Navbar from "./components/header/Navbar"
import { IdentifyValueLadder } from "./pages/IdentifyValueLadder"
import ValueLadderResult from "./pages/ValueLadderResult"

function App() {

  const router = createBrowserRouter([

    {
      path : "/",
      element : <Landing/>
    },
    {
      path : "/identify-value-ladder",
      element : <IdentifyValueLadder/>
    },
    {
      path : "/value-ladder-result",
      element : <ValueLadderResult/>
    },

  ])


  return (
    <>
      <div className="w-full h-screen overflow-x-hidden flex flex-col">
        <div className="max-w-7xl w-full relative mx-auto mt-8 flex flex-col flex-1">
          <div className="md:mx-14 mx-4 flex flex-col h-full">
            <Navbar />
            <RouterProvider router={router} />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
