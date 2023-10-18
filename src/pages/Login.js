import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import { Link } from 'react-router-dom';
import Container from '../components/Container';
import CustomInput from '../components/Custominput';



const Login = () => {
  return (
    <>
        <Meta title={"Login"}/>
        <BreadCrumb title='Login'/>
        <Container class='login-wrapper home-wrapper-2 py-5'>
            <div className="row">
                <div className="container">
                    <div className="col-12">
                        <div className="auth-card">
                            <h3 className='text-center'>Login</h3>
                            <form action="" className='d-flex flex-column gap-15'>
                                <CustomInput type="email" name="email" placeholder='Email' className="form-control"/>
                                <CustomInput type="password" name="password" placeholder='Password' />
                                <div className='d-flex gap-30 justify-content-between'>
                                    <Link to='/forgot-password'>Forgot Password?</Link>
                                    <span>Not a menber?<Link to="/signup">Sign Up</Link></span>
                                </div>
                                <div className='mt-1 d-flex justify-content-center gap-15 align-items-center'>
                                    <button className="button border-0">Login</button>
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

export default Login