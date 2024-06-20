import Flickity from 'react-flickity-component';


import mafq from '../component/images/Mafq.png'
import logikb from '../component/images/logikon.png'
import mozgo from '../component/images/mozgo.png'
import krok from '../component/images/krokodile.png'
import daeda from '../component/images/Daeda.png'

const flickityOptions = {
    intialIndex: 2
  }

const cars = {
    id: [1,2,3,4,5],
    image: [mafq, logikb, mozgo, krok, daeda]
}

const Katalog_3 = () => {
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

export default Katalog_3;