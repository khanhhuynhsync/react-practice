import {Breadcrumb} from "../components/Breadcrumb.jsx";
import {useTitle} from "../hooks/useTitle.js";

export function Blog() {
    useTitle("Blog");
    const breadcrumbItems = [
        {label: "Home", path: "/"},
        {label: "Blog", path: "/blog", active: true}
    ];
    return (
        <div className="container-md">
            <Breadcrumb items={breadcrumbItems}/>
            <h1>Blog</h1>
            <p>Welcome to the Blog page</p>
        </div>
    );
}