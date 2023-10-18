import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import Color from '../components/Color';
import Container from '../components/Container';


const CompareProduct = () => {
  return (
    <>
        <Meta title={"Compare"}/>
        <BreadCrumb title='Compare'/>
        <Container class='compare-product-wrapper py-5 home-wrapper-2'>
          <div className="row">
                  <div className="col-3 d-flex gap-15">
                      <div className="compare-product-card position-relative">
                          <img src="images/cross.svg" alt="" className='position-absolute cross img-fluid'/>
                          <div className="product-card-image">
                              <img src="images/watch.jpg" alt="" />
                          </div>
                          <div className="compare-product-detail">
                              <h5 className="title">Apple Watch Ultra Pro Max Super</h5>
                              <h6 className="price">$500</h6>
                          </div>
                          <div className="product-main-detail">
                              <h5>Brand</h5>
                              <p className='mb-1.5'>Apple</p>
                          </div>
                          <div className="product-main-detail">
                              <h5 className='mb-1'>Color</h5>
                              <p className="mb-1">
                                  <Color />
                              </p>
                          </div>
                      </div>
                      <div className="compare-product-card position-relative">
                        <img
                          src="images/cross.svg"
                          alt=""
                          className="position-absolute cross img-fluid"
                        />
                        <div className="product-card-image">
                          <img src="images/watch.jpg" alt="" />
                        </div>
                        <div className="compare-product-detail">
                          <h5 className="title">Apple Watch Ultra Pro Max Super</h5>
                          <h6 className="price">$500</h6>
                        </div>
                        <div className="product-main-detail">
                          <h5>Brand</h5>
                          <p className="mb-1.5">Apple</p>
                        </div>
                        <div className="product-main-detail">
                          <h5 className='mb-1'>Color</h5>
                          <p className="mb-1">
                              <Color />
                          </p>
                        </div>
                      </div>
                      <div className="compare-product-card position-relative">
                        <img
                          src="images/cross.svg"
                          alt=""
                          className="position-absolute cross img-fluid"
                        />
                        <div className="product-card-image">
                          <img src="images/watch.jpg" alt="" />
                        </div>
                        <div className="compare-product-detail">
                          <h5 className="title">Apple Watch Ultra Pro Max Super</h5>
                          <h6 className="price">$500</h6>
                        </div>
                        <div className="product-main-detail">
                          <h5>Brand</h5>
                          <p className="mb-1.5">Apple</p>
                        </div>
                        <div className="product-main-detail">
                          <h5 className="mb-1">Color</h5>
                          <p className="mb-1">
                            <Color />
                          </p>
                        </div>
                      </div>
                      <div className="compare-product-card position-relative">
                        <img
                          src="images/cross.svg"
                          alt=""
                          className="position-absolute cross img-fluid"
                        />
                        <div className="product-card-image">
                          <img src="images/watch.jpg" alt="" />
                        </div>
                        <div className="compare-product-detail">
                          <h5 className="title">Apple Watch Ultra Pro Max Super</h5>
                          <h6 className="price">$500</h6>
                        </div>
                        <div className="product-main-detail">
                          <h5>Brand</h5>
                          <p className="mb-1.5">Apple</p>
                        </div>
                        <div className="product-main-detail">
                          <h5 className="mb-1">Color</h5>
                          <p className="mb-1">
                            <Color />
                          </p>
                        </div>
                      </div>
                  </div>
          </div>
        </Container>
    </>
  )
}

export default CompareProduct