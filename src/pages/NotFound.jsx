import {useTitle} from "../hooks/useTitle.js";

export function NotFound() {
    useTitle("Page Not Found");
    return (
        <div className="container-md">
            <h1>Page Not Found</h1>
            <p>The page you are looking for does not exist.</p>
        </div>
    );
}