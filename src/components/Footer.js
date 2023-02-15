import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer__item">
                <a href="https://www.facebook.com/antony.datvtmod68/">
                    Liên hệ với chúng tôi
                </a>
            </div>
            <div className="footer__item">
                <a href="https://www.facebook.com/antony.datvtmod68/">
                    Giờ Phục Vụ
                </a>
                {/* <Link to="/Contact">Giờ phục vụ</Link> */}
            </div>
        </div>
    );
};

export default Footer;
