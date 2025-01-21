import {useState} from 'react';

export function ImageLoading({src, alt, className}) {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <div>
            {isLoading && (
                <div className="p-5 d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            )}
            <img
                src={src}
                alt={alt}
                className={`${isLoading ? "d-none" : ""} ${className}`}
                onLoad={() => setIsLoading(false)}
            />
        </div>
    );
}