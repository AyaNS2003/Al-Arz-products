import Navbar from './Components/Navbar'
import Single from './Components/single'
import Family from './Components/Family'
import Events from './Components/Events'
import Contact from './Components/Contact'
function App() {


  return (
    <div>
      <Navbar />
      <img src="./assets/hero.png" alt="" className="w-full h-76"/>
      <Single />
      <Family />
      <Events />
      <Contact />
    </div>
  )
}

export default App
