import React, { useEffect } from 'react'
import '../../assets/admin/css/light-bootstrap-dashboard.css';
import '../../assets/admin/css/bootstrap.min.css'
import '../../assets/admin/css/demo.css'
import { useSelector, useDispatch } from 'react-redux';
import { getDanhSachKhoaHocApi } from '../../redux/reducers/danhSachKhoaHoc';
import { NavLink } from 'react-router-dom';
import { getKhoaHocEditApi } from '../../redux/reducers/layThongTinKhoaHoc';
const UserManager = ({ maKhoaHoc }) => {
    let { dataDanhSachKhoaHoc } = useSelector(state => state.danhSachKhoaHoc);

    const dispatch = useDispatch();
    useEffect(() => {
        const actionThunk = getDanhSachKhoaHocApi();
        dispatch(actionThunk);
    }, [])


    const handleEditCourse = () => {
        // Gọi hàm getDanhSachKhoaHocApi và truyền maKhoaHoc vào
        dispatch(getKhoaHocEditApi(maKhoaHoc));
    };
    return (
        <div className="content">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card strpied-tabled-with-hover">

                            <div className="card-header">

                                <h4 className="card-title mb-2">Quản lý khóa học</h4>
                                <p className="card-category mt-2">Thông tin khóa học</p>
                            </div>
                            <div className="card-body table-full-width table-responsive">
                                <table className="table table-hover table-striped">
                                    <thead>
                                        <tr><th>Mã</th>
                                            <th>Tên</th>
                                            <th>Hình ảnh</th>
                                            <th>Ngày tạo</th>
                                            <th>Số lượng học viên</th>
                                            <th>Hành động</th>
                                        </tr></thead>
                                    {dataDanhSachKhoaHoc.map((item, index) => {
                                        return <tbody key={index}>
                                            <tr>
                                                <td>{item.maKhoaHoc}</td>
                                                <td>{item.tenKhoaHoc}</td>
                                                <td>
                                                    <img src={item.hinhAnh} width={50} height={50} alt="..." onError={(e) => { e.target.onError = null; e.target.src = `https://picsum.photos/id/${index}/400/220` }} />
                                                </td>
                                                <td>{item.ngayTao}</td>
                                                <td>{item.soLuongHocVien}</td>
                                                <td>
                                                    <NavLink key={1} to={`/admin/usermanager/edit-khoa-hoc/${item.maKhoaHoc}`} className='btn btn-primary mr-2' style={{ width: 30, height: 30, fontSize: 13, display: 'flex', justifyContent: 'center', alignItems: 'center' }} onClick={handleEditCourse}><i class="fa fa-pen"></i></NavLink>
                                                    <NavLink key={2} className='btn btn-danger' style={{ width: 30, height: 30, fontSize: 13, display: 'flex', justifyContent: 'center', alignItems: 'center' }}><i class="fa fa-trash-alt"></i></NavLink>

                                                </td>
                                            </tr>
                                        </tbody>
                                    })}
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="card card-plain table-plain-bg">
                            <div className="card-header">
                                <h4 className="card-title">Quản lý người dùng</h4>
                                <p className="card-category">Thông tin người dùng</p>
                            </div>
                            <div className="card-body table-full-width table-responsive">
                                <table className="table table-hover">
                                    <thead>
                                        <tr><th>ID</th>
                                            <th>Tên</th>
                                            <th>Số tiền đã cống nạp</th>
                                            <th>Quê quán</th>
                                            <th>Tuổi</th>
                                        </tr></thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Hậu</td>
                                            <td>$1,300</td>
                                            <td>Thành Phố Hồ Chí Minh</td>
                                            <td>21</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Tú</td>
                                            <td>$2,789</td>
                                            <td>Thành Phố Hồ Chí Minh</td>
                                            <td>21</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>Hưng</td>
                                            <td>$0</td>
                                            <td>Buôn Ma Thuột</td>
                                            <td>21</td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td>Phúc</td>
                                            <td>$735</td>
                                            <td>Thành Phố Hồ Chí Minh</td>
                                            <td>21</td>
                                        </tr>
                                        <tr>
                                            <td>5</td>
                                            <td>Bảo</td>
                                            <td>$2,000</td>
                                            <td>Thành Phố Hồ Chí Minh</td>
                                            <td>21</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >

    )
}

export default UserManager