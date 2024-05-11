import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux';

const initialState = {
    danhSachKhoaHocCart: [
        {
            "maKhoaHoc": "12321456773",
            "biDanh": "lap-trinh-nodejs",
            "tenKhoaHoc": "Lập Trình NodeJS ",
            "moTa": "Lập Trình NodeJS advanced ",
            "luotXem": 100,
            "hinhAnh": "https://elearning0706.cybersoft.edu.vn/hinhanh/lap-trinh-nodejs.png",
            "maNhom": "gp01",
            "ngayTao": "04/03/2024",
            "soLuongHocVien": 0,
            "nguoiTao": {
                "taiKhoan": null,
                "hoTen": null,
                "maLoaiNguoiDung": null,
                "tenLoaiNguoiDung": null
            },
            "danhMucKhoaHoc": {
                "maDanhMucKhoahoc": "FullStack",
                "tenDanhMucKhoaHoc": "Lập trình Full Stack"
            }
        }
    ],
    dataDanhSachKhoaHoc: [
        {
            "maKhoaHoc": "12321456773",
            "biDanh": "lap-trinh-nodejs",
            "tenKhoaHoc": "Lập Trình NodeJS ",
            "moTa": "Lập Trình NodeJS advanced ",
            "luotXem": 100,
            "hinhAnh": "https://elearning0706.cybersoft.edu.vn/hinhanh/lap-trinh-nodejs.png",
            "maNhom": "gp01",
            "ngayTao": "04/03/2024",
            "soLuongHocVien": 0,
            "nguoiTao": {
                "taiKhoan": null,
                "hoTen": null,
                "maLoaiNguoiDung": null,
                "tenLoaiNguoiDung": null
            },
            "danhMucKhoaHoc": {
                "maDanhMucKhoahoc": "FullStack",
                "tenDanhMucKhoaHoc": "Lập trình Full Stack"
            }
        },
    ]
}

const hinhAnh = createSlice({
    name: 'hinhAnh',
    initialState,
    reducers: {
        postHinhAnhApi: (state, action) => {
            state.dataDanhSachKhoaHoc.push(action.payload);
        }
    }
});

export const themHinhAnhKhoaHoc = (imagePost) => {
    return async (dispatch) => {

        try {
            console.log('imagePost', imagePost)
            // const result = await axios({
            //     url: 'https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/UploadHinhAnhKhoaHoc',
            //     method: 'POST'
            // });
            // const action = postHinhAnhApi(result.data);
            // dispatch(action);
        } catch (err) {
            console.log('err: ', err);

        }
    }
}
export const { postHinhAnhApi } = hinhAnh.actions

