import { Link } from "react-router-dom";

const PostPreview = (props) => {
    return (
        <Link to={props.link}>
            <div className="postPreview">
                <h4>{props.title}</h4>
                <p>{props.content.substring(0, 75)}...</p>
                <p className="author">{props.author}</p>
            </div>
        </Link>
    )
}

export default PostPreview;