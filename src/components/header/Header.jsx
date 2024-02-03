import { useAuth0 } from "@auth0/auth0-react";
import Logo from "../../assets/logo.svg";
import RainbowLogo from "../../assets/rainbow-logo.svg";
import "./header.css";

export default function Header() {
    const { loginWithRedirect, isAuthenticated, logout } = useAuth0();

    const handleJoin = () => {
        loginWithRedirect();
    };

    return (
        <div className="flex place-content-between toolbar item-center">
            <div>
                <img
                    className="img"
                    src={!isAuthenticated ? Logo : RainbowLogo}
                    alt="zelf"
                />
            </div>
            {!isAuthenticated ? (
                <div>
                    <button
                        onClick={handleJoin}
                        className="brand-text sign-in-btn"
                    >
                        Sign In
                    </button>
                    <button className="brand-bg ml-4" onClick={handleJoin}>
                        Join
                    </button>
                </div>
            ) : (
                <button
                    onClick={() =>
                        logout({
                            logoutParams: { returnTo: window.location.origin },
                        })
                    }
                >
                    Log out
                </button>
            )}
        </div>
    );
}
