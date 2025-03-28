import { Routes, Route } from 'react-router'

import './App.css'
import Header from './components/header/Header'
import Home from './components/home/Home'
import GameCatalog from './components/game-catalog/GameCatalog'
import GameCreate from './components/game-create/GameCreate'
import GameDetails from './components/game-details/GameDetails'
import Login from './components/login/Login.jsx'
import Register from './components/register/Register'

function App() {
  return (
    <div id='box'>
      <Header />

      <main id="main-content">
        <Routes>
          <Route index element={<Home />} />
          <Route path='/games' element={<GameCatalog />} />
          <Route path='/games/create' element={<GameCreate />} />
          <Route path='/games/:gameId/details' element={<GameDetails />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
