import Navbar from './Components/Navbar'
import Single from './Components/single'
import Family from './Components/Family'
function App() {


  return (
    <div>
      <Navbar />
      <img src="./assets/hero.png" alt="" className="w-full h-76"/>
      <Single />
      <Family />
    </div>
  )
}

export default App
