import PostPreview from "../components/PostPreview";
import NotFound from "./NotFound";
import { useState, useEffect } from "react";
import axios from "axios";
import useUser from "../hooks/userInfo";
import { useNavigate } from "react-router-dom";

const YourPosts = () => {
    const [postList, setPostList] = useState( [] );
    const { user } = useUser();
    const nav = useNavigate();

    !user && nav('/');
    
    useEffect(() => {
        const loadPostData = async () => {
            const idToken = user && await user.getIdToken();
            const headers = idToken ? { authtoken: idToken } : {};

            if(!user) {
                return;
            }

            const response = await axios.post('http://localhost:8000/getYourPosts', { username: JSON.stringify(user.email) }, {
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
            <h3>Your posts</h3>
            {
                postList.map(post => (
                    <PostPreview key={post.title} title={post.title} content={post.copy} link={`/posts/${post.title}`} author={post.username} />
                ))
            }
        </>
    )
}

export default YourPosts;