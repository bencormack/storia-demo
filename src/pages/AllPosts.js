import PostPreview from "../components/PostPreview";
import NotFound from "./NotFound";
import { useState, useEffect } from "react";
import axios from "axios";
import useUser from "../hooks/userInfo";
import { useNavigate } from "react-router-dom";

const AllPosts = () => {
    const [postList, setPostList] = useState( [] );
    const { user } = useUser();
    const nav = useNavigate();

    !user && nav('/');

    useEffect(() => {
        const loadPostData = async () => {
            const idToken = user && await user.getIdToken();
            const headers = idToken ? { authtoken: idToken } : {};
            const response = await axios.get('http://localhost:8000/getAllPosts', {
                headers
            });
            const postInfo = response.data;
            setPostList( postInfo );

            if(!postInfo) {
                return <NotFound />
            }
        }
        loadPostData();
    }, [user])

    return (
        <>
            <h3>All posts</h3>
            {
                postList.map(post => (
                    <PostPreview key={post.title} title={post.title} content={post.copy} link={`/posts/${post.title}`} author={post.username} />
                ))
            }
        </>
    )
}

export default AllPosts;