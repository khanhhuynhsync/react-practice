import {useTitle} from "../hooks/useTitle.js";

export function Store() {
    useTitle("Store");
    return (
        <div className="container-md">
            <h1>Store</h1>
            <p>Welcome to the Store page</p>
        </div>
    );
}