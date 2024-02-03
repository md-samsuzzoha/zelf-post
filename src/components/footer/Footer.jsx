import Facebook from "../../assets/facebook.svg";
import Instagram from "../../assets/instagram.svg";
import TickTok from "../../assets/tiktok.svg";
import "./footer.css";

export default function Footer() {
    return (
        <div className="footer flex place-content-between item-center">
            <div className="menu">
                <ul className="flex">
                    <li>
                        <a href="#">Terms of Service</a>
                    </li>
                    <li>
                        <a href="#">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#">DMCA</a>
                    </li>
                </ul>
            </div>
            <div className="rights flex">
                <div className="reserved mr-60">
                    © All rights reserved by Zelf. 2022
                </div>
                <div className="social">
                    <ul className="flex px-40">
                        <li>
                            <a href="#">
                                <img
                                    src={Instagram}
                                    alt="instagram"
                                    height={"24px"}
                                    width={"24px"}
                                />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img
                                    src={TickTok}
                                    alt="ticktok"
                                    height={"24px"}
                                    width={"24px"}
                                />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img
                                    src={Facebook}
                                    alt="facebook"
                                    height={"24px"}
                                    width={"24px"}
                                />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
