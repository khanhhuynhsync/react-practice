import {useParams} from "react-router-dom";

import {Breadcrumb} from "../../components/Breadcrumb.jsx";
import {CarouselImage} from "../../components/CarouselImage.jsx";
import {useFetch} from "../../hooks/useProductApi.js";

export function ProductDetail() {
    const {id} = useParams();
    const productUrl = `${process.env.REACT_APP_PRODUCT_API_URL}/products/${id}`;
    const {isPending, isError, data, error} = useFetch(productUrl);

    if (isPending) {
        return (
            <div className="p-5 d-flex justify-content-center">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }
    if (isError) {
        return <h1>Error: {error.message}</h1>;
    }

    const breadcrumbItems = [
        {label: "Home", path: "/"},
        {label: "Products", path: "/products"},
        {label: data.title, path: `/products/${id}`, active: true}
    ];

    return (
        <div className="container-md my-3">
            <Breadcrumb items={breadcrumbItems}/>
            <h1>{data.title}</h1>
            <div className="row justify-content-center">
                <div className="col-md w-50">
                    <CarouselImage images={data.images} className="card-img-top product-detail-image"/>
                </div>
                <div className="col-md">
                    <p className="fw-semibold">{data.description}</p>
                    <p>Price: ${data.price}</p>
                    <p>Discount: {data.discountPercentage}%</p>
                    <p>Availability Status: {data.availabilityStatus}</p>
                    <p>Brand: {data.brand}</p>
                    <p>SKU: {data.sku}</p>
                    <p>Weight: {data.weight}g</p>
                    <p>Dimensions: {data.dimensions.width} x {data.dimensions.height} x {data.dimensions.depth} cm</p>
                    <p>Warranty Information: {data.warrantyInformation}</p>
                    <p>Shipping Information: {data.shippingInformation}</p>
                    <p>Return Policy: {data.returnPolicy}</p>
                    <p>Minimum Order Quantity: {data.minimumOrderQuantity}</p>
                </div>
            </div>
            <div className="my-5">
                {
                    data.reviews.map((review, index) => (
                        <div key={index} className="row">
                            <div className="col-md-2">
                                <h5>{review.reviewerName}</h5>
                                <p>{new Date(review.date).toLocaleDateString()}</p>
                            </div>
                            <div className="col-md">
                                <p>{review.comment}</p>
                            </div>
                            <hr/>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}