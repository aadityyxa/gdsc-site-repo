import './App.css'
import Navbar from './common-components/navbar/navbar'
import Sidebar from './common-components/sidebar/sidebar'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <div className="content">
      <Sidebar></Sidebar>
      
      </div>

    </>
  )
}

export default App
