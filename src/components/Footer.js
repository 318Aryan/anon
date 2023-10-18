import React from 'react';
import { Link } from 'react-router-dom';
import newsletter from '../images/newsletter.png'
import { BsInstagram, BsFacebook, BsLinkedin,  } from 'react-icons/bs';

const Footer = () => {
  return (
    <>
      <footer className='py-4'>
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src={newsletter} alt="newsletter" />
                <h2 className='mb-0 text-white'>Sign Up for Newsletter</h2>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder="Your email address"
                  aria-label="Your email address"
                  aria-describedby="basic-addon2"
                />
                  <span className="input-group-text p-2" id="basic-addon2">
                    Subscribe
                  </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-4'>
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className='text-white mb-4'>Contact Us</h4>
              <div>
                <address className='text-white fs-6'>
                  Suite 300, Building 5, Riverside Commons,<br />5000 Riverside Drive, Irving,<br />Texas USA,<br />Postcode: 75039
                </address>
                <a href="tel:+917021929333" className='mt-2 d-block mb-1 text-white'>+917021929337</a>
                <a href="mailto:318aryank@gmail.com" className="mt-3 d-block mb-0 text-white">customer_support@anon.com</a>

                <div className="social-icons d-flex align-items-center gap-30 mt-4">
                  <a className='text-white' href="https://www.facebook.com/" target='_blank' rel="noreferrer">
                    <BsFacebook className='fs-4' />
                  </a>
                  <a className='text-white' href="https://www.instagram.com/" target='_blank' rel="noreferrer">
                    <BsInstagram className='fs-4' />
                  </a>
                  <a className='text-white' href="https://in.linkedin.com/" target='_blank' rel="noreferrer">
                    <BsLinkedin className='fs-4' />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className='text-white mb-4'>Information</h4>
                <div className="footer-links d-flex flex-column">
                  <Link className="text-white py-2 mb-1" to='/privacy-policy'>Privacy Policy</Link>
                  <Link className="text-white py-2 mb-1" to='/refund-policy'>Return Policy</Link>
                  <Link className="text-white py-2 mb-1" to='/shopping-policy'>Shopping Policy</Link>
                  <Link className="text-white py-2 mb-1" to='/terms-condtions'>Term & Conditions</Link>
                  <Link className="text-white py-2 mb-1" to='/blogs'>Blogs</Link>
                </div>
            </div>
            <div className="col-3">
              <h4 className='text-white mb-4'>Account</h4>
                <div className="footer-links d-flex flex-column">
                  <Link className="text-white py-2 mb-1">Search</Link>
                  <Link className="text-white py-2 mb-1" to='/about'>About Us</Link>
                  <Link className="text-white py-2 mb-1" to='/faq'>FAQ</Link>
                  <Link className="text-white py-2 mb-1" to='/contact'>Contact</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className='text-white mb-4'>Quick Links</h4>
              <div className='footer-links d-flex flex-column'>
                <Link className='text-white py-2 mb-1' to='/store'>Accessories</Link>
                <Link className='text-white py-2 mb-1' to='/store'>Laptops</Link>
                <Link className='text-white py-2 mb-1' to='/store'>Headphones</Link>
                <Link className='text-white py-2 mb-1' to='/store'>Tablets</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-3'>
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">&copy; {new Date().getFullYear()}; Powered by Anon</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer