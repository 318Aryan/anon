import React from 'react';
import ReactStars from 'react-stars';
import { Link } from 'react-router-dom';
import prodcompare from '../images/prodcompare.svg';
import wish from '../images/wish.svg';
import tab from '../images/tab.jpg';
import tab3 from '../images/tab3.jpg';
import addcart from '../images/add-cart.svg';
import view from '../images/view.svg';


const ProductCard = () => {
  return (
    <>
        <div className="col-3">
            <Link to='/product/:id' className="product-card position-relative">
                <div className="wishlist-icon position-absolute">    
                    <Link><img src={wish} alt="" /></Link>
                </div>
                <div className="product-image">
                    <img src={tab3} className='img-fluid' alt="watch" />
                    <img src={tab} className='img-fluid' alt="watch" />
                </div>
                <div className="product-detail">
                    <h6 className="brand">Apple</h6>
                    <h5 className="product-title">Apple Watch Ultra, Retina Display, 12 hours battery life</h5>
                    <ReactStars count={5} isHalf = {true} size={24} value='3.5' edit={false} activeColor="#ffd700" />

                    <p className="d-none">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, velit. Unde quisquam qui, voluptatem optio error quod ex adipisci maxime commodi molestias illo omnis.
                    </p>
                    <p className="price">$500</p>
                </div>
                <div className="action-bar position-absolute">
                    <div className="d-flex flex-column gap-15">
                        <Link>
                            <img src={prodcompare} alt="compare" />
                        </Link>

                        <Link to='/product/:id'>
                            <img src={view} alt="view" />
                        </Link>

                        <Link>
                        <img src={addcart} alt="cart" />
                        </Link>
                    </div>
                </div>
            </Link>
        </div>  
    </>
  )
}

export default ProductCard