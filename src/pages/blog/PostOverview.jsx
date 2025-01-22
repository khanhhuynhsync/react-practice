import {useFetch} from "../../hooks/useCRUD.js";

export function PostOverview({post}) {
    const {isPending, data} = useFetch(`${process.env.REACT_APP_DUMMY_API_URL}/users/${post.userId}`);

    return (<div className="post-overview card my-4">
        <div className="card-header">
            <h5>{post.title}</h5>
        </div>
        <div className="card-body">
            <blockquote className="blockquote mb-0">
                <p>{post.body}</p>
                <footer className="blockquote-footer">
                    {isPending ? post.userId : data.firstName + " " + data.lastName}
                </footer>
                <div className="d-flex justify-content-between">
                    <div>
                        Tags:
                        {post.tags.map((tag) => (<span key={tag} className="badge bg-primary mx-1">{tag}</span>))}
                    </div>
                    <div>
                            <span className="badge text-bg-secondary">
                                <i className="bi bi-eye"/> {post.views}
                            </span>
                        <span className="badge bg-success">
                                <i className="bi bi-hand-thumbs-up"/> {post.reactions.likes}
                            </span>
                        <span className="badge bg-danger">
                                <i className="bi bi-hand-thumbs-down"/> {post.reactions.dislikes}
                            </span>
                    </div>
                </div>
            </blockquote>
        </div>
    </div>);
}