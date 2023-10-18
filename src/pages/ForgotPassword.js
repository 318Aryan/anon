import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import {Link} from 'react-router-dom';
import Container from '../components/Container';
import CustomInput from '../components/Custominput';


const ForgotPassword = () => {
  return (
    <>
        <Meta title={"Forgot Password"}/>
        <BreadCrumb title='Forgot Password'/>
        <Container class='login-wrapper home-wrapper-2 py-5'>
            <div className="row">
                    <div className="col-12">
                        <div className="auth-card">
                            <h3 className='text-center'>Reset Your Password</h3>
                            <p className="text-center mt-2 mb-3">We will send you a email to reset your password</p>
                            <form action="" className='d-flex flex-column gap-15'>
                                <CustomInput type="email" name="email" placeholder='Email' className="form-control"/>
                                <div className='mt-1 d-flex justify-content-center flex-column gap-15 align-items-center'>
                                    <button className="button border-0" type='submit'>Submit</button>
                                    <Link to='/login'>Cancel</Link>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
        </Container>

    </>
  )
}

export default ForgotPassword