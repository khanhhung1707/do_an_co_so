import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

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

const danhSachKhoaHoc = createSlice({
    name: 'danhSachKhoaHoc',
    initialState,
    reducers: {
        getKhoaHocApi: (state, action) => {
            state.dataDanhSachKhoaHoc = action.payload;
        }
    }
});

export const { getKhoaHocApi } = danhSachKhoaHoc.actions

export default danhSachKhoaHoc.reducer

export const getDanhSachKhoaHocApi = () => {
    return async (dispatch, getState) => {
        try {
            const result = await axios({
                url: 'https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP08',
                method: 'GET'
            });
            // dispatch({
            //     type: 'danhSachKhoaHoc/getKhoaHocApi',
            //     data: result.data
            // })
            const action = getKhoaHocApi(result.data);
            dispatch(action);

        } catch (err) {

        }
    }
}

