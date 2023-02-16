import React from "react";
import Header from "./../components/Header";
import BANNER from "../asset/Saigon-river-christina.vn_.jpg";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const Dashboard = () => {
    const { id } = useParams();
    return (
        <>
            <Header />
            <div className="dashboard-container">
                <div className="dashbard-img">
                    <img src={BANNER} alt="" />
                </div>
                <div className="dashboard-text">
                    <p>Xin chào, Manager</p>
                </div>
                <div className="dashboard-overlay"></div>
            </div>
            <div className="dashboard-route">
                <div className="dashboard-item" style={{ background: "#86A3B8" }}>
                    <Link to={`/info/${id}`}>Thông tin cá nhân</Link>
                </div>
                <div className="dashboard-item" style={{ background: "#F99417" }}>
                    <Link to={`/employee`}>Nhân viên</Link>
                </div>
            </div>
        </>
    );
};

export default Dashboard;
