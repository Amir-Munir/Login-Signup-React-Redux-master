import './App.css';
import { Route, Routes } from 'react-router-dom';
import { LogIn } from './Components/Login';
import { SignUp } from './Components/SignUp';
import { Api } from './Components/Api';
import { NavBar } from './Components/NavBar';
import { CarouselSlider } from './Components/Slider';
import { ButtonApi } from './Components/ButtonApi';
import { Menu } from './Components/Menu';
import { Cart } from './Components/Cart';
import { Shazam } from './Components/Shazam';
import { ReactBootstrapTable } from './Components/ReactBootstrapTable';
import { QuizSetting } from './Components/Quiz/QuizSetting';


function App() {
  return (
    <>
      <NavBar />
        <Routes>
          <Route  path="/" element={<LogIn />} />
          <Route  path="/signUp" element={<SignUp />} />
          <Route path="/api" element={<Api />} />
          <Route path="/slider" element={<CarouselSlider />} />
          <Route  path="/button" element={<ButtonApi />} />
          <Route  path="/menu" element={<Menu />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/quiz" element={<QuizSetting />} />
          <Route path="/shazam" element={<Shazam />} />
          <Route path="/table" element={<ReactBootstrapTable />} />
        </Routes>
    </>
  );
}

export default App;
