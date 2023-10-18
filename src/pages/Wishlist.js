import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import ProductCardWishlist from '../components/ProductCardWishlist';
import Container from '../components/Container';




const Wishlist = () => {
  return (
    <>
      <Meta title={"Wishlist"}/>
      <BreadCrumb title='Wishlist'/>
      <Container class='wishlist-wrapper py-5 home-wrapper-2'>
        <div className="row">
          <ProductCardWishlist />
          <ProductCardWishlist />
          <ProductCardWishlist />
        </div>
      </Container>
    </>
  )
}

export default Wishlist