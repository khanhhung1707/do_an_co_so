import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    danhSachKhoaHocCart: [
        {
            "maKhoaHoc": "basic-004",
            "biDanh": "best-java-practice-project-from-basic-to-advance",
            "tenKhoaHoc": "Best Java Practice Project From Basic to Advance",
            "moTa": "Design, Development and Deployment process of all types of possible practice projects in Java based applications",
            "luotXem": 6544,
            "hinhAnh": "https://elearning0706.cybersoft.edu.vn/hinhanh/best-java-practice-project-from-basic-to-advance.jpg",
            "maNhom": "GP08",
            "ngayTao": "30/09/2021",
            "soLuongHocVien": 0,
            "nguoiTao": {
                "taiKhoan": "admin94",
                "hoTen": "admin",
                "maLoaiNguoiDung": "GV",
                "tenLoaiNguoiDung": "Giáo vụ"
            },
            "danhMucKhoaHoc": {
                "maDanhMucKhoahoc": "TuDuy",
                "tenDanhMucKhoaHoc": "Tư duy lập trình"
            }
        }
    ],
    dataDanhSachKhoaHoc: [
        {
            "maKhoaHoc": "basic-004",
            "biDanh": "best-java-practice-project-from-basic-to-advance",
            "tenKhoaHoc": "Best Java Practice Project From Basic to Advance",
            "moTa": "Design, Development and Deployment process of all types of possible practice projects in Java based applications",
            "luotXem": 6544,
            "hinhAnh": "https://elearning0706.cybersoft.edu.vn/hinhanh/best-java-practice-project-from-basic-to-advance.jpg",
            "maNhom": "GP08",
            "ngayTao": "30/09/2021",
            "soLuongHocVien": 0,
            "nguoiTao": {
                "taiKhoan": "admin94",
                "hoTen": "admin",
                "maLoaiNguoiDung": "GV",
                "tenLoaiNguoiDung": "Giáo vụ"
            },
            "danhMucKhoaHoc": {
                "maDanhMucKhoahoc": "TuDuy",
                "tenDanhMucKhoaHoc": "Tư duy lập trình"
            }
        }
    ]
}

const thongTinKhoaHoc = createSlice({
    name: 'danhSachKhoaHoc',
    initialState,
    reducers: {
        getThongTinKhoaHocEditApi: (state, action) => {
            state.dataDanhSachKhoaHoc = action.payload;
        }
    }
});

export const { getThongTinKhoaHocEditApi } = thongTinKhoaHoc.actions

export default thongTinKhoaHoc.reducer

export const getKhoaHocEditApi = (maKhoaHoc) => {
    return async (dispatch, getState) => {
        try {

            // const result = await axios({

            //     url: `https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${Number(maKhoaHoc)}`,

            //     method: 'GET'
            // });
            console.log('ma khoa hoc', maKhoaHoc)
            console.log('result: ', result);
            // const action = getThongTinKhoaHocEditApi(result.data);
            // dispatch(action);

        } catch (err) {
            console.log('err: ', err);

        }
    }
}

