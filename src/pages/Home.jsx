import {useTitle} from "../hooks/useTitle.js";

export function Home() {
    useTitle("Home");
    return (
        <div className="container-md">
            <h1>Home</h1>
            <p>Welcome to the Home page</p>
        </div>
    );
}