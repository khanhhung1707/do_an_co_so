import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

import '../assets/user/css/bootstrap.css'
import '../assets/user/css/bootstrap.min.css'
import '../assets/user/css/style.css'
import imagecourse1 from '../assets/user/img/course-1.jpg'
import imagecourse2 from '../assets/user/img/course-2.jpg'
import imagecourse3 from '../assets/user/img/course-3.jpg'

const UserTemplate = () => {
    const navbarStyle = {
        position: 'fixed',
        top: 0,
        zIndex: 1020,
        marginBottom: 0,
        paddingBottom: 0,
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: '0.5rem',
        paddingBottom: '0.5rem',
        width: '100%'
    };

    return (
        <div>
            {/* <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
                <div className="spinner-border text-primary" style={{ width: '3rem', height: '3rem' }} role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
            Spinner End */}
            {/* Navbar Start */}
            <nav className="navbars navbar-expand-lg bg-white navbar-light shadow sticky-top p-0" style={navbarStyle}>
                <NavLink href="index.htpl" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
                    <h2 className="m-0 text-primary">
                        <i className="fa fa-book me-3" />eLEARNING
                    </h2>
                </NavLink>
                <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto p-4 p-lg-0">
                        <NavLink to="/user/homeuser" className="nav-item nav-link">Home</NavLink>
                        <NavLink to="/user/aboutuser" className="nav-item nav-link">About</NavLink>
                        <NavLink to="/user/courses" className="nav-item nav-link">Courses</NavLink>
                        <NavLink to="/user/teamuser" className="nav-item nav-link">Mentor</NavLink>
                        <NavLink to="/user/contactuser" className="nav-item nav-link">Contact</NavLink>
                    </div>
                    <a href className="btn btn-primary py-4 px-lg-5 d-none d-lg-block">Join Now<i className="fa fa-arrow-right ms-3" /></a>
                </div>
            </nav>
            {/* Navbar End */}
            <Outlet />
            {/* Footer Start */}
            <div className="container-fluid p-0 text-light footer pt-5 wow fadeIn" data-wow-delay="0.1s" >

                <div className="row g-5 bg-dark w-100">
                    <div className="col-lg-3 col-md-6">
                        <h4 className="text-white mb-3 pl-4">Quick Link</h4>
                        <a className="btn btn-link pl-4" href>About Us</a>
                        <a className="btn btn-link pl-4" href>Contact Us</a>
                        <a className="btn btn-link pl-4" href>Privacy Policy</a>
                        <a className="btn btn-link pl-4" href>Terms &amp; Condition</a>
                        <a className="btn btn-link pl-4" href>FAQs &amp; Help</a>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h4 className="text-white mb-3">Contact</h4>
                        <p className="mb-2">
                            <i className="fa fa-map-marker-alt me-3" />HUTECH Camping Thu Duc
                        </p>
                        <p className="mb-2"><i className="fa fa-phone-alt me-3" />113</p>
                        <p className="mb-2">
                            <i className="fa fa-envelope me-3" />test@gmail.com
                        </p>
                        <div className="d-flex pt-2">
                            <a className="btn btn-outline-light btn-social" href><i className="fab fa-twitter" /></a>
                            <a className="btn btn-outline-light btn-social" href><i className="fab fa-facebook-f" /></a>
                            <a className="btn btn-outline-light btn-social" href><i className="fab fa-youtube" /></a>
                            <a className="btn btn-outline-light btn-social" href><i className="fab fa-discord" /></a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h4 className="text-white mb-3">Gallery</h4>
                        <div className="row g-2 pt-2">
                            <div className="col-4">
                                <img className="img-fluid bg-light p-1" src={imagecourse1} alt />
                            </div>
                            <div className="col-4">
                                <img className="img-fluid bg-light p-1" src={imagecourse2} alt />
                            </div>
                            <div className="col-4">
                                <img className="img-fluid bg-light p-1" src={imagecourse3} alt />
                            </div>
                            <div className="col-4">
                                <img className="img-fluid bg-light p-1" src={imagecourse2} alt />
                            </div>
                            <div className="col-4">
                                <img className="img-fluid bg-light p-1" src={imagecourse3} alt />
                            </div>
                            <div className="col-4">
                                <img className="img-fluid bg-light p-1" src={imagecourse1} alt />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h4 className="text-white mb-3 pl-4">Newsletter</h4>
                        <p className='pl-4'>Dr for us if you need some more</p>
                        <div className="position-relative mx-auto" style={{ maxWidth: 400 }}>
                            <input className="form-control border-0 w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
                            <button type="button" className="btn btn-primary py-2.5 pb-2 position-absolute top-0 end-0">
                                Submit
                            </button>
                        </div>
                    </div>
                </div>

                <div className="copyright bg-dark w-100">
                    <div className="row w-100">
                        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                            <p className='pl-4'>© 2024</p>

                        </div>
                        <div className="col-md-6 text-center text-md-end ">
                            <div className="footer-menu">
                                <a href>Home</a>
                                <a href>Cookies</a>
                                <a href>Help</a>
                                <a href>FQAs</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            {/* Footer End */}
            {/* Back to Top */}
            <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up" /></a>

        </div>
    )
}

export default UserTemplate