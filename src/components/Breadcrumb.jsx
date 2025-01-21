import {NavLink} from "react-router-dom";

export function Breadcrumb({items}) {
    return (
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                {items.map((item, index) => (
                    <li key={index} className={`breadcrumb-item ${item.active ? 'active' : ''}`}>
                        {item.active ? (
                            item.label
                        ) : (
                            <NavLink className="nav-link ps-3" to={item.path}>{item.label}</NavLink>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
}