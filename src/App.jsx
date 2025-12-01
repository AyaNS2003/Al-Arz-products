import Navbar from './Components/Navbar'
import Single from './Components/single'
import Family from './Components/Family'
import Events from './Components/Events'
function App() {


  return (
    <div>
      <Navbar />
      <img src="./assets/hero.png" alt="" className="w-full h-76"/>
      <Single />
      <Family />
      <Events />
    </div>
  )
}

export default App
