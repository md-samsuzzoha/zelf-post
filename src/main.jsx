import { Auth0Provider } from "@auth0/auth0-react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

const redirectUri = "https://127.0.0.1:5173/";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Auth0Provider
            domain="dev-3lhr50akdlcl7n1q.us.auth0.com"
            clientId="4MjOrQTXygWzWteL31jMxXS3ju4wAMDk"
            authorizationParams={{
                redirect_uri: redirectUri,
            }}
        >
            <App />
        </Auth0Provider>
    </React.StrictMode>
);
