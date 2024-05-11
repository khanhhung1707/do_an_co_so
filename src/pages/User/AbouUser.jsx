import React from 'react'
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
const AbouUser = () => {
    return (
        <div>
            {/* Header Start */}
            < div className="container-fluid bg-primary py-5 mb-5 page-header" >
                <div className="container py-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-10 text-center">
                            <h1 className="display-3 text-white animated slideInDown">About Us</h1>
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
        </div>
    )
}

export default AbouUser