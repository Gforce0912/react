import React, {useState} from "react";
import ArrowDown from "../img/ArrowDown.svg";
import Arrow from "../img/Arrow.svg";

function Form () {
const [quetThem, setQuetThem] = useState("")
const [getName, setGetName] = useState('');
const [getContacts, setGetContacts] = useState('');
const [getEmail, setGetEmail] = useState('');
const [textArea, setTextArea] = useState('');
const arrowDown = ArrowDown;
const arrow = Arrow;
const quetions = ["Как читать буквы", "Как писать буквы", "Помогите мне"];


function showQue(){
    document.getElementById('quetVarious').style.display = "block";
    document.getElementById('overlay').style.display = 'block';
        
}
function exitQue () {
    document.getElementById('quetVarious').style.display = "none";
    document.getElementById('overlay').style.display = 'none';
}

function quetThemes1() {
    setQuetThem("Как читать буквы");
    document.getElementById('quetVarious').style.display = "none";
    document.getElementById('overlay').style.display = 'none'; 
}
function quetThemes2() {
    setQuetThem("Как писать буквы");
    document.getElementById('quetVarious').style.display = "none";
    document.getElementById('overlay').style.display = 'none';        
}
function quetThemes3() {
    setQuetThem("Помогите мне");
    document.getElementById('quetVarious').style.display = "none";
    document.getElementById('overlay').style.display = 'none';
}

    return(
        <div className="form">
            <div className="general">
            <div id="overlay" className="overlay" onClick={exitQue}></div>
                <div className="get-consultation">
                    <div className="name">
                        <h5>ФИО</h5>
                        <input value={getName} onChange={ev => setGetName(ev.target.value)} type="text"/>
                    </div>
                    <div className="contacts">
                        <h5>Контакный телефон</h5>
                        <input value={getContacts} onChange={ev => setGetContacts(ev.target.value)} type="tel"/>
                    </div>
                    <div className="e-mail">
                        <h5>E-mail</h5>
                        <input value={getEmail} onChange={ev => setGetEmail(ev.target.value)} type="email"/>
                    </div>
                    <div className="quation-theme" onClick={showQue}><h5>Тема вопроса</h5><div className="dis-input"><h4>{quetThem}</h4><img id="arrowDown" src={arrowDown} alt=""/></div></div>
                    <div id="quetVarious" className="quetVarious">
                        <h4 onClick={quetThemes1}>{quetions[0]}</h4>
                        <h4 onClick={quetThemes2}>{quetions[1]}</h4>
                        <h4 onClick={quetThemes3}>{quetions[2]}</h4>
                    </div>
                </div>
            </div>
            
            <div className="messeng">
                <h4>Сообщение</h4>
                <textarea value={textArea} onChange={ev => setTextArea(ev.target.value)}></textarea>
                <a href="#" className="main-btn-a"><button className="btn form_btn"><b>Бесплатная консультация</b><span><img src={arrow} alt="" /></span></button></a>
            </div>
        </div>
    )
}

export default Form;