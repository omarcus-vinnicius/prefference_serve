import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { AuthProvider, Context } from '../AuthContext/AuthContext';
// import PrivateRouter from "./private.routes";
// import PublicRouter from "./public.routes";
import Home from "../pages/home-page/home";
import Login from "../pages/login/login";
import AdmHome from "../pages/adm-home/adm-home";
import Test from "../pages/test";


const Routing = () => {



    return (
        <BrowserRouter>
            <Routes>
                <Route index path={'/'} element={<Home />} />
                <Route index path={'/test'} element={<Test />} />
                <Route path={'login-adm'} element={<Login />} />
                <Route path={'adm-home'} element={<AdmHome />} />
            </Routes>
        </BrowserRouter>

    )
}

export default Routing