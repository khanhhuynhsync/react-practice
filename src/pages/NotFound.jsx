import {Breadcrumb} from "../components/Breadcrumb.jsx";
import {useTitle} from "../hooks/useTitle.js";

export function NotFound() {
    useTitle("Page Not Found");
    const breadcrumbItems = [
        {label: "Home", path: "/"},
        {label: "Page Not Found", path: "/not-found", active: true}
    ];
    return (
        <div className="container-md my-3">
            <Breadcrumb items={breadcrumbItems}/>
            <h1>Page Not Found</h1>
            <p>The page you are looking for does not exist.</p>
        </div>
    );
}