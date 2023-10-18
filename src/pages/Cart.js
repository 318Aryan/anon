import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import watch from '../images/watch.jpg';
import { RiDeleteBinLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import Container from '../components/Container';


const Cart = () => {
  return (
    <>
        <Meta title={"Cart"}/>
        <BreadCrumb title='Cart'/>
        <Container class='cart-wrapper home-wrapper-2 py-5'>
            <div className="row">
                    <div className="col-12">
                        <div className="d-flex py-3 justify-content-between align-items-center cart-header">
                            <h4 className='cart-col-1'>Product</h4>
                            <h4 className='cart-col-2'>Price</h4>
                            <h4 className='cart-col-3'>Quantity</h4>
                            <h4 className='cart-col-4'>Total</h4>
                        </div>
                        <div className="d-flex py-3 mb-2 justify-content-between align-items-center cart-data">
                            <h4 className='cart-col-1 d-flex gap-15 align-items-center'>
                                <div className='w-25'>
                                    <img src={watch} className='img-fluid' alt="" />
                                </div>
                                <div className='w-75'>
                                    <p>Apple Watch Ultra with 12 hour battery</p>
                                    <p>Color: Platinum Gray</p>
                                    <p>Size: 1px, 2px, 3px</p>
                                </div>
                            </h4>
                            <h4 className='cart-col-2'>
                                <p className="price">$500</p>
                            </h4>
                            <h4 className='cart-col-3 d-flex align-items-center gap-15'>
                                <div><input type="number" name="" className='form-control' min={1} max={10}/></div>
                                <div><RiDeleteBinLine className='cart-remove-button'/></div>
                            </h4>
                            <h4 className='cart-col-4'>
                                <p className="price">$500</p>
                            </h4>
                        </div>
                        <div className="d-flex py-3 mb-2 justify-content-between align-items-center cart-data">
                            <h4 className='cart-col-1 d-flex gap-15 align-items-center'>
                                <div className='w-25'>
                                    <img src={watch} className='img-fluid' alt="" />
                                </div>
                                <div className='w-75'>
                                    <p>Apple Watch Ultra with 12 hour battery</p>
                                    <p>Color: Platinum Gray</p>
                                    <p>Size: 1px, 2px, 3px</p>
                                </div>
                            </h4>
                            <h4 className='cart-col-2'>
                                <p className="price">$500</p>
                            </h4>
                            <h4 className='cart-col-3 d-flex align-items-center gap-15'>
                                <div><input type="number" name="" className='form-control' min={1} max={10}/></div>
                                <div><RiDeleteBinLine className='cart-remove-button'/></div>
                            </h4>
                            <h4 className='cart-col-4'>
                                <p className="price">$500</p>
                            </h4>
                        </div>
                    </div>
                    <div className="col-12 py-2 mt-4 mb-3">
                        <div className="d-flex justify-content-between align-items-baseline">
                            <Link to="/store" className='button'>
                                Continue Shopping
                            </Link>
                            <div className='d-flex align-items-end flex-column'>
                                <h4>Subtotal: $500</h4>
                                <p>Taxes and Shipping Calculted at checkout</p>
                                <Link to='/checkout' className='button'>Checkout</Link>
                            </div>
                        </div>
                    </div>
            </div>
        </Container>
    </>
  )
}

export default Cart