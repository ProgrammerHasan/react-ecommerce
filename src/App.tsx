import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/home";
import { Provider } from "react-redux";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import AppLayout from "./layouts";
import NProgress from "nprogress";
import store from "./store/store";

function AppContent() {
    const location = useLocation();
    const [darkMode, setDarkMode] = useState(localStorage.getItem("theme") === "dark");

    useEffect(() => {
        NProgress.start(); // Start NProgress on route change

        // Complete NProgress when route changes have fully completed
        NProgress.done();

        return () => {
            NProgress.done(); // Ensure NProgress is stopped when leaving the page
        };
    }, [location.pathname]); // Runs every time the route changes

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);

    return (
        <AppLayout darkMode={darkMode} setDarkMode={setDarkMode}>
            <Routes>
                <Route path="/" element={<Home />} />
                {/*<Route path="/cart" element={<Cart />} />*/}
            </Routes>
        </AppLayout>
    );
}

function App() {
    return (
        <Provider store={store}>
            <Toaster />
            <Router>
                <AppContent />
            </Router>
        </Provider>
    );
}

export default App;