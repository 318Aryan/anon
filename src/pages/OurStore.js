import React, { useState } from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import ReactStars from 'react-stars';
import ProductCard from '../components/ProductCard';
import Color from '../components/Color';
import Container from '../components/Container';



const OurStore = () => {
  const [ grid, setGrid ] = useState(4);
  return (
    <>
      <Meta title={"Products"}/>
      <BreadCrumb title='Our Store'/>
      <Container class='store-wrapper home-wrapper-2 py-5'>
        <div className="row">
            <div className="col-3">
              <div className='filter-card mb-3'>
                <h3 className="filter-title">Shop By Categories</h3>
                <div>
                  <ul className='ps-0'>
                    <li>Watch</li>
                    <li>TV</li>
                    <li>Camera</li>
                    <li>Laptop</li>
                  </ul>
                </div>
              </div>
              <div className='filter-card mb-3'>
                <h3 className="filter-title">Fiter By</h3>
                <div>
                  <h5 className='sub-title'>Availablity</h5>
                  <div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="" />
                      <label className="form-check-label" htmlFor="">
                        In Stock (2)
                      </label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="" />
                      <label className="form-check-label" htmlFor="">
                        Out of Stock (1)
                      </label>
                    </div>
                  </div>

                  <h5 className="sub-title">Price</h5>
                  <div>
                    <div className="form-floating mb-3 d-flex">
                      <input type="email" className="form-control price-form-input" id="floatingInput" placeholder='From' />
                      <label htmlFor="floatingInput">From</label>
                    </div>

                    <div className="form-floating mb-3">
                      <input type="email" className="form-control price-form-input" id="floatingInput1" placeholder="To" />
                      <label htmlFor="floatingInput1">To</label>
                    </div>
                  </div>

                  <h5 className="sub-title">Color</h5>
                  <div className='d-flex gap-10 flex-wrap'>
                    <Color />
                    <Color />
                    <Color />
                    <Color />
                    <Color />
                    <Color />
                    <Color />
                    <Color />
                    <Color />
                    <Color />
                    <Color />
                  </div>

                  <h5 className="sub-title">Size</h5>
                  <div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="color1" />
                      <label className="form-check-label" htmlFor="color1">
                        20 (4)
                      </label>
                    </div>

                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="color2" />
                      <label className="form-check-label" htmlFor="color2">
                        40 (1)
                      </label>
                    </div>
                  </div>

                </div>
              </div>
              <div className='filter-card mb-3'>
                <h3 className="filter-title">Product Tags</h3>
                <div>
                  <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Microphones
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Headphones
                    </span>

                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Tv
                    </span>
                  </div>
                </div>
              </div>
              <div className='filter-card mb-3'>
                <h3 className="filter-title">Recommended for you</h3>
                <div className="recommended-products d-flex">
                  <div className="w-50">
                    <img src="images/watch.jpg" className='img-fluid' alt="" />
                  </div>
                  <div className="w-50">
                    <h5>Apple Watch Ultra Blue Color 12 inch Retina displ...</h5>
                    <ReactStars count={5} isHalf={true} size={20} value="3.5" edit={false} activeColor="#ffd700" />
                    <b>$500</b>
                  </div>
                </div>

                <div className="recommended-products d-flex">
                  <div className="w-50">
                    <img src="images/laptop.jpg" className="img-fluid" alt="" />
                  </div>
                  <div className="w-50">
                    <h5>Apple Mac Book Ultra Blue Color 12 inch Retina displ...</h5>
                    <ReactStars
                      count={5}
                      isHalf={true}
                      size={20}
                      value="3.5"
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <b>$500</b>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-9">
              <div className="filter-sort-grid mb-0">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center gap-10">
                    <p className="mb-0 d-block sort-main-heading">Sort By:</p>
                    <select name="" className="form-control form-select" id="">
                      <option value="manual">Featured</option>
                      <option value="best-selling" selected="selected">Best Selling</option>
                      <option value="title-ascending">Alphabetically, A - Z</option>
                      <option value="title-decending">Alphabetically, Z - A</option>
                      <option value="price-ascending">Price, High - Low</option>
                      <option value="price-decending">Price, Low - High</option>
                      <option value="created-ascending">Created, New - Old</option>
                      <option value="created-decending">Created, Old - New</option>
                    </select>
                  </div>

                  <div className='d-flex align-items-center gap-10'>
                    <p className="totalproduct mb-0">8 Products</p>
                    <div className="d-flex gap-10 align-items-center grid">
                      <img onClick={() => {
                          setGrid(3);

                        }} src="images/gr4.svg" alt="grid" className="d-block img-fluid" />
                      <img onClick={() => {
                          setGrid(4);

                        }} src="images/gr3.svg" alt="grid" className="d-block img-fluid" />
                      <img onClick={() => {
                          setGrid(6);

                        }} src="images/gr2.svg" alt="grid" className="d-block img-fluid" />
                      <img onClick={() => {
                          setGrid(12);

                        }} src="images/gr.svg" alt="grid" className="d-block img-fluid" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="product-list pb-5 mt-3">
                <div className="d-flex gap-10 flex-wrap">
                  <ProductCard grid={grid} />
                  <ProductCard grid={grid} />
                  <ProductCard grid={grid} />
                  <ProductCard grid={grid} />
                </div>
              </div>
            </div>
          </div>
      </Container>
    </>
  )
}

export default OurStore