import {Route, Routes} from 'react-router-dom'
import Inital from './pages/Inital'
import CreateUser from './pages/CreateUser'
import NotFounPage from './pages/NotFounPage'

export default function App() {
  return (
    <>
    <Routes>
        <Route path='/' element={<Inital />} />
        <Route path='/a' element={<CreateUser />} />
        <Route path='*' element={<NotFounPage />} />
    </Routes>
    </>
  )
}

