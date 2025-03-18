import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import BasePage from './pages/BasePage'
import Home from './pages/Home'
import NotFoundPage from './pages/NotFoundPage'

function App () {
  return (
    <Router basename='/college-practice'>
      <Routes>
        <Route path='/' element={<BasePage />}>
          <Route index element={<Home />} />
          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
