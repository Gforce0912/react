import React, {useState} from "react";
import RevLogo from "../img/All-reviews/logo.png"
import RevImg1 from "../img/All-reviews/rev-img1.png";
import RevImg2 from "../img/All-reviews/rev-img2.png";
import RevImg3 from "../img/All-reviews/rev-img3.png";

import revAvatar from "../img/All-reviews/camera.png";
import revAttach from "../img/All-reviews/attach.png";

import Arrow from "../img/Arrow.svg";


function AllReviews(){
    const arrow = Arrow;
    const [name, setName] = useState("Павел Абазов");
    const [revBody, setRevBody] = useState(`
    Стоит ли сомневаться перед поездкой в сша по этой программе? Наверно да, но только в выборе города или работы) все остальное очевидно, обращайтесь в агенство Dagcorporetion и вы 100% проведете продуктивное лето!
    `);
    const [rev_img1, setRev_img1] = useState(RevImg1);
    const [rev_img2, setRev_img2] = useState(RevImg2);
    const [rev_img3, setRev_img3] = useState(RevImg3);

    const [nameValue, setNameValue] = useState('Имя');
    const [nameValue2, setNameValue2] = useState('Фамилия');
    const [areaValue, setAreaValue] = useState('');
    return(
        <div className="AllReviews"> 
            <div className="services_head about_head about-grog_head rev_head">
                <h2>Все отзывы</h2>
                <a href="/"><span>&lt;</span> На главную</a>
            </div>
            <div className="review">
                <div className="rev_left">&lt;</div>
                <div className="rev_img">
                    <img src={RevLogo} alt="" />
                    <h4>{name}</h4>
                </div>
                <div className="rev_body"><p>{revBody}</p></div>
                <div className="rev_right">&gt;</div>
            </div>
            <div className="review_imgs">
                <div className="rev_img1">
                    <img className="rev_img_1 img_rev" src={rev_img1} alt="" />
                </div>
                <div className="rev_img2">
                    <img className="rev_img_2 img_rev" src={rev_img2} alt="" />
                </div>
                <div className="rev_img3">
                    <img className="rev_img_3 img_rev" src={rev_img3} alt="" />
                </div>
            </div>
            <div className="AllRevFeedback">
                <hr className="rev_hr1"/>
                <h2>Оставить отзыв</h2>
                <hr className="rev_hr2"/>
            </div>
            <div className="revForm">
                <div className="rev-img">
                    <div className="rev-form_img">
                        <div className="camera">
                            <img src={revAvatar} alt="" />
                        </div>
                        <p>Добавить аватар</p>
                    </div>
                    <div className="rev-form_attach">
                        <img src={revAttach} alt="" />
                        <p>Приложите фото отзыва</p>
                    </div>
                </div>
                <div className="rev-Forms">
                    <div className="names">
                        <input className="rev_input1" type="text" value={nameValue} onChange={ev => setNameValue(ev.target.value)}/>
                        <input className="rev_input2" type="text" value={nameValue2} onChange={ev => setNameValue2(ev.target.value)}/>
                    </div>
                    <div className="form-rev">
                        <h4>отзыв</h4>
                        <textarea className="form-rev_" placeholder="Ваш отзыв" value={areaValue} onChange={ev => setAreaValue(ev.target.value)}></textarea>
                        <p>Осталось 250 символов</p>
                    </div>
                    <a href="#" className="main-btn-a rev-btn"><button className="btn rev-btn">Оnравить отзыв<span><img src={arrow} alt="" /></span></button></a>
                </div>
            </div>
        </div>
    )
}




export default AllReviews;