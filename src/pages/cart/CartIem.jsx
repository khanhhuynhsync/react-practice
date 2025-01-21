import {useDispatch} from "react-redux";

import {ImageLoading} from "../../components/ImageLoading.jsx";
import {decreaseQuantity, increaseQuantity, remove} from "../../store/cartSlice.js";

export function CartItem({cartItem}) {
    const dispatch = useDispatch();

    return (
        <div className="row align-items-center border border-dark-subtle my-1">
            <div className="col-sm text-center">
                <ImageLoading src={cartItem.product.thumbnail} alt={cartItem.product.title} className="w-50"/>
            </div>
            <div className="col-sm text-start">
                <h5 className="">{cartItem.product.title}</h5>
            </div>
            <div className="col-sm text-start">
                <div className="">Price: ${cartItem.product.price}</div>
                <div className=" text-success">Discount: ${cartItem.product.discountPercentage}</div>
            </div>
            <div className="col-sm text-start">
                Total:
                ${((cartItem.product.price * cartItem.quantity) - (cartItem.product.discountPercentage * cartItem.quantity)).toFixed(2)}
            </div>
            <div className="col-sm text-center">
                <div className="btn-group align-items-center" role="group" aria-label="Basic outlined example">
                    <button type="button" className="btn btn-outline-primary"
                            onClick={() => dispatch(decreaseQuantity(cartItem.product))}>-
                    </button>
                    <div className="text-center" style={{width: "50px"}}>{cartItem.quantity}</div>
                    <button type="button" className="btn btn-outline-primary"
                            onClick={() => dispatch(increaseQuantity(cartItem.product))}>+
                    </button>
                </div>
                <button className="col btn btn-danger mx-2" onClick={() => dispatch(remove(cartItem.product))}>Remove
                </button>
            </div>
        </div>
    );
}