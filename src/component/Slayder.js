import Flickity from 'react-flickity-component';
import './Slayder.css';
import vvc from "./images/voch.png"
import vvcs from "./images/ssas.png"

import svintus from '../component/images/Svintus.png'
import mafia from '../component/images/Mafia.png'
import imaginarium from '../component/images/imag.png'
import danetki from '../component/images/Danetki.png'

const flickityOptions = {
    intialIndex: 2
  }

const cars = {
    id: [1,2,3,4],
    title: ['Свинтус NEON', 'Мафия', 'Имаджинариум', 'Данетки'],
    image: [svintus, mafia, imaginarium, danetki]
}

const Slayder = () => {
    return(
        <div class = "glav">
            <div class = "headeror">
                <div class = "vocho">
                    <img class = "vocko" src={vvc}></img>
                </div>
                <div>
                    <h1 class = "vc">Простые правила, быстрые<br/>
                    и интересные партии и постоянно<br/>
                    пополняющийся каталог</h1>
                </div>
            </div>
            <Flickity
      className='Slider'
      elementType='div'
      disableImagesLoaded={false}
      options={flickityOptions}
      reloadOnUpdate
      static
      >
        {cars['id'].map((index) =>{
            return (
            <div key={index} className='Plate'>
                <>
                <h2>{cars['title'][index - 1]}</h2>
                <div style={
                    {backgroundImage:`url(${cars['image'][index - 1]})`,
                    width: '100%',
                    height: 500,
                    backgroundSize: 'cover'
                    }}></div>
                </>
            </div>
        )
    })}

      </Flickity>
      <div class = "vvcsz">
        <img class = "ffad" src={vvcs}></img>
      </div>
        </div>   
);
}

export default Slayder;