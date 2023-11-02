import React, {useState} from "react";
import Bookmark from "../img/bookmark.svg";
import AboutSideCards from "./AboutSlideCards";
import AboutCards1 from "../img/aboutCards1.png"
import AboutCards2 from "../img/aboutCards2.png"

const About = (props) =>{



    const bookmark = Bookmark;
    return(
        <div className="main-about">
            <div className="n">
                <img className="bookmark" src={bookmark} alt="" />
                <div className="slide-about-text">
                    <h2 className="about__title">{props.slideText.title}</h2>
                    <p className="about_body">{props.slideText.body}</p>
                </div>
            </div>
            <div className="slide-about-cards">
                <AboutSideCards  aboutCards={{
                    src: AboutCards1,
                    title: "Мост Биг-Сюр, Калифорния, США",
                    body: "Комплексный подход к вашему вопросу, своевременая помощь от наших сотрудников, поможем собрать полный пакет"
                }}/>
                <AboutSideCards aboutCards={{
                    src: AboutCards2,
                    title: "Новость компании",
                    body: "Комплексный подход к вашему вопросу, своевременая помощь от наших сотрудников, поможем собрать полный пакет"
                }}/>
            </div>
        </div>

    )
}

export default About;
