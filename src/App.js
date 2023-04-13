import './App.css';
// import { useEffect, useState } from "react"
// import axios from "axios"
import FirstPage from './component/FirstPage';
import { Route, Routes } from 'react-router-dom';
import SecondPage from './component/Second';
import UserContextProvider from './component/context/context_provider';
import ThirdPage from './component/ThirdPage';
import Summery from './component/Summary';
// import 
function App() {
  return (
    
    
        <UserContextProvider>
        <Routes>
          <Route path='/' element={<FirstPage />} />
          <Route path='/second' element={<SecondPage />} />
          <Route path='/third' element={<ThirdPage/>} />
          <Route path='/summary' element={<Summery/>}/>
          </Routes>
        </UserContextProvider>


      



  );
}

export default App;
