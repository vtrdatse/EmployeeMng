import React from "react";
import Header from "./../components/Header";
import IMAGE_BANNER from "../asset/The-Reverie-Saigon-Exterior-Daytime-I-1920X1080-1.jpg";
import { Link } from "react-router-dom";
import Footer from "./../components/Footer"
import Map from "./../components/Map";

const HomePage = () => {
    return (
        <>
            <Header />
            <div className="banner-container">
                <div className="banner__relative">
                    <div className="banner-overlay"></div>
                    <div className="banner__image">
                        <img src={IMAGE_BANNER} alt="banner" />
                    </div>
                    <div className="banner__text-block">
                        <div className="banner__text-block_frame">
                            <h2>
                                DSCT <br /> BUILDING
                            </h2>
                        </div>
                        <div className="banner__text-block__outside">
                            Cho Cuộc Sống Bừng Sáng, Hãy Nỗ Lực Cùng Với Chúng Tôi
                        </div>
                    </div>
                    <div className="banner__bottom">
                        <Link to="/apply">Apply for job</Link>
                    </div>
                </div>
            </div>
            {/* <Map />
            <Footer /> */}
        </>
    );
};

export default HomePage;
