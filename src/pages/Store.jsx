import {Breadcrumb} from "../components/Breadcrumb.jsx";
import {useTitle} from "../hooks/useTitle.js";

export function Store() {
    useTitle("Store");
    const breadcrumbItems = [
        {label: "Home", path: "/"},
        {label: "Store", path: "/store", active: true}
    ];
    return (
        <div className="container-md">
            <Breadcrumb items={breadcrumbItems}/>
            <h1>Store</h1>
            <p>Welcome to the Store page</p>
        </div>
    );
}