import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import { Link } from 'react-router-dom';
import { HiOutlineArrowLeft } from 'react-icons/hi';
import blog from '../images/blog-1.jpg'
import Container from '../components/Container';


const SingleBlog = () => { 
  const title = "Blog /"
  return (
    <>
        <Meta title={"Blog"}/>
        <BreadCrumb title={`${title} A beautiful sunday morning`}/>
        <Container class='blog-wrapper home-wrapper-2 py-5'>
            <div className="row">
                    <div className="col-12">
                        <div className="single-blog-card">
                            <Link to='/blogs' className='d-flex align-itmes-center gap-10'><HiOutlineArrowLeft className='fs-4' />Go Back to blog</Link>
                            <h3 className="title">A beautiful sunday morning</h3>
                            <img src={blog} className='img-fluid w-100 my-4' alt="" />
                            <p className='text-left'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. A incidunt placeat harum maxime? Nihil corporis harum totam enim dolores praesentium dolorem voluptate commodi doloremque voluptatem, reiciendis officia maiores ullam, ad inventore? Voluptate, veniam? In, consequatur! Ducimus sequi aliquid sint molestias quo dignissimos amet. Commodi quam tenetur facere reiciendis laborum unde est magnam, quis quas dolorem deleniti quos animi perferendis possimus, autem vero eius, placeat cupiditate accusamus rerum consequuntur ipsam minus! Excepturi voluptatum expedita debitis alias quae! Eius optio modi aspernatur. Quae quia recusandae odio, in dignissimos doloremque corrupti, ipsam adipisci iste sint fugit temporibus, maiores reiciendis laborum tempora ipsum neque mollitia. Quidem nam libero vitae sint vel esse magnam, nesciunt incidunt! Ipsam earum maxime minima ea, distinctio sapiente nostrum explicabo architecto, mollitia et est placeat fuga. Commodi eligendi odit eveniet eos provident iusto exercitationem minima dignissimos pariatur ipsum, aspernatur nam soluta corporis reiciendis illo enim deserunt minus magni quod quibusdam molestiae culpa iste quo. Quo nam dicta, hic placeat ipsa odio rem adipisci minus alias dolor magni blanditiis sint modi neque amet temporibus deleniti. Aspernatur, in veniam repudiandae voluptatem similique odit expedita atque iure, asperiores sapiente assumenda cumque fugit. Consequuntur culpa dignissimos fugit at ad esse reprehenderit harum ea quas?
                            </p>
                        </div>
                    </div>
                </div>
        </Container>
    </>
  )
}

export default SingleBlog