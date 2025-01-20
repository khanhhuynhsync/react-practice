import {useTitle} from "../hooks/useTitle.js";

export function Blog() {
    useTitle("Blog");
    return (
        <div className="container-md">
            <h1>Blog</h1>
            <p>Welcome to the Blog page</p>
        </div>
    );
}