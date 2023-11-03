import React from "react";
import History_img from "../img/about compony/our-history-img.png";
import Mission_img from "../img/about compony/our-mission-img.png";
import Bookmark1 from "../img/about compony/bookmark1.png";
import Bookmark2 from "../img/about compony/bookmark2.png";
import Footer from "./Footer";
function AboutCompany(){
    return(
        <div className="about_company">
            <div className="services_head about_head about-grog_head">
                <h2>О компании</h2>
                <a href="/"><span>&lt;</span> На главную</a>
            </div>
            <div className="our-history">
                <hr  className="our-history-hr"/>
                <div className="history-content">
                        <div className="history-content-text">
                            <h2>Наша история</h2>
                            <p className="history-content-p1">Мы начали свою деятельность с программы Work and Travel в 2004 году в Эстонии и Латвии, работы мы стали настоящими профессионалами в сфере туризма “Work & Travel”.</p>
                            <p className="history-content-p2">“STA Baltic” представляет целый ряд программ, связанных с учебой, работой как летом, так и круглый год, путешествиями и стажировками за рубежом для молодежи и студентов.</p>
                        </div>
                </div>
                <div className="history-img">
                        <img src={History_img} alt="" />
                </div>
            </div>
            <div className="our-mission">
                <div className="mission-img">
                    <img src={Mission_img} alt="" />
                </div>
                <div className="mission-content">
                    <div className="our-mission-h2">
                        <h2>Наша миссия</h2>
                        <hr className="our-mission-hr" />
                    </div>
                    <p className="history-mission-p1">STA Baltic предлагает молодым людям программы международного культурного обмена, предоставляя молодым людям возможность жить и работать зарубежом, что способствуют развитию их как личностей и их взаимоотношений на международном уровне.</p>
                    <p className="history-mission-p2">STA Baltic помогает молодым людям найти официальную работу, организовать путешествия на льготных условиях во многие страны мира с целью получения новых практик и приключений.</p>
                </div>
            </div>
            <div className="causes">
                <div className="causes-card">
                    <img className="bookmark1" src={Bookmark1} alt="" />
                    <div className="causes_content">
                        <h2>4 ПРИЧИНЫ ВЫБРАТЬ НАШУ <br/> КОМПАНИЮ</h2>
                        <p>DAGCORPORATION – это самый большой <br/>выбор работ и жилья для участников <br />программы Work and Travel</p>
                    </div>
                    <img className="bookmark2" src={Bookmark2} alt="" />
                </div>
                <div className="statistic">
                        <div className="stat_content1">
                            <div className="stat_1">
                            <h2>95%</h2>
                            <p>получили визы в летом 20119</p>
                        </div>
                        <div className="stat_2">
                            <h2>9 ИЗ 10</h2>
                            <p>учавствуют в программе повторно, <br />
                            если позволяет курс обучения
                            </p>
                        </div>
                    </div>
                    <div className="stat_content2">
                            <div className="stat_3">
                            <h2>8 ИЗ 10</h2>
                            <p>мы предоставили вторую работу</p>
                        </div>
                        <div className="stat_4">
                            <h2>80%</h2>
                            <p>окуат затраты на поездку <br />
                            во время самой поездки
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="overflow"></div>
            <Footer/>
        </div>
    )
}


export default AboutCompany;