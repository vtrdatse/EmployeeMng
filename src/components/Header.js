import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const navigateList = [
        { route: "/", name: "Trang chủ" },
        { route: "/Contact", name: "Liên hệ với chúng tôi" },
        { route: "/checkstatus", name: "Trạng thái CV" },
        { route: "/login", name: "Đăng nhập" },
    ];

    return (
        <div>
            <div className="header-container">
                <div className="header__logo">
                    <a href="/">
                        <h1>DSCT</h1>
                    </a>
                </div>
                <div className="header__navigate">

                    {
                        navigateList.map(a => <div className="header__navigate_item">
                            <Link to={a.route}>{a.name}</Link>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;
