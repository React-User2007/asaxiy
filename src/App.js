import './App.css';
import Home from './router/home/Home';
import {Routes , Route} from "react-router-dom"
import Footer from './components/footer/Footer';
import Carta from './router/carta/Carta';
import Kabinet from './router/kabinet/Kabinet';
import UniquePage from './components/uniquePage/UniquePage';
import Yurak from './router/yurak/Yurak';
import News from './router/news/News';
import Novinka from './router/novinka/Novinka';
import Skidka from './router/skidka/Skidka';
import Kitob from "./router/kitob/Kitob"
import Telefon from './router/telefon/Telefon';
import Televizor from './router/televizor/Televizor';
import Sport from './router/sport/Sport';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/> 
        <Route path="/carta" element={<Carta/>}/> 
        <Route path="/trek" element={<Kabinet/>}/> 
        <Route path="/yurak" element={<Yurak/>}/> 
        <Route path="/UniquePage/:id" element={<UniquePage/>}/> 
        <Route path='/news' element={<News/>}/>
        <Route path='/novinka' element={<Novinka/>}/>
        <Route path='/skidka' element={<Skidka/>}/>
        <Route path='/kitob' element={<Kitob/>}/>
        <Route path='/telefon' element={<Telefon/>}/>
        <Route path='/televizor' element={<Televizor/>}/>
        <Route path='/sport' element={<Sport/>}/>
      </Routes>
    </div>
  );
}

export default App;
