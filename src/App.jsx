import React from 'react'
import ApiImages from './component/ApiImages'
import NavBar from './component/NavBar'
import { Routes, Route} from 'react-router-dom'
import Search from './component/Search'
import SignIn from './component/SignIn'


function App() {

  return (
    <div>
      {/* <Gallery/> */}
      {/* <Input/> */}
      <NavBar/>
      <Routes>
        <Route path='/signIn' element={<SignIn/>} />
        <Route index element={<ApiImages/>} />
        <Route path='/search/:title' element={<Search/>} />
      </Routes>
    </div>
  )
}

export default App
