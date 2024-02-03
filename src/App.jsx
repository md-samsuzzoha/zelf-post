import { useAuth0 } from "@auth0/auth0-react";
import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import LoginPanel from "./components/login/LoginPanel";
import PostBoard from "./components/post/PostBoard";

function App() {
    const { isAuthenticated } = useAuth0();

    return (
        <div>
            <Header />
            <div className="flex place-content-center container">
                {!isAuthenticated ? <LoginPanel /> : <PostBoard />}
            </div>
            {isAuthenticated && <Footer />}
        </div>
    );
}

export default App;
