import './End.css';
import gfg from '../component/images/logotip.png'


const End = () => {
    return(
            <div class="End">
                <div class = "Logo">
                    <div>
                        <img src={gfg}></img>
                    </div>
                    <div>
                        <span class = "jjfffj">ООО «Студия Валерия Комягина»</span>
                    </div>
                </div>
                <div class = "center">
                    <div class = "nadpis">
                        <div>
                            <span class = "gg">О компании</span>
                        </div>
                        <div>
                            <span class = "gg">Вакансии</span>
                        </div>
                        <div>
                            <span class = "gg">Для партнеров</span>
                        </div>
                        <div>
                            <span class = "gg">Размещение рекламы</span>
                        </div>
                    </div>
                    <div class = "nadpis">
                        <div>
                            <button class = "knop"> <span> Служба поддержки</span></button>
                        </div>
                        <div>
                            <button class = "knop"> <span> Телеграм</span></button> 
                        </div>
                        <div>
                            <button class = "knop"> <span> Одноклассники</span></button>
                        </div>
                        <div>
                            <button class = "knop"> <span> Ютуб</span></button> 
                        </div>
                        <div>
                            <button class = "knop"> <span> Вконтакте</span></button>    
                        </div>
                        <div>
                            <button class = "knop"> <span> Google play</span></button>  
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
                <div class = "start">
                    <div>
                        <span><font color = "#49CBF4">info@pstv.ru</font></span>
                        <span class = "gg"><font color = "#605b6e">+7 (499) 685-00-43</font><br/>к322А, Центральный пр., Зеленоград, Москва,</span>
                    </div>
                    <div>
                          
                    </div>
                    <div>
                            
                    </div>
                </div>
            </div>
        )
    }
export default End;

