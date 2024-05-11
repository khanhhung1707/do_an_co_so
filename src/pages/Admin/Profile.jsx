import React from 'react'
import '../../assets/admin/css/light-bootstrap-dashboard.css';
import '../../assets/admin/css/bootstrap.min.css'
import '../../assets/admin/css/demo.css'
const Profile = () => {
    return (
        <div className="content">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title">Chỉnh sửa thông tin</h4>
                            </div>
                            <div className="card-body">
                                <form>
                                    <div className="row">
                                        <div className="col-md-5 pr-1">
                                            <div className="form-group">
                                                <label>Quốc tịch</label>
                                                <input type="text" className="form-control" disabled placeholder="Company" defaultValue="Việt Nam" />
                                            </div>
                                        </div>
                                        <div className="col-md-3 px-1">
                                            <div className="form-group">
                                                <label>Tên người dùng</label>
                                                <input type="text" className="form-control" placeholder="Username" defaultValue="ngkh.177" />
                                            </div>
                                        </div>
                                        <div className="col-md-4 pl-1">
                                            <div className="form-group">
                                                <label htmlFor="exampleInputEmail1">Email</label>
                                                <input type="email" className="form-control" placeholder="Email" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 pr-1">
                                            <div className="form-group">
                                                <label>Họ và tên</label>
                                                <input type="text" className="form-control" placeholder="Name" defaultValue="Nguyễn Khánh Hưng" />
                                            </div>
                                        </div>
                                        <div className="col-md-6 pl-1">
                                            <div className="form-group">
                                                <label>Tuổi</label>
                                                <input type="text" className="form-control" placeholder="Age" defaultValue={21} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label>Địa chỉ</label>
                                                <input type="text" className="form-control" placeholder="Address" defaultValue="Distric 9" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-4 pr-1">
                                            <div className="form-group">
                                                <label>Thành phố</label>
                                                <input type="text" className="form-control" placeholder="City" defaultValue="Hồ Chí Minh" />
                                            </div>
                                        </div>
                                        <div className="col-md-4 px-1">
                                            <div className="form-group">
                                                <label>Quê quán</label>
                                                <input type="text" className="form-control" placeholder="Country" defaultValue="Thành Phố Buôn Ma Thuột" />
                                            </div>
                                        </div>
                                        <div className="col-md-4 pl-1">
                                            <div className="form-group">
                                                <label>Mã Zip</label>
                                                <input type="number" className="form-control" placeholder="ZIP Code" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label>Giới thiệu</label>
                                                <textarea rows={4} cols={80} className="form-control" placeholder="Here can be your description" value defaultValue={"                                                            ngon"} />
                                            </div>
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-info btn-fill pull-right">
                                        Cập nhật
                                    </button>
                                    <div className="clearfix" />
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card card-user">
                            <div className="card-image">
                                <img src="https://ununsplash.imgix.net/photo-1431578500526-4d9613015464?fit=crop&fm=jpg&h=300&q=75&w=400" alt="..." />
                            </div>
                            <div className="card-body">
                                <div className="author">
                                    <a href="#">
                                        <img className="avatar border-gray" src="https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-1/431622261_3664190817232595_6029816091033056958_n.jpg?stp=dst-jpg_p160x160&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEq-E6uEKbrnJHdXIBJKzLho4R3Z0ZId5OjhHdnRkh3kzUYbbW5ENeR6msEJLxE6Bs6mkQAP3t3DjM5Wp3qZslY&_nc_ohc=Yw0A7QigF8cQ7kNvgERKkDY&_nc_ht=scontent.fsgn5-14.fna&oh=00_AfBbtd4Vu_pcn0Z45dlNkhbWDrIpgitlch6ZApJQJWEOUQ&oe=66394CD5" alt="..." />
                                        <h5 className="title">Nguyễn Khánh Hưng</h5>
                                    </a>
                                    <p className="description">ngkh.177</p>
                                </div>
                                <p className="description text-center">Info here</p>
                            </div>
                            <hr />
                            <div className="button-container mr-auto ml-auto">
                                <button href="#" className="btn btn-simple btn-link btn-icon">
                                    <i className="fab fa-facebook" />
                                </button>
                                <button href="#" className="btn btn-simple btn-link btn-icon">
                                    <i className="fab fa-instagram" />
                                </button>
                                <button href="#" className="btn btn-simple btn-link btn-icon">
                                    <i className="fab fa-discord" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile