import React from "react";
import ArrowWhite from "../img/Arrow-white.svg"
import Logo from "../img/footer/logo.png";
import Email from "../img/footer/email.png";
import GPS from "../img/footer/gps.png";
import Map from "../img/footer/map.png";
import Tel from "../img/footer/tel.png";
function Footer (){
const arrowWhite = ArrowWhite;

    return(
        <div className="footer about_footer" id="footer">
            <div className="main_footer">
                <h2>Комплексное закрытие предприятия</h2>
                <p className="main_footer_p">Полное прекращение  существования юридического лица <br/>
                   с сохранением легальности всей предыдущей деятельности.
                </p>
                <a href="#form" className="main-btn-a footer_btn"><button className="about_btn btn_footer"><p>Бесплатная консультация</p><span><img src={arrowWhite} alt="" /></span></button></a>
                <div className="tel">
                    <img src={Tel} alt="tel" />
                   <b><p>+7964-012-79-57</p></b>
                </div>
                <div className="email_">
                    <img src={Email} alt="email" />
                    <b><a href="#">geforcegame0912@gmail.com</a></b>
                </div>
                <div className="gps">
                    <img className="gpsImg1" src={GPS} alt="" />
                    <b><p>Махачкала, р-он, Троллейбусное-кольцо</p></b>
                    <img src={Logo
                    } alt="logo" className="logo2"/>
                </div>
            </div>
            <div className="footer_map">
                <img src={Map} alt="map" className="map"/>
            </div>
        </div>
    )
}


export default Footer;
