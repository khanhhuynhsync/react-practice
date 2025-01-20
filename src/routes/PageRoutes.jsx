import {Route, Routes} from "react-router-dom";

import {About} from "../pages/About.jsx";
import {Blog} from "../pages/Blog.jsx";
import {Home} from "../pages/Home.jsx";
import {NotFound} from "../pages/NotFound.jsx";
import {Store} from "../pages/Store.jsx";

export function PageRoutes() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home/>} exact/>
                <Route path="/store" element={<Store/>}/>
                <Route path="/blog" element={<Blog/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/*" element={<NotFound/>}/>
            </Routes>
        </div>
    );
}