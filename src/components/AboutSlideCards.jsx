import React from "react";
function AboutSideCards(props){
    return(
        <div className="general-about-cards">
        <div className="about-cards_img"><img src={props.aboutCards.src} alt="Красивая картинка которая не  загрузилась" /></div>
                <div className="about-cards_content">
                    <h3>{props.aboutCards.title}</h3>
                    <p>{props.aboutCards.body}</p>
                </div>
        </div>
    )
}


export default AboutSideCards;
