import React, {useState} from "react";
import CardImg1 from "../img/aboutCards1.png";
import CardImg2 from "../img/aboutCards2.png";
import CardImg3 from "../img/aboutCards3.png";
import CardImg4 from "../img/aboutCards4.png";
function AboutProgram () {
const [companyContentTitle, setCompanyContentTitle] = useState('МЕЖКУЛЬТУРНЫЙ ОБМЕН')
const [companyContentBody, setCompanyContentBody] = useState(`Хочу сказать огромное спасибо студенческому агентству! Я принимала участие в программе Work and Travel USA в этом году и ездила в Вирджинию, работали спасателем в компании High Sierra Pools. Все было оформлено быстро, понятно, Анна и Виталина всегда помогали и отвечали на все интересующие вопросы, давали советы. Тренинг спасателей проводила Виталина в Калининграде, все проходило крайне интересно, все было понятно и объяснено.`)
const [work_p1, setWork_p1] = useState('');    
const [minus1, setMinus1] = useState('-');    

const [work_p2, setWork_p2] = useState('');    
const [minus2, setMinus2] = useState('-');   

const [work_p3, setWork_p3] = useState('');    
const [minus3, setMinus3] = useState('-');   

const [work_p4, setWork_p4] = useState('');    
const [minus4, setMinus4] = useState('-');   


function showTitleWork1(){
        setWork_p1(`
        Программа Work and Travel – это программа культурного международного обмена, которая собирает сотни тысяч студентов со всего мира в США во время летних каникул, в период с мая 
        по сентябрь. Уникальность программы состоит в том, что каждый студент сможет реализовать несколько целей одновременно: познакомиться с традициями и культурой США, получить международный опыт работы, улучшить уровень владения английским языком путем каждодневного общения с носителями языка и, в то же время, совершить увлекательное путешествие 
        по всем 50 штатам и округу Колумбия. Каждый студент сможет открыть для себя свою Америку, выбрав свой маршрут путешествия по Национальным паркам Монтаны или Калифорнии, 
        в захватывающий дух Гранд Каньон, в неспящий Лас Вегас, экзотические Гавайские Острова, а может быть устроит утреннюю пробежку в Центральном Парке.
        `);
        setMinus1('+');
        function showTitleWork1(){
            setWork_p1('');
            setMinus1('-');     
        }
        if(minus1 == '+'){
            showTitleWork1();
        }
    }
    
function showTitleWork2(){
        setWork_p2(`
        Программа Work and Travel – это программа культурного международного обмена, которая собирает сотни тысяч студентов со всего мира в США во время летних каникул, в период с мая 
        по сентябрь. Уникальность программы состоит в том, что каждый студент сможет реализовать несколько целей одновременно: познакомиться с традициями и культурой США, получить международный опыт работы, улучшить уровень владения английским языком путем каждодневного общения с носителями языка и, в то же время, совершить увлекательное путешествие 
        по всем 50 штатам и округу Колумбия. Каждый студент сможет открыть для себя свою Америку, выбрав свой маршрут путешествия по Национальным паркам Монтаны или Калифорнии, 
        в захватывающий дух Гранд Каньон, в неспящий Лас Вегас, экзотические Гавайские Острова, а может быть устроит утреннюю пробежку в Центральном Парке.
        `);
        setMinus2('+');
        function showTitleWork2(){
            setWork_p2('');
            setMinus2('-');     
        }
        if(minus2 == '+'){
            showTitleWork2();
        }
    }
    
function showTitleWork3(){
        setWork_p3(`
        Программа Work and Travel – это программа культурного международного обмена, которая собирает сотни тысяч студентов со всего мира в США во время летних каникул, в период с мая 
        по сентябрь. Уникальность программы состоит в том, что каждый студент сможет реализовать несколько целей одновременно: познакомиться с традициями и культурой США, получить международный опыт работы, улучшить уровень владения английским языком путем каждодневного общения с носителями языка и, в то же время, совершить увлекательное путешествие 
        по всем 50 штатам и округу Колумбия. Каждый студент сможет открыть для себя свою Америку, выбрав свой маршрут путешествия по Национальным паркам Монтаны или Калифорнии, 
        в захватывающий дух Гранд Каньон, в неспящий Лас Вегас, экзотические Гавайские Острова, а может быть устроит утреннюю пробежку в Центральном Парке.
        `);
        setMinus3('+');
        function showTitleWork3(){
            setWork_p3('');
            setMinus3('-');     
        }
        if(minus3 == '+'){
            showTitleWork3();
        }
    }

    function showTitleWork4(){
        setWork_p4(`
        Программа Work and Travel – это программа культурного международного обмена, которая собирает сотни тысяч студентов со всего мира в США во время летних каникул, в период с мая 
        по сентябрь. Уникальность программы состоит в том, что каждый студент сможет реализовать несколько целей одновременно: познакомиться с традициями и культурой США, получить международный опыт работы, улучшить уровень владения английским языком путем каждодневного общения с носителями языка и, в то же время, совершить увлекательное путешествие 
        по всем 50 штатам и округу Колумбия. Каждый студент сможет открыть для себя свою Америку, выбрав свой маршрут путешествия по Национальным паркам Монтаны или Калифорнии, 
        в захватывающий дух Гранд Каньон, в неспящий Лас Вегас, экзотические Гавайские Острова, а может быть устроит утреннюю пробежку в Центральном Парке.
        `);
        setMinus4('+');
        function showTitleWork4(){
            setWork_p4('');
            setMinus4('-');     
        }
        if(minus4 == '+'){
            showTitleWork4();
        }
    }
    return(
        <div>
            <div className="services_head">
                <h2>О программе</h2>
                <a href="/"><span>&lt;</span> На главную</a>
            </div>
            <div className="quotes">&rdquo;</div>
            <div className="about-company_content">
                <h2>{companyContentTitle}</h2>
                <p>{companyContentBody}</p>
            </div>
            <div className="about-program_cards">
                <h3 className="program_cards_h3">Места в которых можете побывать</h3>
                <div className="about-program_card">
                    <div className="card1 AboutCard">
                        <img src={CardImg1} alt="" />
                        <h3>Мост биг-сюр, калифорния, сша</h3>
                        <p>Комплексный подход к <br />
                        вашему вопросу, <br />
                        своевременная помощь от наших сотрудников, поможем<br />
                        собрать полный пакет </p>
                    </div>
                    <div className="card2 AboutCard">
                        <img src={CardImg2} alt="" />
                        <h3>Мост биг-сюр, калифорния, сша</h3>
                        <p>Комплексный подход к <br />
                        вашему вопросу, <br />
                        своевременная помощь от наших сотрудников, поможем<br />
                        собрать полный пакет </p>
                    </div>
                    <div className="card3 AboutCard">
                        <img src={CardImg3} alt="" />
                        <h3>Мост биг-сюр, калифорния, сша</h3>
                        <p>Комплексный подход к <br />
                        вашему вопросу, <br />
                        своевременная помощь от наших сотрудников, поможем<br />
                        собрать полный пакет </p>
                    </div>
                    <div className="card4 AboutCard">
                        <img src={CardImg4} alt="" />
                        <h3>Мост биг-сюр, калифорния, сша</h3>
                        <p>Комплексный подход к <br />
                        вашему вопросу, <br />
                        своевременная помощь от наших сотрудников, поможем<br />
                        собрать полный пакет </p>
                    </div>
                </div>
            </div>
            <div className="about-program-work">
                <div className="work_header">
                    <p className="work_header_p1">work and Travel USA – это, безусловно, самая популярная <br />
                    программа студенческого обмена в мире. </p>
                    <span>&rdquo;</span>
                    <p className="work_header_p2">Студенты получают возможность работать в сфере обслуживания <br />
                    в США в любом из 50 штатов во время летних каникул, улучшить уровень владения<br />
                    английским и получить опыт общения с международным сообществом.</p>
                </div>
                <div className="mainWork">
                    <div className="bout-program-work_h2" onClick={showTitleWork1}>
                        <button><h3>
                            О программе Work and Travel USA для студентов из <br />
                            России и Казахстана
                        </h3></button>
                        <p id="minus">{minus1}</p>
                    </div>
                    <div className="bout-program-work_p" id="work_p">{work_p1}</div>
                </div>
                <div className="mainWork">
                    <div className="bout-program-work_h2" onClick={showTitleWork2}>
                        <button><h3>
                            О программе Work and Travel USA для студентов из <br />
                            России и Казахстана
                        </h3></button>
                        <p id="minus">{minus2}</p>
                    </div>
                    <div className="bout-program-work_p" id="work_p">{work_p2}</div>
                </div>  
                <div className="mainWork">
                    <div className="bout-program-work_h2" onClick={showTitleWork3}>
                        <button><h3>
                            О программе Work and Travel USA для студентов из <br />
                            России и Казахстана
                        </h3></button>
                        <p id="minus">{minus3}</p>
                    </div>
                    <div className="bout-program-work_p" id="work_p">{work_p3}</div>
                </div>                
                <div className="mainWork">
                    <div className="bout-program-work_h2" onClick={showTitleWork4}>
                        <button><h3>
                            О программе Work and Travel USA для студентов из <br />
                            России и Казахстана
                        </h3></button>
                        <p id="minus">{minus4}</p>
                    </div>
                    <div className="bout-program-work_p" id="work_p">{work_p4}</div>
                </div>                
            </div>
        </div>
    )
}



export default AboutProgram;