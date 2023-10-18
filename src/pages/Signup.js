import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import { Link } from 'react-router-dom';
import Container from '../components/Container';
import CustomInput from '../components/Custominput';



const Signup = () => {
  return (
    <>
        <Meta title={"Sign Up"}/>
        <BreadCrumb title='Sign Up'/>
        <Container class='login-wrapper home-wrapper-2 py-5'>
            <div className="row">
                <div className="container-xxl">
                    <div className="col-12">
                        <div className="auth-card">
                            <h3 className='text-center'>Sign Up</h3>
                            <form action="" className='d-flex flex-column gap-15'>
                                <CustomInput type="text" name="name" placeholder='First Name' className="form-control"/>
                                <CustomInput type="email" name="email" placeholder='Email' className="form-control"/>
                                <CustomInput type="tel" name="mobile" placeholder='Mobile Number' className="form-control"/>
                                <CustomInput type="password" name="password" placeholder='Password' />
                                
                                <div className='d-flex gap-30 justify-content-between'>
                                    <span>Already a menber?<Link to="/login">Login</Link></span>
                                </div>
                                <div className='mt-1 d-flex justify-content-center gap-15 align-items-center'>
                                    <button className="button border-0">Sign Up</button>
                                </div>
                                
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    </>
  )
}

export default Signup