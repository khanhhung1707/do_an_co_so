import React from 'react'
// import '../assets/admin/sass/light-bootstrap-dashboard.scss';
import '../assets/admin/css/light-bootstrap-dashboard.css';
import '../assets/admin/css/bootstrap.min.css'
import '../assets/admin/css/demo.css'
import { NavLink, Outlet } from 'react-router-dom';
import { USER_LOGIN } from '../util/settings/config';
const AdminTemplate = () => {
    // if (!localStorage.getItem(USER_LOGIN)) {
    //     return <Redirect to='/login' />
    // }



    return (
        <div className="wrapper">
            <div className="sidebar" data-image="../assets/img/sidebar-5.jpg">
                <div className="sidebar-wrapper">
                    <div className="logo">
                        <a href="#" className="simple-text">
                            <i className="fa fa-book-open" />
                        </a>
                    </div>
                    <ul className="nav">
                        <li>
                            <NavLink className="nav-link" to="/admin/profile"
                                isActive={(match, location) => location.pathname === "/profile"} href="/profile">
                                <i className="nc-icon nc-circle-09" />
                                <p>User Profile</p>
                            </NavLink>
                        </li>
                        <li className='dropdown'>
                            <NavLink className="nav-link" to="/admin/usermanager">
                                <i className="nc-icon nc-notes" />
                                <p>Manager</p>
                            </NavLink>
                            <div className="dropdown-content">
                                <NavLink className="nav-link" to="/admin/usermanager/add-khoa-hoc" >Add User</NavLink>
                                <NavLink className="nav-link" to >Edit User</NavLink>
                            </div>
                        </li>
                        <li>
                            <NavLink className="nav-link" to="/admin/noti"
                                isActive={(match, location) => location.pathname === "/noti"} href="/noti">
                                <i class="fa fa-plus"></i>
                                <p>Add course</p>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="main-panel">
                {/* Navbar */}
                <nav className="navbar navbar-expand-lg" color-on-scroll={500}>
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#pablo"> User </a>
                        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-bar burger-lines" />
                            <span className="navbar-toggler-bar burger-lines" />
                            <span className="navbar-toggler-bar burger-lines" />
                        </button>
                        <div className="collapse navbar-collapse justify-content-end" id="navigation">
                            <ul className="nav navbar-nav mr-auto">
                                <li className="dropdown nav-item">
                                    <a href="#" className="dropdown-toggle nav-link" data-toggle="dropdown">
                                        <i className="nc-icon nc-planet" />
                                        <span className="notification">5</span>
                                        <span className="d-lg-none">thông báo</span>
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">thông báo 1</a></li>
                                        <li><a className="dropdown-item" href="#">thông báo 2</a></li>
                                        <li><a className="dropdown-item" href="#">thông báo 3</a></li>
                                        <li><a className="dropdown-item" href="#">thông báo 4</a></li>
                                        <li><a className="dropdown-item" href="#">...</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        <i className="nc-icon nc-zoom-split" />
                                        <span className="d-lg-block">&nbsp; Tìm kiếm</span>
                                    </a>
                                </li>
                            </ul>
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <a className="nav-link" href="#pablo">
                                        <span className="no-icon">Tài khoản</span>
                                    </a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <span className="no-icon">Chức năng khác</span>
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <a className="dropdown-item" href="#">Action 1</a>
                                        <a className="dropdown-item" href="#">Action 2</a>
                                        <a className="dropdown-item" href="#">Action 3</a>
                                        <a className="dropdown-item" href="#">Action 3</a>
                                        <div className="divider" />
                                        <a className="dropdown-item" href="#">abc</a>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#pablo">
                                        <span className="no-icon">Đăng xuất</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                {/* End Navbar */}
                <Outlet />
            </div>
        </div>
    )
}

export default AdminTemplate