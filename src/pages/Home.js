import React from 'react';
import { Link } from 'react-router-dom';
import Marquee from 'react-fast-marquee'
import BlogCard from '../components/BlogCard';
import ProductCard from '../components/ProductCard';
import SpecialProduct from '../components/SpecialProduct';
import Meta from '../components/Meta';
import Container from '../components/Container';
import { services } from '../utils/Data';

const Home = () => {
  return (
    <>
      <Meta title={"Anon"}/>
      <Container class='home-wrapper-1 py-5'>
        <div className="row">
            <div className="col-6">
              <div className="main-banner position-relative">
                <img src="images/main-banner-1.jpg" className="img-fluid rounded-3" alt="main banner" />
                <div className="main-banner-content position-absolute">
                  <h4>SUPERCHARGED FOR PROS.</h4>
                  <h5>Iphone 15 Pro</h5>
                  <p>At $999.99 or $49.99/mo.</p>
                  <Link className='button'>BUY NOW</Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
                <div className="small-banner position-relative">
                  <img
                    src="images\catbanner-01.jpg"
                    className="img-fluid rounded-3"
                    alt="main banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>BEST SALE</h4>
                    <h5>Iphone 15 Pro</h5>
                    <p>At $999 or $49/mo.</p>
                  </div>
                </div>

                <div className="small-banner position-relative">
                  <img
                    src="images\catbanner-02.jpg"
                    className="img-fluid rounded-3"
                    alt="main banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>NEW ARRIVAL</h4>
                    <h5>Smartwatch 7</h5>
                    <p>Shop the latest band<br/>styles and color</p>
                  </div>
                </div>

                <div className="small-banner position-relative">
                  <img
                    src="images\catbanner-03.jpg"
                    className="img-fluid rounded-3"
                    alt="main banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>GET 15% OFF</h4>
                    <h5>Buy Ipad Air</h5>
                    <p>With Stero Speaker<br />& large screen</p>
                  </div>
                </div>

                <div className="small-banner position-relative">
                  <img
                    src="images\catbanner-04.jpg"
                    className="img-fluid rounded-3"
                    alt="main banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>FREE DELIVERY</h4>
                    <h5>Headphones</h5>
                    <p>With noise-cancellation<br/>& much more</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </Container>

      <Container class='home-wrapper-2 py-5'>
        <div className="row">
            <div className="col-12">
              <div className="services d-flex align-items-center justify-content-between">
                {
                  services?.map((i, j) => {
                    return (
                      <div className = 'd-flex align-items-center gap-15' key={j}>
                        <img src={i.image} alt="services" />
                        <div>
                          <h6>{i.title}</h6>
                          <p className='mb-0'>{i.tagline}</p>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
      </Container>

      <Container class='home-wrapper-2 py-5'>
        <div className="row">
            <div className="col-12">
              <div className="categories d-flex justify-content-between flex-wrap align-items-center">
                <div className='d-flex align-items-center'>
                  <div>
                    <h5>Camera</h5>
                    <p>10 items</p>
                  </div>
                  <img src="images/camera.jpg" alt="camera" />
                </div>

                <div className="d-flex align-items-center">
                  <div>
                    <h5>Smart Tv</h5>
                    <p>20 items</p>
                  </div>
                  <img src="images/tv.jpg" alt="camera" />
                </div>

                <div className="d-flex align-items-center">
                  <div>
                    <h5>Gaming</h5>
                    <p>10 items</p>
                  </div>
                  <img src="images/headphone.jpg" alt="camera" />
                </div>

                <div className="d-flex align-items-center">
                  <div>
                    <h5>Music</h5>
                    <p>10 items</p>
                  </div>
                  <img src="images/speaker.jpg" alt="camera" />
                </div>

                <div className='d-flex align-items-center'>
                  <div>
                    <h5>Camera</h5>
                    <p>10 items</p>
                  </div>
                  <img src="images/camera.jpg" alt="camera" />
                </div>

                <div className="d-flex align-items-center">
                  <div>
                    <h5>Smart Tv</h5>
                    <p>20 items</p>
                  </div>
                  <img src="images/tv.jpg" alt="camera" />
                </div>

                <div className="d-flex align-items-center">
                  <div>
                    <h5>Gaming</h5>
                    <p>10 items</p>
                  </div>
                  <img src="images/headphone.jpg" alt="camera" />
                </div>

                <div className="d-flex align-items-center">
                  <div>
                    <h5>Music</h5>
                    <p>10 items</p>
                  </div>
                  <img src="images/speaker.jpg" alt="camera" />
                </div>
              </div>
            </div>
          </div>
      </Container>

      <Container class='featured-wrapper py-5 home-wrapper-2'>
        <div className="row">
          <h3 className="section-heading">Featured Collection</h3>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>

      <Container class='famous-wrapper py-5 home-wrapper-2'>
        <div className="row">
            <div className="col-3">
              <div className="famous-card position-relative">
                <img src="images\subbanner-01.webp" className='img-fluid' alt="famous" />
                <div className="famous-content position-absolute">
                  <h5>Big Screen</h5>
                  <h6>Smart Watch Series 7</h6>
                  <p>from $399 or $16.62/mo.</p>
                </div>
              </div>
            </div>

            <div className="col-3">
              <div className="famous-card position-relative">
                <img src="images\subbanner-02.webp" className='img-fluid' alt="famous" />
                <div className="famous-content position-absolute">
                  <h5 className='text-dark'>Studio Display</h5>
                  <h6 className='text-dark'>600 nits brightness</h6>
                  <p className='text-dark'>27 inch 5K Retina display</p>
                </div>
              </div>
            </div>

            <div className="col-3">
              <div className="famous-card position-relative">
                <img src="images\subbanner-03.webp" className="img-fluid" alt="famous" />
                <div className="famous-content position-absolute">
                  <h5 className="text-dark">Smartphones</h5>
                  <h6 className="text-dark">Iphone 15 Pro</h6>
                  <p className="text-dark">Now in Pink. From $999 or $41.62/mo.</p>
                </div>
              </div>
            </div>

            <div className="col-3">
              <div className="famous-card position-relative">
                <img src="images\subbanner-04.webp" className="img-fluid" alt="famous" />
                <div className="famous-content position-absolute">
                  <h5 className="text-dark">Home Speaker</h5>
                  <h6 className="text-dark">Room-filling Sound</h6>
                  <p className="text-dark">From $699 or 116.58/mo.</p>
                </div>
              </div>
            </div>
          </div>
      </Container>

      <Container class='special-wrapper py-5 home-wrapper-2'>
        <div className="row">
            <div className="col-12">
              <div className="section-heading">Special Products</div>
            </div>
            <div className="row">
              <SpecialProduct />
              <SpecialProduct />
              <SpecialProduct />
            </div>
          </div>
      </Container>

      <Container class='popular-wrapper py-5 home-wrapper-2'>
          <div className="row">
            <h3 className="section-heading">Our Popular Product</h3>
          </div>
          <div className="row">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
      </Container>

      <Container class='marquee-wrapper py-5'>
        <div className="row">
            <div className="col-12">
              <div className="marquee-inner-wrapper card-wrapper">
                <Marquee className="d-flex" speed="300" direction="left">
                  <div className="mx-4 w-25">
                    <img src="images/brand-01.png" alt="brand" />
                  </div>

                  <div className="mx-4 w-25">
                    <img src="images/brand-02.png" alt="brand" />
                  </div>

                  <div className="mx-4 w-25">
                    <img src="images/brand-03.png" alt="brand" />
                  </div>

                  <div className="mx-4 w-25">
                    <img src="images/brand-04.png" alt="brand" />
                  </div>

                  <div className="mx-4 w-25">
                    <img src="images/brand-05.png" alt="brand" />
                  </div>

                  <div className="mx-4 w-25">
                    <img src="images/brand-06.png" alt="brand" />
                  </div>

                  <div className="mx-4 w-25">
                    <img src="images/brand-07.png" alt="brand" />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
      </Container>

      <Container class='blog-wrapper py-5 home-wrapper-2'>
        <div className="row">
            <h3 className="section-heading">Our latest news</h3>
            <div className="col-3">
            <BlogCard/>
            </div>
            <div className="col-3">
            <BlogCard />
            </div>
            <div className="col-3">
            <BlogCard />
            </div>
            <div className="col-3">
            <BlogCard />
            </div>
          </div>
      </Container>
    </>
  )
}

export default Home