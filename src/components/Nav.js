import { Link } from "react-router-dom";

import useUser from "../hooks/userInfo";

const Nav = () => {
    const { user } = useUser();

    return (
        <nav>
            <ul className="nav">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                {user && <><li>
                    <Link to="/yourposts">Your Posts</Link>
                </li>
                <li>
                    <Link to="/allposts">All Posts</Link>
                </li>
                <li>
                    <Link to="/curatedcontent">Curated Content</Link>
                </li>
                <li className="createPost">
                    <Link to="/createpost">Create post</Link>
                </li></>}
            </ul>
        </nav>
    )
}

export default Nav;