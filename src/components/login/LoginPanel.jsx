import { useAuth0 } from "@auth0/auth0-react";
import Frame from "../../assets/login-frame.svg";
import SelectedIcon from "../../assets/selected.svg";
import "./login-panel.css";

export default function LoginPanel() {
    const { loginWithRedirect } = useAuth0();

    return (
        <div className="flex place-content-between login-container">
            <div className="banner">
                <img src={Frame} alt="login banner" />
            </div>
            <div className="login-actions">
                <div className="title">Register Your Account</div>
                <div className="my-48 p-24">
                    <div className="pb-48 ">
                        <div className="brand flex place-content-center">
                            <img src={SelectedIcon} alt="selected" />
                            <div className="pl-4">I Represent a Brand</div>
                        </div>
                    </div>
                    <button
                        className="brand-bg w-full"
                        onClick={() => loginWithRedirect()}
                    >
                        Continue
                    </button>
                </div>
                <div className="already-member">
                    Already a member?{" "}
                    <a href="#" onClick={() => loginWithRedirect()}>
                        Sign In
                    </a>
                </div>
            </div>
        </div>
    );
}
