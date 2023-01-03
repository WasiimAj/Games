import React from 'react'
import './index.css';
import { Route, Routes } from 'react-router-dom';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Profile from './Components/Profile';


const App = () => {

  // const routes = useRoutes([
  //   {path: '/', element:<Home/>},
  //   {path: '/about', element:<About/>},
  //   {path: '/contact', element:<Contact/>},
  //   {path: '/todos', element:<Todos/>},
  //   {path: '*', element:<p>PAGE NOT FOUND 404</p>},
  // ])

  return (
    <>
      {/* <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/todos' element={<Todos/>}/>
        <Route path='/todos/:id' element={<Todos/>}/>
        <Route path='*' element={<p>PAGE NOT FOUND 404</p>}/>
      </Routes> */}
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='*' element={<p>PAGE NOT FOUND 404</p>}/>
      </Routes>
    </>
  )
}

export default App