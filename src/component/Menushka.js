import './Menushka.css';
import ddd from "./images/dddss.png"
import cccs from "./images/aaa.png"
import cccsss from "./images/Mask group.png"
import vcvc from "./images/xxxc.png"
import ggff from "./images/Mask group11.png"
import vvv from "./images/asdasd.png"
import ccxz from "./images/Mask group222.png"

const Menushka = () => {
    return(
        <div class = "dodo">
            <div class = "jojo_2">
                <div class = "block">
                    <div class = "hoho">
                        <img src={ddd}></img>
                    </div>
                    <div class = "nol">
                        <img src={cccs}></img>
                    </div>
                    <div>
                        <h1 class = "tc">Можно играть<br/> на <font color = "#49CBF4">Smart-tv</font> или <font color = "#49CBF4">PC</font></h1>
                        <p class = "tv">Собери друзей перед экраном ТВ<br/> и можно начинать вечеринку!</p>
                    </div>
                    <div>
                        <button class = "knopii"> <span> Начать играть</span></button>
                    </div>
                </div>
                <div class = "kar">
                    <img src={cccsss}></img>
                </div>
            </div>
            <div class = "jojo_2">
                <div class = "block">
                    <div class = "nol">
                        <img src={vcvc}></img>
                    </div>
                    <div>
                        <h1 class = "tc">Мобильный телефон<br/> в качестве <font color = "#49CBF4">контроллера</font></h1>
                        <p class = "tv">с их помощью можно выбирать<br/>правильные ответы, управлять<br/>событиями на большом экране</p>
                    </div>
                    <div>
                        <button class = "knopii"> <span> Начать играть</span></button>
                    </div>
                </div>
                <div class = "kat">
                    <img src={ggff}></img>
                </div>
            </div>
            <div class = "jojo">
                <div class = "block">
                    <div class = "nol">
                        <img src={vvv}></img>
                    </div>
                    <div>
                        <h1 class = "tc"><font color = "#49CBF4">Новые</font> игры<br/>каждую пятницу</h1>
                        <p class = "tv">простые правила, быстрые<br/>и интересные партии</p>
                    </div>
                    <div>
                        <button class = "knopii"> <span> Начать играть</span></button>
                    </div>
                </div>
                <div class = "kaz">
                    <img src={ccxz}></img>
                </div>
            </div>
        </div>
        )
    }
export default Menushka;