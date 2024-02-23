// import { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Carousel } from "./styled";
import { Wrap } from "./styled";
import { StyledBody } from "./styled";

function ImgSlider() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <StyledBody>
      <Carousel {...settings}>
        <Wrap>
          <img src="/images/sad.jpg" alt="slider image 1" />
        </Wrap>
        <Wrap>
          <img src="/images/scared.jpg" alt="slider image 2" />
        </Wrap>
        <Wrap>
          <img src="/images/hesitant.jpg" alt="slider image 3" />
        </Wrap>
        <Wrap>
          <img src="/images/acceptance.jpg" alt="slider image 4" />
        </Wrap>
        <Wrap>
          <img src="/images/happy.jpg" alt="slider image 5" />
        </Wrap>
      </Carousel>
    </StyledBody>
  );
}

export default ImgSlider;
