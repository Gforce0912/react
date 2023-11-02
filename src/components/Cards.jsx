import React, {useState} from "react";
import Arrow from "../img/Arrow.svg";

function Cards(props) {
  const arrow = Arrow;


    return(
        <div className="Cards" id="cards">
            <div className="card">
                    <img className="icone" src={props.content.src} alt="" />
                    <div className="card__title" id="title"><h2>{props.content.title}</h2></div>
                    <div className="card__body" id="body"><p>{props.content.body}</p></div>
                    <div className={props.content.class}>
                        <div>
                            <a className="cards-link" id="cards_link" href="#">{props.content.link}</a>
                            <hr />
                        </div>
                        <a href="/Services"><button className="card__btn services_btn" id="btn"><b>{props.content.price}</b><span><img src={arrow} alt="" /></span></button></a>
                    </div>
            </div>
        </div>
    )
}

export default Cards;