import React, { useEffect, useState } from 'react'
import OwlCarousel from 'react-owl-carousel';
import axios from 'axios'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
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
// import 'animate.css/animate.min.css';
import 'animate.css';
const HomeUser = () => {
    const options = {
        margin: 30,
        loop: true,
        autoplay: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,
            },
            1000: {
                items: 1,
            },
        },
    };


    return (
        <div>
            {/* Carousel Start */}
            <div className="containerss-fluid p-0 mb-5">
                <OwlCarousel className="owl-theme" {...options}>
                    <div className="owl-carousel-item position-relative">
                        <img className="img-fluid" src={image1} alt='Carousel1' />
                        <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: 'rgba(24, 29, 56, 0.7)' }}>
                            <div className="containerss">
                                <div className="row justify-content-start">
                                    <div className="col-sm-10 col-lg-8">
                                        <h5 className="text-primary text-uppercase mb-3 animated slideInDown">
                                            Best Online Courses
                                        </h5>
                                        <h1 className="display-3 text-white animated slideInDown">
                                            The Best Online Learning Platform
                                        </h1>
                                        <p className="fs-5 text-white mb-4 pb-2">
                                            Cùng với giảng viên được chọn lọc kĩ lưỡng, nâng cấp kĩ năng
                                            của bạn
                                        </p>
                                        <a href className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Read More</a>
                                        <a href className="btn btn-light py-md-3 px-md-5 animated slideInRight">Join Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="owl-carousel-item position-relative">
                        <img className="img-fluid" src={image2} alt='Carousel2' />
                        <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: 'rgba(24, 29, 56, 0.7)' }}>
                            <div className="containerss">
                                <div className="row justify-content-start">
                                    <div className="col-sm-10 col-lg-8">
                                        <h5 className="text-primary text-uppercase mb-3 animate__animated animate__slideInDown">
                                            Best Online Courses
                                        </h5>
                                        <h1 className="display-3 text-white animate__animated animate__slideInDown">
                                            Get Educated Online From Your Home
                                        </h1>
                                        <p className="fs-5 text-white mb-4 pb-2">
                                            Cùng với giảng viên được chọn lọc kĩ lưỡng, nâng cấp kĩ năng
                                            của bạn
                                        </p>
                                        <a href className="btn btn-primary py-md-3 px-md-5 me-3 animate__animated animate__slideInLeft">Read More</a>
                                        <a href className="btn btn-light py-md-3 px-md-5 animate__animated animate__slideInRight">Join Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </OwlCarousel>
            </div>
            {/* Carousel End */}
            {/* Service Start */}
            <div className="containerss-xxl py-5">
                <div className="containerss">
                    <div className="row g-4 d-flex align-items-stretch">
                        <div className="col-lg-3 col-sm-6 wow fadeInUp item-padding" data-wow-delay="0.1s">
                            <div className="service-item text-center pt-3">
                                <div className="p-4">
                                    <div className="icon-container" >
                                        <i className="fa fa-fw fa-3x fa-graduation-cap text-primary mb-4" />
                                    </div>
                                    <h5 className="mb-3">Skilled Instructors</h5>
                                    <p>Có đội ngũ giảng viên giàu kinh nghiệm</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 wow fadeInUp item-padding" data-wow-delay="0.3s">
                            <div className="service-item text-center pt-3 item-padding">
                                <div className="p-4">
                                    <div className="icon-container  text-center">
                                        <i className="fa fa-fw fa-3x fa-globe text-primary mb-4" />
                                    </div>
                                    <h5 className="mb-3">Online Classes</h5>
                                    <p>Lớp học online giúp bạn dễ dàng học tập tại nhà</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 wow fadeInUp item-padding" data-wow-delay="0.5s">
                            <div className="service-item text-center pt-3 item-padding">
                                <div className="p-4">
                                    <div className="icon-container  text-center">
                                        <i className="fa fa-fw fa-3x fa-home text-primary mb-4" />
                                    </div>
                                    <h5 className="mb-3">Home Projects</h5>
                                    <p>Bài tập về nhà để rèn luyện thêm kiến thức</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 wow fadeInUp item-padding" data-wow-delay="0.7s">
                            <div className="service-item text-center pt-3 item-padding">
                                <div className="p-4">
                                    <div className="icon-container  text-center">
                                        <i className="fa fa-fw fa-3x fa-book-open text-primary mb-4" />
                                    </div>
                                    <h5 className="mb-3">Book Library</h5>
                                    <p>Thư viện sách miễn phí</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Service End */}
            {/* About Start */}
            <div className="containerss-xxl py-5">
                <div className="containerss">
                    <div className="row g-5">
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s" style={{ minHeight: 400 }}>
                            <div className="position-relative h-100">
                                <img className="img-fluid position-absolute w-100 h-100" src={imageabout} alt='true' style={{ objectFit: 'cover' }} />
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                            <h6 className="section-title bg-white text-start text-primary pe-3 ml-5">
                                About Us
                            </h6>
                            <h1 className="mb-4 ml-5">Welcome to eLEARNING</h1>
                            <p className="mb-4 ml-5">Chỗ học tập dành cho mọi lứa tuổi</p>
                            <p className="mb-4 ml-5">What will you get after joining us?</p>
                            <div className="row gy-2 gx-4 mb-4 ml-5">
                                <div className="col-sm-6">
                                    <p className="mb-0">
                                        <i className="fa fa-arrow-right text-primary me-2" />Skilled
                                        Instructors
                                    </p>
                                </div>
                                <div className="col-sm-6">
                                    <p className="mb-0">
                                        <i className="fa fa-arrow-right text-primary me-2" />Online
                                        Classes
                                    </p>
                                </div>
                                <div className="col-sm-6">
                                    <p className="mb-0">
                                        <i className="fa fa-arrow-right text-primary me-2" />International Certificate
                                    </p>
                                </div>
                                <div className="col-sm-6">
                                    <p className="mb-0">
                                        <i className="fa fa-arrow-right text-primary me-2" />Skilled
                                        Instructors
                                    </p>
                                </div>
                                <div className="col-sm-6">
                                    <p className="mb-0">
                                        <i className="fa fa-arrow-right text-primary me-2" />Online
                                        Classes
                                    </p>
                                </div>
                                <div className="col-sm-6">
                                    <p className="mb-0">
                                        <i className="fa fa-arrow-right text-primary me-2" />International Certificate
                                    </p>
                                </div>
                            </div>
                            <a className="btn btn-primary py-3 px-5 mt-2 ml-5" href>Read More</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* About End */}
            {/* Categories Start */}
            <div className="containerss-xxl py-5 category">
                <div className="containerss">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h6 className="section-title bg-white text-center text-primary px-3">
                            Categories
                        </h6>
                        <h1 className="mb-5">Courses Categories</h1>
                    </div>
                    <div className="row g-3">
                        <div className="col-lg-7 col-md-6">
                            <div className="row g-3">
                                <div className="col-lg-12 col-md-12 wow zoomIn item-padding" data-wow-delay="0.1s">
                                    <a className="position-relative d-block overflow-hidden">
                                        <img className="img-fluid" src={imagecat1} alt />
                                        <div className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3" style={{ margin: 1 }}>
                                            <h5 className="m-0">Homework</h5>
                                            <small className="text-primary">99+ Courses</small>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-lg-6 col-md-12 wow zoomIn item-padding" data-wow-delay="0.3s">
                                    <a className="position-relative d-block overflow-hidden" href>
                                        <img className="img-fluid" src={imagecat2} alt />
                                        <div className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3" style={{ margin: 1 }}>
                                            <h5 className="m-0">Partner</h5>
                                            <small className="text-primary">735 members</small>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-lg-6 col-md-12 wow zoomIn item-padding" data-wow-delay="0.5s">
                                    <a className="position-relative d-block overflow-hidden" href>
                                        <img className="img-fluid" src={imagecat3} alt />
                                        <div className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3" style={{ margin: 1 }}>
                                            <h5 className="m-0">lecturers</h5>
                                            <small className="text-primary">49 lecturers and mentor</small>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-6 wow zoomIn item-padding" data-wow-delay="0.7s" style={{ minHeight: 350 }}>
                            <a className="position-relative d-block h-100 overflow-hidden ml-3" href>
                                <img className="img-fluid position-absolute w-100 h-100" src={imagecat4} alt style={{ objectFit: 'cover' }} />
                                <div className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3" style={{ margin: 1 }}>
                                    <h5 className="m-0">Online Classes</h5>
                                    <small className="text-primary">30+ classes</small>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* Categories End */}
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
                        <div className="col-lg-4 col-md-6 wow fadeInUp item-padding" data-wow-delay="0.1s">
                            <div className="course-item bg-light">
                                <div className="position-relative overflow-hidden">
                                    <img className="img-fluid" src={imagecourse1} alt />
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
                                        <small>(123)</small>
                                    </div>
                                    <h5 className="mb-4">Anh văn căn bản từ con số 0</h5>
                                </div>
                                <div className="d-flex border-top">
                                    <small className="flex-fill text-center border-end py-2"><i className="fa fa-user-tie text-primary me-2" />Tigar
                                        Tran</small>
                                    <small className="flex-fill text-center border-end py-2"><i className="fa fa-clock text-primary me-2" />2 months</small>
                                    <small className="flex-fill text-center py-2"><i className="fa fa-user text-primary me-2" />30
                                        Students</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp item-padding" data-wow-delay="0.3s">
                            <div className="course-item bg-light">
                                <div className="position-relative overflow-hidden">
                                    <img className="img-fluid" src={imagecourse2} alt />
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
                                        <small>(123)</small>
                                    </div>
                                    <h5 className="mb-4">Ielts 5.5 -&gt; 6.0</h5>
                                </div>
                                <div className="d-flex border-top">
                                    <small className="flex-fill text-center border-end py-2"><i className="fa fa-user-tie text-primary me-2" />Huấn
                                        Rose</small>
                                    <small className="flex-fill text-center border-end py-2"><i className="fa fa-clock text-primary me-2" />3 months
                                    </small>
                                    <small className="flex-fill text-center py-2"><i className="fa fa-user text-primary me-2" />50
                                        Students</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp item-padding" data-wow-delay="0.5s">
                            <div className="course-item bg-light">
                                <div className="position-relative overflow-hidden">
                                    <img className="img-fluid" src={imagecourse3} alt />
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
                                        <small>(123)</small>
                                    </div>
                                    <h5 className="mb-4">Toeic 650++</h5>
                                </div>
                                <div className="d-flex border-top">
                                    <small className="flex-fill text-center border-end py-2"><i className="fa fa-user-tie text-primary me-2" />Better
                                        Bảnh</small>
                                    <small className="flex-fill text-center border-end py-2"><i className="fa fa-clock text-primary me-2" />3 months</small>
                                    <small className="flex-fill text-center py-2"><i className="fa fa-user text-primary me-2" />40
                                        Students</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Courses End */}
            {/* Team Start */}
            <div className="containerss-xxl py-5">
                <div className="containerss">
                    <div className="text-center wow fadeInUp " data-wow-delay="0.1s">
                        <h6 className="section-title bg-white text-center text-primary px-3">
                            Instructors
                        </h6>
                        <h1 className="mb-5">Expert Instructors</h1>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-3 col-md-6 wow fadeInUp item-padding" data-wow-delay="0.1s">
                            <div className="team-item bg-light">
                                <div className="overflow-hidden">
                                    <img className="img-fluid" src="https://icdn.24h.com.vn/upload/2-2020/images/2020-06-17//1592383942-hhhh-15833714275572015046432-1583382515135-1583382515138260536022-15923737286851829006563.jpg" alt style={{ height: 320, width: 300 }} />
                                </div>
                                <div className="position-relative d-flex justify-content-center" style={{ marginTop: '-23px' }}>
                                    <div className="bg-light d-flex justify-content-center pt-2 px-1">
                                        <a className="btn btn-sm-square btn-primary mx-1" href><i className="fab fa-facebook-f" /></a>
                                        <a className="btn btn-sm-square btn-primary mx-1" href><i className="fab fa-twitter" /></a>
                                        <a className="btn btn-sm-square btn-primary mx-1" href><i className="fab fa-instagram" /></a>
                                    </div>
                                </div>
                                <div className="text-center p-4">
                                    <h5 className="mb-0">Huấn Rose</h5>
                                    <small>Ielts teacher</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp item-padding" data-wow-delay="0.3s">
                            <div className="team-item bg-light">
                                <div className="overflow-hidden">
                                    <img className="img-fluid" src="https://nld.mediacdn.vn/291774122806476800/2023/12/17/anh-chup-man-hinh-2023-12-17-luc-115452-17027889117562111820081.png" alt style={{ height: 320, width: 300 }} />
                                </div>
                                <div className="position-relative d-flex justify-content-center" style={{ marginTop: '-23px' }}>
                                    <div className="bg-light d-flex justify-content-center pt-2 px-1">
                                        <a className="btn btn-sm-square btn-primary mx-1" href><i className="fab fa-facebook-f" /></a>
                                        <a className="btn btn-sm-square btn-primary mx-1" href><i className="fab fa-twitter" /></a>
                                        <a className="btn btn-sm-square btn-primary mx-1" href><i className="fab fa-instagram" /></a>
                                    </div>
                                </div>
                                <div className="text-center p-4">
                                    <h5 className="mb-0">Trương D. Lan</h5>
                                    <small>Toeic teacher</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp item-padding" data-wow-delay="0.5s">
                            <div className="team-item bg-light">
                                <div className="overflow-hidden">
                                    <img className="img-fluid" src="https://danviet.mediacdn.vn/upload/2-2019/images/2019-04-02/Vi-sao-Kha-Banh-tro-thanh-hien-tuong-dinh-dam-tren-mang-xa-hoi-khabanh-1554192528-width660height597.jpg" alt style={{ height: 320, width: 300 }} />
                                </div>
                                <div className="position-relative d-flex justify-content-center" style={{ marginTop: '-23px' }}>
                                    <div className="bg-light d-flex justify-content-center pt-2 px-1">
                                        <a className="btn btn-sm-square btn-primary mx-1" href><i className="fab fa-facebook-f" /></a>
                                        <a className="btn btn-sm-square btn-primary mx-1" href><i className="fab fa-twitter" /></a>
                                        <a className="btn btn-sm-square btn-primary mx-1" href><i className="fab fa-instagram" /></a>
                                    </div>
                                </div>
                                <div className="text-center p-4">
                                    <h5 className="mb-0">Better Bảnh</h5>
                                    <small>Basic's English Teacher</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp item-padding" data-wow-delay="0.7s">
                            <div className="team-item bg-light">
                                <div className="overflow-hidden">
                                    <img className="img-fluid" src="https://i.pinimg.com/736x/7e/94/ab/7e94ab3235407e63a7bfbf15ef27e30c.jpg" alt style={{ height: 320, width: 300 }} />
                                </div>
                                <div className="position-relative d-flex justify-content-center" style={{ marginTop: '-23px' }}>
                                    <div className="bg-light d-flex justify-content-center pt-2 px-1">
                                        <a className="btn btn-sm-square btn-primary mx-1" href><i className="fab fa-facebook-f" /></a>
                                        <a className="btn btn-sm-square btn-primary mx-1" href><i className="fab fa-twitter" /></a>
                                        <a className="btn btn-sm-square btn-primary mx-1" href><i className="fab fa-instagram" /></a>
                                    </div>
                                </div>
                                <div className="text-center p-4">
                                    <h5 className="mb-0">Tiger Tran</h5>
                                    <small>Toeic teacher</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Team End */}
            {/* Testimonial Start */}
            <div className="containerss-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="containerss">
                    <div className="text-center">
                        <h6 className="section-title bg-white text-center text-primary px-3">
                            Testimonial
                        </h6>
                        <h1 className="mb-5">Our Students Say!</h1>
                    </div>'
                    {
                        OwlCarousel && (
                            <OwlCarousel className="owl-theme testimonial-carousel position-relative" loop margin={10} nav>
                                <div className="testimonial-item text-center">
                                    <img className="border rounded-circle p-2 mx-auto text-center mb-3" src={imagetes1} style={{ width: 80, height: 80 }} />
                                    <h5 className="mb-0">Phúc Hậu</h5>
                                    <p>Haaju</p>
                                    <div className="testimonial-text bg-light text-center p-4">
                                        <p className="mb-0">Khóa học tuyệt vời, giảng viên tận tâm</p>
                                    </div>
                                </div>
                                <div className="testimonial-item text-center">
                                    <img className="border rounded-circle p-2 mx-auto mb-3" src={imagetes2} style={{ width: 80, height: 80 }} />
                                    <h5 className="mb-0">Thanh Tú</h5>
                                    <p>Bin</p>
                                    <div className="testimonial-text bg-light text-center p-4">
                                        <p className="mb-0">Nhiều cơ hội học tập, bài tập đa dạng</p>
                                    </div>
                                </div>
                                <div className="testimonial-item text-center">
                                    <img className="border rounded-circle p-2 mx-auto mb-3" src={imagetes3} style={{ width: 80, height: 80 }} />
                                    <h5 className="mb-0">Hoàng Phúc</h5>
                                    <p>PhucLe</p>
                                    <div className="testimonial-text bg-light text-center p-4">
                                        <p className="mb-0">Khóa học tuyệt vời, giảng viên tận tâm</p>
                                    </div>
                                </div>
                                <div className="testimonial-item text-center">
                                    <img className="border rounded-circle p-2 mx-auto mb-3" src={imagetes4} style={{ width: 80, height: 80 }} />
                                    <h5 className="mb-0">Khánh Hưng</h5>
                                    <p>Profession</p>
                                    <div className="testimonial-text bg-light text-center p-4">
                                        <p className="mb-0">Nhiều cơ hội học tập, bài tập đa dạng</p>
                                    </div>
                                </div>
                            </OwlCarousel>
                        )
                    }

                </div>
            </div>
            {/* Testimonial End */}
        </div>

    )
}


export default HomeUser