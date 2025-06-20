import { createBrowserRouter  } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login/Login";
import RegisterGiveaway from "../pages/RegisterGiveaway/RegisterGiveaway";
import RegisterUser from "../pages/RegisterUser/RegisterUser";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/registerGiveaway',
        element: <RegisterGiveaway />
    },
    {
        path: '/register',
        element: <RegisterUser />
    },
]);

export { router };