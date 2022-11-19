import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { InfoPersonaje } from '../pages/InfoPersonaje';
import {Home} from '../pages/Home'
import {App} from '../App';

export const AppRouter= () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}/>
        <Route path='/info' element={<InfoPersonaje />}/>
        <Route path='/home' element={<Home />}/>
      </Routes>    
    </BrowserRouter>

    )
}
