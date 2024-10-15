import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Layout from './Component/Layout'
import Contact from './Component/Contact'
import Home from './Component/Home'
import About from './Component/About'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/about" element={<About/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
