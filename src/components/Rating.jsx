export function Rating({rating}) {
    const renderRating = (rating) => {
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 !== 0;
        const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
        const stars = Array(fullStars).fill(
            <i className="bi bi-star-fill text-warning"/>
        );

        if (halfStar) {
            stars.push(
                <i className="bi bi-star-half text-warning"/>
            );
        }

        for (let i = 0; i < emptyStars; i++) {
            stars.push(
                <i key={`empty-${i}`} className="bi bi-star text-warning"/>
            );
        }

        return stars;
    }

    return (
        <div>
            {renderRating(rating)}
        </div>
    )
}