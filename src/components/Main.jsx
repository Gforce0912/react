import React, {useState} from "react";
import Cards from "./Cards";
import Arrow from "../img/Arrow.svg";
import ArrowWhite from "../img/Arrow-white.svg"
import Icone_1 from "../img/icone1.svg"
import Icone_2 from "../img/icone2.svg"
import Icone_3 from "../img/icone3.svg"
import Avatar from "../img/Avatar.png"
import Reviews from "./Reviews"
import Form from "./Form";

import opportunity1 from "../img/Opportunity icones/independence-day 1.svg"
import opportunity2 from "../img/Opportunity icones/uncle-sam 1.svg"
import opportunity3 from "../img/Opportunity icones/usa 1.svg"
import opportunity4 from "../img/Opportunity icones/white-house 1.svg"
import About from "./About";

const Main = ( ) => {
  const arrow = Arrow;
  const arrowWhite = ArrowWhite;

 
  
  const [aboutCardsTitle, setAboutCardsTitle] = useState("Что то");
  const [aboutCardsBody, setAboutCardsBody] = useState('Хочу сказать огромное спасибо студентческому агентству! Я принимала а и аиталина всегда помогали и отвечали на все интересующие вопросы, давали советы.');

  let text1 = setInterval(() => {
    setAboutCardsTitle("Еще что то");
    let text2 = setInterval(() => {
        if(aboutCardsTitle != "Что то"){
            clearInterval(text1);
            setAboutCardsTitle("АААААААААА");
                
        }
      }, 10000)
  }, 5000)
        

    return(
        <div>
            <div className="head__slide-text">
            <h2>IMPROVING LIFE WITHOUT LIMITS <br/> WORK AND TRAVEL USA <span className="span2020"> 2022</span></h2>
            <p>Зарабатывай, путешествуй по Америке. <br/>
            Узнай реальный английский, получи незабываемые эмоции и жизненый опыт. <br/>
             Выбирай крутое лето!</p>
            <a href="#" className="main-btn-a"><button className="btn">О программе <span><img src={arrow} alt="" /></span></button></a>
          </div>
            <main>
            <div className="main__content">
                <div className="main__content-head">
                    <hr/><h2>Оформление документов</h2><hr/>
                </div>
                <div className="main__content-paragraph">
                    В компании DagCorporation процесс <br/>
                    оформление программы достаточно прост. <br/>
                    Программа обмена в США, Work and Travel, начинается <br/>
                    с того, что тебе достаточно либо зайти в офис<br/>
                    компании, либо связаться с менеджером <br/>
                    "DagCorporation" любым из способов: телефон, <br/>
                    электронная почта, социальные сети, "Discord"
                </div>
            </div>
        <div className="cards">
            <Cards content={{
                id: "Icone_1",
            class: "cards-footer1 cards-f",
            title: "Work and Travel Greenheart",
            body: "Трудоустройство из базы работодателей Greenheart",
            src: Icone_1,
            price: "2500$",
            link: "Подробнее"
            }}/>

            <Cards content={{
                id: "Icone_2",
            class: "cards-footer2 cards-f",
            title: "Work and Travel Greenheart",
            body: "Трудоустройство от DagCorporation! Предоставление жилья, встреча в аэропорту, дополнительная поддержка на терретории Америки",
            src: Icone_2,
            price: "2500$",
            link: "Подробнее"}}/>

            <Cards content={{
                id: "Icone_3",
            class: "cards-footer3 cards-f",
            title: "Work and Travel Greenheart",
            body: "Трудоустройство от DagCorporation! Предоставление жилья, встреча в аэропорту, дополнительная поддержка на терретории Америки",
            src: Icone_3,
            price: "2500$",
            link: "Подробнее"}}/>
        </div>
        <div>
            <a href="#" className="main-btn-a"><button className="btn main-btn"><b>Показать все услуги</b><span><img src={arrow} alt="" /></span></button></a>
        </div>
        <div className="about">
            <h2>О компании</h2>
            <p className="about_p">
                Мы специализируемся на предлставлении работы в США уже 20 лет, знаем <br/>
               о программе все и даже чуть больш, способны ответить абсолютно на любой вопрос. <br/>
               Наши сотрудники учавстовали в программе и успели отлично изучить ее "изнутри".
            </p>
           <a href="#" className="main-btn-a"><button className="about_btn"><p>Показать все услуги</p><span><img src={arrowWhite} alt="" /></span></button></a>
        </div>
        <div className="main__content">
                <div className="main__content-head"  id="form">
                    <hr/><h2>Получить консультацию</h2><hr/>
                </div>
                <div className="main__content-paragraph">
                    Комплексный подход к вашему вопросу <br/>
                    свевременная помощь от наших сотрудников, <br/>
                    поможем собрать полный пакет документов.
                </div>
        </div>
        <Form/>
        <div className="opportunity">
            <div className="opportunity-content">
                <img src={opportunity1} alt="" />
                <p>Возможность самостоятельной <br />
                   жизни в Америке до 5-ти месяцев
                </p>
            </div>
            <div className="opportunity-content">
                <img src={opportunity2} alt="" />
                <p>Новый уровень <br />
                   английского языка
                </p>
            </div>

            <div className="opportunity-content">
                <img src={opportunity3} alt="" />
                <p>Увлекательное <br />
                   путешествие на 50 штатов
                </p>
            </div>

            <div className="opportunity-content">
                <img src={opportunity4} alt="" />
                <p>Знакомства с новыми <br />
                   друзьями со всего мира
                </p>
            </div>
        </div>
        <div className="about-programm">
            <div className="main__content">
                    <div className="main__content-head">
                        <hr/><h2>О программе</h2><hr/>
                    </div>
                    <div className="main__content-paragraph">
                        <b>
                            Комплексный подход к вашему вопросу <br/>
                            свевременная помощь от наших сотрудников, <br/>
                            поможем собрать полный пакет документов.
                        </b>
                    </div>
            </div>
            <a href="#">Подробнее<img src={arrow} alt="" /></a>
        </div>

            <About slideText={{
                title: aboutCardsTitle,
                body: aboutCardsBody}}
                />
            <h2 className="reviews-h2">Отзывы</h2>
        <div className="reviews-main">
            <Reviews setReviews={{
                src: Avatar,
                names: "Галимат Сабинуна",
                title: "Хочу сказать огромное спасибо студенческому агентству! Я принимала участие в программе Work and Travel USA в этом году и ездила в Вирджинию, работали спасателем в компании High Sierra Pools. Все было оформлено быстро, понятно, Анна и Виталина всегда помогали и отвечали на все интересующие вопросы! "
            }}/>
            <Reviews setReviews={{
                src: Avatar,
                names: "Рустам Магомедов",
                title: "Хочу сказать огромное спасибо студенческому агентству! Я принимала участие в программе Work and Travel USA в этом году и ездила в Вирджинию, работали спасателем в компании High Sierra Pools. Все было оформлено быстро, понятно, Анна и Виталина всегда помогали и отвечали на все интересующие вопросы! "
            }}/>
            <Reviews setReviews={{
                src: Avatar,
                names: "Лейла Абакарова",
                title: "Хочу сказать огромное спасибо студенческому агентству! Я принимала участие в программе Work and Travel USA в этом году и ездила в Вирджинию, работали спасателем в компании High Sierra Pools. Все было оформлено быстро, понятно, Анна и Виталина всегда помогали и отвечали на все интересующие вопросы! "
            }}/>
        </div>
        <a href="/AllReviews" className="main-btn-a"><button className="all-reviews btn">Все отзывы<span><img src={arrow} alt="" /></span></button></a>
      </main>
        </div>

)}



export default Main;
