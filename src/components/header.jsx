import imgLogo from "../img/logo.svg";
import Arrow from "../img/Arrow.svg";
import { Routes, Route, Link } from "react-router-dom";
import Services from './Services';
import Main from './Main';
import AboutCompany from "./AboutCompany";
import AboutProgram from "./AboutProgram";
import AllReviews from "./AllReviews";



function Header() {
    return(
        <div>
        <header>
          <div className="head__nav">
            <a href="/"><img src={imgLogo} alt="Logo"/></a>
            <nav >
              <ul>
                <a href="/"><li>Главная</li></a>
                <a href="/Services"><li>Услуги</li></a>
                <a href="/AboutCompany"><li>О компании</li></a>
                <a href="/AboutProgram"><li>О программе</li></a>
                <a href="/AllReviews"><li>Отзывы</li></a>
                <a href="#footer"><li>Контакты</li></a>
              </ul>
            </nav>
          </div>
          <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/Services" element={<Services/>}/>
            <Route path="/AboutCompany" element={<AboutCompany/>}/>
            <Route path="/AboutProgram" element={<AboutProgram/>}/>
            <Route path="/AllReviews" element={<AllReviews/>}/>
          </Routes>
        </header>
        </div>
    )
}


export default Header;
