import { configureStore } from '@reduxjs/toolkit'
import danhSachKhoaHoc from './reducers/danhSachKhoaHoc'
import layThongTinKhoaHoc from './reducers/layThongTinKhoaHoc'
import { themHinhAnhKhoaHoc } from './reducers/themHinhAnhKhoaHoc'
// import './reducers/root'

export const store = configureStore({
    reducer: {
        danhSachKhoaHoc: danhSachKhoaHoc,
        layThongTinKhoaHoc: layThongTinKhoaHoc,
        themHinhAnhKhoaHoc: themHinhAnhKhoaHoc
    }
})
export default store;