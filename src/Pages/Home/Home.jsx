import React from 'react'
import Carousel from '../../Component/Carousel/Carousel'
import EditorpickAndTrending from '../../Component/EditorpickAndTrending/EditorpickAndTrending';
import Footer from '../../Component/Footer/Footer';
import { carouselData,EditorpickData} from '../../DummyData/DummyData'
import "./Home.css";
const Home =()=> {
  return (
    <>
    <div className='home-container'>
      <div className=''main-container>
        <div className='post-container'>
          <Carousel datafromcarousel={carouselData}/>
        </div>
      </div>
    </div>
    
    <EditorpickAndTrending EditorpickData={EditorpickData} />
      <Footer/>
    </>

  );
};

export default Home;