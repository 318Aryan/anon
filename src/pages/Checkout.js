import React from 'react';
import { Link } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import watch from '../images/watch.jpg';
import Container from '../components/Container';



const Checkout = () => {
  return (
    <>
        <Container class='checkout-wrapper py-5 home-wrapper-2'>
            <div className="row">
                    <div className="col-7">
                        <div className="checkout-left-data">
                            <h3 className='website-name'>Anon</h3>
                            <nav aria-label="breadcrumb">
                              <ol className="breadcrumb">
                                <li className="breadcrumb-item total-price">
                                    <Link to="/cart" className='text-dark'>Cart</Link>
                                </li>
                                <span>&nbsp; / &nbsp;</span>
                                <li className="breadcrumb-item total-price active" aria-current="page">
                                    <Link to="/checkout" className='text-dark'>Information</Link>
                                </li>
                                <span>&nbsp; / &nbsp;</span>
                                <li className="breadcrumb-item total-price active" aria-current="page">
                                    <Link to="/cart" className='text-dark'>Shipping</Link>
                                </li>
                                <span>&nbsp; / &nbsp;</span>
                                <li className="breadcrumb-item total-price active" aria-current="page">
                                    <Link to="/cart" className='text-dark'>Payment</Link>
                                </li>
                              </ol>
                            </nav>
                            <h5 className="title mt-4 total">
                                Contact Information
                            </h5>
                            <p className='user-detail total'>
                                Aryan Kumar (318aryank@gmail.com)
                            </p>
                            <div className='mt-5'>
                                <h4>
                                    Shipping Address    
                                </h4>    
                            </div> 
                            <form className='d-flex gap-15 flex-wrap justify-content-between' action="">
                                <div className='w-100'>
                                    <select name='' id='' className='form-control form-select'>
                                        <option value="" selected disabled>Select Country</option>
                                    </select>
                                </div>
                                <div className='flex-grow-1'>
                                    <input type="text" placeholder='First Name' className="form-control" />
                                </div>
                                <div className='flex-grow-1'>
                                    <input type="text" placeholder='Last Name' className="form-control" />
                                </div>
                                <div className='w-100'>
                                    <input type="text" placeholder='Address 1' className="form-control" />
                                </div>
                                <div className='w-100'>
                                    <input type="text" placeholder='Address 2' className="form-control" />
                                </div>
                                <div className='w-100'>
                                    <input type="text" placeholder='Apartment, Suite, etc. (optional)' className="form-control" />
                                </div>
                                <div className='flex-grow-1'>
                                    <input type="text" placeholder='City' className="form-control" />
                                </div>
                                <div className='flex-grow-1'>
                                    <select name='' id='' className='form-control form-select'>
                                        <option value="" selected disabled>Select State</option>
                                    </select>
                                </div>
                                <div className='flex-grow-1'>
                                    <input type="text" placeholder='Zip Code' className="form-control" />
                                </div>
                                <div className="w-100">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <Link to="/cart" className='text-dark'><BiArrowBack className='me-2'/> Return to Cart</Link>
                                        <Link to="/checkout" className='button'>Continue</Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-5">
                        <div className="border-bottom py-4">
                            <div className="d-flex gap-10 align-items-center">
                                <div className='w-100 d-flex gap-10'>
                                    <div className='w-25 position-relative'>
                                        <span className="badge bg-secondary text-white rounded-circle p-2 position-absolute item-count-product-payment">
                                            1
                                        </span>
                                        <img src={watch} className='img-fluid' alt="" />
                                    </div>
                                    <div>
                                        <h5 className='total-price'>
                                            Lorem ipsum dolor sit amet.
                                        </h5>
                                        <p className='total-price'>
                                            S / #897878
                                        </p>
                                    </div>
                                </div>
                                <div className='flex-grow-1'>
                                    <h5 className='total'>$250</h5>
                                </div>
                            </div>
                        </div>
                        <div className='border-bottom py-4'>
                            <div className="d-flex justify-content-between align-items-center">
                                <p className='total'>Subtotal</p>
                                <p className='total-price'>$500</p>
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                                <p className='total'>Shipping</p>
                                <p className='total-price'>$5</p>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between align-items-center border-bottom py-4">
                            <h4 className='total'>Total</h4>
                            <h5 className='total-price'>$505</h5>
                        </div>
                    </div>
                </div>
        </Container>
    </>
  )
}

export default Checkout