import React, { useEffect } from 'react'
import Header from '../components/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-regular-svg-icons';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';
import { SALARY, USER } from '../DATA';
import { useParams } from 'react-router-dom';

const Salary = () => {
    const { id } = useParams()
    const [currentUser, setCurrentUser] = useState(USER.find(USER => USER.id === id))
    const [currentUserSalary, setCurrentUserSalary] = useState(null)
    useEffect(() => {


        if (!currentUser) {
            alert('not user')
            return
        }
        setCurrentUserSalary(SALARY.filter(salary => salary.ofEmployessId === id))
    }, [id])



    return (
        <>
            <Header />
            <div className='w-100 bg-dark position-fixed top-0' style={{ height: ' 60px' }}></div>
            <section className="vh-100" style={{ backgroundColor: '#f4f5f7' }}>
                <div className="container-fluid py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col col-lg-8 mb-4 mb-lg-0">
                            <div className="card" style={{ borderRadius: '.5rem' }}>
                                <div className="row g-0">
                                    <div className="col-md-4 gradient-custom text-center text-white"
                                        style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}>
                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                                            alt="Avatar" className="img-fluid my-5" style={{ width: '80px' }} />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body p-4">
                                            <h6>Information</h6>
                                            <hr className="mt-0 mb-4" />
                                            <div className="row pt-1">
                                                <div className="col-6 ">
                                                    <h6>Username</h6>
                                                    <p className="text-muted">{currentUser.username}</p>
                                                </div>
                                                <div className="col-6 ">
                                                    <h6>Địa chỉ</h6>
                                                    <p className="text-muted">{currentUser.address}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <table class="table table-striped table-hover table-bordered p-2">
                                    <thead>
                                        <tr>
                                            <th >Mã</th>
                                            <th >Tổng ngày làm việc</th>
                                            <th >Tiền lương </th>
                                            <th >Đơn vị</th>
                                            <th >Ngày bắt đầu tính tiền</th>
                                            <th >Đến ngày</th>
                                            <th >Ngày tạo giao dịch</th>
                                            <th >Ngày trả lương</th>
                                            <th >Trạng thái</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {currentUserSalary ? currentUserSalary?.map(user => <tr>
                                            <td>{user.id}</td>
                                            <td>{user.totalWorkingDays}</td>
                                            <td>{user.amount}</td>
                                            <td>{user.currencyUnit}</td>
                                            <td>{user.fromDate}</td>
                                            <td>{user.toDate}</td>
                                            <td>{user.createdDate}</td>
                                            <td>{user.paidDate}</td>
                                            <td>{user.status}</td>
                                        </tr>) : <p>Chưa có dữ liệu lương</p>}
                                    </tbody>
                                </table>

                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Salary