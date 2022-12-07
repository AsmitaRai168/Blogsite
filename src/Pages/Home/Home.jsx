import React from 'react'
import Carousel from '../../Component/Carousel/Carousel'
import EditorpickAndTrending from '../../Component/EditorpickAndTrending/EditorpickAndTrending';
import Footer from '../../Component/Footer/Footer';
import PoliticsBusiness from '../../Component/PoliticsBusiness/PoliticsBusiness';
import { carouselData} from '../../DummyData/DummyData'
import "./Home.css";
const Home =()=> {
  return (
    <>
    <div className='home-container'>
      <div className='main-container'>
        <div className='post-container'>
          <Carousel datafromcarousel={carouselData}/>
        </div>
        <div className='editor'>
        <EditorpickAndTrending/>
        </div>
        <div className='politicsbusiness'>
          <PoliticsBusiness/>
        </div>
        <div className='footer'>
        <Footer/>

        </div>

      </div>
    </div>
    
    
    </>

  );
};

export default Home;