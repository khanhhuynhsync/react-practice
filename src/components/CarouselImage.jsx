import {ImageLoading} from './ImageLoading.jsx'

export function CarouselImage({images, className}) {
    return (
        <div id="carouselProductImage" className="carousel slide">
            <div className="carousel-inner">
                {
                    images.map((image, index) => (
                        <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                            <ImageLoading src={image} alt={index} className={`${className}`}/>
                        </div>
                    ))
                }
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselProductImage"
                    data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"
                      style={{filter: "drop-shadow(2px 2px 2px rgba(0,0,0,0.5))"}}></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselProductImage"
                    data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"
                      style={{filter: "drop-shadow(2px 2px 2px rgba(0,0,0,0.5))"}}></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}