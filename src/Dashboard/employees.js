import React, { useState } from "react";
import { USER } from "../DATA";
import { Link } from "react-router-dom";
import Header from "./../components/Header";

const Employees = () => {
    const [employeeData, setEmployeeData] = useState(
        USER.filter((em) => em.role === "emp")
    );
    return (
        <div>
            <Header />
            <table style={{ width: "50%", margin: "100px  auto" }}>
                <th>
                    <td>Tên</td>
                    <td>Ngày sinh</td>
                    <td></td>
                </th>
                {employeeData.map((e) => (
                    <tr style={{ border: "1px solid #000" }}>
                        <td>{e.username}</td>
                        <td>{e.birthday}</td>
                        <td>
                            <Link to={`/info/${e.id}`}>Xem chi tiết </Link>
                        </td>
                    </tr>
                ))}
            </table>
        </div>
    );
};

export default Employees;
