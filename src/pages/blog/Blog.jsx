import {useState} from "react";
import "./blog.css"

import {PostOverview} from "./PostOverview.jsx";
import {Breadcrumb} from "../../components/Breadcrumb.jsx";
import {DataLoading} from "../../components/DataLoading.jsx";
import {useFetch} from "../../hooks/useCRUD.js";
import {useTitle} from "../../hooks/useTitle.js";

export function Blog() {
    useTitle("Blog");

    const [blogUrl] = useState(`${process.env.REACT_APP_DUMMY_API_URL}/posts`);
    const {isPending, data} = useFetch(blogUrl);

    const breadcrumbItems = [
        {label: "Home", path: "/"},
        {label: "Posts", path: "/blog", active: true}
    ];

    return (
        <div className="container-md my-3">
            <Breadcrumb items={breadcrumbItems}/>
            {
                isPending ? (
                    <DataLoading/>
                ) : (
                    <div>
                        {
                            data.posts.map((post) => (
                                <PostOverview key={post.id} post={post}/>
                            ))
                        }
                    </div>
                )
            }
        </div>
    );
}