import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

import {ImageLoading} from "../../components/ImageLoading.jsx";
import {Rating} from "../../components/Rating.jsx";
import {add, remove} from "../../store/cartSlice.js";

export function ProductOverview({product}) {
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const isInCart = cart.cartItems.some(item => item.product.id === product.id);
    const stockStatusCss =
        product.availabilityStatus === "In Stock"
            ? "text-success"
            : product.availabilityStatus === "Low Stock"
                ? "text-warning-emphasis"
                : product.availabilityStatus === "Out of Stock"
                    ? "text-danger"
                    : "";
    const disableAddToCart = product.availabilityStatus === "Out of Stock";

    const goToProductDetail = () => {
        navigate(`${product.id}`);
    }

    return (
        <div className="card product-overview" onClick={goToProductDetail}>
            <ImageLoading src={product.thumbnail} alt={product.title} className="card-img-top product-thumbnail"/>
            <div className="card-body d-flex flex-column justify-content-between">
                <div>
                    <h5 className="card-title">{product.title}</h5>
                </div>
                <div>
                    <div className="card-text text-danger-emphasis">Price: ${product.price}</div>
                    <div className="card-text text-success">Discount: ${product.discountPercentage}</div>
                    <div className="card-text">Rating: {product.rating}</div>
                    <div className={`card-text ${stockStatusCss}`}>
                        {product.availabilityStatus}
                    </div>
                    <div className="card-text">
                        <Rating rating={product.rating}/>
                    </div>
                </div>
            </div>
            {
                isInCart ? (
                    <button type="button" className="btn btn-danger" onClick={(e) => {
                        dispatch(remove(product));
                        e.stopPropagation();
                    }} disabled={disableAddToCart}>
                        Remove from cart
                    </button>
                ) : (
                    <button type="button" className="btn btn-primary" onClick={(e) => {
                        dispatch(add(product));
                        e.stopPropagation();
                    }} disabled={disableAddToCart}>
                        Add to cart
                    </button>
                )
            }
        </div>
    );
}