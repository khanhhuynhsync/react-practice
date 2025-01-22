import {useState} from "react";
import "./store.css";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

import {ProductOverview} from "./ProductOverview.jsx";
import {Breadcrumb} from "../../components/Breadcrumb.jsx";
import {DataLoading} from "../../components/DataLoading.jsx";
import {useFetch} from "../../hooks/useCRUD.js";
import {useTitle} from "../../hooks/useTitle.js";

export function Store() {
    useTitle("Store");
    const cart = useSelector(state => state.cart);
    const navigate = useNavigate();

    const [productUrl] = useState(`${process.env.REACT_APP_DUMMY_API_URL}/products`);
    const {isPending, data} = useFetch(productUrl);
    const breadcrumbItems = [
        {label: "Home", path: "/"},
        {label: "Products", path: "/products", active: true}
    ];

    const gotoCart = () => {
        navigate("/cart");
    }

    return (
        <div className="container-md my-3">
            <div className="row">
                <div className="col">
                    <Breadcrumb items={breadcrumbItems}/>
                </div>
                <div className="col text-end">
                    <button type="button" className="btn btn-primary position-relative" onClick={gotoCart}>
                        Cart
                        <span
                            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                            {cart.cartItems ? cart.cartItems.length : 0}
                            <span className="visually-hidden">Items in cart</span>
                        </span>
                    </button>
                </div>
            </div>
            {
                isPending ? (
                    <DataLoading/>
                ) : (
                    <div>
                        <div className="product-list">
                            {
                                data.products.map((product) => (
                                    <ProductOverview key={product.id} product={product}/>
                                ))
                            }
                        </div>
                    </div>
                )
            }
        </div>
    );
}