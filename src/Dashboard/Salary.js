import React, { useEffect } from "react";
import Header from "../components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-regular-svg-icons";
import {
    faFacebookF,
    faTwitter,
    faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
import { SALARY, USER } from "../DATA";
import { useParams } from "react-router-dom";

const Salary = () => {
    const { id } = useParams();
    const [currentUser, setCurrentUser] = useState(
        USER.find((USER) => USER.id === id)
    );
    const [currentUserSalary, setCurrentUserSalary] = useState(null);
    useEffect(() => {
        if (!currentUser) {
            alert("not user");
            return;
        }
        setCurrentUserSalary(SALARY.find((salary) => salary.ofEmployessId === id));
    }, [id]);

    //   console.log(currentUserSalary);

    return (
        <>
            <Header />
            <div
                className="w-100 bg-dark position-fixed top-0"
                style={{ height: " 60px" }}
            ></div>
            <section className="vh-100" style={{ backgroundColor: "#f4f5f7" }}>
                <div className="container-fluid py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col col-lg-12 mb-4 mb-lg-0">
                            <div className="card" style={{ borderRadius: ".5rem" }}>
                                <div className="row g-0">
                                    <div
                                        className="col-md-4 gradient-custom text-center text-white"
                                        style={{
                                            borderTopLeftRadius: ".5rem",
                                            borderBottomLeftRadius: ".5rem",
                                        }}
                                    >
                                        <img
                                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                                            alt="Avatar"
                                            className="img-fluid my-5"
                                            style={{ width: "80px" }}
                                        />
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
                                {currentUserSalary ? (
                                    <table class="table p-2 " style={{ overflow: "scroll" }}>
                                        <thead>
                                            <tr>
                                                <th>Lương chính</th>
                                                <th>Trách nhiệm</th>
                                                <th>Ăn trưa</th>
                                                <th>Điện thoại</th>
                                                <th>Xăng xe</th>
                                                <th>Hỗ trợ nhà ở</th>
                                                <th>Tổng thu nhập</th>
                                                <th>Ngày công thực tế</th>
                                                <th>Tổng lương thực tế</th>
                                                <th>Lương đóng BH</th>
                                                <th>BHXH (8%)</th>
                                                <th>BHYT (1.5%)</th>
                                                <th>BHTN (1%)</th>
                                                <th>Thuế TNCN</th>
                                                <th>Tạm ứng</th>
                                                <th>Thực lĩnh</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>{currentUserSalary.mainSalary}</td>
                                                <td>{currentUserSalary.responsibility}</td>
                                                <td>{currentUserSalary.lunch}</td>
                                                <td>{currentUserSalary.phone}</td>
                                                <td>{currentUserSalary.gas}</td>
                                                <td>{currentUserSalary.stay}</td>
                                                <td>{currentUserSalary.total}</td>
                                                <td>{currentUserSalary.days}</td>
                                                <td>{currentUserSalary.actualDays}</td>
                                                <td>{currentUserSalary.insurance}</td>
                                                <td>{currentUserSalary.BHYT}</td>
                                                <td>{currentUserSalary.BHXH}</td>
                                                <td>{currentUserSalary.BHTN}</td>
                                                <td>{currentUserSalary.tax}</td>
                                                <td>{currentUserSalary.temp}</td>
                                                <td>{currentUserSalary.real}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                ) : (
                                    <p class="text-center">Chưa có dữ liệu lương</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Salary;
