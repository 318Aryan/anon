import { React, useState } from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import ProductCard from '../components/ProductCard';
import ReactStars from 'react-stars';
import ReactImageZoom from 'react-image-zoom';
import Color from '../components/Color';
import { TbGitCompare } from 'react-icons/tb';
import { AiOutlineHeart } from 'react-icons/ai'; 
import Container from '../components/Container';


const SingleProduct = () => {
  const props = {width: 400, height: 600, zoomWidth: 600, zoomHeight: 500, img: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg", }
  const [ orderedProduct ] = useState(true);

  const copyToClipboard = (text) => {
    var textField = document.createElement('textarea');
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand('copy');
    textField.remove();
  }
  return (
    <>
      <Meta title={"Product"}/>
      <BreadCrumb title='Product / Apple Tablet'/>
      <Container class='main-product-wrapper home-wrapper-2 py-5'>
        <div className="row">
                <div className="col-6">
                  <div className="main-product-image">
                    <div>
                      <ReactImageZoom {...props} />
                    </div>
                  </div>
                  <div className="other-product-images d-flex flex-wrap gap-15">
                    <div><img src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg" className='img-fluid' alt="" /></div>
                    <div><img src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg" className='img-fluid' alt="" /></div>
                    <div><img src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg" className='img-fluid' alt="" /></div>
                    <div><img src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg" className='img-fluid' alt="" /></div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="main-product-detail">
                    <div className='py-3'>
                      <h3 className='title'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos, consequuntur.</h3>
                    </div>
                    <div className="border-bottom py-3">
                      <p className="price">$500</p>
                      <div className="d-flex align-items-center gap-10">
                         <ReactStars count={5} isHalf = {true} size={24} value='4' edit={false} activeColor="#ffd700" classNames="react-stars" />
                         <p className="mb-0 review-count">(13 Review)</p>
                      </div>
                      <a href="#review" className='text-dark'>Write a review</a>
                    </div>
                    <div className="border-bottom py-3">
                      <div className='d-flex gap-10 align-items-center my-2'>
                        <h3 className='product-heading'>Type </h3>
                        <p className='product-data'>Watch</p>
                      </div>
                      <div className='d-flex gap-10 align-items-center my-2'>
                        <h3 className='product-heading'>Brand </h3>
                        <p className='product-data'>Rolex</p>
                      </div>
                      <div className='d-flex gap-10 align-items-center my-2'>
                        <h3 className='product-heading'>Category </h3>
                        <p className='product-data'>headset, airpod, headphone, technology</p>
                      </div>
                      <div className='d-flex gap-10 align-items-center my-2'>
                        <h3 className='product-heading'>Tags </h3>
                        <p className='product-data'>#Headphones, #Airpods</p>
                      </div>
                      <div className='d-flex gap-10 align-items-center my-2'>
                        <h3 className='product-heading'>Availability </h3>
                        <p className='product-data'>Only 21 in stock</p>
                      </div>
                      <div className='d-flex gap-10 flex-row my-2 mb-3'>
                        <h3 className='product-heading'>Size </h3>
                        <div className='d-flex flex-wrap gap-15'>
                          <span className="badge border border-1 bg-white text-dark border-secondary">L</span>
                          <span className="badge border border-1 bg-white text-dark border-secondary">L</span>
                          <span className="badge border border-1 bg-white text-dark border-secondary">L</span>
                          <span className="badge border border-1 bg-white text-dark border-secondary">L</span>
                        </div>
                      </div>
                      <div className='d-flex gap-10 flex-row my-2'>
                        <h3 className='product-heading'>Color </h3>
                        <Color />
                      </div>
                      <div className='d-flex gap-10 flex-row mt-0'>
                        <h3 className='product-heading mt-3'>Quantity </h3>
                        <div className="">
                          <input type="number" name='' id='' style={{"width":"70px"}} min="1" max="10" className='form-control mt-1'/>
                        </div>
                        <div className='d-flex align-items-center flex-row gap-10 ms-5'>
                          <button type="submit" className="button border-0 mt-0">Add to Cart</button>
                          <button type="submit" className="button border-0 mt-0">Buy Now</button>
                        </div>
                      </div>
                      <div className="d-flex align-items-center gap-15 mt-2">
                        <div>
                          <a href="/wishlist"><TbGitCompare className='fs-5'/> Add to Wishlist</a>
                        </div>
                        <div>
                          <a href="/compare-product"><AiOutlineHeart className='fs-5'/> Add to Compare</a>
                        </div>
                      </div>
                      <div className='d-flex flex-column gap-10 my-3'>
                        <h3 className='product-heading'>Shopping & Return </h3>
                        <p className='product-data'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta deserunt sequi et ullam reprehenderit sed harum eligendi deleniti delectus eius!</p>
                      </div>       
                      <div className='d-flex gap-10 align-items-center my-2'>
                        <h3 className='product-heading'>Share</h3>
                        <a href="/product/:id" onClick={() => {copyToClipboard("https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg")}}>Click Here</a>
                      </div>                
                    </div>
                  </div>
                </div>
            </div>
      </Container>
      <Container class='description-wrapper py-5 home-wrapper-2'>
        <div className="row">
          <div className="col-12">
            <h4>Description</h4>
            <div className="bg-white p-3">
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae assumenda laboriosam cumque nulla itaque ab error corrupti rerum, nesciunt unde quia, consectetur hic vel neque aperiam molestias fugiat, odit fugit!
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class='review-wrapper home-wrapper-2'>
        <div className="row" id='review'>
            <div className="col-12">
              <h3>Reviews</h3>
              <div className="review-inner-wrapper">
                <div className="review-head d-flex justify-content-between align-items-end">
                <div>
                  <h4 className='mb-2'>Customer Review</h4>
                  <div className='d-flex align-items-center gap-10'>
                    <ReactStars count={5} isHalf = {true} size={24} value='4' edit={false} activeColor="#ffd700" />
                    <p className='mb-0'>Based on 13 Reviews</p>
                  </div>
                </div>
                { orderedProduct && (
                  <div>
                    <a className='text-dark text-decoration-underline' href='/product/:id'>Write a Review</a>
                  </div>
                )}
                </div>

                <div className="review-form py-4">
                  <h4>Write a Review</h4>
                  <form action="" className='d-flex flex-column gap-15'>
                    <div>
                      <ReactStars count={5} isHalf = {true} size={24} value='0' edit={true} activeColor="#ffd700" />
                    </div>
                    <div>
                      <textarea name="" id="" className='w-100 form-control' cols="30" rows="4" placeholder='Comments...'></textarea>
                    </div>
                    <div className='d-flex justify-content-end'>
                      <button className="button border-0">Submit Review</button>
                    </div>
                  </form>
                </div>

                <div className="reviews mt-3">
                  <div className="review">
                    <div className="d-flex gap-10 align-items-center">
                      <h6 className='mb-0'>Aryan</h6>
                      <ReactStars count={5} isHalf = {true} size={24} value='4' edit={false} activeColor="#ffd700" />
                    </div>
                    <p className='mt-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime et sint similique doloribus voluptatum pariatur eveniet maiores laboriosam accusamus? Velit esse dolorum quaerat aut similique odit minima deserunt praesentium. Praesentium.</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
      </Container>
      <Container class='popular-wrapper py-5 home-wrapper-2'>
        <div className="row">
          <h3 className="section-heading">Related Products</h3>
        </div>
        <div className="row">
          <ProductCard />
          <ProductCard />
        </div>
      </Container>
    </>
  )
}

export default SingleProduct
