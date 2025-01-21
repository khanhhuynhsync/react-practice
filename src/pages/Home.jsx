import {useTitle} from "../hooks/useTitle.js";

export function Home() {
    useTitle("Home");
    return (
        <div className="container-md my-3">
            <h1>Home</h1>
            <p>Welcome to the Home page</p>
        </div>
    );
}