import {Breadcrumb} from "../components/Breadcrumb.jsx";
import {useTitle} from "../hooks/useTitle.js";

export function About() {
    useTitle("About");
    const breadcrumbItems = [
        {label: "Home", path: "/"},
        {label: "About", path: "/about", active: true}
    ];
    return (
        <div className="container-md my-3">
            <Breadcrumb items={breadcrumbItems}/>
            <h1>About</h1>
            <p>Welcome to the About page</p>
        </div>
    );
}