import { BrowserRouter, Route, Routes } from "react-router-dom"
import App from "../App"
import RegisterGiveaway from "../pages/RegisterGiveaway/RegisterGiveaway"
import Login from "../pages/Login/Login"
import RegisterUser from "../pages/RegisterUser/RegisterUser"

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/login" element={<Login />} />
                <Route path="/registerUser" element={<RegisterUser />} />
                <Route path="/registerGiveaway" element={<RegisterGiveaway />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router