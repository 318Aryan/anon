import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import Container from '../components/Container';



const FAQ = () => {
  return (
    <>
        <Meta title={"FAQ"}/>
        <BreadCrumb title='FAQ'/>
        <Container class='faq-wrapper home-wrapper-2 py-5'>
            <div className="row">
                    <div className="col-12">
                        <div className="faq">
                            <div>
                                <h5 className="title">Q1. Lorem ipsum dolor sit amet.</h5>
                                <p>Ans: Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, earum adipisci tempore blanditiis provident, tenetur libero saepe, eius nam quas sapiente! Assumenda itaque tempore repellendus reiciendis sit sunt voluptatum veniam?</p>
                            </div>

                            <div>
                                <h5 className="title">Q2. Lorem ipsum dolor sit amet.</h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, earum adipisci tempore blanditiis provident, tenetur libero saepe, eius nam quas sapiente! Assumenda itaque tempore repellendus reiciendis sit sunt voluptatum veniam?</p>
                            </div>

                            <div>
                                <h5 className="title">Q3. Lorem ipsum dolor sit amet.</h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, earum adipisci tempore blanditiis provident, tenetur libero saepe, eius nam quas sapiente! Assumenda itaque tempore repellendus reiciendis sit sunt voluptatum veniam?</p>
                            </div>
                        </div>
                    </div>
                </div>
        </Container>
    </>
  )
}

export default FAQ