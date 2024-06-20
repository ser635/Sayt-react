import './Dve_knop.css';
import ccsd from "./images/headers.png"
import ccdd from "./images/Vector_4.png"
import ccsdd from "./images/Vector_3.png"
import ddcx from "./images/Vector_2.png"
import ddxx from "./images/Vector_1.png"


const Dve_knop = () => {
    return(
            <div class="block8-price-subscribe">
                <div class = "headers">
                    <img src={ccsd}/>
                </div>
                <div class = "knopki">
               <div class="price">
                  <h1 class = "ggs">Бесплатно</h1>
                  <span class = "jjj">Базовая версия<br/><span>с ограниченным доступом</span></span>
                  <div class="figure">
                     <img src={ccdd}/>
                  </div>
                  <div class="figure">
                     <img src={ccsdd}/>
                  </div>
               </div>


               <div class="price">
                  <h1 class = "ggs">399 руб/месяц</h1>
                  <span class = "jjj">Премиум версия<br/><span>с полным доступом</span></span>
                  <div class="figure">
                     <img src={ddcx}/>
                  </div>
                  <div class="figure">
                     <img src={ddxx}/>
                  </div>
               </div>
               </div>
            </div>
        )
    }
export default Dve_knop;

