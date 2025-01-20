import {useTitle} from "../hooks/useTitle.js";

export function About() {
    useTitle("About");
    return (
        <div className="container-md">
            <h1>About</h1>
            <p>Welcome to the About page</p>
        </div>
    );
}