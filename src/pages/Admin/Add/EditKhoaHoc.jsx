import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik'
import moment from 'moment'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
    Button,
    Cascader,
    DatePicker,
    Form,
    Input,
    InputNumber,
    Radio,
    Select,
    Switch,
    TreeSelect,
} from 'antd';
import { themHinhAnhKhoaHoc } from '../../../redux/reducers/themHinhAnhKhoaHoc';
import layThongTinKhoaHoc from '../../../redux/reducers/layThongTinKhoaHoc';
const EditKhoaHoc = (props) => {
    const [componentSize, setComponentSize] = useState('default');
    const [imgSrc, setImgSrc] = useState('');
    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };

    const dispatch = useDispatch();
    // useEffect(()=> {
    //     let {id} = props.match.params;
    //     dispatch(layThongTinKhoaHoc(id)); 
    // },[])

    // const { maKhoaHoc } = useParams();
    // console.log('maKhoaHoc: ', maKhoaHoc);
    // useEffect(() => {

    //     dispatch(layThongTinKhoaHoc(maKhoaHoc));
    // }, [dispatch, maKhoaHoc])


    const formik = useFormik({
        initialValues: {
            "maKhoaHoc": "",
            "biDanh": "",
            "tenKhoaHoc": "",
            "moTa": "",
            "luotXem": 0,
            "danhGia": 0,
            "hinhAnh": "",
            "maNhom": "",
            "ngayTao": "",
            "maDanhMucKhoaHoc": "",
            "taiKhoanNguoiTao": ""
        },
        onSubmit: (values) => {
            console.log('values: ', values);
            values.maNhom = 'GP08'
            let imagePost = new FormData();
            for (let key in values) {
                if (key !== 'hinhAnh') {
                    imagePost.append(key, values[key]);
                } else {
                    imagePost.append('File', values.hinhAnh, values.hinhAnh.tenKhoaHoc);
                }
            }

            dispatch(themHinhAnhKhoaHoc(imagePost));
        }
    })

    const handleChangeDatePicker = (value) => {
        let ngayKhoiTao = moment(value).format('DD/MM/YYYY')
        formik.setFieldValue('ngayTao', ngayKhoiTao);
    }

    const handleChangeInputNumber = (name) => {
        return (value) => {
            formik.setFieldValue(name, value);
        }
    }

    const handleChangeFile = (e) => {
        let file = e.target.files[0];

        if (file.type === 'image/jpg' || file.type === 'image/png' || file.type === 'image/gif') {

            //tạo đối tượng để đọc file
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = (e) => {
                // console.log(e.target.result);
                setImgSrc(e.target.result);
            }

            //tạo đối tượng formData
            // let formData = new FormData();
            // formData.append('file', file);

            // axios.post('https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/UploadHinhAnhKhoaHoc', formData, {
            //     headers: {
            //         'Content-Type': 'multipart/form-data'
            //     }
            // }).then(response => {
            // Xử lý phản hồi từ API nếu cần
            // console.log('Upload successful:', response.data);
            // alert(response)
            // Đưa link hình ảnh vào formik hoặc bất kỳ phần nào cần thiết khác
            // formik.setFieldValue('hinhAnh', response.data.linkAnh);
            // }).catch(error => {
            //     console.error('Error while uploading file:', error);
            // alert(error)

            // });

        }

        //đem dữ liệu file lưu vào formik
        formik.setFieldValue('hinhAnh', file);
    }

    return (
        <div className="container mt-5">
            <Form onSubmitCapture={formik.handleSubmit}
                labelCol={{
                    span: 4,
                }}
                wrapperCol={{
                    span: 14,
                }}
                layout="horizontal"
                initialValues={{
                    size: componentSize,
                }}
                onValuesChange={onFormLayoutChange}
                size={componentSize}
                style={{
                    maxWidth: 600,
                }}
            >
                <h3>Thêm khóa học</h3>
                <Form.Item label="Form Size" name="size">
                    <Radio.Group>
                        <Radio.Button value="small">Small</Radio.Button>
                        <Radio.Button value="default">Default</Radio.Button>
                        <Radio.Button value="large">Large</Radio.Button>
                    </Radio.Group>
                </Form.Item>
                <Form.Item label="Bí danh">
                    <Input name="biDanh" onChange={formik.handleChange} />
                </Form.Item>
                <Form.Item label="Tên khóa học">
                    <Input name="tenKhoaHoc" onChange={formik.handleChange} />
                </Form.Item>
                <Form.Item label="Mô tả">
                    <Input name="moTa" onChange={formik.handleChange} />
                </Form.Item>
                <Form.Item label="Lượt xem">
                    <InputNumber onChange={handleChangeInputNumber('luotXem')} min={0} max={10} />
                </Form.Item>
                <Form.Item label="Đánh giá">
                    <InputNumber onChange={handleChangeInputNumber('danhGia')} min={0} max={10} />
                </Form.Item>
                <Form.Item label="Hình ảnh">
                    <Input type="file" onChange={handleChangeFile} accept='image/png, image/jpg , image/gif' />
                    <br />
                    <img style={{ width: 200, height: 200 }} src={imgSrc} alt="..." />
                </Form.Item>
                <Form.Item label="Mã nhóm">
                    <Input name="maNhom" onChange={formik.handleChange} />
                </Form.Item>
                <Form.Item label="Ngày tạo">
                    <DatePicker format={"DD/MM/YYYY"} onChange={handleChangeDatePicker} />
                </Form.Item>
                <Form.Item label="Mã danh mục ">
                    <Input name="maDanhMucKhoaHoc" onChange={formik.handleChange} />
                </Form.Item>
                <Form.Item label="Tài khoản tạo">
                    <Input name="taiKhoanNguoiTao" onChange={formik.handleChange} />
                </Form.Item>
                <Form.Item label="Switch" valuePropName="checked">
                    <Switch />
                </Form.Item>
                <Form.Item label="">
                    <button type="submit" class="btn btn-outline-info">Thêm khóa học</button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default EditKhoaHoc