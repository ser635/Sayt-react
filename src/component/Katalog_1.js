import Flickity from 'react-flickity-component';


import zaslanec from '../component/images/zaslan.png'
import faltru from '../component/images/truefalse.png'
import svintus from '../component/images/Svintus.png'
import logikon from '../component/images/logikon.png'
import mafia from '../component/images/Mafia.png'

const flickityOptions = {
    intialIndex: 2
  }

const cars = {
    id: [1,2,3,4,5],
    image: [zaslanec, faltru, svintus, logikon, mafia]
}

const Katalog_1 = () => {
    return(
        <div class = "glav">
            <div class = "Text">

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
            <div key={index} className='Papas'>
                <>
                <div style={
                    {backgroundImage:`url(${cars['image'][index - 1]})`,
                    width: 400,
                    height: 200,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    margin: 20
                    }}></div>
                </>
            </div>
        )
    })}

      </Flickity>
        </div>
);
}

export default Katalog_1;