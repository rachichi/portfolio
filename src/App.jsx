import './App.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout'
import { About } from './pages/About'
import { Home } from './pages/Home'
import { Work } from './pages/Work'
import { ProjTemplate } from './pages/projpages/ProjTemplate'

function App() {

  return (
    <Router>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/Work" element={<Work/>}/>
          <Route path="/About" element={<About/>}/>

          <Route path="/ProjectTemplate" element={<ProjTemplate/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
