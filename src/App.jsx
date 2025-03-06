
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Landing from "./pages/Landing"
import Navbar from "./components/header/Navbar"
import Hero from "./components/landing/hero"
import { IdeaClients } from "./pages/IdeaClients"
import ClientSummary from "./pages/ClientSummary"

function App() {

  const router = createBrowserRouter([

    {
      path : "/",
      element : <Landing/>
    },
    {
      path : "/idea-clients",
      element : <IdeaClients/>
    },
    {
      path : "/client-summary",
      element : <ClientSummary/>
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
