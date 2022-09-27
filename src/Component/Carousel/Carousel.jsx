import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css"


const Carousel = ({ datafromcarousel = [] }) => {
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
    };
    return (
        <>
          <Slider {...settings}>
            {datafromcarousel.map((each, index) => (
              <div className="maincontainer">
                <div className="innercontainer">
                  <div className="details">
                  
                    <figure>
                      <img
                        src={each.image}
                        className="imagefromCarousel"
                        alt="img1"
                      />
                    </figure>
                              <div className="titiledescriptionContainer">
                              <div className="title">
                      <h3>{each?.imagelabel}</h3>
                    </div>
                    <div className="DescriptionContainer">
                      <p>{each?.details}</p>
                    </div>

                              </div>
                    

                  </div>
                </div>
              </div>
            ))}
          </Slider>

        </>
      );
    };
    export default Carousel ;