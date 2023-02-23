import React, { useState } from "react";
import { useParams } from "react-router-dom";
import EMP_BANNER from "../asset/Competency-Meet.jpeg";
import MAN_BANNER from "../asset/Construction-workers-and-architect-looking-at-blueprints-on-construction-site-514311930_5413x3609.png";
import { USER } from "../DATA";
import Header from "./../components/Header";

const Info = () => {
    const { id } = useParams();
    const [currentUser, setCurrentUser] = useState(
        USER.find((user) => user.id === id)
    );
    return (
        <>
            <Header />

            <div className="info-container">
                <div className="info-header">
                    <div className="info-overlay"></div>
                    <div className="info-img">
                        <img
                            src={currentUser.role === "man" ? MAN_BANNER : EMP_BANNER}
                            alt=""
                        />
                    </div>
                    <div className="info-text">
                        <h3>{currentUser.username}</h3>
                    </div>
                </div>
                <div className="info-body">
                    <h5>I. THÔNG TIN CÁ NHÂN</h5>
                    <p>Họ và tên: {currentUser.name}</p>
                    <p>Ngày sinh: {currentUser.birthday}</p>
                    <p>Nhóm máu: {currentUser.bloodGroup}</p>
                    <p>Địa chỉ hộ khẩu: {currentUser.address}</p>
                    <p>Địa chỉ thường trú/tạm trú: {currentUser.tempAddress}</p>
                    <p>Số bảo hiểm xã hội: {currentUser.numberInsurance}</p>
                    <p>
                        Số tài khoản ngân hàng Techcombank: {currentUser.numTechcombank}
                    </p>
                    <p>Số hộ chiếu: {currentUser.numPassport}</p>
                    <p>Ngày hết hạn: {currentUser.expricePassport}</p>
                    <p>Loại xe đi làm: {currentUser.vehicleType}</p>
                    <p>Biển số: {currentUser.vehicleId}</p>

                    <h5>II. THÔNG TIN HỌC VẤN</h5>
                    <p>Trường đào tạo: {currentUser.eduInfo.school}</p>
                    <p>Chuyên ngành: {currentUser.eduInfo.industry}</p>
                    <p>Năm tốt nghiệp: {currentUser.eduInfo.graduationYear}</p>
                    <p>Bằng cấp đạt được: {currentUser.eduInfo.degree}</p>
                    <p>Bằng cấp khác: {currentUser.eduInfo.difficulDegree}</p>
                    <p>Chứng chỉ tiếng Nhật: {currentUser.eduInfo.JapaneseLicense}</p>
                    <p>Chứng chỉ tiếng Anh: {currentUser.eduInfo.EnglishLicense}</p>

                    <div className="info-save">
                        <button>SAVE</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Info;
