import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import {Link} from 'react-router-dom';
import Container from '../components/Container';
import CustomInput from '../components/Custominput';



const ResetPassword = () => {
  return (
    <>
        <Meta title={"Reset Password"}/>
        <BreadCrumb title='Reset Password'/>
        <Container class='login-wrapper home-wrapper-2 py-5'>
            <div className="row">
                    <div className="col-12">
                        <div className="auth-card">
                            <h3 className='text-center'>Reset Password</h3>
                            <form action="" className='d-flex flex-column gap-15'>
                                <CustomInput type="password" name="password" placeholder='Password' />
                                <CustomInput type="password" name="confpassword" placeholder="Connfirm Password" />
                                <div className='mt-1 d-flex justify-content-center flex-column gap-15 align-items-center'>
                                    <button className="button border-0">Reset</button>
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

export default ResetPassword