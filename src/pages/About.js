import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';

const About = () => {
  return (
    <>
      <Meta title={"About Us"}/>
      <BreadCrumb title='About Us'/>

      <section className="policy-wrapper home-wrapper-2 py-5">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="policy">
                            <div>
                                <h5 className="title">Lorem ipsum dolor sit amet.</h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, earum adipisci tempore blanditiis provident, tenetur libero saepe, eius nam quas sapiente! Assumenda itaque tempore repellendus reiciendis sit sunt voluptatum veniam?</p>
                            </div>

                            <div>
                                <h5 className="title">Lorem ipsum dolor sit amet.</h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, earum adipisci tempore blanditiis provident, tenetur libero saepe, eius nam quas sapiente! Assumenda itaque tempore repellendus reiciendis sit sunt voluptatum veniam?</p>
                            </div>

                            <div>
                                <h5 className="title">Lorem ipsum dolor sit amet.</h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, earum adipisci tempore blanditiis provident, tenetur libero saepe, eius nam quas sapiente! Assumenda itaque tempore repellendus reiciendis sit sunt voluptatum veniam?</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default About