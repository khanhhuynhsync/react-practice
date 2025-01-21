import {Route, Routes} from "react-router-dom";

import {About} from "../pages/About.jsx";
import {Blog} from "../pages/Blog.jsx";
import {Cart} from "../pages/cart/Cart.jsx";
import {Home} from "../pages/Home.jsx";
import {NotFound} from "../pages/NotFound.jsx";
import {ProductDetail} from "../pages/store/ProductDetail.jsx";
import {Store} from "../pages/store/Store.jsx";

export function PageRoutes() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home/>} exact/>
                <Route path="/products" element={<Store/>}/>
                <Route path="/products/:id" element={<ProductDetail/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/blog" element={<Blog/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/*" element={<NotFound/>}/>
            </Routes>
        </div>
    );
}