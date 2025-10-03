import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Castle from "./Castle"
import Enter from "./rooms/Enter/Enter"
import gsap from "gsap"
import { ScrollTrigger, SplitText } from "gsap/all"

gsap.registerPlugin(ScrollTrigger, SplitText)

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Castle />}>
        <Route index element={<Enter />} />
        {/* <Route path="skills" element={<Enter />} />
        <Route path="about" element={<Enter />} />
        <Route path="projects" element={<Enter />} /> */}
        <Route path="*" element={<Enter />} />
      </Route>
    )
  )

  return (
    <RouterProvider router={router} />
  )
}

export default App
