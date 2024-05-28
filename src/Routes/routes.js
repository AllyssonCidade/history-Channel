import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PaginaPadrao from '../Components/PaginaPadrao';
import AdicionarPost from '../Paginas/Home';
import Inicio from '../Paginas/Inicio';
import Login from '../Paginas/Login';
import SobremMim from '../Paginas/SobreMin'
import Home from '../Paginas/Home'
import Post from '../Paginas/Post'
import Menu from '../Components/Menu';
import ScrollToTopButton from '../Components/ScrollToTopButton';
import Rodape from '../Components/Rodape';
import NaoEncontrada from '../Paginas/NaoEncontrada';
import PrivateRoute from './privateRoutes';

function AppRoutes() {
    return (
      <BrowserRouter>
      <ScrollToTopButton />
        <Menu />
        <Routes>
          <Route path="/" element={<PaginaPadrao />}>

            <Route index element={<Inicio />} />
            <Route path="sobremim" element={<SobremMim />} />
            <Route path="/adicionarpost/*" element={<PrivateRoute><AdicionarPost /></PrivateRoute>}/>
            <Route path="/home/*" element={<PrivateRoute><Home /></PrivateRoute>}/>
          </Route>
  
          <Route path="login" element={<Login/>} />
          <Route path="posts/:id/*" element={<Post />} />
          <Route path="*" element={<NaoEncontrada />} />
  
        </Routes>
         <Rodape />
      </BrowserRouter>
    );
  }

  export default AppRoutes;