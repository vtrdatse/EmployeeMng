import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
    const navigateList = [
        { route: "/", name: "Trang chủ" },
        { route: "/Contact", name: "Liên hệ với chúng tôi" },
        { route: "/checkstatus", name: "Trạng thái CV" },
        // { route: "/login", name: "Đăng nhập" },
    ];

    const [auth, setAuth] = useState(JSON.parse(localStorage.getItem("authEmp")))

    useEffect(() => {
        setAuth(JSON.parse(localStorage.getItem("authEmp")))

    }, [JSON.parse(localStorage.getItem("authEmp"))])


    const navigator = useNavigate()
    const handleLogout = () => {
        localStorage.removeItem("myObj");
        navigator('/login')
        return
    }
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
                    {
                        auth ? <><a style={{ color: '#dddddd' }}>Hi, {auth.username}</a> <a href="#" onClick={() => handleLogout()} style={{ color: '#dddddd' }}>Đăng xuất &gt;&gt; </a></> : <Link to={'/login'}>Đăng nhập</Link>

                    }
                </div>
            </div>
        </div>
    );
};

export default Header;
