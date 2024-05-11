import React from 'react'
import ReactDOM from 'react-dom/client'

//redux
import { store } from './redux/store'
import { Provider } from 'react-redux'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import LoginTemplate from './templates/LoginTemplate'
import AdminTemplate from './templates/AdminTemplate'
import UserTemplate from './templates/UserTemplate'
import UserManager from './pages/Admin/UserManager'
import Noti from './pages/Admin/Noti'
import LoginLayout from './pages/Login/LoginLayout'
import Profile from './pages/Admin/Profile'
import HomeUser from './pages/User/HomeUser'
import AbouUser from './pages/User/AbouUser'
import CoursesUser from './pages/User/CoursesUser'
import TeamUser from './pages/User/TeamUser'
import ContactUser from './pages/User/ContactUser'
import AddKhoaHoc from './pages/Admin/Add/AddKhoaHoc'
import EditKhoaHoc from './pages/Admin/Add/EditKhoaHoc'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div>
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          {/* LOGIN */}
          {/* <Route path='' element={<LoginTemplate />}></Route> */}
          <Route path='' element={<LoginLayout />}></Route>
          {/* ADMIN */}
          <Route path='/admin' element={<AdminTemplate />}>
            <Route path='/admin/profile' element={<Profile />}></Route>
            <Route path='/admin/usermanager' element={<UserManager />}></Route>
            <Route path='/admin/usermanager/add-khoa-hoc' element={<AddKhoaHoc />}></Route>
            <Route path='/admin/usermanager/edit-khoa-hoc/:maKhoaHoc' element={<EditKhoaHoc />}></Route>
            <Route path='/admin/noti' element={<Noti />}></Route>
          </Route>
          {/* USER */}
          <Route path='/user' element={<UserTemplate />}>
            <Route path='/user/homeuser' element={<HomeUser />}></Route>
            <Route path='/user/aboutuser' element={<AbouUser />}></Route>
            <Route path='/user/courses' element={<CoursesUser />}></Route>
            <Route path='/user/teamuser' element={<TeamUser />}></Route>
            <Route path='/user/contactuser' element={<ContactUser />}></Route>
          </Route>
        </Routes>
      </Provider>

    </BrowserRouter>
  </div>,
)
