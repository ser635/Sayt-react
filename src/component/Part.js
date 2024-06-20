import './Part.css';
import dd from '../component/images/Frame 2053.png'
import qq from '../component/images/мегафон.png'
import qw from '../component/images/мтс.png'
import qe from '../component/images/ruda-logo-white.be678d36 1.png'
import qr from '../component/images/Xiaomi.png'
import qt from '../component/images/logo-quizheroes 1.png'
import qy from '../component/images/сбер.png'

const Part = () => {
    return(
        <div class = "Part">
            <div class = "ss">
                <img src={dd}></img>
            </div>
            <div class = "ffd">
                <img src={qq}></img>
                <img src={qw}></img>
                <img src={qe}></img>
                <img src={qr}></img>
                <img src={qt}></img>
                <img src={qy}></img>
            </div>
        </div>
        )
    }
export default Part;
