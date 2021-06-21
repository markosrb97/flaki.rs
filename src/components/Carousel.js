import Carousel from 'react-bootstrap/Carousel'
import '../css/Carousel.css'
import image from '../images/test-za-slider.jpeg'
import image1 from '../images/test-za-slider2.png'
import image2 from '../images/test-za-slider3.jpeg'

function carouselSlider() {
    return (
<Carousel fade className="mt-5"> 
  <Carousel.Item className='carousel-item'>
    <img
      className="d-block w-100"
      src={image}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Rifle Barrel Blanks</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum."ZPV Proizvodnja" company is committed to strict compliance with all applicable Serbian export control regulations and international regulations regarding traffic in arms.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={image1}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Rifle Barrel Blanks</h3>
      <p>"ZPV Proizvodnja" company is committed to strict compliance with all applicable Serbian export control regulations and international regulations regarding traffic in arms.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={image2}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Rifle Barrel Blanks</h3>
      <p>"ZPV Proizvodnja" company is committed to strict compliance with all applicable Serbian export control regulations and international regulations regarding traffic in arms.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    );
}

export default carouselSlider;