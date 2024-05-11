import React from 'react'

import '../Login/style.css'
const LoginLayout = () => {
    return (
        <div className="login">
            <div className="wrappers login-3">
                <div className="containers">
                    <div className="col-left">
                        <div className="login-text">
                            <h2><i className="fa fa-book-open" /></h2>
                            <p>Học tiếng anh cho cuộc đời tươi sáng</p>
                            <a className="btn" href>Read More</a>
                        </div>
                    </div>
                    <div className="col-right">
                        <div className="login-form">
                            <h2>Đăng nhập</h2>
                            <form>
                                <p>
                                    <input type="text" placeholder="Tài khoản" required />
                                </p>
                                <p>
                                    <input type="password" placeholder="Mật khẩu" required />
                                </p>
                                <p>
                                    <input className="btn" type="submit" defaultValue="Submit" />
                                </p>
                                <p>
                                    <a href>Forget password?</a>
                                    <a href>Create an account.</a>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginLayout