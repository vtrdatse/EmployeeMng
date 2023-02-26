import React from 'react'
import Header from '../components/Header'
import Banner from '../asset/pexels-pixabay-302769.jpg'
import { USER } from '../DATA'
import { Link } from 'react-router-dom'

const HrManager = () => {
    return (
        <>
            <Header />
            <div className="container-fluid">

                <div class="row mb-5" >
                    <div class="col-sm-12 p-0">
                        <div class="position-relative" style={{ height: '50vh' }}>
                            <div class="bg-dark  position-absolute top-0 right-0 left-0 bottom-0 z-5 w-100 h-100" style={{
                                opacity: 0.6
                            }}></div>

                            <img src={Banner} class="w-100 h-100" alt="Banner Image" />
                            <div class="position-absolute w-100  d-flex flex-column justify-content-end top-50 start-50 translate-middle z-10" style={{
                                top: '50%',
                                transform: 'translateY(-50%)'
                            }}>
                                <div class="container text-center text-white py-5 ">
                                    <h1 class="mb-4">Welcome to Dash board for HR</h1>
                                    <p class="lead"></p>
                                    <a href="#" class="btn btn-primary btn-lg mt-3">Learn More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-sm-10 mx-auto" >
                        <table className="table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th>USERNAME</th>
                                    <th>NGÀY SINH </th>
                                    <th width='200' className='text-center' >QUYỀN TRUY CẬP</th>
                                    <th width='200' ></th>
                                    <th width='200' ></th>
                                </tr>
                            </thead>
                            <tbody>
                                {USER?.map(user =>
                                    <tr>
                                        <td>{user.username}</td>
                                        <td>{user.birthday}</td>
                                        <td className='text-center'>{user.role}</td>
                                        <td className='text-center'><Link to={`/info/${user.id}`}>Xem thông tin</Link></td>
                                        <td className='text-center'><Link to={`/salary/${user.id}`}>Xem bảng lương</Link></td>
                                    </tr>)}


                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-sm-12">
                        <div className="bg-dark text-white py-3 text-center">
                            &copy; 2023 DSCT Building. All rights reserved.
                        </div>
                    </div>
                </div></div>
        </>
    )
}

export default HrManager