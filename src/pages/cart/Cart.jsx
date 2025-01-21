import {useSelector} from "react-redux";

import {CartItem} from "./CartIem.jsx";
import {Breadcrumb} from "../../components/Breadcrumb.jsx";

export function Cart() {
    const cart = useSelector(state => state.cart);
    const breadcrumbItems = [
        {label: "Home", path: "/"},
        {label: "Cart", path: "/cart", active: true}
    ];

    return (
        <div className="container-md my-3">
            <Breadcrumb items={breadcrumbItems}/>
            {
                cart.cartItems && cart.cartItems.length === 0
                    ? <h1>Your cart is empty</h1>
                    : <div>
                        <div>
                            {
                                cart.cartItems.map((cartItem, index) => {
                                    return (
                                        <CartItem key={index} cartItem={cartItem}/>
                                    )
                                })
                            }
                        </div>
                        <hr/>
                        <div className="px-3">
                            <div className="row justify-content-end">
                                <h6 className="col-5 col-lg-2">
                                    Total Price:
                                </h6>
                                <h6 className="col-md-1 text-end">
                                    ${cart.totalPrice.toFixed(2)}
                                </h6>
                            </div>
                            <div className="row justify-content-end">
                                <h6 className="col-5 col-lg-2">
                                    Total Discount:
                                </h6>
                                <h6 className="col-md-1 text-end">
                                    ${cart.totalDiscount.toFixed(2)}
                                </h6>
                            </div>
                            <div className="row justify-content-end">
                                <h6 className="col-5 col-lg-2">
                                    Total Amount:
                                </h6>
                                <h6 className="col-md-1 text-end">
                                    ${(cart.totalPrice - cart.totalDiscount).toFixed(2)}
                                </h6>
                            </div>
                        </div>
                    </div>
            }
        </div>
    );
}