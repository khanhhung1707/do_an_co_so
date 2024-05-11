import React, { useEffect, useState } from 'react'
import axios from 'axios'
import image1 from '../../assets/user/img/carousel-1.jpg';
import image2 from '../../assets/user/img/carousel-2.jpg';
import imageabout from '../../assets/user/img/about.jpg';
import imagecat1 from '../../assets/user/img/cat-1.jpg';
import imagecat2 from '../../assets/user/img/cat-2.jpg';
import imagecat3 from '../../assets/user/img/cat-3.jpg';
import imagecat4 from '../../assets/user/img/cat-4.jpg';
import imagecourse1 from '../../assets/user/img/course-1.jpg'
import imagecourse2 from '../../assets/user/img/course-2.jpg'
import imagecourse3 from '../../assets/user/img/course-3.jpg'
import imagetes1 from '../../assets/user/img/testimonial-1.jpg'
import imagetes2 from '../../assets/user/img/testimonial-2.jpg'
import imagetes3 from '../../assets/user/img/testimonial-3.jpg'
import imagetes4 from '../../assets/user/img/testimonial-4.jpg'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { useSelector, useDispatch } from 'react-redux';
import { getDanhSachKhoaHocApi } from '../../redux/reducers/danhSachKhoaHoc';
const CoursesUser = () => {
    let { dataDanhSachKhoaHoc } = useSelector(state => state.danhSachKhoaHoc);

    const dispatch = useDispatch();
    useEffect(() => {
        const actionThunk = getDanhSachKhoaHocApi();
        dispatch(actionThunk);
    }, [])

    return (
        <div>
            {/* Header Start */}
            < div className="container-fluid bg-primary py-5 mb-5 page-header" >
                <div className="container py-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-10 text-center">
                            <h1 className="display-3 text-white animated slideInDown">Courses</h1>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb justify-content-center">
                                    <li className="breadcrumb-item">
                                        <a className="text-white" href="#">Home</a>
                                    </li>
                                    <li className="breadcrumb-item">
                                        <a className="text-white" href="#">Pages</a>
                                    </li>
                                    <li className="breadcrumb-item text-white active" aria-current="page">
                                        About
                                    </li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div >
            {/* Header End */}
            {/* Courses Start */}
            <div className="containerss-xxl py-5">
                <div className="containerss">
                    <div className="text-center wow fadeInUp item-padding" data-wow-delay="0.1s">
                        <h6 className="section-title bg-white text-center text-primary px-3">
                            Courses
                        </h6>
                        <h1 className="mb-5">Popular Courses</h1>
                    </div>
                    <div className="row g-4 justify-content-center">
                        {dataDanhSachKhoaHoc.map((item, index) => {
                            return <div className="col-lg-4 col-md-6 wow fadeInUp item-padding" data-wow-delay="0.1s" key={index}>
                                <div className="course-item bg-light">
                                    <div className="position-relative overflow-hidden">
                                        <img className="img-fluid" src={item.hinhAnh} width={400} height={200} alt='...' onError={(e) => { e.target.onError = null; e.target.src = `https://picsum.photos/id/${index}/400/220` }} />
                                        <div className="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4">
                                            <a href="#" className="flex-shrink-0 btn btn-sm btn-primary px-3 border-end" style={{ borderRadius: '30px 0 0 30px' }}>Read More</a>
                                            <a href="#" className="flex-shrink-0 btn btn-sm btn-primary px-3" style={{ borderRadius: '0 30px 30px 0' }}>Join Now</a>
                                        </div>
                                    </div>
                                    <div className="text-center p-4 pb-0">
                                        <h3 className="mb-0">$149.00</h3>
                                        <div className="mb-3">
                                            <small className="fa fa-star text-primary" />
                                            <small className="fa fa-star text-primary" />
                                            <small className="fa fa-star text-primary" />
                                            <small className="fa fa-star text-primary" />
                                            <small className="fa fa-star text-primary" />
                                            <small>{item.luotXem}</small>
                                        </div>
                                        <h5 className="mb-4">{item.tenKhoaHoc}</h5>
                                    </div>
                                    <div className="d-flex border-top">
                                        <small className="flex-fill text-center border-end py-2"><i className="fa fa-user-tie text-primary me-2" />khanhhung</small>
                                        <small className="flex-fill text-center border-end py-2"><i className="fa fa-clock text-primary me-2" />2 months</small>
                                        <small className="flex-fill text-center py-2"><i className="fa fa-user text-primary me-2" />30
                                            Students</small>
                                    </div>
                                </div>
                            </div>
                        })}
                    </div>
                </div>
            </div>
            {/* Courses End */}
        </div>
    )
}

export default CoursesUser