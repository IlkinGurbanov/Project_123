import React from 'react'
import './Header.css'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
  return (
    <div className="header">
        <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://149842022.v2.pressablecdn.com/dazzling/wp-content/uploads/sites/54/2013/01/slide02.jpg"
          alt="First slide"
        />
        <Carousel.Caption className='caruseltext'>
          <h3 className='caruselhead'>Markup image Alignment</h3>
          <p className='caruselmain'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore sit ea facilis sunt itaque quibusdam, molestiae omnis quaerat atque assumenda recusandae voluptate. Distinctio hic vel expedita laboriosam sed, aperiam nobis!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://149842022.v2.pressablecdn.com/dazzling/wp-content/uploads/sites/54/2013/01/slide03.jpg"
          alt="Second slide"
        />

        <Carousel.Caption className='caruseltext'>
          <h3 className='caruselhead'>Markup image Alignment</h3>
          <p className='caruselmain'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore sit ea facilis sunt itaque quibusdam, molestiae omnis quaerat atque assumenda recusandae voluptate. Distinctio hic vel expedita laboriosam sed, aperiam nobis!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://149842022.v2.pressablecdn.com/dazzling/wp-content/uploads/sites/54/2013/01/homev_updated1_02.jpg"
          alt="Third slide"
        />

        <Carousel.Caption className='caruseltext'>
          <h3 className='caruselhead'>Markup image Alignment</h3>
          <p className='caruselmain'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore sit ea facilis sunt itaque quibusdam, molestiae omnis quaerat atque assumenda recusandae voluptate. Distinctio hic vel expedita laboriosam sed, aperiam nobis!</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    <div className="textaftercarusel">
        <p className="caruseltextfirst">
            Do you like this awesome and free WordPress WooCommerce theme?
        </p>
        <button className="caruselbutton">
            Download Now!
        </button>
    </div>
    </div>
  )
}

export default Header