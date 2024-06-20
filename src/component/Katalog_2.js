import Flickity from 'react-flickity-component';


import daeda from '../component/images/Daeda.png'
import partyquiz from '../component/images/hohoho.png'
import logika from '../component/images/kviz.png'
import imagenar from '../component/images/imag.png'
import faltru from '../component/images/truefalse.png'

const flickityOptions = {
    intialIndex: 2
  }

const cars = {
    id: [1,2,3,4,5],
    image: [daeda, partyquiz, logika, imagenar, faltru]
}

const Katalog_2 = () => {
    return(
        <div class = "glava">
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

export default Katalog_2;